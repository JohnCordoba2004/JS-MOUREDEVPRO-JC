// Funciones avanzadas

// Ciudaddanos de primera clase

function greet(name) {
    console.log(`Hola, ${name}`);
}

greet("John")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "MoureDev")
const greet2 = returnGreeting()
greet2("Brais moures")