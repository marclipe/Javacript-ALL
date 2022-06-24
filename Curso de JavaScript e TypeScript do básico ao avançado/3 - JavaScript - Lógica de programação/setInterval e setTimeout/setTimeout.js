function mostraHora() {
    let data = new Date(); 

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    }); 
}

const timer = setInterval(function() {
    console.log(mostraHora()); 
}, 1000); //1 segundo 

setTimeout(function() {
    clearInterval(timer); 
}, 3000); //3 segundos


setTimeout(function() {
    console.log("Stop Count!!")
}, 5000); //5 segundos
