/*Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor 

Referência (mutável) - Arrays, Objetos, Function - Passados por referência  
*/

const a = {
    nome: 'Luiz', 
    sobrenome: 'Otávio'
}; 

const b = {...a}; 

a.nome = 'João'; 
console.log(a); 
console.log(b); 
