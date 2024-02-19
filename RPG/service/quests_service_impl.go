package service

import (
	"golang-crud-gin/data/request"
	"golang-crud-gin/data/response"
	"golang-crud-gin/helper"
	"golang-crud-gin/model"
	"golang-crud-gin/repository"

	"github.com/go-playground/validator/v10"
)

type QuestsServiceImpl struct {
	QuestsRepository repository.QuestsRepository
	Validate         *validator.Validate
}

func NewquestsServiceImpl(questRepository repository.QuestsRepository, validate *validator.Validate) QuestsService {
	return &QuestsServiceImpl{
		QuestsRepository: questRepository,
		Validate:         validate,
	}
}

// Implementado o servico de criaçao.
func (q *QuestsServiceImpl) Create(quests request.CreateQuestsRequest) {
	err := q.Validate.Struct(quests)
	helper.ErrorPanic(err)
	questModel := model.Quests{
		Name:        quests.Name,
		Description: quests.Description,
		Reward:      quests.Reward,
	}
	q.QuestsRepository.Save((questModel))
}

// Implementado o servico de deletar.
func (q *QuestsServiceImpl) Delete(questsId int) {
	q.QuestsRepository.Delete(questsId)
}

// Implementado o servico de FindAll(mostrar todas as quests).
func (q *QuestsServiceImpl) FindAll() []response.QuestsResponse {
	result := q.QuestsRepository.FindAll()

	var quests []response.QuestsResponse
	for _, value := range result {
		quest := response.QuestsResponse{
			Id:          value.Id,
			Name:        value.Name,
			Description: value.Description,
			Reward:      value.Reward,
		}
		quests = append(quests, quest)
	}

	return quests
}

// Implementado o servico de FindById(mostrar uma quest especifica do id digitado).
func (q *QuestsServiceImpl) FindById(questsId int) response.QuestsResponse {
	questData, err := q.QuestsRepository.FindById(questsId)
	helper.ErrorPanic(err)

	questResponse := response.QuestsResponse{
		Id:          questData.Id,
		Name:        questData.Name,
		Description: questData.Description,
		Reward:      questData.Reward,
	}
	return questResponse
}

// Implementado o servico de atualizar as informacoes da quest.
func (q *QuestsServiceImpl) Update(quests request.UpdateQuestsRequest) {
	questData, err := q.QuestsRepository.FindById(quests.Id)
	helper.ErrorPanic(err)
	questData.Name = quests.Name
	questData.Description = quests.Description
	questData.Reward = quests.Reward
	q.QuestsRepository.Update(questData)
}
