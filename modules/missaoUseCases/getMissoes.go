package missaoUseCases

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

// GetMissoes busca missões com base nos parâmetros fornecidos.
// @Summary Busca missões
// @Description Busca missões com base nos parâmetros fornecidos.
// @Tags Missão
// @Accept json
// @Produce json
// @Param titulo query string false "Título da missão"
// @Param dificuldade query string false "Dificuldade da missão"
// @Param nivel query int false "Nível mínimo requerido"
// @Param status query string false "Status da missão (se não for mestre, apenas 'Aberto')"
// @Param quantXP query int false "Pontos de experiência"
// @Param page query int false "Número da página"
// @Param pageSize query int false "Tamanho da página"
// @Param sort query string false "Ordem de classificação dos resultados"
// @Success 200 {array} models.Missao "Missões buscadas com sucesso"
// @Failure 500 {object} utils.ErrorResponse "Erro ao buscar missões"
// @Failure 403 {object} utils.ErrorResponse "Usuário não é o mestre"
// @Failure 401 {object} utils.ErrorResponse "Não Autorizado"
// @Failure 404 {object} utils.ErrorResponse "Header de autorização não encontrado"
// @Security Bearer
// @Router /missoes [get]
func GetMissoes(c *gin.Context) {
    var missoes []models.Missao
		var status string
		
    titulo := c.Query("titulo")
    dificuldade := c.Query("dificuldade")
		nivel := c.Query("nivel")
		quantXP := c.Query("quantXP")
    page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
    pageSize, _ := strconv.Atoi(c.DefaultQuery("pageSize", "10"))
    sort := c.DefaultQuery("sort", "titulo")

    db := initializers.DB

		if c.GetBool("isMaster") {
			status = c.Query("status")
		} else {
			status = "Aberto"
		}

    if titulo != "" {
			db = db.Where("LOWER(titulo) LIKE LOWER(?)", "%"+titulo+"%")
    }
    if dificuldade != "" {
			db = db.Where("LOWER(dificuldade) LIKE LOWER(?)", "%"+dificuldade+"%")
    }
		if nivel != "" {
			db = db.Where("nivelMinimo <= ?", nivel)
		}
		if status != "" {
			db = db.Where("status = ?", status)
		}
		if quantXP != "" {
			db = db.Where("quantXP >= ?", quantXP)
		}


    db = db.Offset((page - 1) * pageSize).Limit(pageSize)

    db = db.Order(sort)

    result := db.Find(&missoes)

    if result.Error != nil {
        utils.ThrowError(c, 500, "Erro ao buscar missões")
        return
    }

    utils.ThrowResponse(c, 200, "Missões buscadas com sucesso", missoes)
}