package aventureiroUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// AcceptAventureiro aceita um aventureiro com base no ID fornecido.
// @Summary Aceita aventureiro (Mestre)
// @Description Aceita um aventureiro com base no ID fornecido.
// @Tags Aventureiro
// @Accept json
// @Produce json
// @Param id path string true "ID do aventureiro"
// @Success 200 {object} utils.Response "Aventureiro aceito com sucesso"
// @Failure 500 {object} utils.ErrorResponse "Erro ao aceitar aventureiro"
// @Failure 404 {object} utils.ErrorResponse "Aventureiro não encontrado"
// @Failure 400 {object} utils.ErrorResponse "Aventureiro já aceito"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /aventureiros/{id}/aceitar [patch]
func AcceptAventureiro(c *gin.Context) {
	var aventureiro models.Aventureiro

	id := c.Param("id")

	db := initializers.DB

	result := db.Where("id = ?", id).First(&aventureiro)

	if result.RowsAffected == 0 {
		utils.ThrowError(c, 404, "Aventureiro não encontrado")
		return
	}

	if aventureiro.Aceito {
		utils.ThrowError(c, 400, "Aventureiro já aceito")
		return
	}

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar aventureiro")
		return
	}

	aventureiro.Aceito = true

	result = db.Save(&aventureiro)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao aceitar aventureiro")
		return
	}

	utils.ThrowResponse(c, 200, "Aventureiro aceito com sucesso")
}