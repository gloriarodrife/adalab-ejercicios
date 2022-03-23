// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.

'use strit';

function numbers(num) {
  if (num % 2 === 0) {
    console.log(`${num} es par`);
  } else {
    console.log(`${num} es impar`);
  }
}
numbers(11);
