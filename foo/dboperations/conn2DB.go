package dboperations

import (
	"fmt"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

/*
*	Realiza conexão com o banco de dados utilizando-se da variável de ambiente "STRINGDB", contida no arquivo .env
 */
func DBConnect() {

	var err error

	dsn := "rpguser:rpgpass@tcp(127.0.0.1:3306)/rpgdb?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Ocorreu um erro ao so conectar com o banco de dados")
	} else {
		fmt.Printf("Conectado ao banco com sucesso\n")
	}

}
