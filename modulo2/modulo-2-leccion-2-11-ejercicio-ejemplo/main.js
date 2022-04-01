'use strict';

// // Realizamos la petición a la API
// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//   .then(function (response) {
//     // Pasamos a frormato .jon la respuesta
//     return response.json();
//   })
//   // Lo pintamos en el HTML
//   .then(function (data) {
//     document.body.innerHTML = data.result;
//   });

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);
