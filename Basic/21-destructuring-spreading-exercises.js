//1. Usa destructuracion para extraer los dos primeros elementos de un array
let myArray = [1, 2, 3, 4]
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//2. Usa destructuracion en un array y asigna un valor predeterminado a una variable
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 10] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
//3. Usa destructuracion para extraer dos propiedades de un objeto
let person = {
  name: 'John',
  age: 21,
  email: 'test@gmail.com',
}

let {
  name,
  age,
  email,
} = person

console.log(name, age, email);

//4. Usa destructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes
let {
  name2,
  age2,
  email2,
  alias = 'gordito'
} = person

console.log(name2); //No existe
console.log(age2); //No existe
console.log(email2); //No existe
console.log(alias);

//5. Usa destructuracion para extraer dos propiedades de un objeto anidado
let person3 = {
  name: 'John',
  age: 21,
  alias: 'Gordito',
  walk: function () {
    console.log('La persona camina');
  },
  job: {
    name: 'Programador',
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.exp} años de experiencia trabaja`);
    }
  }
}

let {
  name: name4,
  job: {
    name: jobName
  }
} = person3
console.log(name4, jobName);
//6. Usa propagacion para combinar dos arrays en uno nuevo
let myArray2 = [...myArray, 5, 6]
let myArray3 = [myArray, myArray2]
console.log(myArray3);
//7. Usa propagacion para crear una copia de un array
let myArray4 = [...myArray]
console.log(myArray4);
//8. Usa propagacion para combinar dos objetos en uno nuevo
let person4 = {
  ...person,
  email: "johncordoba@outlook.com"
}
console.log(person4);
//9. Usa propagacion para crear una copia de un objeto
let person5 = {
  ...person
}
console.log(person5);
//10. Combina desestructuracion y propagacion
//desestructuración
let letras = ['a', 'b', 'c', 'd']
console.log(letras);

let [myWord1, myWord2, myWord3, myWord4, myWord5 = 'e'] = letras
console.log(myWord1);
console.log(myWord2);
console.log(myWord3);
console.log(myWord4);
console.log(myWord5);

//Propagación
let myArr2 = [...letras, 'e', 'f']
console.log(myArr2);