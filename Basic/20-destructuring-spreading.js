let myArray = [1, 2, 3, 4]

let person = {
  name: 'Brais',
  age: 37,
  alias: 'Mouredev'
}
// myArray.push(5)
// console.log(myArray)

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//desestructuracion
//sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//Ignorar elementos array

let [myValue10, , , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

//sintaxis objects

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

//sintaxis objetos con valores predeterminados
let { name2, age2, alias2, email = 'test@gmail.com' } = person
console.log(name2) //no existe
console.log(age2) //no existe
console.log(alias2) //no existe
console.log(email)

//sintaxis objetos con nuevos nombres de variables
let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

//objects anidados
let person3 = {
  name: 'John',
  age: 21,
  alias: 'Bb tutti Frutti',
  walk: function () {
    console.log('la persona camina')
  },
  job: {
    name: 'Programador',
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.exp} anos de experiencia trabaja`)
    }
  }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4, jobName)


//Propagacion(...)
//sintaxis arr
let myArr2 = [...myArray, 5, 6]

//copias de arrs
let myArr3 = [...myArray]//copia
console.log(myArr2)

//combinacion de arrs

let myArr4 = [myArray, ...myArr2, ...myArr3]
console.log(myArr4)

//sintaxis object
let person4 = { ...person, email: 'john@gmail.com' }

console.log(person4)

//copia object
let person5 = { ...person }
console.log(person5)