package models

import (
	"time"
)

type Missao struct {
	Id               string        `gorm:"primaryKey;type:uuid;default:gen_random_uuid()"`
	Titulo           string        `gorm:"not null"`
	Descricao        string        `gorm:"not null"`
	MaxParticipantes int 	         `gorm:"not null:default:0"`
	NivelMinimo  		 int           `gorm:"default:1"`
	Dificuldade      string        `gorm:"default:Facil"`
	Local 		       string 	     `gorm:"default:Nao Informado"`
	Status           string        `gorm:"default:Aberto"`
	QuantXP 			   int           `gorm:"default:100"`
	Aventureiros     []Aventureiro `gorm:"many2many:aventureiros_missoes;"`
	CreatedAt        time.Time     `gorm:"autoCreateTime"`
	UpdatedAt        time.Time     `gorm:"autoUpdateTime"`
}