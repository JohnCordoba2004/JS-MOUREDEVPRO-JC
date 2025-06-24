// 1. Crea una RegEx que valide correos electrónicos
/* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarEmail(email) {
    return emailRegex.test(email);
}
const correo = "ejemplo@dominio.com";
if (validarEmail(correo)) {
    console.log("✅ Correo válido");
} else {
    console.log("❌ Correo inválido");
} */

// 2. Crea una RegEx obtenga Hashtags de un Texto
/* const texto = "Estoy aprendiendo #JavaScript y #HTML_CSS en #100DaysOfCode";
const regexTexto = /#[a-zA-Z0-9_]+/g;
const hashtags = texto.match(regexTexto);
console.log(hashtags); // Debería mostrar un array con los hashtags encontrados
 */
// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)
const regexPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

function validarPass(pass) {
    return regexPass.test(pass)
}

const pass = "123ABC$$%##/%"
if (validarPass(pass)) {
    console.log("Pass Valida");
} else {
    console.log("Pass Invalida");
}
// NOTA: Aplícalas utilizando diferentes operaciones
/* 1. Contar cuántas veces aparece algo */
const texto = "#JS #HTML #JS";
const hashtags = texto.match(/#[a-zA-Z0-9_]+/g);
console.log(`Cantidad de hashtags: ${hashtags.length}`); // 3

/* 2. Filtrar contraseñas válidas de un array */
const passwords = ["abc123", "Segura123", "soloTexto", "12345678"];
const validas = passwords.filter(pass => regexPass.test(pass));
console.log(validas); // Solo las válidas según tu RegEx

/*3. Reemplazar partes del texto usando .replace()*/
const texto2 = "Sigue a @usuario y @dev!";
const resultado = texto2.replace(/@\w+/g, "[mención]");
console.log(resultado); // "Sigue a [mención] y [mención]!"

/* 4. Validar en un formulario simple */
function enviarFormulario(pass) {
    if (regexPass.test(pass)) {
        console.log("✅ Contraseña aceptada");
    } else {
        console.log("❌ Contraseña insegura");
    }
}

/* 5. Mostrar solo los hashtags únicos */
const todos = ["#HTML", "#CSS", "#HTML"];
const unicos = [...new Set(todos)];
console.log(unicos); // ["#HTML", "#CSS"]