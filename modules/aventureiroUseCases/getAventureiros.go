package aventureiroUseCases

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// GetAventureiros busca aventureiros com base nos parâmetros fornecidos.
// @Summary Busca aventureiros (Mestre)
// @Description Busca aventureiros com base nos parâmetros fornecidos (Requer ser Mestre).
// @Tags Aventureiro
// @Accept json
// @Produce json
// @Param nome query string false "Nome do aventureiro"
// @Param classe query string false "Classe do aventureiro"
// @Param aceito query string false "Status de aceitação do aventureiro"
// @Param page query int false "Número da página"
// @Param pageSize query int false "Tamanho da página"
// @Param sort query string false "Ordenação dos resultados"
// @Success 200 {array} models.Aventureiro "Aventureiros buscados com sucesso"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar aventureiros"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /aventureiros [get]
func GetAventureiros(c *gin.Context) {
	var aventureiros []models.Aventureiro

	nome := c.Query("nome")
	classe := c.Query("classe")
	aceito := c.Query("aceito")
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	pageSize, _ := strconv.Atoi(c.DefaultQuery("pageSize", "10"))
	sort := c.DefaultQuery("sort", "nome")

	db := initializers.DB

	if nome != "" {
		db = db.Where("LOWER(nome) LIKE LOWER(?)", "%"+nome+"%")
	}
	if classe != "" {
		db = db.Where("LOWER(classe) LIKE LOWER(?)", "%"+classe+"%")
	}
	if aceito != "" {
		db = db.Where("aceito = ?", aceito)
	}

	db = db.Offset((page - 1) * pageSize).Limit(pageSize)

	db = db.Order(sort)

	result := db.Find(&aventureiros)

	if result.Error != nil {
		utils.ThrowError(c, 500, "Erro ao buscar aventureiros")
		return
	}

	utils.ThrowResponse(c, 200, "Aventureiros buscados com sucesso", aventureiros)
}
