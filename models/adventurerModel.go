package models

import "gorm.io/gorm"

type Adventurer struct {
	gorm.Model
	Name string
	EspecialHability string
	Class string
	Mission string
}