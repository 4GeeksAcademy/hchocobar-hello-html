function handleLogin() {
  isLogin ? logout() : login();
  console.log('Funciona');
}

// condicion ? expresionXverdadero : expresionXfalso


function handleRegister() {

}

function handleSubmit() {
  console.log('Submit')
  console.log(isLogin)
}

function handleView() {
  if (viewPassword) {
    view.innerHTML = '<i class="fa-solid fa-eye"></i>'
    floatingPassword.type = 'password'
    console.log(floatingPassword.type);
  } else {
      view.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
      floatingPassword.type = 'text'
    console.log(floatingPassword.type);
  }
  viewPassword = !viewPassword;
}


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
let viewPassword = false;
console.log(isLogin)
