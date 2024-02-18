package aventureiroUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

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