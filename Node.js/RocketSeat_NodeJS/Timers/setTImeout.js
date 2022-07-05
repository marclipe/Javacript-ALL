//seTimeout rodar uma função depois de X milissegundos 
const timeOut = 3000//mesmo que 3 segundos
const finished = () => console.log('done!')

//vai passar a função e o tempo
setTimeout(finished, timeOut)
console.log('Mostrar')