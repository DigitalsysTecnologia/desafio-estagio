package missaoUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// UpdateMissaoStatus atualiza o status de uma missão (Mestre).
// @Summary Atualiza o status de uma missão (Mestre)
// @Description Atualiza o status da missão (Aberto -> Em andamento -> Concluido)
// @Tags Missão
// @Accept json
// @Produce json
// @Param id path string true "ID da missão"
// @Success 200 {object} models.Missao "Missão atualizada com sucesso"
// @Failure 400 {object} utils.ErrorResponse "Status inválido"
// @Failure 500 {object} utils.ErrorResponse "Erro ao atualizar o status da missão"
// @Failure 403 {object} utils.ErrorResponse "Usuário não é o mestre"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /missoes/{id}/updateStatus [patch]
func UpdateMissaoStatus(c *gin.Context) {
	id := c.Param("id")

	mission := models.Missao{}
	result := initializers.DB.Preload("Aventureiros").First(&mission, "id = ?", id)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar a missão")
		return
	}

	if mission.Status == "Aberto" {
		mission.Status = "Em andamento"
	} else if mission.Status == "Em andamento" {
		mission.Status = "Concluido"

		for _, aventureiro := range mission.Aventureiros {
			initializers.DB.Where("id = ?", aventureiro.Id).First(&aventureiro)

			totalExperience := aventureiro.Experiencia + mission.QuantXP
			nivelAtual := aventureiro.Nivel
			experienciaNecessaria := nivelAtual * 100
	
			for totalExperience >= experienciaNecessaria {
				nivelAtual++
				totalExperience -= experienciaNecessaria
				experienciaNecessaria = nivelAtual * 100
			}
	
			aventureiro.Nivel = nivelAtual
			aventureiro.Experiencia = totalExperience

			attributes := utils.CalculateAttributeLevels(nivelAtual, aventureiro.Classe)

			aventureiro.Forca = attributes.Forca
			aventureiro.Inteligencia = attributes.Inteligencia
			aventureiro.Destreza = attributes.Destreza

			initializers.DB.Save(&aventureiro)
		}

	} else {
		utils.ThrowError(c, 400, "Missão já foi concluída")
		return
	}

	result = initializers.DB.Save(&mission)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao atualizar o status da missão")
		return
	}

	utils.ThrowResponse(c, 200, "Missão atualizada com sucesso", mission)
}
