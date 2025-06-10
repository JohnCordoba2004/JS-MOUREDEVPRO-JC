// Clases
class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// sintaxis

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")
console.log(person);
console.log(person2);

console.log(typeof person);

//Sintaxis default 

class DefaultPerson {
    constructor(name = "Nombre por defecto", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Brais", 23)
console.log(person3);

//Acceso a las propiedades

console.log(person3.name);
console.log(person3.age);
console.log(person3.alias);
console.log(person3["alias"]);

person3.alias = "MoureDev"

console.log(person3.alias);

//Funciones en clases

class PersonWithMethod {
    constructor(name, alias, age) {
        this.name = name
        this.alias = alias
        this.age = age
    }

    walk() {
        console.log("La persona camina");
    }
}

let person4 = new PersonWithMethod("Brais", 34, "MoureDev")
person4.walk()

//propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}


let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN989843259")
console.log(person5); //No podemos acceder
//person5.bank = "ihgasjni9ofh9oweaf"
console.log(person5);

//Getters and Setters
class GetPerson {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

let persona6 = new GetPerson('Brais', 37, 'MoureDev', 'IBAN123456789')
console.log(persona6);
console.log(persona6.name);

persona6.bank = 'IBAN83468569382'
console.log(persona6);


//Herencia

class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Emite un sonido generico");
    }

}

class Dog extends Animal {
    sound() {
        /* super.sound() */
        console.log("Guuuau!");
    }
    run() {
        console.log("El perro corre");
    }
}

class Fish extends Animal {
    constructor(name, size) {
        super(name)
        this.size = size
    }
    swim() {
        console.log("El pez nada");
    }
}

let myDog = new Dog("Kento")
myDog.run()
myDog.sound()

let myFish = new Fish("Nemo", 10)
myFish.swim()
myFish.sound()


//Métodos Estáticos

class MathOperation {

    static sum(a, b) {
        return a + b
    }
}

let myClass = new MathOperation()
console.log(MathOperation.sum(5, 10));