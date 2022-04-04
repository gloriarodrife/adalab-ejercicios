'use strict';
const input = document.querySelector('.js_input');
const text = document.querySelector('.js_text');

function handleUp(event) {
  const inputElement = event.currentTarget;
  const value = inputElement.value;
  localStorage.setItem('username', value);
  text.innerHTML = value;
}

function initializeApplication() {
  const username = localStorage.getItem('username');
  input.value = username;
  text.innerHTML = username;

  input.addEventListener('keyup', handleUp);
}

initializeApplication();
