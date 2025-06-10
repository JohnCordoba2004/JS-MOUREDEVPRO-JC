//Funciones

//simple
function myFunction() {
  console.log('Hola. funcion!');
}

for (let i = 0; i < 5; i++) {
  myFunction()
}

//Con parametros
function myFunctionWithParams(name) {
  console.log(`Hola ${name}`)
}
myFunctionWithParams('John')

//funciones anonimas
const myFunc2 = function (name) {
  console.log(`Hola ${name}`)
}

myFunc2('John Cordoba')


//arrow func
const myFunc3 = (name) => {
  console.log(`Hola ${name}`)
}
const myFunc4 = (name) => console.log(`Hola ${name}`)

myFunc3('Mauro')
myFunc4('Juan')


//Parametros
function suma(a, b) {
  console.log(a + b)
}

suma(15, 4)
suma(5)
suma()

function defaultSuma(a = 0, b = 0) {
  console.log(a + b)
}

//por defecto
defaultSuma()
defaultSuma(4)
defaultSuma(4, 10)
defaultSuma(b = 5)

//retorno de valores
function mul(a = 0, b = 0) {
  return a * b
}

console.log('mul(4, 5): ', mul(4, 5));


//anidadas

function extern() {
  console.log('Funcion Externa');
  function intern() {
    console.log('Funcion Interna')
  }
  intern()
}

extern()
// intern() Fuera del scope

//Funciones de orden superior

function applyFunc(func, param) {
  func(param)
}
applyFunc(myFunc4, 'Funcion de orden superior')


//for each
myArr = [1, 2, 3, 4, 5]

mySet = new Set(['John', 'Cordoba', 'Negro', 'Mango', 57])

myMap = new Map([
  ['name', 'John'],
  ['email', 'test@gmail.com'],
  ['age', 21]
])

myArr.forEach((value) => console.log(value));
mySet.forEach((value) => console.log(value));
myMap.forEach((value) => console.log(value));