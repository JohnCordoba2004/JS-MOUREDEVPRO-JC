//Objects

//Sintaxis
let person = {
  name: 'John',
  age: 21,
  alias: 'Bb tutti Frutti'
}

//Acceso a propiedades

//notacion  por punto
// console.log('person.name: ', person.name);

//Notacion de corchetes
// console.log(person['name'])

//Modificacion de prop

person.name = 'Julian alvarez'
// console.log(person.name)

console.log(typeof person.age);
person.age = '23'
// console.log(person.age);
// console.log(typeof person.age)

//Eliminacion de props
delete person.age
// console.log(person.age)

//nueva prop
person.email = 'test@gmail.com'
person['age'] = 25
// console.log(person);

//metodos (funciones)

let person2 = {
  name: 'John',
  age: 21,
  alias: 'Bb tutti Frutti',
  walk: function () {
    console.log('la persona camina')
  }
}
// person2.walk();

//anidacion de objects
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

console.log(person3)

// console.log(person3.name)
console.log(person3.job)
console.log(person3.job)


//igualdad de object

let person4 = {
  name: 'John',
  alias: 'Bb tutti Frutti',
  email: 'test@gmail.com',
  age: 21,
}

// console.log(person == person4)
// console.log(person === person4)

// console.log(person.name == person4.name)

//iteracion
for (const key in person4) {
  console.log(key + ': ' + person4[key])
}

//funciones como objects

function Person(name, age) { //Deberia ser una clase
  this.name = name
  this.age = age
}

let person5 = new Person('Brais', 37)
console.log(person5)
console.log(person5.name)
console.log(typeof person5)
console.log(typeof person4)


