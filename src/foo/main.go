package main

import (
	controllers "foo/Controllers"
	dbconnections "foo/dboperations"
	"foo/environment"
	"foo/migration"

	"github.com/gin-gonic/gin"
)

func init() {
	//Carrega variáveis de ambiente a partir do arquivo .env
	environment.LoadEnv()
	//Tenta realizar conexão com o banco de dados
	dbconnections.DBConnect()
	//Inializa o banco de dados com GORM
	migration.InitizalizeDB()
}

func main() {
	r := gin.Default()

	r.POST("/createchar", controllers.Autenticar, controllers.CriaPersonagem)
	r.GET("/getallchar", controllers.Autenticar, controllers.RetornaTodos)
	r.POST("/deletechar", controllers.Autenticar, controllers.DeletaPersonagem)
	r.POST("/updatechar", controllers.Autenticar, controllers.AtualizaPersonagem)
	r.POST("/findchar", controllers.Autenticar, controllers.BuscarPersonagem)
	r.GET("/gettoken", controllers.SetToken)

	r.Run() // listening on localhost:3000
}
