'use strict';

const text = document.querySelector('.text');
const p1 = document.querySelector('.p_1');
const p2 = document.querySelector('.p_2');
const p3 = document.querySelector('.p_3');
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');

const heigth1 = p1.offsetHeight;
const heigth2 = p2.offsetHeight;
const heigth3 = p3.offsetHeight;

text.innerHTML = `El alto del primer parafo es ${heigth1}, del segundo es ${heigth2} y del tercero es ${heigth3}`;

console.log(heigth1 / 3);

button.addEventListener('click', () => {
  p1.setAttribute('style', `height: ${heigth1 / 3}px`);
  p2.setAttribute('style', `height: ${heigth2 / 3}px`);
  p3.setAttribute('style', `height: ${heigth3 / 3}px`);
});

button2.addEventListener('click', () => {
  p1.setAttribute('style', `height: ${heigth1}px`);
  p2.setAttribute('style', `height: ${heigth2}px`);
  p3.setAttribute('style', `height: ${heigth3}px`);
});
