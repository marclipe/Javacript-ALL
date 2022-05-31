var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

/* ============ Incrementar ============*/
currentNumber.addEventListener('increment', increment())

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; 
}

/* ============ Decrementar ============*/
currentNumber.addEventListener('decrement', decrement())

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

/* ============ Condition ============*/

