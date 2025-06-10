//1. Crea un array que almacene cinco animales
let animales = ['Perro', 'Gato', 'Conejo', 'Pajaro', 'Raton']
//2. Anade dos mas. Uno al principio y otro al final
animales.unshift('Gorila')
animales.push('Canguro')
//3. Elimina el que se encuentra en tercera posicion
animales.splice(2, 1)
console.log(animales)
//4. Crea un set que almacene cinco libros
let mySet = new Set(
  [
    'Cien años de soledad',
    '1984',
    'El principito',
    'Don Quijote de la Mancha',
    'Orgullo y prejuicio'
  ]
)
console.log(mySet)
//5. Anade dos mas. Uno de ellos repetido
mySet.add('cien años de soledad')
mySet.add('La sombra del viento')
//6. Elimina uno concreto a tu eleccion
mySet.delete('1984')
//7. Crea un mapa que asocie el numero del mes a tu nombre
let myMap = new Map(
  [
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
  ]
)
console.log(myMap)
//8. Comprueba si el mes numero 5 existe en el map e imprime su valor
console.log('myMap.has(): ', myMap.has(5));
//9. Anade al map una clave con un array como que almacene los meses de verano
myMap.set('verano', [6, 7, 8]);
console.log('Meses de verano:', myMap.get('verano'));
//10. Crea un Array, transformalo a un Set y almacenalo en un Map
let myArray = [1, 2, 3, 4, 5]
let miSet = new Set(myArray)
let miMap = new Map([['miSet', miSet]])
console.log(miMap)