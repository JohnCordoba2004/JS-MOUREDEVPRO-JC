// Programacion asincrona

// Códigooo sincrono

console.log("Inicio");

for (let i = 0; i < 1000000; i++) {}

console.log("FIn");

// Event Loop(Bucle de eventos)

// Componentes del Event Loop
// - Call Stack (Pila de ejecución)
// Web APIs(APIs del navegador) o Node.js: setTimeOut()...
// Task Queue(Cola de tareas) y MicrotaskQueue

// Flujo del event loop
// Call stack
// Operaciones asincronas -> Web APIs o Node js
// Operaciones termina -> La coloca en task queue o microtask queue
// Si call stack vacio -> Mueve tareas del microtask queue o task queue al call stack
// El proceso se repite.


// Código asíncrono
// - Callbacks
console.log("Inicio");

setTimeout(() => {
  console.log("Esto se ejecuta después de dos segundos");
}, 2000)

console.log("Fin");

//Problema: callback hell

function step1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback()
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Paso 2 completado");
    callback()
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Paso 3 completado");
    callback()
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("Todos los pasos completados");
    })
  })
})


// Promise / promesas

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = false;
    if (ok) {
      resolve("Operación exitosa")
    } else {
      reject("Se ha producido un error")
    }
  }, 3000);
})

promise
  .then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  })

console.log("Fin del programa");

// Encadenamiento de promesas

function step1Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 1 con promesa completado");
      resolve()
    }, 1000);
  })
}

function step2Promise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Paso 2 con promesa completado");
      resolve()
    }, 1000);
  })
}

function step3Promise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Paso 3 con promesa completado");
      resolve()
    }, 1000);
  })
}

step1Promise()
  .then(step2Promise)
  .then(step3Promise)
  .then(() => {
    console.log("Todos los pasos con promesa completados");
  })

// - Async/Await

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {
  console.log("Inicio del proceso");
  await wait(5000)
  console.log("proceso despues de 5 segundos");
  await wait(1000)
  console.log("proceso despues de 1 segundos");
  await wait(2000)
  console.log("proceso despues de 2 segundos");
  console.log("FIn del proceso");
}

process()