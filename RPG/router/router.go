package router

import (
	"golang-crud-gin/controller"
	"net/http"

	"github.com/gin-gonic/gin"
)

// criando todas as rotas
func NewRouter(questsController *controller.QuestsController) *gin.Engine {
	router := gin.Default()
	router.GET("", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, "welcome home")
	})
	baseRouter := router.Group("/api")
	questsRouter := baseRouter.Group("/quests")
	questsRouter.GET("", questsController.FindAll)
	questsRouter.GET("/:questId", questsController.FindById)
	questsRouter.POST("", questsController.Create)
	questsRouter.PATCH("/:questId", questsController.Update)
	questsRouter.DELETE("/:questId", questsController.Delete)

	return router
}
