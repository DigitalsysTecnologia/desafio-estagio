package controller

import (
	"golang-crud-gin/data/request"
	"golang-crud-gin/data/response"
	"golang-crud-gin/helper"
	"golang-crud-gin/service"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type QuestsController struct {
	questsService service.QuestsService
}

func NewQuestsContoller(service service.QuestsService) *QuestsController {
	return &QuestsController{
		questsService: service,
	}

}

// Controlador de Criacao
func (controller *QuestsController) Create(ctx *gin.Context) {
	createQuestsRequest := request.CreateQuestsRequest{}
	err := ctx.ShouldBindJSON(&createQuestsRequest)
	helper.ErrorPanic(err)

	controller.questsService.Create(createQuestsRequest)
	webResponse := response.Response{
		Code:   200,
		Status: "Ok",
		Data:   nil,
	}
	ctx.Header("Content-Type", "application/json")
	ctx.JSON(http.StatusOK, webResponse)
}

// Controlador de Atualizacao
func (controller *QuestsController) Update(ctx *gin.Context) {
	updateQuestsRequest := request.UpdateQuestsRequest{}
	err := ctx.ShouldBindJSON(&updateQuestsRequest)
	helper.ErrorPanic(err)

	questId := ctx.Param("questId")
	id, err := strconv.Atoi(questId)
	helper.ErrorPanic(err)
	updateQuestsRequest.Id = id

	controller.questsService.Update(updateQuestsRequest)

	webResponse := response.Response{
		Code:   200,
		Status: "Ok",
		Data:   nil,
	}
	ctx.Header("Content-Type", "application/json")
	ctx.JSON(http.StatusOK, webResponse)
}

// Controlador de Deletar
func (controller *QuestsController) Delete(ctx *gin.Context) {
	questId := ctx.Param("questId")
	id, err := strconv.Atoi(questId)
	helper.ErrorPanic(err)
	controller.questsService.Delete(id)

	webResponse := response.Response{
		Code:   200,
		Status: "Ok",
		Data:   nil,
	}
	ctx.Header("Content-Type", "application/json")
	ctx.JSON(http.StatusOK, webResponse)
}

// Controlador de FindById
func (controller *QuestsController) FindById(ctx *gin.Context) {
	questId := ctx.Param("questId")
	id, err := strconv.Atoi(questId)
	helper.ErrorPanic(err)

	questResponse := controller.questsService.FindById(id)

	webResponse := response.Response{
		Code:   200,
		Status: "Ok",
		Data:   questResponse,
	}
	ctx.Header("Content-Type", "application/json")
	ctx.JSON(http.StatusOK, webResponse)

}

// Controlador de FindAll
func (controller *QuestsController) FindAll(ctx *gin.Context) {
	questResponse := controller.questsService.FindAll()
	webResponse := response.Response{
		Code:   200,
		Status: "Ok",
		Data:   questResponse,
	}
	ctx.Header("Content-Type", "application/json")
	ctx.JSON(http.StatusOK, webResponse)

}
