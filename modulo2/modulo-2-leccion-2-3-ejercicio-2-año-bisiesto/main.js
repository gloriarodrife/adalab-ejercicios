'use strict';

const actualYear = 9;

// nextYear = actualYear >= 0 ? actualYear + (4 - (actualYear % 4)) : 4;

if (actualYear % 4 == 0) {
  console.log(`Estamos en un año bisiesto: ${actualYear}`);
} else if (actualYear % 4 !== 0) {
  console.log(`${actualYear} no es año bisiesto`);
}

const remainingYears = 4 - (actualYear % 4);
const nextYear = actualYear + remainingYears;

console.log(`${nextYear} es el siguiente año bisiesto `);
