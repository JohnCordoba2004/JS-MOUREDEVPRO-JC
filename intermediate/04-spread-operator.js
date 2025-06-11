// Operador spread(...)

const numbers = [1, 2, 3, 4, 5]

function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)); //sin spread
console.log(sumWithSpread(...numbers));//con spread