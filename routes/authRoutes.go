package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/modules/authUseCases"
)

func AuthRoutes(r *gin.RouterGroup) {
	r.POST("/register", authUseCases.CreateUser)
	r.POST("/login", authUseCases.LoginUser)
}