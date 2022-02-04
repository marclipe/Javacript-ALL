//Condição então valor1 se não valor 2 
//condition ? value1 : value2

//Exemplos 
//Café da manhã top 
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

//Maior de 18 
let age = 32 
const canDrive = age >= 18 ? 'Can Drive' : "Can't drive"
console.log(canDrive)
