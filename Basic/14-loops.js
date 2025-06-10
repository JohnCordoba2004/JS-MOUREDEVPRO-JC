//loops o bucles

//for

/* for (let i = 0; i < 10; i++) {
  // console.log('Hola', i + 1)
  console.log(`Hola ${i + 1}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Numeros: ${i + 1}`)
} */

//While
/* let i = 0
while (i < 5) {
  console.log(`Hola ${i}`)
  i++
} */


//do while
/* let i = 0
do {
  console.log(`hola ${i}`)
  i++
} while (i < 5); */

//for of recorrer valores que sean iterables
const cosas = [
  {
    name: 'John',
    age: 21,
    email: 'test@gmail.com'
  }
]

let myString = '!Hola, Javascript!'

for (const datosPersonales of cosas) {
  console.log(datosPersonales)
}

for (const values of myString) {
  console.log('values: ', values);
}

//Buenas practicas
for (let index = 0; index < 10; index++) {

  if (index == 5) {
    continue
  } else if (index == 6) {
    break
  }
  console.log(`${index}`)
}