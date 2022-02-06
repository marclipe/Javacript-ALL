//Throw -> disparo 

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')
}

//Try...Catch -> capturar

try {
    sayMyName('Marcos')
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')