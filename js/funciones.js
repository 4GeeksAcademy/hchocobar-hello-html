/* Funciones de declaración vs. Funciones de expresiones */
/* function myFunction(f, a) {
  let result = [];  // Crea un nuevo arreglo
  let i;  // Declara una variable
  for (i = 0; i != a.length; i++){
    result[i] = f(a[i])  // en el subindice i, guarda el resultado de la función ejecutada.
  };
  return result;
}


const cube = function (x) {
  return x * x * x;
};

const square = function (x) {
  return x * x;
};


let numbers = [0, 1, 2, 3, 4, 5];
let mySquares = myFunction(square, numbers);
let myCubes = myFunction(cube, numbers);

console.log(mySquares);
console.log(myCubes);

 */
/* Funciones flechas - creadas a partir la version ES6 */
// Elimina el contexto propio: significa que no tiene "this" ni "super" propio.
// Son adecuadas para ser utilizadas como métodos.

/* 
var obj = {
  // no crea un nuevo ámbito
  i: 10,
  b: () => console.log(this.i, this),
  c: function () { console.log(this.i, this);},
};

obj.b(); // imprime indefinido, Window {...} (o el objeto global)
obj.c(); // imprime 10, Object {...}
 */


// Una función flecha vacía devuelve undefinided
let empty = () => {};

(() => "foobar")();
// Devuelve "foobar"
// (esta es una expresión de función invocada inmediatamente)

var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);


// Fácil filtrado de arreglos, mapeo, ...
var arr = [5, 6, 13, 0, 1, 18, 23];


var even = arr.filter((v) => v % 2 == 0);  // [6, 0, 18]
var double = arr.map((v) => v * 2);  // [10, 12, 26, 0, 2, 36, 46]


