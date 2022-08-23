// const random = (number, Math) => 
//     Math.floor(Math.random() * number); 

//recursive 
//Find the factorial of a number 

const factorial = x => {

    //if number 
    if (x === 0) {
        return 1; 
    }

    return x * factorial(x - 1); 
}

factorial(2)