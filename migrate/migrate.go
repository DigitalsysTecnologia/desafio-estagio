package main

import (
	"Documents/desafio-estagio/initializers"
	"Documents/desafio-estagio/models"
)

func init(){
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

func main(){
	initializers.DB.AutoMigrate(&models.User{}, &models.Adventurer{})
}