// NOTA: Las constantes pueden ser declaradas en mayúsculas o minúsculaas,
//       pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas

// lanza error, falta el inicializador en la declaracion de const
// const MY_FAV;

// Definimos MY_FAV como constante y le damos un valor de 7
// const MY_FAV = 7;

// Imprimira 7
// console.log('my favorite number is: ' + MY_FAV);
 

// Lanzara un error: Unkeught TypeError: Asignación a variable constante.
// MY_FAV = 20;

// Lanzara un error: SyntaxError: tratando de redeclarar una constante. El identificador 'MY_FAV' ya ha sido declarado
// const MY_FAV = 20;

// El nombre MY_FAV esta reservado para la constante anterior, también fallara y lanzara un SyntaxError por la redeclaración
// var MY_FAV = 20;

// El nombre MY_FAV esta reservado para la variable anterior, esto también lanzara un SyntaxError por la redeclaración
// let MY_FAV = 20;


/* Alcance de bloque */
/* 
// Definimos MY_FAV como constante y le damos un valor de 7
const MY_FAV = 7;   // MY_FAV que vive en el ambito global
console.log('my favorite number is: ' + MY_FAV, 'en el ambito global');  // Imprimira 7

// Como funciona el alcance de bloque?
if (MY_FAV === 7) {
  const MY_FAV = 20;   // MY_FAV que vive en el ambito if {}
  // Esto es correcto, y crea una variable MY_FAV de alcance/ambito de bloque
  // (funciona igual de bien con let para declarar un alcance de bloque/ambito de variable no-constante)

  // MY_FAV ahora es 20
  console.log('my favorite number is ' + MY_FAV, 'en el ambito del if{}');
}

// Fuera del bloque {} MY_FAV todavía es 7
console.log('my favorite number is ' + MY_FAV, 'en el ambito global');
 */


/* Objetos y Arrays */

/* 
// const tambien funciona en objetos
const MY_OBJECT = { 'name': 'Joe' };

// Intentando sobrescribir el objeto nos lanza un error
// MY_OBJECT = { 'name': 'Jimmy' };

// Sin embargo, los object keys no estan protegidas,
// por lo que la siguiente sentencia se ejecutara sin problema
MY_OBJECT.name = 'Jimmy';   // Use Object.freeze() para hacer un objeto inmutable
// Incluso podemos agregar nuevas claves
MY_OBJECT.lastname = 'Doe'; 
console.log(MY_OBJECT);

 */

// Lo mismo se aplica a los arrays
/* 
const MY_ARRAY = [];
// Sin embargo, asignar un nuevo array a la variable lanza error
// MY_ARRAY = ['B']
// es posible agregar elementos en el array
MY_ARRAY.push('A'); // ["A"]
MY_ARRAY.push("B");
MY_ARRAY.push(true, 'D');
MY_ARRAY.pop() 
console.log(MY_ARRAY)
 */


let myArray = [];
let myVariable = 2;
let myVar2 = 25
myArray.push(myVariable, myVar2);
console.log(myArray);
myVariable ++;
myVar2 = 'hola'
console.log(myArray);

const myObject = {'x': 1, 'y': 2}
console.log(myObject);
myObject.y +=  1;
console.log(myObject);
