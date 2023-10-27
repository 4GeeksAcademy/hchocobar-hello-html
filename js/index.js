function handleBtnLogin() {
  isLogin ? logout() : login();
  isLogin = !isLogin;
}


function login() {
    // El usuario no está logeado
    console.log('Click en Login');
    document.querySelector('#login').innerHTML = 'Logout';
    document.querySelector('#login').className = "btn btn-secondary";
    const userLogged = document.querySelector('#user');
    userLogged.innerHTML = 'Bienvenido Héctor';
    userLogged.className = 'text-center'
};


function logout() {
    // El usuario esta logeado
    console.log('Click en Logout');
    const btnLogin = document.querySelector('#login');
    btnLogin.innerHTML = 'Login';
    btnLogin.className = 'btn btn-warning';
    const userLogged = document.querySelector('#user');
    userLogged.innerHTML = '';
    userLogged.className = 'd-none'
}
// condicion ? unaSentenciaXtrue : unaSentenciaXfalse;


function increaseCounter() {
	counter++;
	document.querySelector('#screen').innerHTML = "The counter value is " + counter;
}


function decreaseCounter() {
	counter--;
	document.querySelector('#screen').innerHTML = "The counter value is " + counter;
}


function resetCounter() {
	counter = 0;
	document.querySelector('#screen').innerHTML = "The counter value is " + counter;
}


let isLogin = false;
let counter = 0;
/* // alert('Hola Mundo')
console.log('Hola Mundo')
// console.log("otro mensaje");

// Variables, Constantes (como los almaceno)

// Tipos de datos
// boleanos : true false
let isActive = true;
let isMember = false;
console.log('Activo: ', isActive);
console.log('Mebresía: ', isMember);
// string : "string" 'string'      `string templat`
let firstname = 'Hector';
let lastname = 'Chocobar';
let fullname = firstname + ' ' + lastname;
console.log(fullname);
// enteros : 1 2 4 
let number = 16;
// flotantes : 1.2 4. precision () - sistema de base numérica: binarios(2), octales(8), decimales(10), hexadecimal(base 16)
let secondNumber = 2;
let result = number % secondNumber
console.log(result);


// Tipos de datos (colecciones)
// Arrays
let days = ["lunes", 
            "martes", 
            ['hola', 'hi', 'ciao'], 
            {'clave': 'valor', 'name': 'Hector', 'role': 'mentor' }, 
            "viernes", 
            "sábados", 
            "domingos", 
            45, 
            true];
console.log(days);

// objetos - colección de pares de "clave/valor" - "key/value"
let myObject = {
  'clave': 'valor',
  'name': 'Hector',
  'role': 'mentor',
}  */