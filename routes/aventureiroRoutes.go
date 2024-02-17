package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/modules/aventureirosUseCases"
)

func AventureirosRoutes(r *gin.RouterGroup) {
	r.POST("/login", aventureirosUseCases.LoginAventureiro)
	r.POST("", aventureirosUseCases.CreateAventureiro)
	/* r.GET("/test", middlewares.ValidateJWT, func(c *gin.Context) {
		c.JSON(200, gin.H{
				"message": "You have accessed a protected route!",
		})
	}) */
}