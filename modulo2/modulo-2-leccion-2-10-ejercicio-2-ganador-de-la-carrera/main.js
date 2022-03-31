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

const raceWinner = timeRuner.reduce((acc, number) => Math.min(acc, number));
console.log(raceWinner);

const posicion = runners.filter((runer) => {
  if (runer.time === raceWinner) {
    console.log(runer.name);
  }
});

const runners2 = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];
const account = runners2.reduce((acc, runner) => {
  if (runner.student && runner.time < acc.time) {
    return runner;
  }

  return acc;
});

console.log(`The winner is ${account.name} with ${account.time}`);
