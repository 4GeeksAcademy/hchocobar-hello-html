function handleRegister(params) {
  console.log('Hice click en el boton registar');
  alert('Hice click en el boton registar')
};


function handleSumit(event) {
  console.log('*****************   hola      *****************');
  
}


function handleView(params) {
  if (viewPassword) {
    view.innerHTML = '<i class="fa-solid fa-eye"></i>'
    inputPassword.type = 'password'
    console.log(viewPassword);
  } else {
    view.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    inputPassword.type = 'text'
    console.log(viewPassword);
  }
  viewPassword = !viewPassword
}

let viewPassword = false;