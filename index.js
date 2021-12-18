var express = require('express')

var app = express()

app.get('/', (req, res) => {
    console.log("Request Recieved")
    res.send("<h1>This has worked!</h1>")
})

app.listen(3000, ()=> {
    console.log("Listening on Port 3000")
})