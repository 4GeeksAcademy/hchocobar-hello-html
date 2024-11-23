function handleView() {
  console.log('Hice Click en div verde');
  // alert('Clickee en el div verde')
  viewPassword = !viewPassword;
  if (viewPassword) {
    view.innerHTML = '<i class="fas fa-eye"></i>';
    inputPassword.type = 'text';
  } else {
    view.innerHTML = '<i class="fas fa-eye-slash"></i>';
    inputPassword.type = 'password';
  }
}


const handleRegister = (text) => {
  console.log('handleRegister', text)
}


const handleSubmit = () => {
  console.log('Submit del formulario');
}


const handleTitle = () => {
  title.innerHTML = 'Spain 91';
  title.className = 'text-start text-danger mt-5'
}

let viewPassword = false;
