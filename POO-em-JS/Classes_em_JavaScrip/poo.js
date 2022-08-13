//definir classe
class Pessoa {
    constructor() {
        this.id = ~~(Math.random() * 100000); 
        this.nome = this.nome
    }

    dizerNome(){
        console.log(this.nome)
    }
}

//criar objeto 
const pessoa = new Pessoa('marcos'); 