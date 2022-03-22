'use strict';

const texto = document.querySelector('.js-text');

// Ese evento se escucha en el documento, no en un nodo en concreto
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > 250 && window.scrollY < 500) {
    texto.classList.add('content');
  } else if (window.scrollY >= 500) {
    texto.classList.remove('content');
    texto.classList.add('container');
  }
});
