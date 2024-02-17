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

	routes.AventureirosRoutes(r.Group("/aventureiro"))

	r.Run()
}