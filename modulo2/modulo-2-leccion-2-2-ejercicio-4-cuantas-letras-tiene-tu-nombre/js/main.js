// El objetivo de este ejercicio es pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. Las imágenes y textos los obtendremos a partir de los siguientes datos:

'use strict';

const text = document.querySelector('.text');
const userName = 'Sandra Rial ';
userName.innerHTML;
// length cuenta los caracteres del nombre, con el vemos la longitud del string
const numbersName = userName.length;

console.log(numbersName);

text.innerHTML = `El nombre de mi compañera es ${userName}, y está compuesto por ${numbersName} caracteres`;
