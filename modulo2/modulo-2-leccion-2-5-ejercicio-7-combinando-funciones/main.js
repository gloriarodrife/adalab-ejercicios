'use strict';

function getEl(selector) {
  const sel = document.querySelector(selector);
  return sel;
}

function numbers(num) {
  if (num % 2 === 0) {
    console.log(`${num} es par`);
  } else {
    console.log(`${num} es impar`);
  }
}

const number = getEl('.number');
// Cogemos el dato del div del HTML y lo parsemaos para convertirlo en numero
const valueNumber = parseInt(number.innerHTML);

// Comprobamos si es par o impar

const parImpar = numbers(valueNumber);
