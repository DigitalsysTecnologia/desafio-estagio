package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/middlewares"
	"github.com/mottapng/desafio-estagio/modules/missaoUseCases"
)

func MissaoRoutes(r *gin.RouterGroup) {
	r.Use(middlewares.ValidateJWT)
	r.Use(middlewares.UserIsAccepted)

	r.POST("/:id/join", missaoUseCases.AppendAventureiroToMissao)
	r.GET("", missaoUseCases.GetMissoes)
	
	r.Use(middlewares.UserIsMaster)

	r.POST("", missaoUseCases.CreateMissao)
	r.PATCH("/:id/updateStatus", missaoUseCases.UpdateMissaoStatus)
}