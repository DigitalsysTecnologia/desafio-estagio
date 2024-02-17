package main

import (
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/middlewares"
	"github.com/mottapng/desafio-estagio/modules/usersUseCases"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
}

func main() {
	r:= gin.Default()

	r.POST("/login", usersUseCases.LoginUser)
	r.POST("/aventureiro", usersUseCases.CreateUser)
	r.GET("/test", middlewares.ValidateJWT, func(c *gin.Context) {
		c.JSON(200, gin.H{
				"message": "You have accessed a protected route!",
		})
	})

	r.Run()
}