// eslint-disable-next-line strict
// let fs = require('fs');

import fs from 'fs';

const handleFile = (err, fileContent) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('El contenido del fichero es:', fileContent);
    console.log('La longitud del contenido es:', fileContent.length);
  }
};

fs.readFile('./input.txt', 'utf8', handleFile);

const handleFileJson = (err, fileContent) => {
  if (err) {
    console.log('Error:', err);
  } else {
    const jsonData = JSON.parse(fileContent);
    console.log('El contenido del fichero en fotmato objeto:', jsonData);
    console.log(`Titulo: ${jsonData.title}`);
    console.log(`Contenido: ${jsonData.content}`);
  }
};

fs.readFile('./input.json', 'utf8', handleFileJson);
