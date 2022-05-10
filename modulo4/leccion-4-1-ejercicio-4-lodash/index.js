import _ from 'lodash';
const array1 = [1, 2, 3];

const array2 = [2, 3, 4];

const result = _.concat(array1, array2);

const intersection = _.intersection(result);
console.log(intersection);

const newSet = _.union(array1, array2);
console.log(newSet);
