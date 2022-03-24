'use strict';

const basketOfPears = {
  maxPears: 5,
  mixPears: 0,
  actualPears: 2,
  initPears: 1,
};

// Meto una pera al cesto
basketOfPears.actualPears += 1;
console.log(basketOfPears);

// Saco una pera
basketOfPears.actualPears -= 1;
console.log(basketOfPears);
