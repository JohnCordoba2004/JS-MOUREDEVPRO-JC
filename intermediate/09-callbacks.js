function sum(...numbers) {
    let result = 0
    /* for (let number of numbers) {
        result += number
    }
    return result */

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result;
}


// Funciones que se ejecutan dentro de otras funciones
// Callbacks

function procesData(data, callback) {
    const result = sum(...data);
    callback(result)
}

function procesResult(result) {
    console.log(result);
}
function procesResult2(result) {
    console.log(`Mi resultado es: ${result}`);
}

procesData([1, 2, 3], procesResult)
procesData([1, 2, 3], procesResult2)
procesData([1, 2, 3], (result)=>{
    console.log(`Mi resultado en la arrow function es: ${result}`);
})