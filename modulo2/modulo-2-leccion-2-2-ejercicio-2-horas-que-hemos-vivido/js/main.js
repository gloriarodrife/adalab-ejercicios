// En este caso vamos a crear un código que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.
'use strict';

const hoursYear = 24 * 365;

// const hoursElement = document.querySelector(".hours");
// const ageElement = document.querySelector(".age");
// const age = ageElement.value;
const age = 29;

const total = age * hoursYear;
console.log(total);
