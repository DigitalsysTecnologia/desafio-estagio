package main

import (
	"digitalsys/initializers"
	"digitalsys/models"
)

// Initializes environment variables and connects to the database
func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

// Automatically migrate models as database tables
func main() {
	initializers.DB.AutoMigrate(&models.Mission{})
	initializers.DB.AutoMigrate(&models.User{})
}
