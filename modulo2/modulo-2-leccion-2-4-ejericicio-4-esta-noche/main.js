'use strict';

const button = document.querySelector('.button');
const text = document.querySelector('.text');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.
button.addEventListener('click', () => {
  text.innerHTML = ` <ul>
    <li class='movie'>${inception}</li>
    <li class='movie'>${theButterFlyEffect}</li>
    <li class='movie'>${eternalSunshineOfTheSM}</li>
    <li class='movie'>${blueVelvet}</li>
    <li class='movie'>${split}</li>
  </ul>`;
  const movie = text.querySelectorAll('.movie');
  for (const movies of movie) {
    movies.addEventListener('click', (event) => {
      console.log(event.currentTarget.innerHTML);
    });
  }
});
