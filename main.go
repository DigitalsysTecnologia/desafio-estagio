package main

import (
	"github.com/Fernandoss97/desafio-estagio/controllers"
	_ "github.com/Fernandoss97/desafio-estagio/docs"
	"github.com/Fernandoss97/desafio-estagio/initializers"
	"github.com/Fernandoss97/desafio-estagio/middlewares"
	"github.com/Fernandoss97/desafio-estagio/migrate"
	_ "github.com/Fernandoss97/desafio-estagio/models"
	"github.com/gin-gonic/gin"
)

func init(){
	initializers.LoadEnvVariables()
	initializers.DbConnect()
	migrate.SyncDatabase()
}


func main() {
	r := gin.Default()
	
	//Missions
	r.POST("/missions/create", middlewares.VerifyToken, controllers.CreateMission)
	r.GET("/missions", middlewares.VerifyToken, controllers.GetMissions)
	r.GET("/mission/:id", middlewares.VerifyToken, controllers.GetMissionById)
	r.PUT("/mission/:id", middlewares.VerifyToken, controllers.UpdateMission)
	r.DELETE("/mission/:id", middlewares.VerifyToken, controllers.DeleteMission)

	//Users
	r.POST("/users/create", middlewares.VerifyToken, controllers.CreateUser)
	r.GET("/users", middlewares.VerifyToken, controllers.GetUsers)
	r.GET("/user/:id", middlewares.VerifyToken, controllers.GetUserById)
	r.PUT("/user/:id", middlewares.VerifyToken, controllers.UpdateUser)
	r.DELETE("/user/:id", middlewares.VerifyToken, controllers.DeleteUser)

	//Login
	r.POST("/login", controllers.Login)

	r.Run()

}