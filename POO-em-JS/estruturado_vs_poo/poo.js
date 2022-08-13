const job = new Job()
job.valorHora = 50 
job.tempoEstimado = 20 
job.desconto = 10 
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)
