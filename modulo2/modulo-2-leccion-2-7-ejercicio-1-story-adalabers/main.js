'use strict';

const adalabersPromoP = [
  { name: 'María', age: 29, profesion: 'designer' },
  { name: 'Lucía', age: 31, profesion: 'chemical engineer' },
  { name: 'Susana ', age: 34, profesion: 'periodista' },
  { name: 'Rocío ', age: 25, profesion: 'actress' },
  { name: 'Inmaculada ', age: 21, profesion: 'designer' },
];

// Funcion para calcular el número de adalabers

function totalAdalaber() {
  return adalabersPromoP.length;
}

// Media de edad de las adalabers

function averageAge(adalabers) {
  let ages = 0;
  for (const adalaber of adalabers) {
    ages += adalaber.age;
  }
  return ages / totalAdalaber();
}

const result = averageAge(adalabersPromoP);
console.log(result);

// Adalaber mas joven
function getAdalabersAges(adalabers) {
  let adalabersAges = [];
  for (const adalaber of adalabers) {
    //   Añado a la lista de las edades, una a una con el metodo push
    adalabersAges.push(adalaber.age);
  }
  //   Calculo el minimo con el metod Math.min desestructurando el array con los ...
  const minAdalaber = Math.min(...adalabersAges);
  return minAdalaber;
}
const minAdalabers = getAdalabersAges(adalabersPromoP);
console.log(minAdalabers);

// Obtengo la cantidad de adalabers que tienen la misma profesion
function countDesigners(adalabers) {
  let designers = [];
  for (const adalaber of adalabers) {
    if (adalaber.profesion === 'designer') {
      designers.push(adalaber);
    }
  }
  return designers.length;
}
const adalabersDesigners = countDesigners(adalabersPromoP);
console.log(adalabersDesigners);

// Es lo mismo que la funcion de arriba

function isDesigner(adalaber) {
  return adalaber.profesion === 'designer';
}

function countDesigners2(adalabers) {
  const designers = adalabers.filter(isDesigner);
  // const designers = adalabers.filter(
  //   (adalaber) => adalaber.profesion === 'designer',
  // );
  // const designers = adalabers.filter(
  //   ({ profesion }) => profesion === 'designer',
  // );
  return designers.length;
}
const adalabersDesigners2 = countDesigners2(adalabersPromoP);
console.log(adalabersDesigners2);
