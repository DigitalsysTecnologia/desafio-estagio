package model

import "gorm.io/gorm"

// User representa um usuário e sua respectiva key para acessar a api
type User struct {
	gorm.Model
	Name string
	Key  string
}

// Mission representa uma missão da guilda
type Mission struct {
	gorm.Model
	Name        string // Nome da missão
	Description string // Descrição da missão
}
