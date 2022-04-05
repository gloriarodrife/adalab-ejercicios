'use strict';

const form = document.querySelectorAll('.form');
const ny = document.querySelector('.NY');
const madrid = document.querySelector('.Madrid');
const paris = document.querySelector('.Paris');

function attribute(url) {
  ny.src = url;
  madrid.src = url;
  paris.src = url;
}

function userSelect() {
  for (const item of form) {
    item.addEventListener('change', (event) => {
      const evento = event.target;
      console.log(evento.value);
      if (evento.value === 'Madrid') {
        attribute('./madrid.jpeg');
      }
      if (evento.value === 'Paris') {
        attribute('./paris.jpeg');
      }
      if (evento.value === 'NY') {
        attribute('./NY.jpeg');
      }
      if (evento.value === '0') {
        paris.src = './paris.jpeg';
        madrid.src = './madrid.jpeg';
        ny.src = './NY.jpeg';
      }
    });
  }
}

userSelect();
