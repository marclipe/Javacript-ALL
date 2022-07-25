//Passo 1: Modelando 
class Stack {
    /* constructor vai ser a função assim que eu criar meu objeto mais tarde*/
    constructor() {
        this.data = []
        this.top = -1 
    }

    /*Para colocar o valor dentro do meu data*/
    push(value) {
        this.top++ /*incrementando o top*/
        this.data[this.top] = value /*this.data na posição zero para receber o valor*/
        return this.data 
    }

    /*Serve para tirar o último elemento da nossa stack*/
    pop() {
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    /*retornar o último da pilha*/
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

//Passo 2: Utilizando 
/*O new Stack() instancia um novo objeto para a gente*/
const stack = new Stack()

//adicionar o dados: 
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover dados
stack.pop()
console.log(stack.pop())

console.log(stack.peek())