const nome_ = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30; 
const peso = 84; 
const altura = 1.80; 
let indiceMassaCorporal;  //peso / (altura * altura)
let anoNascimento; 

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome_} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome_} nasceu em ${anoNascimento}.`);