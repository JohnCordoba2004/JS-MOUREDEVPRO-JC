// 1. Exporta una función
export function sum(a, b) {
    return a + b
}
// 2. Exporta una constante
export const EMAIL = {
    name: "johndoe@gmail.com"
}
// 3. Exporta una clase
export class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    walk() {
        ("La persona camina");
    }

    eat() {
        ("La persona come");
    }
}
// 4. Importa una función
// Listo
// 5. Importa una constante
// Listo
// 6. Importa una clase
// listo
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

function greet() {
    return "Hello, World!";
}

const PI = 3.14159;

class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }

    makeSound() {
        return `${this.type} makes ${this.sound}`;
    }
}

export default {
    greet,
    PI,
    Animal
};


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// Listo

// 9. Exporta una función, una constante y una clase desde una carpeta
// Listo

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
// Listo