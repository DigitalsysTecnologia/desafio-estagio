package migration

import (
	dbconnections "foo/dboperations"
	"foo/models"
)

/* --------------------------------------------------------------------------------------- *
*	IMPORTANTE: ANTES DE EXECUTAR "main.go", é necessário a execução desse arquivo para    *
*	a criação das tabelas e relacionamentos no banco de dados							   *
* ---------------------------------------------------------------------------------------- */

func InitizalizeDB() {
	dbconnections.DB.AutoMigrate(&models.Personagem{})
	dbconnections.DB.AutoMigrate(&models.Guilda{})
	dbconnections.DB.AutoMigrate(&models.Classe{})
	dbconnections.DB.AutoMigrate(&models.Missao{})
}
