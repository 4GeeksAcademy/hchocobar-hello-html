/* Diferencias entre var, let y const

1. ES6 - Antes de ES6 existía solo: var, a partir de ES6 existen también: let y const
2. Ámbito, Scope, Alcance: Se refiere a donde está disponible la variable para su uso (global, local, función, block)
3. Declaración, Se refiera a si podemos declarar la variable dentro de su mismo ámbito.
4. Modificable, Se refiera a si podemos modificar la variable dentro de su mismo ámbito.
5. Hoisting -> cuando se define la variable/constate, si sube hacia de nuestro código o no.
6. TDZ Temporal Dead Zone, Zona muerta temporal: problema de let, pero no de var.
*/


/* var */
var z = 'hola'

function x() {
  y = 1;
  var z = 2;
  console.log(z);
}

x();

// console.log(y); // Imprime "1"
console.log(z); // Lanza un error de tipo "ReferenceError": z no está definida afuera de x

 /* 
function varTest() {
  var x = 31;
  var x = 71;  // ¡misma variable!
  if (true) {
    console.log(x);  // 71
  }
  console.log(x);  // 71
}
 */
/* function letTest() {
  let x = 31;  // variable x que vive dentro de la función
  if (true) {
    let x = 71;  // variable diferente
    x += 10
    console.log(x); // 71
    if (true) {
      let x = 'hola'
      console.log(x);  // 'hola'
    }
  }
  console.log(x); // 31
} */
// llamamos a las funciones
// varTest();
// letTest();

for (let i = 0; i < 10; i++) {
  console.log(i);  // 0, 1, 2, 3, 4 ... 9
}


// console.log(i);  // ReferenceError: i is not defined
/* 
let object = [1, 2 , 3, 'hola']
for (const i of object) {
    //  const element = object[i];
    console.log(i)
}
 */


/* TDZ, Temporal Dead Zone, Zona muerta temporal */ 
function do_something() {
  // var foo;
  console.log(bar);  // undefined
  // console.log(foo);  // ReferenceError: foo no está definido
  var bar = 1;
  // bar = 1;
  let foo = 2;
  // const foo = 2;
}

do_something();



