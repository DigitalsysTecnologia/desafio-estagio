package missaoUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// AppendAventureiroToMissao adiciona o aventureiro logado em uma missão em aberto.
// @Summary Adiciona aventureiro logado a uma missão
// @Description Adiciona o aventureiro logado em uma missão em aberto
// @Tags Missão
// @Accept json
// @Produce json
// @Param id path string true "ID da missão"
// @Success 200 {object} models.Missao "Aventureiro adicionado com sucesso"
// @Failure 400 {object} utils.ErrorResponse "Missão não está mais aberta"
// @Failure 400 {object} utils.ErrorResponse "Nível do aventureiro muito baixo para a missão"
// @Failure 400 {object} utils.ErrorResponse "Missão cheia"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar missão"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar aventureiro"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /missoes/{id}/join [post]
func AppendAventureiroToMissao(c *gin.Context) {
	var missao models.Missao
	var aventureiro models.Aventureiro

	missaoId := c.Param("id")
	userId, _ := c.Get("userId")

	missaoResult := initializers.DB.Preload("Aventureiros").First(&missao, "id = ?", missaoId)
	aventureiroResult := initializers.DB.Where("id = ?", userId).First(&aventureiro)

	if missaoResult.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar missao")
		return
	}

	if aventureiroResult.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar aventureiro")
		return
	}

	if missao.Status != "Aberto" {
		utils.ThrowError(c, 400, "Missão não está mais aberta")
		return
	}

	if(aventureiro.Nivel < missao.NivelMinimo) {
		utils.ThrowError(c, 400, "Nível do aventureiro muito baixo para a missão")
		return
	}

	if(len(missao.Aventureiros) >= missao.MaxParticipantes) {
		utils.ThrowError(c, 400, "Missão cheia")
		return
	}

	for _, aventureiro := range missao.Aventureiros {
		if aventureiro.Id == userId {
			utils.ThrowError(c, 400, "Aventureiro já está na missão")
			return
		}
	}

	initializers.DB.Model(&missao).Association("Aventureiros").Append(&aventureiro)

	utils.ThrowResponse(c, 200, "Aventureiro appended successfully", missao)
}