//Nota: Explora diferentes sintaxis de bucles para resolver los ejercicios
//1. Crea un bucle que imprima lso numeros de 1 al 20
/* for (let i = 0; i < 20; i++) {
  console.log(i + 1)
} */

//2. Crea un bucle que sume todos los numero del 1 al 100 y muestre el resultado
// Pista:
// - Declara una variable para almacenar la suma.
// - Usa un bucle para recorrer los números del 1 al 100.
// - En cada iteración, suma el número actual a la variable.
// - Al final, muestra el resultado con console.log.
/* let suma = 0;
for (let i = 1; i <= 100; i++) {
  // suma = i * (i + 1) / 2//Formula para usar sin bucle
  suma += i
}
console.log(`La suma del 1 al 100 da como resultado: ${suma}`); */

//3. Crea un bucle que imprima todos los numeros pares entre 1 y 50
/* for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`Pares:${i}`)
  } else {
    console.log(`Impares:${i}`)
  }
} */

//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
/* let nombresArr = ['John', 'Manuel', 'Samael', 'Ricardo', 'Pablo']
for (const nombres of nombresArr) {
  console.log(`Nombres: ${nombres}`)
} */

//5. Escribe un bucle que cuente el numero de vocales en una cadena de texto
// Pistas:
// - Declara una variable para contar las vocales.
// - Recorre la cadena de texto carácter por carácter usando un bucle.
// - En cada iteración, verifica si el carácter actual es una vocal (puedes usar .includes o una comparación).
// - Si es una vocal, incrementa el contador.
// - Al final, muestra el resultado con console.log.
// Más pistas:
// - Puedes convertir cada carácter a minúscula usando .toLowerCase() para que funcione con mayúsculas y minúsculas.
// - Usa una variable contador, por ejemplo let contador = 0.
// - Puedes recorrer la cadena con un bucle for clásico, for...of, o forEach si conviertes la cadena en array.
// - Para verificar si un carácter es vocal, puedes usar vocales.includes(caracter).
// - Al final, muestra el total de vocales encontradas con console.log.

//for
// let texto = 'Hola como estas'
// let vocales = ['a', 'e', 'i', 'o', 'u']
// let contador = 0
// for (let i = 0; i < texto.length; i++) {
//   let letra = texto[i].toLowerCase()
//   if (vocales.includes(letra)) {
//     contador++
//     console.log(`Indice ${i}, letra: ${letra} (es vocal)`)
//   } else {
//     console.log(`Indice ${i}, letra: ${letra}`)
//   }
// }
// console.log(`Total de vocales: ${contador}`)

//for of
// let texto = 'Hola como estas'
// let vocales = ['a', 'e', 'i', 'o', 'u']
// let contador = 0

// for (const [i, vocal] of [...texto].entries()) {
//   let letra = vocal.toLowerCase()
//   if (vocales.includes(letra)) {
//     contador++
//     console.log(`I: ${i}, letra: ${letra} (Es vocal)`);
//   } else {
//     console.log(`I: ${i}, letra: ${letra} `);
//   }
// }
// console.log(`Total de vocales: ${contador}`)

//6. Dado un array de numeros, usa un bucel para multiplicar todos los numeros y mostrar el producto
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let producto = 1
// for (let i = 0; i < numeros.length; i++) {
//   producto *= numeros[i]
// }
// console.log(`El producto de todos los numeros es: ${producto}`)

//7. Escribe un bucle que imprima la tabla de multiplicar del 5
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tabla = 5
// for (let i = 0; i < numeros.length; i++) {
//   let operacion = numeros[i] * tabla
//   console.log(`La tabla del 5 es: num${numeros[i]}x ${tabla} = ${operacion}`);
// }

//8. Usa un bucle para invertir una cadena de texto
// Pistas:
// - Declara una variable para almacenar el texto invertido (por ejemplo, let invertido = '').
// - Recorre la cadena de texto desde el final hasta el principio usando un bucle for.
// - En cada iteración, añade el carácter actual a la variable invertido.
// - Al final, muestra el resultado con console.log.
// let invertido = ''
// let text = 'Hola como estas'
// for (let i = text.length - 1; i >= 0; i--) {
//   invertido += text[i]
// }
// console.log(invertido)

//9. Usa un bucle para generar los primeros 10 numeros de la secuencia de fibonacci
// Más pistas:
// - La secuencia de Fibonacci comienza con 0 y 1.
// - Cada número siguiente es la suma de los dos anteriores.
// - El array debe tener 10 elementos al final: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// - En el bucle, calcula el siguiente número como: fibonacci[i - 1] + fibonacci[i - 2]
// - Usa .push() para agregar el nuevo número al array.
// Pistas:
// - Declara un array para almacenar la secuencia, por ejemplo let fibonacci = [0, 1].
// - Usa un bucle for que empiece en 2 y termine en 9 (para tener 10 números en total).
// - En cada iteración, suma los dos últimos números del array y agrégalo al array con .push().
// - Al final, muestra el array con console.log(fibonacci).
// let fibonacci = [0, 1]
// for (let i = 2; i <= 9; i++) {
//   fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
// }
// console.log(fibonacci)

//10. Dado un array de numeros, usa un bucle para crear un nuevo arrray que contenga solo los numeros mayores a 10
// Más pistas:
// - Declara un array con números, por ejemplo: let numeros = [5, 12, 8, 20, 3, 15]
// - Declara un array vacío para los mayores a 10: let mayoresA10 = []
// - Usa un bucle for clásico o for...of para recorrer el array de números
// - En cada iteración, verifica si el número actual es mayor a 10 (if (numero > 10))
// - Si es mayor a 10, agrégalo al array mayoresA10 con .push(numero)
// - Al final, muestra el array mayoresA10 con console.log(mayoresA10)
// Pistas:
// - Declara un nuevo array vacío, por ejemplo let mayoresA10 = []
// - Recorre el array original con un bucle for o for...of
// - En cada iteración, verifica si el número es mayor a 10
// - Si lo es, agrégalo al nuevo array con .push()
// - Al final, muestra el nuevo array con console.log(mayoresA10)

let numeros = [5, 12, 8, 20, 3, 15]
let mayoresA10 = []
let contador = 0
for (const [i, numero] of [...numeros].entries()) {
  if (numero > 10) {
    contador++
    mayoresA10.push(numero)
    console.log(`los numeros mayores son: ${numero} y su indice:${i}`)
  } else {
    console.log(`los numeros menores son: ${numero} y su indice:${i}`)
  }
}
console.log(mayoresA10)
