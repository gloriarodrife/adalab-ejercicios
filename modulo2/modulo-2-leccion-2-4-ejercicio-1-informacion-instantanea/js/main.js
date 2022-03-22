// Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.

'use strict';

const input = document.querySelector('.js-input');
const text = document.querySelector('.js-text');

const presKey = (event) => {
  text.innerHTML = event.currentTarget.value;
};

input.addEventListener('keyup', presKey);
