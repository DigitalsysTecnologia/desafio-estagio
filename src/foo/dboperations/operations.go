package dboperations

import (
	"foo/models"
)

/* ---------------------------------------------------------------------------------------------------------------- *
*	Esse arquivo contem as funções que realizarão a comunicação com o banco de dados utilizando o GORM				*
* 	OBS: As operações aqui pesenter são apenas para prova de conceito. Operações mais complexas podem				*
*	ser implementadas futuramente.																					*							*
* ----------------------------------------------------------------------------------------------------------------- */

// Cria um novo personagem. O novo personagem começa no lvl 1 e não perternce a nenhuma guilda
// OBS: O ID de guilda com o valor 1 corresponde à "nenhuma"
func CriarNovoPersonagem(nome string, classeID int) (models.Personagem, error) {
	// Create a new Personagem object
	newPersonagem := models.Personagem{
		Nome:     nome,
		ClasseID: classeID,
		Level:    1,
		GuildaID: 1,
	}

	// Save the new Personagem object to the database
	result := DB.Create(&newPersonagem)
	if result.Error != nil {
		return models.Personagem{}, result.Error
	}

	return newPersonagem, nil
}

// Remove um personagem por meio de seu ID
func RemoverPersonagem(id int) (int, error) {
	toBeRemoved := models.Personagem{
		ID: id,
	}

	result := DB.Delete(&toBeRemoved)

	if result.Error != nil {
		return 0, result.Error
	}

	return int(result.RowsAffected), result.Error
}

// Atualiza as informaçoes de um personagem por meio do seu ID
func AtualizaPersonagem(id int, nome string, level int, idguilda int, idclassse int) error {
	result := DB.Save(&models.Personagem{ID: id, Nome: nome, Level: level, GuildaID: idguilda, ClasseID: idclassse})

	if result.Error != nil {
		return result.Error
	}

	return nil
}

// Procura por um personagem específico por meio -de seu ID e o retorna
// OBS: Caso não haja registro de um personagem com o ID procurado, o retorno será uma struct vazia com "id" como atributo "ID"
func BuscarPersonagem(id int) (models.Personagem, error) {
	toFind := models.Personagem{
		ID: id,
	}
	result := DB.Limit(1).Find(&toFind, id)

	if result.Error != nil {
		return models.Personagem{}, result.Error
	}

	return toFind, nil
}

// Procura por um personagem específico por meio -de seu ID e o retorna
// OBS: Caso não haja registro de um personagem com o ID procurado, o retorno será uma struct vazia com "id" como atributo "ID"
func BuscarTodosPersonagens() ([]models.Personagem, error) {

	var all []models.Personagem

	result := DB.Find(&all)

	if result.Error != nil {
		return []models.Personagem{}, result.Error
	}

	return all, nil
}

// Cria uma nova guilda
func CriarGuilda(id int, nome string) (models.Guilda, error) {
	novaGuilda := models.Guilda{
		ID:         id,
		NomeGuilda: nome,
	}

	result := DB.Create(&novaGuilda)
	if result.Error != nil {
		return models.Guilda{}, result.Error
	}

	return novaGuilda, nil
}

// Cria uma nova classe
func CriarClasse(id int, nome string) (models.Classe, error) {
	novaClasse := models.Classe{
		ID:         id,
		NomeClasse: nome,
	}

	result := DB.Create(&novaClasse)
	if result.Error != nil {
		return models.Classe{}, result.Error
	}

	return novaClasse, nil
}
