/* global $ */
const btnHeader = $('.btnLogin').get(0);
const login = $('.login');
const password = $('.password');

function validate() {
  if (login.val() === 'tryber@teste.com' && password.val() === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnHeader.addEventListener('click', validate);
//  Requisitos 1-3
