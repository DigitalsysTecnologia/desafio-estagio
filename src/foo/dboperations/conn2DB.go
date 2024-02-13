package dboperations

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

/*
*	Realiza conexão com o banco de dados utilizando-se da variável de ambiente "STRINGDB", contida no arquivo .env
 */
func DBConnect() {

	var err error

	dsn := os.Getenv("STRINGDB")
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Ocorreu um erro ao so conectar com o banco de dados")
	} else {
		fmt.Printf("Conectado ao banco com sucesso\n")
	}

}
