'use strict';

function get100Numbers(arrlength) {
  const array = [];
  // const arrlength = 101;
  for (let index = 1; index < arrlength; index++) {
    array.push(index);
  }
  return array;
}
console.log(get100Numbers(100));

const revert = get100Numbers(100);

console.log(revert.reverse());
