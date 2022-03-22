'use strict';
const text = document.querySelector('.js-text');

const actualYear = 2021;
let nextYear;

if (actualYear % 4 == 0) {
  text.innerHTML = `Estamos en un año bisiesto`;
} else if (actualYear % 4 !== 0) {
  text.innerHTML = `${actualYear} no es  año bisiesto `;
} else {
  text.innerHTML = ` El siguiente año bisiesto es `;
}

// nextYear = actualYear % 4 == 0 || actualYear % 4 !== 0;
console.log(nextYear);

// si se cumple la condicion actualYear >= 0 ()
// nextYear = actualYear >= 0 ? actualYear + (4 - (actualYear % 4)) : 4;

// if (actualYear >= 0) {
//   nextYear = actualYear + (4 - (actualYear % 4));
// } else {
//   nextYear = 4;
// }
