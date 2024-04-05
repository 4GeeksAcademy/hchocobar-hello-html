// Btn Sucribirme
function handleSucribe() {
  const formLogin = document.querySelector('#login');
  const hmtlCover = document.querySelector('#cover');

  console.log(isLogin)
  if (isLogin) {
    formLogin.className = '';
    hmtlCover.className = 'd-none';
  } else {
    formLogin.className = 'd-none';
    hmtlCover.className = '';
  }
  isLogin = !isLogin
}


function handleOnSumbit() {
  const formLogin = document.querySelector('#login');
  const hmtlCover = document.querySelector('#cover');

  console.log(isLogin)
  if (isLogin) {
    formLogin.className = 'd-none';
    hmtlCover.className = '';
  } else {
    formLogin.className = '';
    hmtlCover.className = 'd-none';
  }
  isLogin = !isLogin
}

function handleShow() {
  const divView = document.querySelector('#view');
  const inputPassword = document.querySelector('#password');
  console.log(divView.className)
  console.log(view);
  if (view) {
    divView.className = 'input-group-text text-light bg-success';
    divView.innerHTML = '<i class="fas fa-eye">';
    inputPassword.type = 'password';
  } else {
    divView.className = 'input-group-text text-light bg-danger';
    divView.innerHTML = '<i class="fas fa-eye-slash">';
    inputPassword.type = 'text';
  }
  view = !view;
}

let view = false;
let isLogin = false;


let btnSuscribe = document.querySelector('#suscribe')
// btnSuscribe.innerHTML = 'Suscribe'


// Title
let title = document.querySelector('#titulo');
title.innerHTML = 'DOM'


