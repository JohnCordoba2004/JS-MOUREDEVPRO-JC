//1. Crea una variable para cada operacion aritmetica
let suma = 5 + 5
let resta = 5 - 4
let mult = 5 * 2
let div = 5 / 2
let modulo = 5 % 4
let expo = 5 ** 3
//2. Crea una varibale para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas
let a = 10
a += 10
a -= 10
a *= 10
a /= 10
//3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion
console.log('true')
console.log(10 > 5)
console.log(8 > 6)
console.log(3 > 2)
console.log(20 > 15)
console.log(30 > 15)
//4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log('false')
console.log(10 < 5)
console.log(8 < 6)
console.log(3 < 2)
console.log(20 < 15)
console.log(30 < 15)
//5. Utiliza el operador logico and
console.log(10 > 5 && 30 > 15)
//6. Utiliza el operador logico or
console.log(5 < 10 || 30 > 15)
//7. Combina ambos operadores logicos
console.log(30 > 15 && 40 > 20 || 80 > 40)
//8. Anade alguna negacion
console.log(!(30 > 15 && 40 > 20) || 80 > 40)
//9. Utiliza el operador terniario
const isChakra = true
isChakra ? console.log('Tienes Chakra') : console.log('No tiene chackra, lo lamento')
//10. Combina operadores aritmeticos, de comparacion y logicos
console.log(suma > 10 && div < 30 || 40 + 40 > 30 - 20)