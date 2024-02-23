package migrate

import (
	"github.com/Fernandoss97/desafio-estagio/initializers"
	"github.com/Fernandoss97/desafio-estagio/models"
)

func SyncDatabase() {
	initializers.DB.AutoMigrate(&models.User{}, &models.Mission{})
}