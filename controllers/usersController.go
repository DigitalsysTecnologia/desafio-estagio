package controllers

import (
	"digitalsys/initializers"
	"digitalsys/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// Register a new user
func UserRegister(c *gin.Context) {
	// Get data off request
	var aux struct {
		Username string
		Password string
	}

	if c.Bind(&aux) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to register user",
		})
		return
	}

	// Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(aux.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to hash password",
		})
		return
	}

	// Create a user
	user := models.User{Username: aux.Username, Password: string(hash)}
	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.Status(400)
		return
	}

	// Return
	c.JSON(200, gin.H{
		"user": user,
	})
}

// Login procedures for users. Returns true if login succesful, and false should there be any errors
func UserLogin(c *gin.Context) bool {
	// Get username and password
	var aux struct {
		Username string
		Password string
	}

	if c.Bind(&aux) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to get user data",
		})
		return false
	}

	// Find user
	var user models.User
	initializers.DB.First(&user, "username = ?", aux.Username)

	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to find user",
		})
		return false
	}

	// Compare input password with saved password hash
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(aux.Password))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid user or password",
		})
		return false
	}

	return true
}
