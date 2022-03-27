'use strict';

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];

function iterator(array) {
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    let type = typeof item;

    // Comprobamos si un array y pintamos el tipo array y no object
    if (Array.isArray(item)) {
      type = 'Array';
    }
    // Si es tipo object lo convertimos en un string con el metodo JSON.stringify
    if (type === 'object') {
      item = JSON.stringify(item);
    }

    const message = `El dato ${item} está en la posición ${index} y es de tipo ${type}`;

    console.log(message);
  }

  // for (const [index, item] of items.entries()) {
  //   console.log();
  // }
}

const position = iterator(items);
