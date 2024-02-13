package controllers

import (
	"digitalsys/initializers"
	"digitalsys/models"

	"github.com/gin-gonic/gin"
)

// Create new mission
func MissionsCreate(c *gin.Context) {
	// Get data off request
	var aux struct {
		Title       string
		Description string
	}

	c.Bind(&aux)

	// Create a mission
	mission := models.Mission{Title: aux.Title, Description: aux.Description}
	result := initializers.DB.Create(&mission)

	if result.Error != nil {
		c.Status(400)
		return
	}

	// Return the mission
	c.JSON(200, gin.H{
		"mission": mission,
	})
}

// Lookup all missions
func MissionsQueryAll(c *gin.Context) {
	// Get missions
	var missions []models.Mission
	initializers.DB.Find(&missions)

	// Return missions
	c.JSON(200, gin.H{
		"missions": missions,
	})
}

// Lookup Mission by ID
func MissionsQueryOne(c *gin.Context) {
	// Get mission ID
	id := c.Param("id")

	// Get mission
	var mission models.Mission
	initializers.DB.First(&mission, id)

	// Return missions
	c.JSON(200, gin.H{
		"mission": mission,
	})
}

// Update mission by ID
func MissionUpdate(c *gin.Context) {
	// Get mission ID
	id := c.Param("id")

	// Get data off request
	var aux struct {
		Title       string
		Description string
	}

	c.Bind(&aux)

	// Find mission to update
	var mission models.Mission
	initializers.DB.First(&mission, id)

	// Update mission
	initializers.DB.Model(&mission).Updates(models.Mission{
		Title:       aux.Title,
		Description: aux.Description,
	})

	// Return mission
	c.JSON(200, gin.H{
		"mission": mission,
	})
}

// Delete mission by ID
func MissionDelete(c *gin.Context) {
	// Get mission ID
	id := c.Param("id")

	// Delete mission
	initializers.DB.Delete(&models.Mission{}, id)

	// Return
	c.Status(200)
}
