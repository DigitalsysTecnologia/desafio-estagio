package main

import (
	"desafio-estagio/initializers"
	"desafio-estagio/model"
)

func init() {
	initializers.LoadEnvVars()
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(&model.User{}, &model.Mission{})
}
