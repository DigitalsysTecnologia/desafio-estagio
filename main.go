package main

import (
	"digitalsys/controllers"
	"digitalsys/initializers"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Initializes environment variables and connects to the database
func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

// Variable to check if a user is logged
var userLogged = false

func main() {
	r := gin.Default()

	// User operations
	r.POST("/register", controllers.UserRegister)
	r.POST("/login", func(c *gin.Context) {
		userLogged = true
		controllers.UserLogin(c)
	})

	// Authentication middleware. If no user is logged in, code will not proceed to Mission operations
	r.Use(func(c *gin.Context) {
		if userLogged {
			c.Next()
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
		}
	})

	// Mission operations
	r.POST("/missions", controllers.MissionsCreate)
	r.GET("/missions", controllers.MissionsQueryAll)
	r.GET("/missions/:id", controllers.MissionsQueryOne)
	r.PUT("/missions/:id", controllers.MissionUpdate)
	r.DELETE("/missions/:id", controllers.MissionDelete)

	r.Run()
}
