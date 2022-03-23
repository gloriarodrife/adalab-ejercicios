'use strict';

function boxContent(borderBox, width, padding, borderSize) {
  if (borderBox === true) {
    const borderBox = width - padding - borderSize;

    console.log(
      `El ancho del contenido es: ${borderBox}px y el ancho total de la caja es: ${width}px`,
    );
  } else {
    const contentBoxWidth = width + padding + borderSize;
    console.log(
      `El ancho del contenido es: ${width} px y el ancho total de la caja es: ${contentBoxWidth} px.`,
    );
  }
}

boxContent(false, 8, 2, 6);
