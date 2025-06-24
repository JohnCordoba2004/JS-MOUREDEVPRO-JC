// 1. Agregega una función al prototipo de un objeto
let perros = {
    name: "snoopy",
    age: 5,

    walk() {
        console.log("El perro camina");
    }
}

console.log(perros.__proto__);
console.log(Object.getPrototypeOf(perros));

perros.sayAge = function () {
    console.log(`${this.name} tiene ${this.age} años`);
}

console.log(perros);
perros.sayAge()
// 2. Crea un objeto que herede de otro
let perro = Object.create(perros)
perro.raza = "Bernes de la montaña";

perro.name = "Kento"
console.log(perro.name);
console.log(perro.raza);
perro.walk()
perro.sayAge()

// 3. Define un método de instancia en un objeto
function Animal(name, age) {
    this.name = name
    this.age = age
}

Animal.prototype.raza = function () {
    console.log(`${this.name} : ${this.age}`);
}
let new_animal = new Animal("Kento", 5)
new_animal.raza()
// 4. Haz uso de get y set en un objeto
const animes = {
    _name: "Naruto",
    _age: 2002,
    _genre: ["Adventure", "Accion"],

    get Character() {
        return this._name;
    },
    set Character(name) {
        this._name = name;
    },
    get Genres() {
        return this._genre;
    },
    set Genres(genre) {
        this._genre = genre
    }
}


console.log(animes._name)
animes._name = "Sasuke"
console.log(animes._name);

console.log(animes._genre);
animes._genre = ["Drama", "Super"]
console.log(animes._genre);

// 5. Utiliza la operación assign en un objeto
const destino = {
    a: 1
};

const fuente = {
    b: 2,
    c: 3
};

Object.assign(destino, fuente)

console.log(destino);

// 6. Crea una clase abstracta
class Operacion {
    constructor() {
        if (new.target === Operacion) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
    }

    suma() {
        throw new Error("El metodo suma debe ser implementado por la subclase");
    }
}

// Subclase
class Suma extends Operacion {
    constructor(numero) {
        super()
        this.numero = numero;
    }

    suma() {
        return this.numero + this.numero;
    }
}

const sumas = new Suma(5);
console.log(sumas.suma());

// 7. Utiliza polimorfismo en dos clases diferentes
class Bird {
    fly() {
        return "Flying high"
    }
}

class Sparrow extends Bird {
    //Comportamiento compatible con la clase base
    fly() {
        return "Sparrow flying at medium altitude"
    }
}

// Uso polimórfico
function letBirdFly(bird) {
    return bird.fly();
}

const genericBird = new Bird();
const sparrow = new Sparrow()

console.log(letBirdFly(genericBird));
console.log(letBirdFly(sparrow));

// 8. Implementa un Mixin
let sayHiMixin = {
    sayHi() {
        console.log(`Hola ${this.name}`)
    },
    sayBye() {
        console.log(`Adiós ${this.name}`)
    }
};

//Uso
class User {
    constructor(name) {
        this.name = name;
    }
}

// Copia los métodos
Object.assign(User.prototype, sayHiMixin);

// Ahora el User puede decir hola
new User("tío").sayHi();

// 9. Crea un Singleton
class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;

        if (typeof Office.instance === "object") {
            return Office.instance;
        }

        Office.instance = this;
        return this;
    }
}

const office1 = new Office("Principal", 30);
console.log(office1);
const office2 = new Office("Diagonal", 50)
console.log(office2);

export default office1;
// 10. Desarrolla un Proxy
/* 
target – es el objeto a envolver, puede ser cualquier cosa, incluso funciones.
handler – configuración de proxy: un objeto que “atrapa”, métodos que interceptan operaciones. Ejemplos, la trampa get para leer una propiedad de target, la trampa set para escribir una propiedad en target, entre otras. 
*/
const user = {
    name: "John",
    age: 25,
};

const handler = {
    set(target, prop, value) {
        if (prop === "age" && (typeof value !== "number" || value < 0)) {
            throw new Error("La edad debe ser un número positivo.");
        }
        target[prop] = value;
        return true; // Indica éxito
    },
};

const proxyUser = new Proxy(user, handler);

proxyUser.age = 30; // Funciona bien 
console.log(proxyUser.age); // 30

proxyUser.age = -5; // Lanza un error: La edad debe ser un número positivo.