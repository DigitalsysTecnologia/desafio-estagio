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
			"Error": "Falha ao criar personagem",
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

// Função responsável por criar uma nova classe
// POST
func CriaClasse(c *gin.Context) {
	var classe struct {
		ID   int
		nome string
	}

	c.Bind(&classe)

	cls, err := dboperations.CriarClasse(classe.ID, classe.nome)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao criar nova classe",
		})
		return
	}

	c.JSON(200, gin.H{
		"Classe": cls,
	})

}

// Função responsável por criar uma nova guilda
// POST
func CriaGuilda(c *gin.Context) {
	var guilda struct {
		ID   int
		Nome string
	}

	c.Bind(&guilda)

	gui, err := dboperations.CriarGuilda(guilda.ID, guilda.Nome)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao criar nova guilda",
		})
		return
	}

	c.JSON(200, gin.H{
		"Classe": gui,
	})

}

// Função responsável por criar uma nova missao
// POST
func CriaMissao(c *gin.Context) {
	var missao struct {
		ID        int
		Descricao string
	}

	c.Bind(&missao)

	miss, err := dboperations.CriarMissao(missao.ID, missao.Descricao)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao criar nova missao",
		})
		return
	}

	c.JSON(200, gin.H{
		"Classe": miss,
	})

}

// Função responsável atribuir uma missão a uma guilda por meio de seu ID
// POST
func AtribuirMissao(c *gin.Context) {
	var atribuicao struct {
		IDGuilda int
		IDmissao int
	}

	c.Bind(&atribuicao)

	err := dboperations.AtribuirMissao(atribuicao.IDGuilda, &atribuicao.IDmissao)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao atribuir missao",
		})
		return
	}

	c.JSON(200, gin.H{
		"Status": "Missao atribuida com sucesso",
	})

}

// Função responsável remover uma missão de uma guilda
// POST
func DeixaMissao(c *gin.Context) {
	var guilda struct {
		IDGuilda int
	}

	c.Bind(&guilda)

	err := dboperations.DeixarMissao(guilda.IDGuilda)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao deixa missao",
		})
		return
	}

	c.JSON(200, gin.H{
		"Status": "Missao abandonada/concluída com sucesso",
	})

}

// Função responsável adiciona um personagem a uma guilda
// POST
func EntrarGuild(c *gin.Context) {
	var info struct {
		IDperso int
		IDG     int
	}

	c.Bind(&info)

	err := dboperations.EntrarGuilda(info.IDperso, info.IDG)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao entrar em uma guilda",
		})
		return
	}

	c.JSON(200, gin.H{
		"Status": "Sucesso",
	})

}

// Função responsável remover uma missão de uma guilda
// POST
func DeixarGuild(c *gin.Context) {
	var info struct {
		IDperso int
	}

	c.Bind(&info)

	err := dboperations.DeixarGuilda(info.IDperso)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": "Falha ao deixar em uma guilda",
		})
		return
	}

	c.JSON(200, gin.H{
		"Status": "Sucesso",
	})

}
