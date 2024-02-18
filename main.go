package main

import (
	"github.com/mottapng/desafio-estagio/initializers"
	"github.com/mottapng/desafio-estagio/routes"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
}

func main() {
	r:= gin.Default()

	routes.AuthRoutes(r.Group("/auth"))
	routes.AventureiroRoutes(r.Group("/aventureiros"))

	r.Run()
}