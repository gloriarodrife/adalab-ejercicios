'use strict';

const firstYear = 15;
const secondYear = 9;
const thirdYear = 5;
const lukAge = 5;

function convertDogAgeToHuman(dogAge) {
  let humanAge = 0;

  if (dogAge > 0) {
    humanAge += firstYear;
  }
  if (dogAge > 1) {
    humanAge += secondYear;
  }
  if (dogAge > 2) {
    humanAge += (dogAge - 2) * thirdYear;
  }

  // if (dogAge === 1) {
  //   humanAge = firstYear;
  // } else if (dogAge === 2) {
  //   humanAge = firstYear + secondYear;
  // } else if (dogAge >= 3) {
  //   const aditionalYears = (dogAge - 2) * thirdYear;
  //   humanAge = firstYear + secondYear + aditionalYears;
  // }

  return humanAge;
}

const title = document.querySelector('.js-title');
const text = document.querySelector('.js-text');
const lukAgeToHuman = convertDogAgeToHuman(lukAge);
title.innerHTML = `Tu perro tiene ${lukAgeToHuman} años de humano`;

const dogYear = 1;
if (dogYear === 1) {
  text.innerHTML = ` Tu perro tiene ${firstYear} años, que joven ! `;
} else if (dogYear === 2) {
  text.innerHTML = ` Tu perro tiene ${secondYear} años`;
} else {
  let bigDog = 29 + (lukAge - 3) * 5;
  text.innerHTML = `Tu perro tiene ${bigDog}`;
}
