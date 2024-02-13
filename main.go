package main

import (
	"desafio-estagio/controllers"
	"desafio-estagio/initializers"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVars()
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.POST("/usercreate", controllers.UserCreate)
	r.GET("/missionindex/:key", controllers.MissionIndex)
	r.POST("/missioncreate/:key", controllers.MissionCreate)
	r.GET("/missiondelete/:id/:key", controllers.MissionDelete)
	r.POST("/missionupdate/:id/:key", controllers.MissionUpdate)
	r.GET("/missionsearch/:id/:key", controllers.MissionSearch)
	r.Run() //
}
