// Closures(Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`);
    }
}

const counter = createCounter()
counter()
counter()

const counter2 = createCounter()
counter()
counter()