'use strict';
const times = [56, 9, 45, 28, 35];

const media = times.reduce((acc, time) => {
  return acc + time / times.length;
}, 0);
console.log(media);

// .reduce ((acc, item, index, arreglo))
