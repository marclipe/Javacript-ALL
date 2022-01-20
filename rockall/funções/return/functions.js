// function expression 
// function anonymous 

//parâmetros (parameters)
const sum = function(number1, number2){
    total = number1 + number2 //total não precisou declarar operador e funciona dentro e fora do escopo, mas pode ter problemas cuidado
    return total
}

let number1 = 34
let number2 = 25

//console.log(`O número 1 é ${number1}`)
//console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)