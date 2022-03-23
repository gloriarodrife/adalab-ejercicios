'use strict';

function getEl(selector) {
  const sel = document.querySelector(selector);
  return sel;
}

const btnEl = getEl('.btn');

if (btnEl === null) {
  console.error(`No existe ningún elemento con clase, id o tag llamado  `);
}
console.log(btnEl);
// Arrow function
// const getlEl = (selector) => {
//   const sel = document.querySelector(selector);
//   return sel;
// };
