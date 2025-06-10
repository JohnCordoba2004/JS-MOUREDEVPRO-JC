//if
let age = 40

if (age == 40) {
  console.log('La edad es', age);
}

// else
if (age == 40) {
  console.log('La edad es', age);
} else {
  console.log("La edad no es ", age);
}


// else if
if (age == 40) {
  console.log('La edad es', age);
} else if (age < 10) {
  console.log('Es menor de edad')
} else { console.log('La edad no es 40 ni es menor de edad') }


// operador terniario

const message = age == 37 ? 'La edad es 37' : 'La edad no es 37'
console.log(message)


//Switch

let day = 0
let dayName;

switch (day) {
  case 0:
    dayName = 'Lunes'
    break;
  case 1:
    dayName = 'Martes'
    break
  case 2:
    dayName = 'Miercoles'
    break
  case 3:
    dayName = 'Jueves'
    break
  case 4:
    dayName = 'Viernes'
    break
  case 5:
    dayName = 'Sabado'
    break
  case 6:
    dayName = 'Domingo'
  default:
    dayName = 'No existe ese dia'
    break;
}

console.log(dayName)