console.log("Celsius to Fahrenheit")
//5:36
//transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && fahrenheitExists) {
        throw new Error('Grau não identificado!')
    }
}

try {
    transformDegree('50F')
    transformDegree('50Z')
} catch (error) {
    console.log(error)
}