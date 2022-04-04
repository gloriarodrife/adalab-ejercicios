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
        // localStorage.setItem('name', person.name);
        // localStorage.setItem('gender', person.gender);
      }
      return data;
    });
}

function getSearchValue() {
  const characters = input.value;
  listCharanders.innerHTML = '';
  searchPeople(characters);
}

button.addEventListener('click', getSearchValue);
