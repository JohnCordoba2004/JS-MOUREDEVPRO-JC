//strings

let myName = 'John';
let greeting = 'Hola ' + myName + '!'
console.log(greeting)
console.log(typeof greeting)


//longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])


//metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('Brais'))
console.log(greeting.includes('Brais'))
console.log(greeting.slice(1, 5))//retornar un pedazo [indice, posicion hasta donde quiere llegar]
console.log(greeting.replace('John', 'Mouredev'))

//Templates literals
let message = `Hola, como estas?`
console.log(message)

let email = 'test@gmail.com'

console.log(`Hola, ${myName}! tu email es ${email}`)