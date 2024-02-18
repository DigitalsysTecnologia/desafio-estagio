package authUseCases

import (
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
	"golang.org/x/crypto/bcrypt"
)

type RegisterBody struct {
	Nome string `json:"nome"`
	Email string `json:"email"`
	Senha string `json:"senha"`
	Classe string `json:"classe"`
}

// CreateUser cria um novo aventureiro com base nos dados fornecidos.
// @Summary Cria um novo aventureiro
// @Description Solicita o cadastro de um novo aventureiro, se for o primeiro aventureiro cadastrado, será assumido como o mestre
// @Tags Auth
// @Accept json
// @Produce json
// @Param body body RegisterBody true "Dados do aventureiro"
// @Success 201 {object} models.Aventureiro "Aventureiro criado com sucesso"
// @Failure 400 {object} utils.ErrorResponse "Classe inválida"
// @Failure 500 {object} utils.ErrorResponse "Erro ao encriptar senha"
// @Failure 500 {object} utils.ErrorResponse "Erro ao criar aventureiro"
// @Router /auth/register [post]
func CreateUser(c *gin.Context) {
	var body RegisterBody

	c.Bind(&body)

	classe := strings.Title(strings.ToLower(body.Classe))

	allowedClasses := []string{"Guerreiro", "Arqueiro", "Assassino", "Mago"}

	validClass := false
	for _, allowedClass := range allowedClasses {
		if classe == allowedClass {
			validClass = true
			break
		}
	}

	if !validClass {
		utils.ThrowError(c, 400, "Classe inválida (Guerreiro, Arqueiro, Assassino, Paladino)")
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(body.Senha), bcrypt.DefaultCost)

	if err != nil {
		utils.ThrowError(c, 500, "Erro ao encriptar senha")
    return
	}

	aventureiro := models.Aventureiro{Nome: body.Nome, Email: body.Email, Senha: string(hashedPassword), Classe: classe}

	if aventureiro.Nome == "" || aventureiro.Email == "" || aventureiro.Senha == "" || aventureiro.Classe == "" {
		utils.ThrowError(c, 400, "Faltam campos obrigatórios")
    return
	}

	aventureiros := initializers.DB.Find(&models.Aventureiro{})

	if(aventureiros.RowsAffected == 0) {
		aventureiro.Aceito = true
		aventureiro.Mestre = true
	}

	attributes := utils.CalculateAttributeLevels(1, classe)

	aventureiro.Forca = attributes.Forca
	aventureiro.Inteligencia = attributes.Inteligencia
	aventureiro.Destreza = attributes.Destreza

	result := initializers.DB.Create(&aventureiro)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao criar aventureiro")
    return
	}

	utils.ThrowResponse(c, 201, "Aventureiro criado com sucesso", aventureiro)
}