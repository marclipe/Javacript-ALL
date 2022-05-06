//Adicionando elementos
const div = document.createElement('div');
div.innerText = "Olá Devs!"; 

// insertBefore
const body = document.querySelector('body'); 
const header = body.querySelector('script'); 
body.insertBefore(div, header.nextElementSibling); 