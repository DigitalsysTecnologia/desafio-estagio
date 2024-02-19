# Aplicativos utilizados

Gin-Gonic    
Grum    
Postgresql    
Postman    

## Instruções

Primeiramente baixe o arquivo RPG    

Crie uma database com o nome "quest" no PostgreSql(Com user e senha: "postgres")    

Rode a api RPG    

## Controlar o banco de dados no postman
Para criar:    
Com a opçao POST no postman use a url (http://localhost:8888/api/quests)    
Digite { "name":"nome da quest", "description":"descricao da quest", "reward":"recompensa da quest"}

Para ver todas as quests do banco de dados:    
Com a opçao GET no postman use a url (http://localhost:8888/api/quests)    

Para deletar uma quest:    
Com a opçao DELETE no postman use a url (http://localhost:8888/api/quests/:questId)    
No lugar do ":questId" coloque o id da quest a ser deletada    

Para ver uma quest especifica:        
Com a opçao GET no postman use a url (http://localhost:8888/api/quests/:questId)    
No lugar do ":questId" coloque o id da quest a ser vista    

Para atualizar uma quest:
Com a opçao PATCH no postman use a url (http://localhost:8888/api/quests/:questId)       
No lugar do ":questId" coloque o id da quest a ser atualizada    
Digite { "name":"nome da quest", "description":"descricao da quest", "reward":"recompensa da quest"}    

## Video API em funciomento:

https://youtu.be/L787tayQI9g


