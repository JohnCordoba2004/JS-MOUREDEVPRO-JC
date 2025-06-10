//array
let myArray = []
let myArray2 = new Array()

console.log(myArray);
console.log(myArray2);


// Inicializacion
myArray = [3]
myArray2 = new Array(3)

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray);
console.log(myArray2);

myArray = ['Brais', 'Moure', 'mouredev', 37, true]
myArray2 = new Array('Brais', 'Moure', 'mouredev', 37, true)

console.log(myArray);
console.log(myArray2);
myArray2 = new Array(3)

myArray = []
myArray2[2] = 'Brais'
// myArray2[0] = 'Moure'
myArray2[2] = 'mouredev'

console.log(myArray);

//Metodos Comunes

//Push
myArray = []

myArray.push('John', 'Marcos', 'Pablo', 37, true, { 0: 1, 1: 1 })

console.log(myArray);

//Pop
console.log(myArray.pop())//Elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)

//Shift and Unshift
console.log(myArray.shift())
console.log(myArray)

myArray.unshift('John', 'Marcos')


//length
console.log(myArray.length);

//clear
myArray = []
console.log(myArray)

//slice
myArray.push('John', 'Marcos', 'Pablo', 37)

let newArr = myArray.slice(1, 2)

console.log(myArray)
console.log(newArr)

// splice
myArray.splice(1, 3)
console.log(myArray);

myArray = ['John', 'Marcos', 'Pablo', 37]

myArray.splice(1, 2, 'Nuevo Elemento')
console.log(myArray);
