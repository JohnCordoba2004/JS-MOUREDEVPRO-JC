// 1. Crea un codigo con un error logico y usa VS Code para encontrarlo

/* function pares(...numbers) {
    let contador = 0

    for (let i = 0; i < numbers.length; i++) {
        contador = numbers[i];

        if (contador % 2 === 0) {
            console.log(`Los numeros pares son: ${numbers[i]}`);
        } else {
            console.log(`Los numeros impares son: ${contador}`);
        }

        if (contador === 0) {
            throw new Error("No se puede por cero");
        }

        let sumaPares = numbers[i] + contador
        console.log(`indice: ${i+1} : ${numbers[i]} + ${contador} la suma de los numeros pares son = ${sumaPares} `);
    }
}
pares(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) */

// 2. Experimenta con breakpoints y observa como cambia el flujo para encontrarlo

// Puedes colocar breakpoints en las siguientes líneas para observar el flujo:
// - En la línea donde se asigna 'contador = numbers[i];'
// - Dentro de los bloques if/else para ver cuándo entra en cada uno
// - Antes del throw para ver cuándo ocurre el error
// - En la suma para ver los valores de 'sumaPares'

// Ejemplo de cómo podrías usar un breakpoint manual con 'debugger;':
function pares(...numbers) {
    let contador = 0

    for (let i = 0; i < numbers.length; i++) {
            contador = numbers[i];

        debugger; // Coloca un breakpoint aquí para inspeccionar variables

        if (contador % 2 === 0) {
            console.log(`Los numeros pares son: ${numbers[i]}`);
        } else {
            console.log(`Los numeros impares son: ${contador}`);
        }

        if (contador === 0) {
            throw new Error("No se puede por cero");
        }
        
        let sumaPares = numbers[i] + contador
        console.log(`indice: ${i+1} : ${numbers[i]} + ${contador} la suma de los numeros pares son = ${sumaPares} `);
    }
}
pares(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)