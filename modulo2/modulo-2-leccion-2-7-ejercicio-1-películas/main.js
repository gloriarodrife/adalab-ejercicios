'use strict';

function workWithMovies() {
  const movies = [
    'The Sound of Music',
    "Rosemary's Baby",
    'Die Hard ',
    'Beetlejuice',
    'The Parent Trap',
  ];
  // Añado una nueva pelicula al array
  movies[3] = 'Eternal Sunshine of the Spotless Mind';
  console.log(movies);
  // Modifico una pelicula
  movies[3] = 'Rey leon';
  console.log(movies);
  // Agrego un elemento al final
  movies.push('Eternal');
  console.log(movies);
  // Elimino el ultimo elemento
  movies.pop();
  console.log(movies);
  // Agrego un elemento al inicio
  movies.unshift('Look');
  console.log(movies);
  // Elimino el primer elemento de un array
  movies.shift();
  console.log(movies);
  // Longitud de un array
  console.log(movies.length);
}

workWithMovies();
