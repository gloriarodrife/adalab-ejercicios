// Prepara una variable cuyo valor será un número. Escribe las condiciones para el siguiente ejercicio y utilizando la variable haz pruebas para ver que estas se cumplen.
'use strit';

const number = document.querySelector('.js-number');

const numberCondition = -3;
number.innerHTML = numberCondition;
if (numberCondition == 0) {
  number.innerHTML = 'El número es 0';
} else if (numberCondition < 0) {
  number.innerHTML = 'El número es negativo';
} else if (numberCondition + 2 >= 13 && numberCondition <= 20) {
  number.innerHTML =
    'El número más 2 es mayor que 13 pero menor o igual que 20';
} else if (numberCondition >= 20 && numberCondition < 50) {
  number.innerHTML = 'El número es mayor que 20 pero menor que 50';
} else {
  number.innerHTML = 'el número no es 123123125';
}
