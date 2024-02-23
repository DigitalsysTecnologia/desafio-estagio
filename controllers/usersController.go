package controllers

import (
	"net/http"

	"github.com/Fernandoss97/desafio-estagio/initializers"
	"github.com/Fernandoss97/desafio-estagio/models"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)


func CreateUser(c *gin.Context) {
	var body struct {
		Name string
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 12)

	if err != nil{
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Filed to hash password",
		})
		return
	}

	newUser := models.User{Name: body.Name, Email: body.Email, Password: string(hash)}
	result := initializers.DB.Create(&newUser)

	if result.Error != nil{
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create user",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"User": newUser,
	})
 
}


func GetUsers(c *gin.Context){
	var users []models.User
	initializers.DB.Find(&users)

	c.JSON(http.StatusOK, gin.H{
		"Users": users,
	})
}


func GetUserById(c *gin.Context){
	userId := c.Param("id")

	var user models.User
	initializers.DB.First(&user, userId)

	c.JSON(http.StatusOK, gin.H{
		"User": user,
	})
}


func UpdateUser(c *gin.Context){
	userId := c.Param("id")

	var body struct{
		Name string
		Email string
	}

	c.Bind(&body)

	var user models.User
	initializers.DB.First(&user, userId)

	initializers.DB.Model(&user).Updates(models.User{
		Name: body.Name,
		Email: body.Email,
	})

	c.JSON(http.StatusOK, gin.H{
		"User": user,
	})
}


func DeleteUser(c *gin.Context){
	userId := c.Param("id")

	initializers.DB.Delete(&models.User{}, userId)

	c.JSON(http.StatusOK, gin.H{
		"msg": "user successfully deleted",
	})
}