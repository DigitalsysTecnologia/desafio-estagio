package initializers

import (
	"log"

	"github.com/joho/godotenv"
)

// Loads environment variables
func LoadEnvVariables() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
