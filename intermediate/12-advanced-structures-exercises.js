// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
function powerNumbers(exponent, ...numbers) {
    // Elevar cada número al exponente
    const powers = numbers.map(elem => elem ** exponent);

    // Mostrar en consola los resultados
    for (let i = 0; i < numbers.length; i++) {
        console.log(`i: ${i + 1}, Number: ${numbers[i]}, Power: ${powers[i]}`);
    }

    // Guardar los potenciados
    const newArrWithPowered = powers;

    // Filtrar los que son pares
    const even = powers.filter(element => element % 2 === 0);

    // Guardarlos en nuevo array
    const newArrWithEvens = even;

    console.log(`Estos numeros potenciados son pares: ${even.join(',')}`);
    console.log(newArrWithPowered);
    console.log(newArrWithEvens);
}

powerNumbers(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
// flat
let nestedArray = ["A", ["B", ["C", ["D"]]]]
let flatArr = nestedArray.flat(1)
console.log(flatArr);
flatArr = nestedArray.flat(2)
console.log(flatArr);
flatArr = nestedArray.flat(3)
console.log(flatArr);

// FlatMap
let anime = ["Naruto", "Dragon Ball Z"]
let words = anime.flatMap(animes => animes.split(" "))
console.log(words);

// 4. Ordena un array de números de mayor a menor
function mayorAMenor(...number) {
    number.sort((a, b) => b - a)
    console.log(number);
}
mayorAMenor(50, 30, 24, 23, 111, 1, 2, 3, 10, 20)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let wordsArray = ["1", "2", "3", "4", "5"]
const wordsSet = [...new Set(wordsArray)]
console.log(wordsArray);

// Union
let setA = new Set(["a", "b", "c"])
let setB = new Set(["b", "c", "d", "e"])
const union = new Set([...setA, ...setB])
console.log(union);

// Interseccion
const interseccion = new Set([...setA].filter(elem => setB.has(elem)))
console.log(interseccion);

// Diferencia
const diferencia = new Set([...setA].filter(elem => !setB.has(elem)))
console.log(diferencia);

// 6. Itera los resultados del ejercicio anterior
setA.forEach(elem => {
    console.log(elem);
})

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const myMap = new Map([
    ['user1', {
        email: 'user1@email.com',
        name: 'Juan',
        age: 30
    }],
    ['user2', {
        email: 'user2@email.com',
        name: 'Ana',
        age: 25
    }]
]);
// 8. Dado el mapa anterior, crea un array con los nombres
const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsOfAdults = [];
if (myMap.get("age") >= 18) {
    emailsOfAdults.push(myMap.get("email"));
}
const emailsSet = new Set(emailsOfAdults);
console.log(emailsSet);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
/* Primero conviertes el Map original a un objeto usando Object.fromEntries.
Luego, conviertes ese objeto a un nuevo Map, usando el email como clave.
Finalmente, recorres el nuevo Map e imprimes cada email y sus datos. */
const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap);
const mapFromObject = new Map(Object.values(objectFromMap).map(user => [user.email, user]))
mapFromObject.forEach((value, key) => console.log(`${key} : ${value}`))