'use strict';

const recipe = document.querySelector('.js-title');
let ingredient = 'pollo';

// aquí tu código

switch (ingredient) {
  case 'pollo':
    recipe.innerHTML = 'Filete de pollo';
    break;
  case 'merluza':
    recipe.innerHTML = 'Merluza en salsa verde';
    break;
  case 'espinacas':
    recipe.innerHTML = 'Espinacas rehogadas';
    break;
  default:
    recipe.innerHTML = 'Nada en la nevera';
    break;
}
