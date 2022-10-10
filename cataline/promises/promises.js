let voceComprouOsProdutos = new Promise(function (resolve, reject) {
    setTimeout(function() {
        reject('Deu ruim')
    }, 3000)
}); 

voceComprouOsProdutos.then(function (products) {
    console.log(products)
})
.catch(function (error) { /*para o reject */
    console.log(error)
})