package main

import (
	"github.com/mottapng/desafio-estagio/initializers"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectToDB()
}

func main() {
}