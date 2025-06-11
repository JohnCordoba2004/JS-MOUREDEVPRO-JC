// Párametrks Rest (...)

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

console.log(sum(1, 2, 3, 4, 5));