// IEE 754-2008 -Padrão do JS para pontos flutuantes 
let numeroUm = 0.7; 
let numeroDois = 0.1; 

numeroUm = ((numeroUm * 100) + (numeroDois * 100)) / 100;  // 0.8
numeroUm = ((numeroUm * 100) + (numeroDois * 100)) / 100;  // 0.9
numeroUm = ((numeroUm * 100) + (numeroDois * 100)) / 100;  // 1.0

console.log(numeroUm); 
console.log(Number.isInteger(numeroUm)); 

//console.log(numeroUm.toString() + numeroDois); 
//numeroUm = numeroUm.toString();
//console.log(numeroUm.toString(2)); 
//console.log(numeroUm.toFixed(2)); 
//console.log(Number.isInteger(numeroUm)); 
//console.log(Number.isNaN(temp)); 
//let temp = numeroUm * 'Olá'
