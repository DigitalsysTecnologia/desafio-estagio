package models

import "gorm.io/gorm"

// Model for missions
type Mission struct {
	gorm.Model
	Title       string
	Description string
}
