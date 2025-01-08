function handleSubmit() {
  console.log('submit')
}


function register() {
  console.log('register');
  formLogin.className = 'mt-2 d-none';
  dashboard.className = 'mt-2';
}

function handleFormLogin() {
  formLogin.className = 'mt-2';
  dashboard.className = 'mt-2 d-none';

}

function handleView() {
  // alert('click event');
  // condicion ? expresionXverdadero : exprexionXfalso;
  viewPassword ? viewMyPassword() : hideMyPassword();
}


function hideMyPassword() {
  console.log('quiero ocultar el password');
  viewPassword = true;
  view.innerHTML = '<i class="fas fa-eye-slash"></i>'
  inputPassword.type = 'text'

}


function viewMyPassword() {
  console.log('quiero ver el password');
  viewPassword = false;
  view.innerHTML = '<i class="fas fa-eye"></i>';
  inputPassword.type = 'password'
}


let viewPassword = false;