export function greet() {
    return "Hola, Mundo desde una carpeta!";
}

export const PI = 3.14;

export class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }

    describe() {
        return `Este vehículo es un ${this.type} con ${this.wheels} ruedas.`;
    }
}