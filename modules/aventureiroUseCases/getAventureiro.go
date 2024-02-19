package aventureiroUseCases

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// GetAventureiro busca um aventureiro com base nos parâmetros fornecidos.
// @Summary Busca um aventureiro
// @Description Busca um aventureiro com base nos parâmetros fornecidos.
// @Tags Aventureiro
// @Accept json
// @Produce json
// @Param id path string true "ID do aventureiro"
// @Success 200 {object} models.Aventureiro "Aventureiro buscado com sucesso"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar aventureiro"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /aventureiros/{id} [get]
func GetAventureiro(c *gin.Context) {
	var aventureiro models.Aventureiro

	userId, _ := c.Get("userId")
	isMaster, _ := c.Get("isMaster")

	if(userId != c.Param("id") && isMaster != true) {
		utils.ThrowError(c, 403, "Você não tem permissão para visualizar este aventureiro")
		return
	}

	db := initializers.DB

	result := db.Where("id = ?", c.Param("id")).First(&aventureiro)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar aventureiro")
		return
	}

	utils.ThrowResponse(c, 200, "Aventureiro buscado com sucesso", aventureiro)
}
