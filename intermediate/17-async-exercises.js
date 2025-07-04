// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

// function greet(name, callback) {
//     setTimeout(() => {
//         console.log(`Hola ${name}`);
//         callback()
//     }, 2000);
// }
// greet("John", () => {
//     console.log("Callback ejecutado");
// })

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

/* function task1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado");
        callback()
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado");
        callback()
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado");
        callback()
    }, 3000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Pasos completados");
        })
    })
}) */

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

/* function isEvenWithPromise(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero % 2 === 0) {
                resolve("Numero par")
            } else {
                reject("Numero impar")
            }
        }, 2000);
    })
}
isEvenWithPromise(5)
    .then(msg => console.log(msg)) //"Numero par"
    .catch(err => console.log(err)) //"Numero impar" */


// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

/* function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Primera tarea completada");
            resolve()
        }, 1000);
    })
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada");
            resolve()
        }, 2000);
    })
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada");
            resolve()
        }, 1500);
    })
}


firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => {
        console.log("Todo los pasos con promesa completados");
    }) */

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
/* function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function executeTasks() {
    console.log("Inicio del proceso");
    await wait(1000)
    console.log("Proceso despues de 1 segundos");
    await wait(2000)
    console.log("Proceso despues de 2 segundos");
    await wait(1500)
    console.log("Proceso despues de 1.5 segundos");
    console.log("Fin del proceso");
}
executeTasks() */

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

/* function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Llamado a una API");
            if (id < 5) {
                resolve({
                    id,
                    nombre: "Usuario " + id
                })
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    })
}

async function executeUser() {
    const id = 6;
    try {
        const user = await getUser(id);
        console.log(user);
    } catch (error) {
        console.error(error)
    }
}

executeUser() */

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

/* 
function firstPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Primera promesa");
            resolve("Completado")
        }, 1000);
    })
}

function secondPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda promesa");
            resolve()
        }, 3000);
    })
}

function thirdPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera promesa");
            resolve()
        }, 5000);
    })
}

Promise.all([firstPromise(), secondPromise(), thirdPromise()])
    .then(() => {
        console.log("Todas las promesas resueltas")
    }) */
// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

/* function waitSeconds(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos))
}

async function wait() {
    await waitSeconds(3000)
    console.log("Tiempo finalizado");
}
wait() */


// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.

//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

function checkBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const saldoInicial = 500;
            console.log(`Saldo disponible: ${saldoInicial}$`);
            resolve(saldoInicial);
        }, 1000);
    });
}

function withdrawMoney(saldo, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Retirando ${amount}$...`);
            if (saldo >= amount) {
                const saldoRestante = saldo - amount;
                console.log(`Operación exitosa, saldo restante: ${saldoRestante}$`);
                resolve(saldoRestante);
            } else {
                reject("Error: Fondos insuficientes");
            }
        }, 2000);
    });
}

async function atmSimulation() {
    try {
        let saldo = await checkBalance();
        saldo = await withdrawMoney(saldo, 300);
        saldo = await withdrawMoney(saldo, 300);
    } catch (error) {
        console.log(error);
    }
}

atmSimulation();