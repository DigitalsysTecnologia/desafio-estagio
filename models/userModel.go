package models

import "gorm.io/gorm"

// Model for users, with unique usernames
type User struct {
	gorm.Model
	Username string `gorm:"unique"`
	Password string
}
