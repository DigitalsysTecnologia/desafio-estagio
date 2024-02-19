package authUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
	"golang.org/x/crypto/bcrypt"
)

type LoginBody struct {
	Email string `json:"email"`
	Senha string `json:"senha"`
}

// LoginUser realiza o login de um usuário.
// @Summary Realiza o login de um usuário
// @Description Realiza o login de um usuário com base no email e senha fornecidos.
// @Tags Auth
// @Accept json
// @Produce json
// @Param body body LoginBody true "Dados de Autenticação"
// @Success 200 {object} utils.Response "Login realizado com sucesso"
// @Failure 500 {object} utils.ErrorResponse "Erro ao realizar o login"
// @Failure 400 {object} utils.ErrorResponse "Email não encontrado ou senha incorreta"
// @Router /auth/login [post]
func LoginUser(c *gin.Context) {
	var body LoginBody

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