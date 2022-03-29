'use strict';

function get100Numbers(numbers) {
  let array = [];
  for (let index = 0; index < numbers; index++) {
    const element = index;
    array.push(element);
    console.log(array);
  }
}

get100Numbers(100);
