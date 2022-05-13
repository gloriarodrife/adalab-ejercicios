'use strict';

const namesList = document.querySelector('.js_list');
const nameInput = document.querySelector('.js_newName_input');
const form = document.querySelector('.js_form');

const names = [];

function loadNames() {
  fetch('')
    .then((response) => response.json())
    .then((data) => {
      data.forEach( (name) => {
        names.push(name);
      });
      renderNames();
    })
    .catch((error) => {
      console.dir(error);
    });
}

function renderNames() {
  let html = '';
  names.forEach( (name) => {
    html += `
      <li class="item">
        ${name}
      </li>`;
  });
  namesList.innerHTML = html;
}

function handleSubmit(ev) {
  ev.preventDefault();
  const newName = nameInput.value;
  console.log(newName);

  names.push(newName);
  nameInput.value = '';
  renderNames();
}

form.addEventListener('submit', handleSubmit);
loadNames();