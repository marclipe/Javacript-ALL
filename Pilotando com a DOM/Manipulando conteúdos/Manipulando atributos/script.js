//Manipulado conteúdo 
// Atributos 
const header = document.querySelector('header'); 
header.setAttribute('id', 'header'); 

const headerID = document.querySelector('#header'); 

console.log(headerID.getAttribute('class'));

//para remover
header.removeAttribute('id'); 
header.setAttribute('class', 'bg header');