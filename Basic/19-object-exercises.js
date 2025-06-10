//1. Crea un objeto con 3 propiedades
const animales = {
  name: 'Conejo',
  alias: 'Snoopy',
  age: 2
}
//2. Accede y muestra su valor
console.log('animales: ', animales);
//3. Agrega una nueva propiedad
animales.age = 5
//4. Elimina una de las 3 primeras
delete animales.alias
console.log(animales)
//5. Agrega una funcion e invocala
const animales2 = {
  name: 'Conejo',
  alias: 'Snoopy',
  age: 2,
  eat: function () {
    console.log("Snoopy ya comio 🐕:")
  }
}
console.log(animales2.eat)
//6. Itera las propiedades del objeto
for (const key in animales2) {
  console.log(key + ': ', animales2[key])
}
//7. Crea un objeto anidado
const persona = {
  name: 'John',
  alias: 'Doe',
  age: 21,
  eat: function () {
    console.log("John ya comio 🧑:")
  },
  job: {
    name: 'Developer',
    salary: 1500,
    work: function () {
      console.log(`${this.name} gana un salario de: ${this.salary} euros`);
    }
  }
}
console.log('persona: ', persona.job.name);
//8. Accede y muestra el valor de las propiedades anidadas
console.log(`name: ${persona.job.name}, salary: ${persona.job.salary}`)
//9. Comprueba si los dos objetos creados son iguales
console.log(animales2 == persona);
//10. Comprueba si dos propiedades diferentes son iguales
console.log(animales2.name === persona.name); // compara el nombre de animales2 y persona
