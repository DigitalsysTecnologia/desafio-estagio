package aventureiroUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// DeleteAventureiro deleta um aventureiro com base no ID fornecido.
// @Summary Deleta um aventureiro
// @Description Deleta um aventureiro com base no ID fornecido.
// @Tags Aventureiro
// @Accept json
// @Produce json
// @Param id path string true "ID do aventureiro a ser deletado"
// @Success 204 "Aventureiro deletado com sucesso"
// @Failure 403 {object} utils.ErrorResponse "Você não tem permissão para deletar este aventureiro"
// @Failure 404 {object} utils.ErrorResponse "Aventureiro não encontrado"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar aventureiro" "Erro ao deletar aventureiro"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /aventureiros/{id} [delete]
func DeleteAventureiro(c *gin.Context) {
	userId, _ := c.Get("userId")
	isMaster, _ := c.Get("isMaster")

	if userId != c.Param("id") && isMaster != true {
		utils.ThrowError(c, 403, "Você não tem permissão para deletar este aventureiro")
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

	result = db.Delete(&aventureiro)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao deletar aventureiro")
		return
	}

	c.Status(204)
}
