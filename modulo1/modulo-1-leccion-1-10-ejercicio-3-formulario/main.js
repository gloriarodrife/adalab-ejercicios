'use strict';

const form = document.querySelector('.js_form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // clase de js para tratar info de los formularios
  const formData = new FormData(event.target);
  // metodo que convierte en objeto determinadas cosas
  const data = Object.fromEntries(formData);
  // console.log(formData);
  console.log(data);
});
