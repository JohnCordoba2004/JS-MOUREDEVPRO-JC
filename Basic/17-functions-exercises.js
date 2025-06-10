//Nota: explora diferentes sintaxis de funciones para resolver los ejercicios
//1. Crea una funcion que reciba dos numeros y devuelva su suma
// const sum = (a = 0, b = 0) => { console.log(`La suma de ${a} + ${b} es ${a + b}`) }
// sum(15, 4)

//2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
// let numeros = [12, 7, 25, 3, 18, 42, 9, 31];
// //Encontramos el mayor de los num
// function findNumMayor(mayor) {
//   mayor = numeros[0]
//   for (let i = 0; i <= numeros.length; i++) {
//     if (numeros[i] > mayor) {
//       mayor = numeros[i]
//     }
//   }
//   console.log(`El numero mayor es: ${mayor}`)
// }
// findNumMayor()

// //Encontramos el menor de los num
// function findNumMenor(menor) {
//   menor = numeros[0]
//   for (let i = numeros.length - 1; i > 0; i--) {
//     if (numeros[i] < menor) {
//       menor = numeros[i]
//     }
//   }
//   console.log(`El numero menor es: ${menor}`);
// }

// findNumMenor()

//3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene
// let texto = 'murciélago'
// let vocales = ['a', 'e', 'i', 'o', 'u']
// let contador = 0
// function findVocales(letra) {
//   for (let i = 0; i < texto.length; i++) {
//     letra = texto[i].toLowerCase()
//     if (vocales.includes(letra)) {
//       contador++
//       console.log(`Indice: ${i} y letra: ${letra} (es vocal)`)
//     } else {
//       console.log(`Indice: ${i} y letra: ${letra}`)
//     }
//   }
// }
// findVocales()

//4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas
// let stringArr = ["Hola, como andan muchachones", 'Murcielago', 'Ballena']
// let newString = []
// function upperArr(letra) {
//   for (let i = 0; i < stringArr.length; i++) {
//     letra = stringArr[i].toUpperCase()
//     newString.push(letra)//agregamos lo que teniamos en nuestro array original y con el metodo push lo agragamos a nuestro nuevo array
//   }
//   console.log(newString)
// }
// upperArr()

//5. Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.
// const miPrimo = function (num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true
// }
// console.log(miPrimo(2));
// console.log(miPrimo(3));
// console.log(miPrimo(5));
// console.log(miPrimo(7));
// console.log(miPrimo(11));
// console.log(miPrimo(13));
// console.log(miPrimo(17));
// console.log(miPrimo(19));
// console.log(miPrimo(23));
// console.log(miPrimo(29));
// console.log(miPrimo(31));

//6. Crea una funcion que reciba dos arrays y devuelva un nuevo arr que contenga los elementos comunes entre ambos
// Pistas:
// - Puedes usar un bucle para recorrer uno de los arrays y comprobar si cada elemento está en el otro array.
// - El método .includes() te ayuda a saber si un elemento está en un array.
// - También puedes usar filter() para hacerlo de forma más compacta.
// - Recuerda que los elementos comunes pueden repetirse, según cómo lo implementes.
// let arr1 = ['Hola', 'Javascript', '1']
// let arr2 = ['Hola', 'Javascript', '2']
// let nuevoArr = []
// function findArr() {
// for (let i = 0; i < arr1.length; i++) {
// if (arr2.includes(arr1[i])) {
// nuevoArr.push(arr1[i])
// }
// }
// return nuevoArr;
// }
// console.log('findArr(): ', findArr());

//7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Declaramos un array con los números del 1 al 10
// let contador = 0 // Inicializamos una variable para acumular la suma de los números pares

// function pares() { // Definimos la función llamada 'pares'
// for (let i = 0; i < numeros.length; i++) { // Recorremos el array 'numeros' con un bucle for
// let numPares = numeros[i] // Guardamos el valor actual del array en la variable 'numPares'

// if (numPares % 2 === 0) { // Verificamos si el número es par (resto de la división por 2 es 0)
// contador += numPares // Si es par, sumamos su valor a la variable 'contador'
// console.log(`Pares: ${numPares}`); // Mostramos en consola el número par encontrado
// }
// }
// return contador; // Al finalizar el bucle, devolvemos la suma total de los números pares
// }

// console.log(`Suma de los numeros pares: ${pares()}`) // Llamamos a la función y mostramos el resultado en consola

//8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let nuevoArr = []
// let contador = 0

// const square = (square) => {
//   for (let i = 0; i < numeros.length; i++) {
//     square = numeros[i]
//     square *= numeros[i]
//     console.log(`Indice:${i + 1} ${numeros[i]}x${numeros[i]}  square: ${square} `)
//   }
// }
// square()

//9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// function reverseWord(word) {
//   let reverse = word.split(' ').reverse().join(' ')
//   console.log(`Palabra invertida: ${reverse}`)
// }
// reverseWord('Word bad')

//10. Crea una funcion que calcule el factorial de un numero dado
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1)
// }
// console.log(factorial(5))