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
// @description     Esta API fornece uma plataforma para o gerenciamento de uma guilda em um mundo RPG. Ela permite que os usuários criem e gerenciem personagens (aventureiros) e missões. O sistema calculará e atualizará automaticamente os níveis e atributos dos personagens com base nas missões que eles completam. O primeiro usuário cadastrado será o Mestre da guilda, e terá permissões especiais para gerenciar missões e aventureiros.

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
	routes.MissaoRoutes(r.Group("/missoes"))

	r.Run()
}