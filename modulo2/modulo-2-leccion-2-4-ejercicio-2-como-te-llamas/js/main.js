// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.
'use strict';
const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');

button.addEventListener('click', () => {
  const name = input.value;
  console.log(`Hola ${name}`);
});
