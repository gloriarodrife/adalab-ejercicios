'use strict';
const button = document.querySelector('.js_button');

// No me aparecen los perros
function getChihuahua() {
  fetch('https://dog.ceo/api/breed/chihuahua/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('.js_img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

button.addEventListener('click', getChihuahua);
