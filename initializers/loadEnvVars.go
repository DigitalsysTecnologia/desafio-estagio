package initializers

import (
	"github.com/joho/godotenv"
	"log"
)

func LoadEnvVars() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
