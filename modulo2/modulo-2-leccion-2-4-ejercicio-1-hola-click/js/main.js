// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!

'use strict';
let text = document.querySelector('.js-text');
const button = document.querySelector('.js-button');

button.addEventListener('click', () => {
  text.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`;
});
