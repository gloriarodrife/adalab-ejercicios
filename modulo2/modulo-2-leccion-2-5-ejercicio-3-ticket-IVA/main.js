// Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".

'use strict';
function iva(price) {
  const sinIva = price;
  const iva = 21 / 100;
  const priceIva = price * iva;
  const conIva = price + priceIva;
  console.log(`Precio sin IVA: ${sinIva}, IVA: ${priceIva} y Total: ${conIva}`);
}

var resultado = iva(20);
