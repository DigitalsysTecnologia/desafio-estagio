package controllers

import (
	"foo/dboperations"
	"net/http"

	"github.com/gin-gonic/gin"
)

/* -----------------------------------------------------------------------------------------*
*	Aqui estão as funções que são responsáveis pelo tratamento os formulários nos endpoints *
* ------------------------------------------------------------------------------------------*/

// Função reponsável por cadastrar um novo personagem no banco de dados à partir do JSON do formulário
// POST
func CriaPersonagem(c *gin.Context) {
	var personagem struct {
		Nome     string
		ClasseID int
	}

	c.Bind(&personagem)

	per, err := dboperations.CriarNovoPersonagem(personagem.Nome, personagem.ClasseID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao buscar por personagens",
		})
		return
	}

	c.JSON(200, gin.H{
		"Personagem": per,
	})

}

// Função responsável por retornar todos os personagens cadastrados
// GET
func RetornaTodos(c *gin.Context) {
	all, err := dboperations.BuscarTodosPersonagens()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao buscar por personagens",
		})
		return
	}

	c.JSON(200, gin.H{
		"Personagens": all,
	})
}

// Função responsável por deletar o personagem especificado do corpo do JSON
// POST
func DeletaPersonagem(c *gin.Context) {
	var personagem struct {
		ID int
	}

	c.Bind(&personagem)

	rows, err := dboperations.RemoverPersonagem(personagem.ID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao deletar personagens",
		})
		return
	}

	c.JSON(200, gin.H{
		"Deletetado": true,
		"Rows":       rows,
	})

}

// Função responsável por Atualizar as informações de um personagem
// POST
func AtualizaPersonagem(c *gin.Context) {
	var upPerso struct {
		ID       int
		Nome     string
		Level    int
		GuildaID int
		ClasseID int
	}

	c.Bind(&upPerso)

	err := dboperations.AtualizaPersonagem(upPerso.ID, upPerso.Nome, upPerso.Level, upPerso.GuildaID, upPerso.ClasseID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha na atualizacao do personagem",
		})
		return
	}

	c.JSON(200, gin.H{
		"Atualizado/criado": true,
	})
}

// Função responsável por buscar por um único personagem. Retorna uma struct vazia caso este não seja encontrado
// POST
func BuscarPersonagem(c *gin.Context) {

	var perso struct {
		ID int
	}

	c.Bind(&perso)

	toFind, err := dboperations.BuscarPersonagem(perso.ID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao buscar por personagens",
		})
		return
	}

	c.JSON(200, gin.H{
		"Personagem": toFind,
	})
}
