package aventureiroUseCases

import (
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

type UpdateBody struct {
	Nome   string `json:"nome"`
	Classe string `json:"classe"`
}

// UpdateAventureiro atualiza um aventureiro com base nos dados fornecidos.
// @Summary Atualiza um aventureiro
// @Description Atualiza um aventureiro com base nos dados fornecidos.
// @Tags Aventureiro
// @Accept json
// @Produce json
// @Param id path string true "ID do aventureiro a ser atualizado"
// @Param body body UpdateBody false "Dados do aventureiro"
// @Success 200 {object} models.Aventureiro "Aventureiro atualizado com sucesso"
// @Failure 400 {object} utils.ErrorResponse "Nome ou classe é obrigatório"
// @Failure 403 {object} utils.ErrorResponse "Você não tem permissão para atualizar este aventureiro"
// @Failure 404 {object} utils.ErrorResponse "Aventureiro não encontrado"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar aventureiro" "Erro ao atualizar aventureiro"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /aventureiros/{id} [patch]
func UpdateAventureiro(c *gin.Context) {
	var body UpdateBody

	c.Bind(&body)

	if body.Nome == "" && body.Classe == "" {
		utils.ThrowError(c, 400, "Nome ou classe é obrigatório")
		return
	}

	userId, _ := c.Get("userId")
	isMaster, _ := c.Get("isMaster")

	if(userId != c.Param("id") && isMaster != true) {
		utils.ThrowError(c, 403, "Você não tem permissão para atualizar este aventureiro")
		return
	}

	classe := strings.Title(strings.ToLower(body.Classe))

	allowedClasses := []string{"Guerreiro", "Arqueiro", "Assassino", "Mago"}

	validClass := false
	for _, allowedClass := range allowedClasses {
		if classe == allowedClass {
			validClass = true
			break
		}
	}

	if !validClass && classe != "" {
		utils.ThrowError(c, 400, "Classe inválida (Guerreiro, Arqueiro, Assassino, Paladino)")
		return
	}

	var aventureiro models.Aventureiro

	id := c.Param("id")

	db := initializers.DB

	result := db.Where("id = ?", id).First(&aventureiro)

	if result.RowsAffected == 0 {
		utils.ThrowError(c, 404, "Aventureiro não encontrado")
		return
	}

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar aventureiro")
		return
	}

	if body.Nome != "" {
		aventureiro.Nome = body.Nome
	}
	if classe != "" {
		aventureiro.Classe = classe

		attributes := utils.CalculateAttributeLevels(aventureiro.Nivel, classe)

		aventureiro.Forca = attributes.Forca
		aventureiro.Inteligencia = attributes.Inteligencia
		aventureiro.Destreza = attributes.Destreza
	}

	result = db.Save(&aventureiro)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao atualizar aventureiro")
		return
	}

	utils.ThrowResponse(c, 200, "Aventureiro atualizado com sucesso", aventureiro)
}
