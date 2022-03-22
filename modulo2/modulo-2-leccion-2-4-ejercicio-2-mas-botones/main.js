'use strict';

const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');

buttonOne.addEventListener('mousedown', () => {
  buttonOne.classList.add('button');
});
buttonOne.addEventListener('mouseup', () => {
  buttonOne.classList.remove('button');
});

buttonTwo.addEventListener('mousedown', () => {
  buttonTwo.classList.add('button');
});
buttonTwo.addEventListener('mouseup', () => {
  buttonTwo.classList.remove('button');
});
