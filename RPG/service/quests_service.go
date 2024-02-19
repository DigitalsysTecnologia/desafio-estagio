package service

import (
	"golang-crud-gin/data/request"
	"golang-crud-gin/data/response"
)

// Funcionalidades
type QuestsService interface {
	Create(quests request.CreateQuestsRequest)
	Update(quests request.UpdateQuestsRequest)
	Delete(questsId int)
	FindById(questsId int) response.QuestsResponse
	FindAll() []response.QuestsResponse
}
