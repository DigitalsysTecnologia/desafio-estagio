package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/middlewares"
	"github.com/mottapng/desafio-estagio/modules/aventureiroUseCases"
)

func AventureiroRoutes(r *gin.RouterGroup) {
	r.Use(middlewares.ValidateJWT)
	r.Use(middlewares.UserIsAccepted)

	r.GET("/", middlewares.UserIsMaster, aventureiroUseCases.GetAventureiros)
	r.PATCH("/:id", aventureiroUseCases.UpdateAventureiro)
	r.PATCH("/:id/aceitar", middlewares.UserIsMaster, aventureiroUseCases.AcceptAventureiro)
}