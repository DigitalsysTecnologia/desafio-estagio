package initializers

import (
	"github.com/joho/godotenv"
	"log"
)

// carrega variaveis de ambiente
func LoadEnvVars() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
