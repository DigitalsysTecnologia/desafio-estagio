package middlewares

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func VerifyToken(c *gin.Context) {
	clientToken := c.Request.Header.Get("Authorization")
	
	if clientToken == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Token not sent"})
		c.Abort()
		return
	}

	tokenString := strings.Replace(clientToken, "Bearer ", "", 1)

	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("invalid token: unexpected signing method")
		}
		return []byte(os.Getenv("SECRET")), nil
	})

	if err != nil {
    c.JSON(http.StatusUnauthorized, gin.H{"error": fmt.Sprintf("Invalid token: %s", err.Error())})
    c.Abort()
    return
	}


	if !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token: token is not valid"})
		c.Abort()
		return
	}

	c.Next()
}
