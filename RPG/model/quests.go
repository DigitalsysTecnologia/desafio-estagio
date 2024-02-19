package model

// Atributos das quests
type Quests struct {
	Id          int    `gorm:"type:int;primary_key"'`
	Name        string `gorm:"type:varchar(255)"`
	Description string `gorm:"type:varchar(255)"`
	Reward      string `gorm:"type:varchar(255)"`
}
