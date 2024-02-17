package aventureirosUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
	"golang.org/x/crypto/bcrypt"
)

func LoginAventureiro(c *gin.Context) {
	var body struct {
		Email string `json:"email"`
		Senha string `json:"senha"`
	}

	c.Bind(&body)

	var user models.Aventureiro

	if err := initializers.DB.Where("email = ?", body.Email).First(&user).Error; err != nil {
		utils.ThrowError(c, 400, "Email não encontrado")
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Senha), []byte(body.Senha)); err != nil {
		utils.ThrowError(c, 400, "Senha incorreta")
		return
	}

	token, err := utils.GenerateJWT(user)
    if err != nil {
        utils.ThrowError(c, 500, "Could not log in")
        return
    }

	data := map[string]string{"token": token}

	utils.ThrowResponse(c, 200, "Logado com sucesso", data)
}