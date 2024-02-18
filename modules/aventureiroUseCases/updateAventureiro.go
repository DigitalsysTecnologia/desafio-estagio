package aventureiroUseCases

import (
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

func UpdateAventureiro(c *gin.Context) {
	var body struct {
		Nome   string `json:"nome"`
		Classe string `json:"classe"`
	}

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

	aventureiro.Nome = body.Nome
	aventureiro.Classe = classe

	attributes := utils.CalculateAttributeLevels(aventureiro.Nivel, classe)

	aventureiro.Forca = attributes.Forca
	aventureiro.Inteligencia = attributes.Inteligencia
	aventureiro.Destreza = attributes.Destreza

	result = db.Save(&aventureiro)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao atualizar aventureiro")
		return
	}

	utils.ThrowResponse(c, 200, "Aventureiro atualizado com sucesso", aventureiro)
}
