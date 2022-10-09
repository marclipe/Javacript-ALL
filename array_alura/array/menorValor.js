const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial; 
    
    for(let atual = 0; atual < arrProdutos.length; atual++) {
        //codigo
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato; 
}

module.exports = menorValor;