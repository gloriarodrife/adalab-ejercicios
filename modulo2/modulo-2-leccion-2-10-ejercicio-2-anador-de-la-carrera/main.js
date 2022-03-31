'use strict';
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

const timeRuner = runners.map((runer) => runer.time);
console.log(timeRuner);

const raceWinner = timeRuner.reduce((acc, number) => Math.max(acc, number));
console.log(raceWinner);

const posicion = runners.filter((runer) => {
  if (runer.time === raceWinner) {
    console.log(runer.name);
  }
});

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const account = users.reduce((acc, user) => {
  if (user.isPremium === true && user.pin % 2 === 0) {
    acc++;
  }
  return acc;
}, 0);

console.log(account);

// const pairNumber = users.filter((user) => {
//   if (user.pin % 2 === 0) {
//     console.log(user.name);
//   }
// });
