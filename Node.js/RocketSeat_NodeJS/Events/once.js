const {EventEmitter} = require('events')
const ev = new EventEmitter()

//posso utilizar um argumento
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você', message)
}) 

ev.emit('saySomething', 'Marcos')
ev.emit('saySomething', 'Felipe')
ev.emit('saySomething', 'Sousa')

