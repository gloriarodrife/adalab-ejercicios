'use strict';

const user = {
  job: 'developer',
  firstName: 'Abdon',
  lastName: 'Davila',
  age: 30,
};

user.age += 1;
user.age++;
console.log(user);
user.firstName = 'Roberto';
console.log(user);
console.log(user);

//

const adalaber = {
  name: 'Gloria',
  sayHello: function () {
    return `Hola, me llamo ${this.name}`;
  },
};

console.log(adalaber.sayHello());

// Esto es una referencia al objeto inicial. NO copia el objeto
const abdon = adalaber;
// Por lo tanto, aquí modifico el name del objeto adalaber
abdon.name = 'Abdón';

console.log(abdon.sayHello());

console.log(adalaber.sayHello());
