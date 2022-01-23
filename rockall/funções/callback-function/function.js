//callback function 

function sayMyName(name) {
    console.log('antes de executar a função callback')

    function name() {
        console.log('estou em uma callback')
    }
    name()

    console.log('depois de executar a callback')
}

sayMyName(
    
)