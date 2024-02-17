package utils

import (
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/models"
)

func CheckIfIsAccepted(userID string) (bool, error) {
	var user models.Aventureiro
	if err := initializers.DB.Where("id = ?", userID).First(&user).Error; err != nil {
			return false, err
	}
	return user.Aceito, nil
}