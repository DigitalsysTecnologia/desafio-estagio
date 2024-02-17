package middlewares

import (
	"fmt"
	"os"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/utils"
)

var jwtKey = []byte(os.Getenv("JWT_SECRET_KEY"))

func ValidateJWT(c *gin.Context) {
	authHeader := c.GetHeader("Authorization")
	if authHeader == "" {
			utils.ThrowError(c, 401, "Header de autorização não encontrado")
			return
	}

	bearerToken := strings.Split(authHeader, " ")
	if len(bearerToken) != 2 {
			utils.ThrowError(c, 400, "Formato inválido do token de autorização")
			return
	}

	token, err := jwt.Parse(bearerToken[1], func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, fmt.Errorf("método de assinatura não válido: %v", token.Header["alg"])
			}
			return jwtKey, nil
	})

	if err != nil {
			if err == jwt.ErrSignatureInvalid {
					utils.ThrowError(c, 401, "Não autorizado")
					return
			}
			utils.ThrowError(c, 400, "Informe um token de autorização válido")
			return
	}

	if !token.Valid {
			utils.ThrowError(c, 401, "Não autorizado")
			return
	}

	claims, ok := token.Claims.(jwt.MapClaims)
    if !ok {
        utils.ThrowError(c, 500, "Could not decode JWT")
        return
    }

	userId := claims["sub"].(string)

	isAccepted, err := utils.CheckIfIsAccepted(userId)
	if err != nil {
		utils.ThrowError(c, 500, "Erro ao verificar se aventureiro é aceito")
		return
	}

	if(!isAccepted) {
		utils.ThrowError(c, 403, "Aventureiro não aceito")
		return
	}

	c.Next()
}