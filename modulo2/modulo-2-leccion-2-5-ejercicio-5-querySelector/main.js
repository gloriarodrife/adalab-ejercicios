'use strict';

function getEl(selector) {
  const sel = document.querySelector(selector);
  return sel;
}
const btnEl = getEl('.btn');

console.log(btnEl);
