package middlewares

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

func UserIsAccepted(c *gin.Context) {
	userId, exists := c.Get("userId")
	if !exists {
		utils.ThrowError(c, 401, "Id do usuário não encontrado no contexto da requisição")
		return
	}

	var user models.Aventureiro
	if err := initializers.DB.Where("id = ?", userId.(string)).First(&user).Error; err != nil {
		utils.ThrowError(c, 500, "Erro ao checar se o usuário está aceito")
		return
	}

	if !user.Aceito {
		utils.ThrowError(c, 403, "Usuário não aceito")
		return
	}

	c.Next()
}