'use strict';

const text = document.querySelector('.js-text');
const update = document.querySelector('.js-update');
const body = document.querySelector('.js-body');
const face = document.querySelector('.js-face');

// Generar un número aleatorio
function GenerateRandomNumb(max) {
  let randomNumb = parseInt(Math.random() * max);
  return randomNumb;
}

// Función cambiar el valor de la cara
function updateFace() {
  let faceSelect = face.value;
  text.innerHTML = faceSelect;
}

// Funcion para cambiar el color
function changeBackground() {
  const numAle = GenerateRandomNumb(100);
  if (numAle % 2 === 0) {
    // Es par
    body.classList.remove('color');
    body.classList.add('body');
  } else {
    //   Si es impar
    body.classList.add('color');
    body.classList.remove('body');
  }
}

// Función manejadora
// Evitamos el evento de recargar la página del botón
function handleClickBtn(event) {
  event.preventDefault();
  changeBackground();
  updateFace();
}

update.addEventListener('click', handleClickBtn);
