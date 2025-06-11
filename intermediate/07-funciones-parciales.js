// Funciones parciales

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

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3));
console.log(sumWith(1, 2));