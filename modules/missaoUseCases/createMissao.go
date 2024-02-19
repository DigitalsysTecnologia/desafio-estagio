package missaoUseCases

import (
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

type CreateMissaoBody struct {
	Titulo           string `json:"titulo"`
	Descricao        string `json:"descricao"`
	Dificuldade      string `json:"dificuldade"`
	MaxParticipantes int    `json:"maxParticipantes"`
	NivelMinimo      int    `json:"nivelMinimo"`
	Local            string `json:"local"`
	QuantXP          int    `json:"quantXP"`
}

// CreateMission cria uma nova missão com base nos dados fornecidos. 
// @Summary Cria uma nova missão (Mestre)
// @Description Cria uma nova missão com base nos dados fornecidos
// @Tags Missão 
// @Accept json 
// @Produce json 
// @Param body body CreateMissaoBody true "Dados da missão" 
// @Success 201 {object} models.Missao "Missão criada com sucesso" 
// @Failure 400 {object} utils.ErrorResponse "Dificuldade inválida" 
// @Failure 500 {object} utils.ErrorResponse "Erro ao criar a missão"
// @Failure 403 {object} utils.ErrorResponse "Usuário não é o mestre"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /missoes [post]
func CreateMissao(c *gin.Context) {
	var body CreateMissaoBody

	c.Bind(&body)

	difficulty := strings.Title(strings.ToLower(body.Dificuldade))

	allowedDifficulties := []string{"Facil", "Medio", "Dificil"}

	validDifficulty := false
	for _, allowedDifficulty := range allowedDifficulties {
		if difficulty == allowedDifficulty {
			validDifficulty = true
			break
		}
	}

	if body.Titulo == "" || body.Descricao == "" || body.MaxParticipantes == 0 {
		utils.ThrowError(c, 400, "Campos obrigatórios não preenchidos")
		return
	}

	if !validDifficulty {
		utils.ThrowError(c, 400, "Dificuldade inválida (Facil, Medio, Dificil)")
		return
	}

	mission := models.Missao{
		Titulo:           body.Titulo,
		Descricao:        body.Descricao,
		Dificuldade:      difficulty,
		MaxParticipantes: body.MaxParticipantes,
		NivelMinimo:      body.NivelMinimo,
		Local:            body.Local,
		QuantXP:          body.QuantXP,
	}

	result := initializers.DB.Create(&mission)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao criar missão")
		return
	}

	utils.ThrowResponse(c, 201, "Missão criada com sucesso", mission)
}
