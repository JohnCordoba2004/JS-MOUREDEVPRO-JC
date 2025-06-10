//if/else/else if/ternaria
//1.Imprime por consola tu nombre si una variable toma su valor
/* let name = 'John'
if (name === 'John') {
  console.log(name)
} */
//2. imprime por consola un mensaje si el user y pass coinciden con unos estableciodos

/* let user, pass

if (user === 'TestManolito' && pass === 123456) {
  console.log(`El user ${user} y el password ${pass} estan correctos`);
} */
//3. Verifica si un numero es positivo, negativo, o cero e imprime un mensaje
/* let num = 0;
if (num > 0) {
  console.log('Es positivo');
} else if (num < 0) {
  console.log('Es negativo');
} else {
  console.log('Es cero')
} */
//4. Verifica si una persona puede votar o no >=18 e indica cuantos anos le faltan
/* let edad = 13

if (edad >= 18) {
  console.log('Eres mayor, puedes seguir')
} else {
  console.log(`Eres menor, vuelve en ${18 - edad} anos`)
}
//5. Usa el operador ternario para asignar el valor 'adulto' o 'menor' a una variable dependiendo de la edad
let tipo = edad >= 18 ? 'Eres Adulto' : 'Eres Menor';
console.log(tipo) */
// 6. Muestra en que estacion del ano nos encontramos dependiendo del valor de una variable 'mes'
/* let mes = 6;

if (mes >= 3 && mes <= 5) {
  console.log('Primavera');
} else if (mes >= 6 && mes <= 8) {
  console.log('Verano');
} else if (mes >= 9 && mes <= 11) {
  console.log('Otoño');
} else if (mes === 12 || mes === 1 || mes === 2) {
  console.log('Invierno');
} else {
  console.log('Mes no válido');
} */

//7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior
//Por meses
/* let mes2 = 10
if (mes2 === 1 || mes2 === 3 || mes2 === 5 || mes2 === 7 || mes2 === 8 || mes2 === 10 || mes2 === 12) {
  console.log('Este mes tiene 31 días');
} else if (mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11) {
  console.log('Este mes tiene 30 días');
} else if (mes2 === 2) {
  console.log('Este mes tiene 28 o 29 días');
} else {
  console.log('Mes no válido');
} */
//Por dias
// let dias = 31
/* if (dias === 31) {
  console.log('enero, marzo, mayo, julio, agosto, octubre y diciembre')
} else if (dias === 30) {
  console.log('abril, junio, septiembre y noviembre');
} else if (dias === 29 && dias === 28) {
  console.log('Febrero');
} else { console.log('No existe'); } */
//Switch
//8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let i = 'Ingles'
let idioma
switch (i) {
  case 'Espanol':
    idioma = 'Espanol: Hola, como estas'
    break;
  case 'Ingles':
    idioma = 'Ingles: Hi, how are you'
    break;
  case 'Italiano':
    idioma = 'Italiano: Ciao, come stai'
    break;
  default:
    console.log('No hay mas');
    break;
}
console.log(idioma)
//9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSwitch = 6;
let estacionSwitch;

switch (mesSwitch) {
  case 3:
  case 4:
  case 5:
    estacionSwitch = 'Primavera';
    break;
  case 6:
  case 7:
  case 8:
    estacionSwitch = 'Verano';
    break;
  case 9:
  case 10:
  case 11:
    estacionSwitch = 'Otoño';
    break;
  case 12:
  case 1:
  case 2:
    estacionSwitch = 'Invierno';
    break;
  default:
    estacionSwitch = 'Mes no válido';
    break;
}
console.log(estacionSwitch);

//10. Usa un switch para hacer de nuevo el ejercicio 7

let mes = 1
let dias;
switch (mes) {
  case 1:
  case 3:
  case 2:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 'Estos meses tienen 31 dias'
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 'Estos meses tienen 30 dias'
    break;
  case 2:
    dias = 'Este mes tiene 28 0 29 dias'
    break;
  default:
    break;
}

console.log(dias)