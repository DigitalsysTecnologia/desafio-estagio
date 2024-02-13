package controllers

import (
	"crypto/rand"
	"desafio-estagio/initializers"
	"desafio-estagio/model"
	"encoding/hex"
	"github.com/gin-gonic/gin"
	"log"
)

func generateRandomKey(length int) (string, error) {
	// Gere bytes aleatórios
	bytes := make([]byte, length)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}

	key := hex.EncodeToString(bytes)
	return key, nil
}

func UserAuth(c *gin.Context) error {
	// autentica acesso a api
	key := c.Param("key")

	var user model.User
	err := initializers.DB.Where("key = ?", key).First(&user).Error
	return err
}

func UserCreate(c *gin.Context) {

	var newUser struct {
		Name string
	}

	c.Bind(&newUser)
	if newUser.Name == "" {
		c.JSON(404, gin.H{"error": "campo 'Name' necessario"})
		return
	}

	//gera uma key para o user
	keyLenght := 16
	key, err := generateRandomKey(keyLenght)
	if err != nil {
		log.Fatal("error while creating a key")
	}

	// cria um user com o Name passado
	user := model.User{Name: newUser.Name, Key: key}

	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"User": user,
	})
}

func MissionIndex(c *gin.Context) {
	if UserAuth(c) != nil {
		c.JSON(404, gin.H{"error": "Usuário não encontrado"})
		return
	}

	// mostra todas as mission
	var missions []model.Mission
	if err := initializers.DB.Find(&missions).Error; err != nil {
		c.JSON(404, gin.H{"error": "Erro ao coletar missoes"})
		return
	}

	c.JSON(200, missions)
}

// cria uma mission
func MissionCreate(c *gin.Context) {
	var newMission struct {
		Name        string
		Description string
	}

	if UserAuth(c) != nil {
		c.JSON(404, gin.H{"error": "Usuário não encontrado"})
		return
	}

	c.Bind(&newMission)
	if newMission.Name == "" {
		c.JSON(404, gin.H{"error": "campo 'Name' necessario"})
		return
	}

	//cria uma mission
	mission := model.Mission{Name: newMission.Name, Description: newMission.Description}

	result := initializers.DB.Create(&mission)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"mission": mission,
	})

}

func MissionDelete(c *gin.Context) {
	if UserAuth(c) != nil {
		c.JSON(404, gin.H{"error": "Usuário não encontrado"})
		return
	}

	id := c.Param("id")

	// Verifica se a missão com o ID fornecido existe no banco de dados
	var mission model.Mission
	if err := initializers.DB.First(&mission, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "Missão não encontrada"})
		return
	}

	// Exclui a missão do banco de dados
	if err := initializers.DB.Delete(&mission).Error; err != nil {
		c.JSON(400, gin.H{"error": "Erro ao excluir a missão"})
		return
	}

	c.JSON(200, gin.H{"message": "Missão excluída com sucesso"})
}

func MissionUpdate(c *gin.Context) {
	if UserAuth(c) != nil {
		c.JSON(404, gin.H{"error": "Usuário não encontrado"})
		return
	}

	var updateMission struct {
		Name        string
		Description string
	}

	c.Bind(&updateMission)
	if updateMission.Name == "" {
		c.JSON(404, gin.H{"error": "campo 'Name' necessario"})
		return
	}

	id := c.Param("id")

	// Verifica se a missão com o ID fornecido existe no banco de dados
	var mission model.Mission
	if err := initializers.DB.First(&mission, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "Missão não encontrada"})
		return
	}

	//atualiza a mission
	if err := initializers.DB.Model(&mission).Updates(model.Mission{Name: updateMission.Name, Description: updateMission.Description}).Error; err != nil {
		c.JSON(404, gin.H{"error": "erro ao atualizar"})
		return
	}

	c.JSON(200, gin.H{
		"mission": mission,
	})
}

func MissionSearch(c *gin.Context) {
	if UserAuth(c) != nil {
		c.JSON(404, gin.H{"error": "Usuário não encontrado"})
		return
	}

	id := c.Param("id")

	// Verifica se a missão com o ID fornecido existe no banco de dados
	var mission model.Mission
	if err := initializers.DB.First(&mission, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "Missão não encontrada"})
		return
	}

	c.JSON(200, gin.H{
		"mission": mission,
	})
}
