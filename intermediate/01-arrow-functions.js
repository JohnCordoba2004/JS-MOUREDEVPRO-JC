// Arrow functions avanzadas

// Retorno implicito
const suma = (a, b) => a + b
console.log(suma(2, 3));

// this lexico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`);
    },

    arrowGreeting: () => {
        console.log(`Hola, ${name}`);
    }
}

handler.greeting()
handler.arrowGreeting()