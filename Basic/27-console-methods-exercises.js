// 1. Crea un función que utilice error correctamente
function error(a, b) {
    let suma = a + b
    console.log(suma);
    if (suma % 2 === 0) {
        console.log("El resultado es par", suma);
    } else {
        console.error("El resultado no es par", suma)
    }
}
error(21, 10)
// 2. Crea una función que utilice warn correctamente
console.warn("Es una adevertencis")
// 3. Crea una función que utilice info correctamente
console.info("Es una información");
// 4. Utiliza table
let data = [
    ["Naruto", 2002],
    ["Bleach", 2005]
]
console.table(data)
// 5. Utiliza group
console.group("Deportes")
console.log("Baloncesto");
console.log("Futbol");
console.groupEnd();

// 6. Utiliza time

console.time("Tiempo de ejecución");

for (let i = 0; i < 100000; i++) {

}

console.timeEnd("Tiempo de ejecución")
// 7. Valida con assert si un número es positivo
let numero = 17
console.assert(numero >= 18, "El usuario debe ser mayor de edad")
// 8. Utiliza count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")
// 9. Utiliza trace
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()
// 10. Utiliza clear
// console.clear()