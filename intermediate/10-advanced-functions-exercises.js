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
    valorInicial = 0
    return function increment() {
        valorInicial++
        return function decrement() {
            valorInicial--
        }
    }
}

const counter = createCounter(0)
console.log(counter());
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico