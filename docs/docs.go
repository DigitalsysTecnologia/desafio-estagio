// Package docs Code generated by swaggo/swag. DO NOT EDIT
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/adventurers": {
            "get": {
                "description": "Return all the adventurers",
                "produces": [
                    "application/json"
                ],
                "summary": "Adventurers List",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "Adventurers"
                        }
                    }
                }
            },
            "post": {
                "description": "Return the created adventurer",
                "produces": [
                    "application/json"
                ],
                "summary": "Create an adventurer",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "the"
                        }
                    }
                }
            }
        },
        "/adventurers/id": {
            "get": {
                "description": "Return one adventurer by the Id",
                "produces": [
                    "application/json"
                ],
                "summary": "One Adventurer",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "Just"
                        }
                    }
                }
            },
            "put": {
                "description": "Return the adventurer especified by the id with the update informations",
                "produces": [
                    "application/json"
                ],
                "summary": "Adventurers update",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "The"
                        }
                    }
                }
            },
            "delete": {
                "description": "Return no content because its just the adventurer especified by the id that was deleted",
                "produces": [
                    "application/json"
                ],
                "summary": "Delete an adventurer",
                "responses": {
                    "200": {
                        "description": "OK"
                    }
                }
            }
        },
        "/login": {
            "post": {
                "description": "Return if the user created is the same that is trying to login",
                "produces": [
                    "application/json"
                ],
                "summary": "Login",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "Email"
                        }
                    }
                }
            }
        },
        "/signup": {
            "post": {
                "description": "Return an user created",
                "produces": [
                    "application/json"
                ],
                "summary": "Create an user",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "created"
                        }
                    }
                }
            }
        },
        "/validate": {
            "get": {
                "description": "Return the access",
                "produces": [
                    "application/json"
                ],
                "summary": "middleware that allows the user access the adveturers routes",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "can"
                        }
                    }
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "",
	Host:             "",
	BasePath:         "",
	Schemes:          []string{},
	Title:            "",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
	LeftDelim:        "{{",
	RightDelim:       "}}",
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
