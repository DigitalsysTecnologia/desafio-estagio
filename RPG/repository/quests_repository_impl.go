package repository

import (
	"errors"
	"golang-crud-gin/data/request"
	"golang-crud-gin/helper"
	"golang-crud-gin/model"

	"gorm.io/gorm"
)

type QuestsRepositoryImpl struct {
	Db *gorm.DB
}

func NewQuestsREpositoryImpl(Db *gorm.DB) QuestsRepository {
	return &QuestsRepositoryImpl{Db: Db}
}

// Implementado o repositorio de criaçao.
func (q *QuestsRepositoryImpl) Delete(questsId int) {
	var quests model.Quests
	result := q.Db.Where("id = ?", questsId).Delete(&quests)
	helper.ErrorPanic(result.Error)
}

// Implementado o repositorio de FindAll(mostrar todas as quests).
func (q *QuestsRepositoryImpl) FindAll() []model.Quests {
	var quests []model.Quests
	result := q.Db.Find(&quests)
	helper.ErrorPanic(result.Error)
	return quests

}

// Implementado o repositorio de FindById(mostrar uma quest especifica do id digitado).
func (q *QuestsRepositoryImpl) FindById(questsId int) (quests model.Quests, err error) {
	var quest model.Quests
	result := q.Db.Find(&quest, questsId)
	if result != nil {
		return quest, nil
	} else {
		return quest, errors.New("quest is not found")
	}
}

// Implementado o repositorio de salvar.
func (q *QuestsRepositoryImpl) Save(quests model.Quests) {
	result := q.Db.Create(&quests)
	helper.ErrorPanic(result.Error)
}

// Implementado o repositorio de atualizar as informacoes.
func (q *QuestsRepositoryImpl) Update(quests model.Quests) {
	var updatequest = request.UpdateQuestsRequest{
		Id:          quests.Id,
		Name:        quests.Name,
		Description: quests.Description,
		Reward:      quests.Reward,
	}
	result := q.Db.Model(&quests).Updates(updatequest)
	helper.ErrorPanic(result.Error)
}
