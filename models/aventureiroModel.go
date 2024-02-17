package models

import (
	"time"

	"gorm.io/gorm"
)

type Aventureiro struct {
	gorm.Model
	Id        string    `gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Nome      string    `gorm:"not null"`
	Email     string    `gorm:"not null;unique;index"`
	Senha  		string    `gorm:"not null"`
	Classe    string    `gorm:"not null"`
  /* Missions  []Mission `gorm:"many2many:aventureiro_missions"` */
	Mestre 		bool 			`gorm:"default:false"`
	Aceito  	bool 			`gorm:"default:false"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}