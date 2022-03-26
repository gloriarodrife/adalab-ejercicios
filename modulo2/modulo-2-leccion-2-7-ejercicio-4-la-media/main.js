'use strict';

const numbers = [2, 5, 8, 7, 9, 8];

let acumulador2 = 0;
numbers.forEach((number) => {
  acumulador2 += number;
});
const media2 = acumulador2 / numbers.length;
console.log(media2);

function average(numbers) {
  let acumulador = 0;
  for (const number of numbers) {
    acumulador += number;
  }

  const media = acumulador / numbers.length;
  return media;
}

average(numbers);

function average2(numbers) {
  let acumulador = 0;
  numbers.forEach((number) => {
    acumulador += number;
  });
  const media = acumulador / numbers.length;
  console.log(media);
  return media;
}

average2(numbers);
