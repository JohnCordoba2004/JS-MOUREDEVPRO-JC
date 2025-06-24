// Estructuras avanzadas
// Arrays Avanzados
// -Metodos funcionales
// forEach
let arr = [1, 2, 3, 4, 5, 6]

arr.forEach((value) => {
    console.log(value);
});

// map
let doubled = arr.map(elem => elem * 2)
console.log(doubled);

// filter
let evens = arr.filter(elem => elem % 2 === 0)
console.log(evens);

// reduce
let sum = arr.reduce((previus, current) => previus + current, 0)
console.log(sum);


// -Manipulación

//  Flat
let nestedArray = [1, [2, [3, [4]]]];
let flatArr = nestedArray.flat(1)
console.log(flatArr);
flatArr = nestedArray.flat(2)
console.log(flatArr);
flatArr = nestedArray.flat(3)
console.log(flatArr);

// flatMap

let phrases = ["Hola mundo!", "Adiós mundo!"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words);


// Ordenación
let unsorted = ["z", "s", "a", "c", "b"]
let sorted = unsorted.sort()
console.log(sorted);

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted);

// reverse

sorted.reverse()
console.log(sorted);

// -Busquedad
console.log(sorted.includes(4));
console.log(sorted.includes(5));

// find
let firsEven = sorted.find(elem => elem % 2 === 0)
console.log(firsEven);

// findIndex
let firsEvenIndex = sorted.findIndex(elem => elem % 2 === 0)
console.log(firsEvenIndex);


// Sets avanzados
// Operaciones
// Eliminacion de duplicados

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numberSet = [...new Set(numbersArray)]
console.log(numbersArray);

// Unión
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union);

// Intersección
const interseccion = new Set([...setA].filter(elem => setB.has(elem)))
console.log(interseccion);

// Diferencia
const difference = new Set([...setA].filter(elem => !setB.has(elem)))
console.log(difference);

// Conversión
console.log([...setA]);

// iteración
// forEach
setA.forEach(element => {
    console.log(element);
});

// Maps avanzados

let myMap = new Map([

    ["name", "MouereDev"],
    ["age", 27]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

//- Conversión
// Mapa a array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap);

// Mapa a objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap);

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject);