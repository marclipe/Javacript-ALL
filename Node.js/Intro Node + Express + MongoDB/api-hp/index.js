const express = require('express')
const app = express()

app.use(express.json())

const characters = [
  {
    id: 1, 
    name: "Harry Potter", 
    species: "human", 
    house: "Gryffinfor", 
    actor: "Daniel Redcliffe"
  }, 
  {
    id: 2, 
    name: "Hermione Granger", 
    species: "human", 
    house: "Gryffinfor", 
    actor: "Emma Watson"
  }, 
]

//Rota 
//GET - READ
app.get('/', (req, res) => {
  res.send(characters)
})

//POST - CREATE 
app.post("/create", (req, res) => {
  const character = req.body; 

  //Cria o ID
  character.id = characters.length + 1; 
  //Joga o ID dentro do Array de character
  characters.push(character); 

  res.send({message: "Personagem criado com sucesso!"})
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
});
