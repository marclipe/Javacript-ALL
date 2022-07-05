const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

//Herdamos para o Character todo as opções do EventEmitter
inherits(Character, EventEmitter)

//criando um novo personagem
const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')