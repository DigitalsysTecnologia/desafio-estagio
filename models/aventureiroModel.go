package models

import (
	"time"

	"gorm.io/gorm"
)

type Aventureiro struct {
	gorm.Model
	Id           string    `gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Nome         string    `gorm:"not null"`
	Email        string    `gorm:"not null;unique;index"`
	Senha  		   string    `gorm:"not null"`
	Classe       string    `gorm:"not null"`
	Mestre 		   bool 	   `gorm:"default:false"`
	Aceito  	   bool 	   `gorm:"default:false"`
	Forca        int       `gorm:"default:1"`
	Inteligencia int       `gorm:"default:1"`
	Destreza     int       `gorm:"default:1"`
	Experiencia  int       `gorm:"default:0"`
	Nivel        int       `gorm:"default:1"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime"`
}