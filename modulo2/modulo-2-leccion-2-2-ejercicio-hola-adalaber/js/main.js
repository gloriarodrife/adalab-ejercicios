// Vamos a preparar en una constante con el nombre de una compañera, y utilizándola tenemos que escribir un saludo en la página. Si nuestra compañera se llamará Lola quedaría así:

'use strict';
const student = 'Lola';

const greeting = document.querySelector('#content');
console.log(` Hola ${student} , encantada de conocerte `);
greeting.innerHTML = ` Hola  ${student}, encantada de conocerte `;
