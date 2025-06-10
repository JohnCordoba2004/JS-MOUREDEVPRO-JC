//Map coleccion de elementos

//Declaracion

let myMap = new Map()
console.log(myMap)

//Inicializacion

myMap = new Map(
  [
    ['name', 'John'],
    ['email', 'test@gmail.com'],
    ['age', 21]
  ]
)

console.log(myMap)

//Metodos y propiedades

//set actualizar o agregarlo


myMap.set('alias', 'uchiha04')
myMap.set('name', 'John')
console.log(myMap)


//get Recuperar valores
console.log(myMap.get('name'))


//has para comprobar si existe la llave o no devuelve true o false
console.log(myMap.has('name'))
console.log(myMap.has('age'))


//delete
myMap.delete('email')
console.log(myMap)

//keys values y entries
console.log('Map.keys: ', myMap.keys());
console.log('Map.values: ', myMap.values());
console.log('myMap.entries: ', myMap.entries());

//size
console.log('myMap.size: ', myMap.size);

//clear
myMap.clear()
console.log(myMap)

