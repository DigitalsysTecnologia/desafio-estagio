package main

import (
	"golang-crud-gin/config"
	"golang-crud-gin/controller"
	"golang-crud-gin/helper"
	"golang-crud-gin/model"
	"golang-crud-gin/repository"
	"golang-crud-gin/router"
	"golang-crud-gin/service"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/rs/zerolog/log"
)

func main() {

	log.Info().Msg("Started Server!")

	//Database
	db := config.DatabaseConnection()
	validate := validator.New()

	db.Table("quests").AutoMigrate(&model.Quests{})

	//Repository
	questsRepository := repository.NewQuestsREpositoryImpl(db)

	//Sevice
	questsService := service.NewquestsServiceImpl(questsRepository, validate)

	//Controller
	questsController := controller.NewQuestsContoller(questsService)

	//Router
	routes := router.NewRouter(questsController)

	server := &http.Server{
		Addr:    ":8888",
		Handler: routes,
	}

	err := server.ListenAndServe()
	helper.ErrorPanic(err)
}
