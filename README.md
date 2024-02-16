# 🤟 Dev Backend (Golang) - O Guardião dos Dados
An API developed with golang, gin gonic and gorm, which is used to manage the missions of an adventurers guild.

### 👾 "How do I use this?" 
First of all, you must clone this repository and have the Go language installed in your machine. After this:
<ul>
  <li> Open the terminal on your code editor;</li>
  <li>Type these commands: </li>
  
    ```
     go mod tidy
    ```
    ```
      go run migrate/migrate.go
    ```
  
    ```
      go run main.go
    ```
</ul>

<p> After, go the the file ".env" and "main.go". There, you will find the PORT and the endpoints that were built: </p>
<ul>
    <li> /signup - send a JSON data to signup. Example: </li>
</ul>

    ```
        {
            "Email": "fulano@gmail.com",
            "Password": "Fulano@123!"
        }
    ```
<ul>
    <li> /login - use the same credentials that you used on the /signup. </li>
</ul>
<ul>
    <li> /validate - it's a GET, so you just type "localhost:3001/validate" and see if you are authenticated. If you are, now you can access the adventurers routes! </li>
</ul>
<ul>
    <li> [POST] /adventurers - Create an aventurer. Send a JSON data:  </li>
</ul>

    ```
        {
            "Name": "Adventurer name. Example: Alatar",
            "EspecialHability": "his/her special hability. Example: extra strength",
            "Class": "his/her class. Example: warrior."
            "Mission": "his/her mission. Example: fight with the enemy"
        }
    ```
<ul>
    <li> [GET] /adventurers - return all the adventurers.  </li>
</ul>
<ul>
    <li> [GET] /adventurers/:id - return the adventurer with the id you typed.  </li>
</ul>
<ul>
    <li> [PUT] /adventurers/:id - return the adventurer with the updated informations. Send a JSON file like you sent in the POST route before.  </li>
</ul>
<ul>
    <li> [DELETE] /adventurers/:id - return the response with status 200, informing that the adventurer with the id you typed was succesfully deleted. </li>
</ul>

### 🔧 "What did you use to create this?" 
I used the following commands to create this project:

    ```
     go mod Documents/desafio-estagio
     go get -u github.com/gin-gonic/gin
     go get -u gorm.io/gorm
     go get -u gorm.io/driver/postgres
     go get github.com/joho/godotenv
     go get -u golang.org/x/crypto/bcrypt
     go get -u github.com/golang-jwt/jwt/v5
     go install github.com/swaggo/swag/cmd/swag@latest
    ```
  
### 🤔 "Why did you do this?" 
I did this for a challenge in the selection process for an intern vacancy for the company digitalsys.

### 👩‍💻 "Are you the unic author?" 
Yes, I used the google and youtube for references, but I did it by myself.

### 🍀 THANK YOU! 
<p> 
  Thanks for reading and enjoy this! You can follow me on my Linkedin Profile:
  <a href = "https://www.linkedin.com/in/maria-fernanda-leonel-bertelli-252480257"> Maria Fernanda Leonel Bertelli! </a>
</p>

 
