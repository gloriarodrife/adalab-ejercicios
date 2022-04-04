'use strict';

const button = document.querySelector('.js_button');
const input = document.querySelector('.js_search');
const listCharanders = document.querySelector('.js_names');
const API_URL = 'https://swapi.py4e.com/api';

function searchPeople(search) {
  const peopleEndpoint = `${API_URL}/people?search=${search}`;
  fetch(peopleEndpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      localStorage.setItem(search, JSON.stringify(characters));

      for (const person of characters) {
        listCharanders.innerHTML += `<li> ${person.name} con genero ${person.gender}`;
      }
      return data;
    });
}

function getSearchValue() {
  const query = input.value;
  listCharanders.innerHTML = '';

  // Guardar valores de la busqueda que he hecho
  // Buscar en el local Storage el item por la key
  // Si la busqueda es null hago la llamada al servidor
  // Pinto con el dato del localStorage
  const cache = localStorage.getItem(query);
  if (cache === null) {
    searchPeople(query);
  } else {
    const characters = JSON.parse(cache);
    for (const person of characters) {
      listCharanders.innerHTML += `<li> ${person.name} con genero ${person.gender}`;
    }
  }
}

button.addEventListener('click', getSearchValue);
