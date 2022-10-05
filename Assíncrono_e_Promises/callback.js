//Funções que aceitam qualquer tipo de dado como argumento
function imprimirDados(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDados(function() {
    return 'Olá mundo!'
})