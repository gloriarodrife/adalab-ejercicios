// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

'use strict';

function media(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const calculo = media(2, 2, 2, 2);
console.log(calculo);
