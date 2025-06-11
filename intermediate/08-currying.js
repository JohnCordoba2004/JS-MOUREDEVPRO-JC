// Currying

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

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3));
console.log(sumC(4));
console.log(sumAB(5)(7));