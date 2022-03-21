'use strict';

let content = document.querySelector('.js-content');
let title = document.querySelector('.js-title');
let text = document.querySelector('.js-text');

if (title.classList.contains('success')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';
  content.classList.add('success');
} else if (title.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error';
  content.classList.add('error');
} else if (title.classList.contains('warning')) {
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'Los datos son correctos';
  content.classList.add('warning');
}
