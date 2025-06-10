// 1. Captura una excepción utilizando try-catch
/* let myObj;
try {
    console.log(myObj.email);
    console.log("Finaliza la ejecucion sin errores");
} catch (error) {
    console.log("Esto es un error: ", error.message);
} */
// 2. Captura una excepción utilizando try-catch y finally
/* try {
    console.log(myObj.email);
    console.log("Finaliza la ejecucion sin errores");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Este codigo se ejecuta siempre");
} */
// 3. Lanza una excepción genérica

// throw new Error("Esto es una excepción genérica");

// 4. Crea una excepción personalizada

class MiErrorPersonalizado extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "Mi error personalizado"
    }
}
// 5. Lanza una excepción personalizada
try {
    throw new MiErrorPersonalizado("Esto es un error personalizado lanzado desde el try");
} catch (error) {
    console.log(error.name + ": " + error.message);
}
// 6. Lanza varias excepciones según una lógica definida

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros");
    }

    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10));
    console.log(sumIntegers("5", 10));
} catch (error) {
    console.log("Se ha producido un error", error.message);
}

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}
// 7. Captura varias excepciones en un mismo try-catch
try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message);
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message);
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let arr = ["a", "e", "i", "o", "u", 1, 2, 3, 4, true, false, null, undefined,
    {
        name: "john",
        age: 21
    }
];

for (let i = 0; i < arr.length; i++) {
    try {
        let num = parseFloat(arr[i]);
        if (isNaN(num)) {
            throw new Error(`No se puede convertir el valor en la posición ${i} (${JSON.stringify(arr[i])}) a número`);
        }
        console.log(`Valor convertido en la posición ${i}:`, num);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// Definimos una clase de error personalizada que extiende de Error.
// Esta clase se usará para lanzar un error específico cuando una propiedad no se encuentre en un objeto.
class PropiedadNoEncontrada extends Error {
    constructor(propiedad) {
        // LLamamos al constructor de Error con un mensaje personalizado
        super(`La propiedad ${propiedad} no existe en el objeto`)
        this.name = 'Propiedad no encontrada' //Nombre del error personalizado
        this.propiedad = propiedad //Guarda la propiedad
    }
}

// Función que verifica si un objeto tiene una propiedad específica.
// Si no la tiene, lanza el error personalizado.
function verificarPropiedad(obj, propiedad) {
    if (!(propiedad in obj)) { // Si la propiedad no está en el objeto...
        throw new PropiedadNoEncontrada(propiedad); // ...lanza el error personalizado.
    }
    return obj[prop] //Si existe, devuelve el valor de la propiedad.
}

// Ejemplo de uso de la función y manejo de errores:

try {
    const persona = {
        name: "John",
        age: 21
    }; //Creamos un objeto de nombre persona
    console.log(verificarPropiedad(persona, "nommbre")); //Imprime "John" porque la propiedad existe
    console.log(verificarPropiedad(persona, "email")); //Lanza excepción porque "email" no existe
} catch (error) {
    // Si el error es de tipo PropiedadNoEncontradaError, muestra su nombre y mensaje.
    if (error instanceof PropiedadNoEncontrada) {
        console.log(error.name, ": " + error.message);
    } else {
        // Si es otro tipo de error, muestra solo el mensaje.
        console.log("Error:", error.mesagge);
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

// Función que intenta verificar si un objeto tiene una propiedad específica,
// reintentando hasta un máximo de 10 veces (o el valor que se indique).
function intentarVerificarPropiedadConReintentos(obj, propiedad, maxReintentos = 10) {
    let intentos = 0; // Contador de intentos
    while (intentos < maxReintentos) { // Mientras no se supere el máximo de reintentos
        try {
            // Intenta verificar la propiedad usando la función anterior
            return verificarPropiedad(obj, propiedad);
        } catch (error) {
            intentos++; // Incrementa el contador de intentos
            if (intentos >= maxReintentos) {
                // Si se llega al máximo de intentos, muestra mensaje y relanza el error
                console.log(`No se pudo encontrar la propiedad "${propiedad}" después de ${maxReintentos} intentos.`);
                throw error;
            }
            // Muestra el mensaje de error en cada intento fallido
            console.log(`Intento ${intentos}: ${error.message}`);
        }
    }
}

// Ejemplo de uso con un objeto personaNueva
const personaNueva = {
    nombre: "Ana",
    edad: 30
};

try {
    // Intenta verificar la propiedad "email" en personaNueva
    console.log(intentarVerificarPropiedadConReintentos(personaNueva, "email"));
} catch (error) {
    // Si el error es de tipo PropiedadNoEncontrada, muestra su nombre y mensaje
    if (error instanceof PropiedadNoEncontrada) {
        console.log(error.name, ": " + error.message);
    } else {
        // Si es otro tipo de error, muestra solo el mensaje
        console.log("Error:", error.message);
    }
}
