package main

import (
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/routes"

	"github.com/gin-gonic/gin"

	_ "github.com/mottapng/desafio-estagio/docs"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
}

// @title           Desafio Estágio API
// @version         1.0
// @description     This is a sample server celler server.

// @contact.name   Victor Motta
// @contact.url 	 https://github.com/mottapng
// @contact.email  victormotta7@gmail.com

// @host      localhost:8080

// @securityDefinitions.apiKey Bearer
// @in header
// @name Authorization
// @description Digite "Bearer " seguido do token JWT.
func main() {
	r:= gin.Default()

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	routes.AuthRoutes(r.Group("/auth"))
	routes.AventureiroRoutes(r.Group("/aventureiros"))

	r.Run()
}