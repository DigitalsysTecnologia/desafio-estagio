package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/mottapng/desafio-estagio/routes"
	"github.com/stretchr/testify/assert"
)

func setupRouter() *gin.Engine {
    r := gin.Default()
    routes.AuthRoutes(r.Group("/auth"))
    routes.AventureiroRoutes(r.Group("/aventureiros"))
    return r
}

func TestUserRegistration(t *testing.T) {
	r := setupRouter()

	w := httptest.NewRecorder()
	body := strings.NewReader(`{
			"nome": "John",
			"email": "john@example.com",
			"senha": "password",
			"classe": "Guerreiro"
	}`)
	req, _ := http.NewRequest("POST", "/auth/register", body)
	req.Header.Set("Content-Type", "application/json")

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusCreated, w.Code)
}

func TestUserLogin(t *testing.T) {
	r := setupRouter()

	w := httptest.NewRecorder()
	body := strings.NewReader(`{
		"email": "john@example.com",
		"senha": "password"
	}`)
	req, _ := http.NewRequest("POST", "/auth/login", body)
	req.Header.Set("Content-Type", "application/json")

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}