'use strict';

const button = document.querySelector('.js_button');
const result = document.querySelector('.js_result');

// Buscando el nombre de un pokemon
// function getNumber() {
//   fetch('https://pokeapi.co/api/v2/pokemon/3/')
//     .then((response) => response.json())
//     // Todo el objeto que te devuelve la api
//     .then((data) => {
//       result.innerHTML = data.name;
//     });
// }

button.addEventListener('click', getNumber);
function getNumber() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    // Todo el objeto que te devuelve la api
    .then((data) => {
      const img = document.querySelector('.js_img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
