//set


//declaracion

let mySet = new Set()

//Inicializacion

mySet = new Set(['John', 'Marcos', 'Pablo', 37, true, 'test@gmail.com'])

console.log(mySet)


//metodos comunes

//add /delete

mySet.add('https://moure.dev')
console.log(mySet)

//delete
mySet.delete('https://moure.dev')
console.log(mySet)

console.log(mySet.delete('John'))
console.log(mySet.delete(4))

console.log(mySet)

//has
console.log(mySet.has('John'))
console.log(mySet.has('Juan'));


//size

console.log(mySet.size)


//set a array

let myArr = Array.from(mySet)
console.log(myArr)

//ARRAY A SET
mySet = new Set(myArr)
console.log(mySet);

//No admite duplicados
mySet.add('test@gmail.com')
mySet.add('test@gmail.com')
mySet.add('test@gmail.com')
console.log(mySet)