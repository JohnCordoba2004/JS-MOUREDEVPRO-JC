// Objetos avanzados

// Prototipos y herencia

// Prototipos

let person = {
    name: "John", //prop
    age: 21,
    greet() {
        console.log("Hola soy", this.name);
    }
}
console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`);
}

console.log(person);
person.sayAge()


// Herencia
let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "MoureDev"
console.log(programmer.name);
console.log(programmer.language);

console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.language);
programmer.greet();
programmer.sayAge();


// Metodos estaticos y de instancia
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola,soy ${this.name}`);
}
let new_person = new Person("John", 21)
new_person.greet()
// console.log(new_person);

// Metodos avanzados

let person_core = {
    name: "John"
}
let person_details = {
    age: 21,
    alias: "TuttiFrutti"
}

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson);

// Keys, values, entries

console.log(Object.keys(fullPerson));
console.log(Object.values(fullPerson));
console.log(Object.entries(fullPerson));

