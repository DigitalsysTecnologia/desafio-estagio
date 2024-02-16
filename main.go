package main

import(
	"Documents/desafio-estagio/initializers"
	"Documents/desafio-estagio/controllers"
	"github.com/gin-gonic/gin"
	"Documents/desafio-estagio/middleware"
	
) 

func init(){
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

func main(){

	r := gin.Default()

	r.POST("/signup", controllers.Signup)
	r.POST("/login", controllers.Login)
	r.GET("/validate", middleware.RequireAuth, controllers.Validate)

	adventurerGroup := r.Group("/adventurers")
    adventurerGroup.Use(middleware.RequireAuth)
    {
        adventurerGroup.GET("", controllers.AdventurersIndex)
        adventurerGroup.GET("/:id", controllers.AdventurersShowId)
        adventurerGroup.POST("", controllers.CreateAdventurer)
        adventurerGroup.PUT("/:id", controllers.AdvnturersUpdate)
        adventurerGroup.DELETE("/:id", controllers.AdventurersDelete)
    }

	r.Run()
}