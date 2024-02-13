package controllers

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

/*	---------------------------------------------------------------------------------------------------------------------*
*	Este arquivo contem as funções relacionadas a implementação dos tokens de sessão 									 *
*	AVISO: Esse código foi feito apenas para prova de conceito, portanto todos os tokens possuem os mesmos metadados	 *
*	e são gerados através da mesma chave.																				 *
*  --------------------------------------------------------------------------------------------------------------------- */

// Cria um token JWT de sessão e o atribiu via cookie
// GET
func SetToken(c *gin.Context) {

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": os.Getenv("TOLKENMETA"),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("TOKENKEY")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha na criação do token",
		})
		fmt.Println(err)

		return
	}

	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Autenticacao", tokenString, 3600, "", "", false, true)

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

		return []byte(os.Getenv("TOKENKEY")), nil
	})

	if err != nil {
		fmt.Println("Erro ao validar token")
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		fmt.Println(claims["sub"])
		c.Next()
	} else {
		fmt.Println(err)
	}

}
