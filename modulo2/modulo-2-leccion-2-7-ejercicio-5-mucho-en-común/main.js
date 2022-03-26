'use strict';

const input = document.querySelector('.js-input');
const input2 = document.querySelector('.js-input2');
const button = document.querySelector('.js-button');

// Guardar el valor del input en un objeto

function getMovies() {
  const movieList = [];
  movieList.push(input.value);
  movieList.push(input2.value);
  return movieList;
}

// Recorrer array y enviar un log

button.addEventListener('click', handle);

function handle(event) {
  event.preventDefault();
  // Guerado lista de peliculas
  const movieList = getMovies();
  console.log(movieList);
  for (const movie of movieList) {
    console.log(` A mi también me gusto ${movie}`);
  }
}
