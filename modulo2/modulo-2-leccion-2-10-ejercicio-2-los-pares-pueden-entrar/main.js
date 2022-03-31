'use strict';
const pins = [2389, 2384, 2837, 5232, 8998];

const pairs = pins.filter((pin) => {
  if (pin % 2 === 0) {
    console.log(pin);
  }
});
