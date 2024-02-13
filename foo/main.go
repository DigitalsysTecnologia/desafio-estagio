package main

import (
	controllers "foo/Controllers"
	dbconnections "foo/dboperations"
	"foo/migration"

	"github.com/gin-gonic/gin"
)

func init() {
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
	r.POST("/crateclass", controllers.Autenticar, controllers.CriaClasse)
	r.POST("/crateguild", controllers.Autenticar, controllers.CriaGuilda)
	r.POST("/createquest", controllers.Autenticar, controllers.CriaMissao)
	r.POST("/givequest", controllers.Autenticar, controllers.AtribuirMissao)
	r.POST("/quitquest", controllers.Autenticar, controllers.DeixaMissao)
	r.POST("/joinguild", controllers.Autenticar, controllers.EntrarGuild)
	r.POST("/leaveguild", controllers.Autenticar, controllers.DeixarGuild)
	r.GET("/gettoken", controllers.SetToken)

	r.Run() // listening on localhost:3000
}
