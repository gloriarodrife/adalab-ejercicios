'use strict';
const adalaber1 = {
  name: 'Susana',
  age: 34,
  profesion: ' periodista',
};

adalaber1.run = (phrase) => `Lo llamamos ${phrase}`;
console.log(adalaber1.run('loguear'));
adalaber1.runAMarathon = (distance) =>
  `Estoy corriendo una maraton de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon(50));
console.log(adalaber1);

adalaber1.run = (phrase) => `Lo llamamos ${phrase}`;
console.log(adalaber1.run('loguear'));
adalaber1.showBio = () =>
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profesion}`;
console.log(adalaber1.showBio());
// Adalaber 2
const adalaber2 = {
  name: 'Rocío',
  age: 25,
  profesion: ' actriz',
};

adalaber2.run = (phrase) => `Lo llamamos ${phrase}`;
console.log(adalaber2.run('loguear'));
adalaber2.runAMarathon = (distance) =>
  `Estoy corriendo una maraton de ${distance} kilómetros`;
console.log(adalaber2.runAMarathon(50));
console.log(adalaber2);
console.log(adalaber1.showBio());
