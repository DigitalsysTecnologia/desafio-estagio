package repository

import "golang-crud-gin/model"

// repositorio
type QuestsRepository interface {
	Save(quests model.Quests)
	Update(quests model.Quests)
	Delete(questsId int)
	FindById(questsId int) (Quests model.Quests, err error)
	FindAll() []model.Quests
}
