//Operadores

//Operadores Aritmeticos

let a = 5
let b = 10


console.log(a + b)//suma
console.log(a - b)//resta
console.log(a * b)//multiplicacion
console.log(a / b)//division

console.log(a % b)//modulo = resto de la division
console.log(a ** b)//exponente 

//incremento
console.log(a++)

//decremento
console.log(a--)

//Operadores de asignacion
console.log('asignacion')
let miVariable = 2
// miVariable += 2 suma
// miVariable -= 2 resta
// miVariable *= 2 multi
// miVariable /= 2 divi
console.log(miVariable)

//operadores de comparacion
console.log('comparacion');
console.log(a > b, 'mayor que')
console.log(a < b, 'menor que')
console.log(a >= b, 'mayor o igual que')
console.log(a <= b, 'menor o igual que')
console.log(a == b, 'igualdad por valor')
console.log(a == 6)
console.log(a == '6')
console.log(a == a)
console.log(a === a)
console.log(a === 6)
console.log(a !== 6)
console.log(a !== '6')
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == ' ')
console.log(0 == '')
console.log(0 == 'Hola')
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


//truthy values(valores verdaderos)

//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//Todos los boolean

//falsy values (valores falsos)

//0
//on
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacias



//Operadores Logicos

//and(&&)
console.log(5 > 10 && 15 > 20);
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

//or
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 && 15 > 20 || 30 > 40);

console.log(5 > 10 && 15 > 20 || 30 < 40);

//not(!)
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));


//operadores terniarios
const isRaining = false
isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')