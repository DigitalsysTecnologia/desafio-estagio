package controllers

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"Documents/desafio-estagio/models"
	"Documents/desafio-estagio/initializers"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
	"time"
	"os"


)

// @Summary Create an user
// @Description Return an user created
// @Produce json
// @Success 200 created an user
// @Router /signup [POST]
func Signup(c *gin.Context) {
	//Get the email/pass off req body
	var body struct {
		Email string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(400, gin.H {
			"error": "Failed to read body",
		})

		return
	}

	//Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(400, gin.H {
			"error": "Failed to hash password",
		})

		return
	}

	//Create the user
	user := models.User{Email: body.Email, Password: string(hash)}
	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.JSON(400, gin.H {
			"error": "Failed to create user",
		})

		return
	}

	//Respond
	c.JSON(200, gin.H{})
}

// @Summary Login
// @Description Return if the user created is the same that is trying to login
// @Produce json
// @Success 200 Email and password valid
// @Router /login [POST]
func Login(c *gin.Context) {
	//Get the email/pass off req body
	var body struct {
		Email string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(400, gin.H {
			"error": "Failed to read body",
		})

		return
	}

	//Look up requested user
	var user models.User
	initializers.DB.First(&user, "email = ?", body.Email)

	if user.ID == 0 {
		c.JSON(400, gin.H {
			"error": "Invalid email or password",
		})

		return
	}

	//Compare sent
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(400, gin.H {
			"error": "Invalid email or password",
		})

		return
	}

	//Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})
	
	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid to create token",
		})

		return
	}

	//send it back
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600 * 24 * 30, "", "", false, true)
	c.JSON(200, gin.H{})

}

// @Summary middleware that allows the user access the adveturers routes
// @Description Return the access
// @Produce json
// @Success 200 can access
// @Router /validate [GET]
func Validate(c *gin.Context) {
	user, _ := c.Get("user")

	c.JSON(200, gin.H{
		"message": user,
	})
}