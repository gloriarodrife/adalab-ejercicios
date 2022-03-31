'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const userPin = users.find((user) => {
  if (user.pin === 5232) {
    console.log(user.name);
  }
});

const positionUser = users.findIndex((user) => user.pin === 5232);
console.log(positionUser);

const deleteUser = users.splice(3, 1);
console.log(users);
