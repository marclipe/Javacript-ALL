const express = require('express')
const app = express()

//Rota 
app.get('/', function (req, res) {
  res.send('Home')
})

function gett() {
    console.log("olá mundo")
}

gett()

app.listen(3000, )
