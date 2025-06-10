//1.Concatena dos cadenas de texto.
let name = 'John'
let lastName = 'Cordoba'

let greeting = 'Hola, ' + name + lastName

console.log(greeting)

//2.Muestra la longitud de una cadena de texto
console.log(greeting.length)
//3.Muestra el primer y ultimo caracter de un string
console.log(greeting[0])
console.log(greeting[16])
//4.Convierte a mayusculas y minusculas un string
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
//5.Crea una cadena de texto en varias lineas
let message = `Hola, como estas?`
console.log(message)

let email = 'test@gmail.com'

console.log(`Hola, ${name}! tu email es ${email}`)
//6.Interpola el valor de una variable en un string
// Interpolar significa insertar el valor de una variable dentro de un string usando `${variable}` y backticks (`).
let age = 30;
console.log(`Hola, ${name}. Tienes ${age} años.`);
//7.Reemplaza todos los espacios en blanco de un string por guiones
console.log('7');
console.log(greeting.replace(/ /g, '-'));
//8.Comprueba si una cadena de texto contiene una palabra concreta
console.log('8')
console.log(greeting.includes('John'))
//9.Comprueba si dos strings son iguales
console.log('9');
console.log(name === lastName)
//10.Comprueba si dos strings tienen la misma longitud
console.log('10')
console.log(name.length === lastName.length);