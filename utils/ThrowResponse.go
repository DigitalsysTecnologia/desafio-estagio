package utils

import "github.com/gin-gonic/gin"

func ThrowError(c *gin.Context, status int, message string) {
    c.JSON(status, gin.H{
        "message": message,
    })
    c.Abort()
}

func ThrowResponse(c *gin.Context, status int, message string, data ...interface{}) {
	if len(data) > 0 {
		c.JSON(status, gin.H{
			"message": message,
			"data":    data[0],
		})
	} else {
		c.JSON(status, gin.H{
			"message": message,
		})
	}
	c.Abort()
}