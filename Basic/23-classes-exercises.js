// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la  función
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    walk() { //Metodo
        console.log("La persona camina");
    }

    static pool() {
        return ("La persona nada");
    }
}

let person = new Person("John", 21)
console.log(person);

const person2 = new Person("John", 21)
person2.walk(); //Imprime el método

// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
let person3 = new Person()
console.log(Person.pool());
// 6. Crea una clase que haga uso de herencia
class Animal {
    constructor(name, age, color) {
        this.name = name
        this.age = age
        this.color = color
    }

    walk() {
        console.log("El animal camina");
    }

    sound() {
        console.log("Sonido generico de animal");
    }
}

class Dog extends Animal {
    constructor(name, age, color, size) {
        super(name, age, color)
        this.size = size
    }

    bark() {
        console.log("El perro ladra");
    }
}


let myAnimal = new Animal("Paco", 5, "Negro")
console.log(myAnimal);
myAnimal.walk()
myAnimal.sound()

let myDog = new Dog("Kento", 2, "Veteado", 50)
console.log(myDog);
myDog.bark()
myDog.walk()
myDog.sound()
// 7. Crea una clase que haga uso de getters y setters
class Characters {
    #power
    constructor(name, year, power) {
        this.name = name
        this.year = year
        this.#power = power
    }

    get powers() {
        return this.#power
    }

    set powers(power) {
        this.#power = power
    }
}

class character extends Characters {
    constructor(name, year, power) {
        super(name, year, power)
    }

    chackra(tipo) {
        console.log(`Tiene chackra de tipo ${tipo}`);
    }
}

let naruto = new character("Naruto Uzumaki", 2008, "RasenShuriken")
console.log(naruto);
naruto.chackra('Aire')

let sasuke = new character('Sasuke Uchiha', 2008, 'Katōn: Hōsenka no Jutsu')
console.log(sasuke);
sasuke.chackra("Fuego")
// 8. Modifica la clase con getters y setters para que use propiedades privadas
naruto.powers = " Kage Bunshin no Jutsu"
sasuke.powers = " Katōn: Ryūka no Jutsu"
// 9. Utiliza los get y set y muestra sus valores
console.log(naruto);
console.log(sasuke);
// 10. Sobreescribe un método de una clase que utilice herencia
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color)
    }

    // Sobrescribimos el método sound()
    sound() {
        console.log("El gato maúlla");
    }
}

let myCat = new Cat("Michi", 3, "Blanco")
console.log(myCat);
myCat.sound(); // Imprime: El gato maúlla