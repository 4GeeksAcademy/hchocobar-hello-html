function handleLogin() {
  const btnLogin = document.querySelector('#btnLogin');
  const title = document.querySelector('#title');
  const card = document.querySelector('#card');
  const formLogin = document.querySelector('#formLogin');
  isLogin ? logout() : login();
  console.log('Funciona');
}

// condicion ? expresionXverdadero : expresionXfalso


function logout() {
  // el usuario está logeado
  btnLogin.innerHTML = 'Logout';
  isLogin = !isLogin;
  btnLogin.className = 'btn btn-secondary'
  title.innerHTML = 'Bienvenido Usuario'
  card.className = 'container mx-5'
  formLogin.className = 'container mx-5 d-none'
}


function login() {
  // el usuario no está logeado
  btnLogin.innerHTML = 'Login';
  isLogin = !isLogin;
  btnLogin.className = 'btn btn-warning'
  title.innerHTML = 'Ingrese a nuesta App'
  card.className = 'container mx-5 d-none'
  formLogin.className = 'container mx-5'
}

let isLogin = false;


let cadena = "Hector"
let palabras = 'da un ejemplo'

// let parrafo = `hola mundo! como están. ${cadena} hoy ${palabras}`
let parrafo = `hola mundo! como están. ${isLogin ? cadena : palabras}`

console.log(parrafo)
