function contar() {
    var cont = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Desculpe valor errado amigo')
    } else {
        for(cont <= 1; cont <= inicio; cont++)
        {
            res.Text = `Inicio ${cont}, Fim ${fim}, Passo ${passo}`
        }
    } 
    
    
}