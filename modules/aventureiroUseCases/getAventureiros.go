package aventureiroUseCases

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
	"github.com/mottapng/desafio-estagio/utils"
)

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
