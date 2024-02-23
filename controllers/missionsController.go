package controllers

import (
	"net/http"

	"github.com/Fernandoss97/desafio-estagio/initializers"
	"github.com/Fernandoss97/desafio-estagio/models"
	"github.com/gin-gonic/gin"
)


func CreateMission(c *gin.Context) {

	var body struct{
		Name string
		Description string
		RecommendedLevel int
		Location string
		Bounty string
		Difficulty int
	}

	c.Bind(&body)

	newMission := models.Mission{Name: body.Name, Description: body.Description, RecommendedLevel: body.RecommendedLevel, Location: body.Location, Bounty: body.Bounty, Difficulty: body.Difficulty}
	result := initializers.DB.Create(&newMission)

	if result.Error != nil{
		c.Status(400)
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"Mission": newMission,
	})
}


func GetMissions(c *gin.Context){

	var missions []models.Mission
	initializers.DB.Find(&missions)

	c.JSON(http.StatusOK, gin.H{
		"Missions": missions,
	})
}


func GetMissionById(c *gin.Context){

	missionId := c.Param("id")

	var mission models.Mission
	initializers.DB.First(&mission, missionId)

	c.JSON(http.StatusOK, gin.H{
		"Mission": mission,
	})

}


func UpdateMission(c *gin.Context){

	missionId := c.Param("id")

	var body struct{
		Name string
		Description string
		RecommendedLevel int
		Location string
		Bounty string
		Difficulty int
	}

	c.Bind(&body)

	var mission models.Mission
	initializers.DB.First(&mission, missionId)

	initializers.DB.Model(&mission).Updates(models.Mission{
		Name: body.Name,
		Description: body.Description,
		RecommendedLevel: body.RecommendedLevel,
		Location: body.Location,
		Bounty: body.Bounty,
		Difficulty: body.Difficulty,
	})

	c.JSON(http.StatusOK, gin.H{
		"Mission": mission,
	})
}


func DeleteMission(c *gin.Context){

	missionId := c.Param("id")

	initializers.DB.Delete(&models.Mission{}, missionId)

	c.JSON(http.StatusOK, gin.H{
		"msg": "mission successfully deleted",
	})
}