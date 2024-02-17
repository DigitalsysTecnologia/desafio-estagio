package utils

import (
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/mottapng/desafio-estagio/models"
)

var jwtKey = []byte(os.Getenv("JWT_SECRET_KEY"))

func GenerateJWT(user models.Aventureiro) (string, error) {
	expirationTime := time.Now().Add(24 * time.Hour)

	claims := &jwt.StandardClaims{
		Subject:   user.Id,
    ExpiresAt: expirationTime.Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(jwtKey)

	if err != nil {
			return "", err
	}

	return tokenString, nil
}