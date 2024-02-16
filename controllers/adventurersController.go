package controllers

import (
	"github.com/gin-gonic/gin"
	"Documents/desafio-estagio/models"
	"Documents/desafio-estagio/initializers"
)

// @Summary Create an adventurer
// @Description Return the created adventurer
// @Produce json
// @Success 200 the data of the created adventurer
// @Router /adventurers [POST]
func CreateAdventurer(c *gin.Context){
	//Get data off req body
	var body struct{
		Name string
		EspecialHability string
		Class string
	}

	c.Bind(&body)

	// Create an adventurer
	adventurer := models.Adventurer{Name: body.Name, EspecialHability: body.EspecialHability, Class: body.Class}
	result := initializers.DB.Create(&adventurer)

	if result.Error != nil {
		c.Status(400)
		return
	}
	//return it
	c.JSON(200, gin.H {
		"adventurer": adventurer,
	})
}

// @Summary Adventurers List
// @Description Return all the adventurers
// @Produce json
// @Success 200 Adventurers List
// @Router /adventurers [GET]
func AdventurersIndex(c *gin.Context) {
	//Get the adventurers
	var adventurers []models.Adventurer
	initializers.DB.Find(&adventurers)

	//Respond with them
	c.JSON(200, gin.H {
		"adventurers": adventurers,
	})
}

// @Summary One Adventurer
// @Description Return one adventurer by the Id
// @Produce json
// @Success 200 Just one adventurer
// @Router /adventurers/id [GET]
func AdventurersShowId(c *gin.Context) {
	//Get id off URL
	id := c.Param("id")

	//Get the adventurers
	var adventurer models.Adventurer
	initializers.DB.First(&adventurer, id)

	//Respond with them
	c.JSON(200, gin.H {
		"adventurers": adventurer,
	})
}

// @Summary Adventurers update
// @Description Return the adventurer especified by the id with the update informations
// @Produce json
// @Success 200 The updated adventuer
// @Router /adventurers/id [PUT]
func AdvnturersUpdate(c *gin.Context) {
	//Get id off URL
	id := c.Param("id") 

	//Get the data off req body
	var body struct{
		Name string
		EspecialHability string
		Class string
	}

	c.Bind(&body)

	//Find the adventurer were updating
	var adventurer models.Adventurer
	initializers.DB.First(&adventurer, id)

	//Update it
	initializers.DB.Model(&adventurer).Updates(models.Adventurer {
		Name: body.Name,
		EspecialHability: body.EspecialHability,
		Class: body.Class,
	})

	//Respond with it
	c.JSON(200, gin.H {
		"adventurer": adventurer,
	})
}

// @Summary Delete an adventurer
// @Description Return no content because its just the adventurer especified by the id that was deleted
// @Produce json
// @Success 200 
// @Router /adventurers/id [DELETE]
func AdventurersDelete(c *gin.Context) {
	//Get the id off the ORL
	id := c.Param("id")

	//Delete the posts
	initializers.DB.Delete(&models.Adventurer{}, id)

	//Respond with it
	c.Status(200)
}