'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber() {
  let array = [];
  lostNumbers.forEach((item) => {
    if (item % 2 === 0) {
      array.push(item);
    }
  });
  return array;
}

console.log(bestLostNomber());

function multipleOfThree() {
  let array = [];
  lostNumbers.forEach((item) => {
    if (item % 3 === 0) {
      array.push(item);
    }
  });
  return array;
}

console.log(multipleOfThree());
