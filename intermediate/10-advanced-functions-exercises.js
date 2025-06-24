// 1. Crea una función que retorne a otra función
function sum(a) {
    return function b(b) {
        return function c(c) {
            return a + b + c
        }
    }
}

const result = sum(2)(4)(6)
console.log(result)

// 2. Implementa una función currificada que multiplique 3 números
const multiplicar = a => b => c => a * b * c
console.log(multiplicar(2)(3)(4));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, expo) {
    if (expo === 0) {
        return 1; //Caso base
    }

    return base * potencia(base, expo - 1); //Llamada recursiva
}
console.log(potencia(2, 3));
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial) {
    let counter = valorInicial; //Estado privado

    return {
        increment: () => {
            counter++;
        },
        decrement: () => {
            counter--;
        },
        getValue: () => {
            return counter;
        }
    };
}

// Ejemplos
const contador = createCounter(5); //Comienza en 5

console.log(contador.getValue());
contador.increment();

console.log(contador.getValue());
contador.decrement();

console.log(contador.getValue());


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    // let sum = 0;
    /* for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } */
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    return sum * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3)); // (1+2+3)*2 = 12

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumWithCallback(callback, ...numbers) { // Define una función que recibe un callback y una cantidad variable de números
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Suma todos los números usando reduce, comenzando desde 0
    callback(sum); // Llama al callback pasando como argumento la suma calculada
}
// Ejemplo de uso:
sumWithCallback(result => console.log(`La suma es: ${result}`), 1, 2, 3, 4); // Llama a la función pasando un callback que imprime el resultado y los números a sumar
// 7. Desarrolla una función parcial
function sumar(a, b, c) {
    return a + b + c
}

// Funcion parcial: fijamos el primer argumento
function parcialSumar(a) {
    return function (b, c) {
        return sumar(a, b, c);
    };
}

const sumar10 = parcialSumar(10);
console.log(sumar10(2, 3));
// 8. Implementa un ejemplo que haga uso de Spread
const numbers = [1, 2, 3, 4, 5]

function sumWithSpread(a, b, c) {
    return a + b + c
}
console.log(sumWithSpread(...numbers)); //Spread
// 9. Implementa un retorno implícito
const div = (a, b) => a / b; //return implícito
console.log(div(12, 2));
// 10. Haz uso del this léxico
const handler = {
    name: "John",
    greeting: function () {
        console.log(`Hola, ${this.name}`);
    },

    arrowGreting() {
        console.log(`Hola, ${this.name}`);
    }
}

handler.greeting()
handler.arrowGreting()