package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

/*	---------------------------------------------------------------------------------------------------------------------*
*	Este arquivo contem as funções relacionadas a implementação dos tokens de sessão 									 *
*	AVISO: Esse código foi feito apenas para prova de conceito, portanto todos os tokens possuem os mesmos metadados	 *
*	e são gerados através da mesma chave.																				 *
*  --------------------------------------------------------------------------------------------------------------------- */

var TokenKey string = "sa78d65as87d65as"

// Cria um token JWT de sessão e o atribiu via cookie
// GET
func SetToken(c *gin.Context) {

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": "algum metadado",
	})

	tokenString, err := token.SignedString([]byte(TokenKey))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha na criação do token",
		})
		fmt.Println(err)

		return
	}

	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Autenticacao", tokenString, 3600, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{
		"CookieTokenSet":  "success",
		"TimeUntilExpire": 3600,
	})

}

// Valida token de sessão, permitindo ou não a continuidade da requisição
// Middlewere
func Autenticar(c *gin.Context) {
	tokenString, err := c.Cookie("Autenticacao")

	if err != nil {
		fmt.Println("Erro ao recuperar cookie")
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(TokenKey), nil
	})

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"Error": "Acesso não autorizado. Token inválido",
		})
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		fmt.Println(claims["sub"])
		c.Next()
	} else {
		fmt.Println(err)
	}

}
