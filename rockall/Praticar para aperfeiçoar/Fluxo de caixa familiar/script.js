console.log("### Sistema de gasto ###")

let family = {
    incomes: [2500, 3200, 250, 360.45],
    expenses: [320.32, 128.45, 176.87, 1450.00]
}

/*Função só para a soma*/
function sum(array) {
    let total = 0; 

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0
    /*Vai começar negativo*/
    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()