package models

/* ---------------------------------------------------------------------------------------------------------------- *
*	Contem todos os modelos que serão utilizados para realizar a migragção do GORM para o banco de dados relacional *
* ----------------------------------------------------------------------------------------------------------------- */

// Modelo de personagem, usando tags para definir os relacionamentos das tabelas do banco de dados
type Personagem struct {
	ID       int
	Nome     string `gorm:"not null; unique"`
	Level    int    `gorm:"not null"`
	GuildaID int
	Guilda   Guilda `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	ClasseID int    `gorm:"not null"`
	Classe   Classe `gorm:"constraint:OnUpdate:CASCADE;"`
}

// Modelo de guilda
type Guilda struct {
	ID         int
	NomeGuilda string `gorm:"not null"`
	MissaoID   *int   `gorm:"unique"`
	Missao     Missao `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

// Modelo de classe
type Classe struct {
	ID         int
	NomeClasse string `gorm:"not null"`
}

//Modelo das missões
type Missao struct {
	ID        int
	Descricao string
}
