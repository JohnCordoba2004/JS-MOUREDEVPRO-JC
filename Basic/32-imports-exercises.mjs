// Importación de modulos
import {
    sum,
    EMAIL,
    Persona
} from "./31-modules-exercises.mjs";

import defaultImport from "./31-modules-exercises.mjs";

// Luego, en el archivo principal, importa estos elementos:
import {
    greet,
    PI,
    Vehicle
} from './utils/export.js';

// Funcion
console.log(sum(10, 20));
// Constante
console.log(EMAIL);
// Clase
let persona = new Persona("John", 21)
console.log(persona);
console.log(persona.walk);
console.log(persona.eat);

// Exportación de modulos por defecto
console.log(defaultImport.greet());
console.log(defaultImport.PI);
console.log(defaultImport.Animal);

// Exportación de modulos
console.log(greet());
console.log(PI);
console.log(Vehicle);