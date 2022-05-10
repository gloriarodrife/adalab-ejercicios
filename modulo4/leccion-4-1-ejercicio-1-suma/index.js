let fs = require('fs');

// const add = (a, b) => a + b;

// const result = add(1, 3);

// Creamos un objeto
const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};

// Guardo el objeto en un nuevo fichero

const handleWriteFile = (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('The file has been saved!');
  }
};

fs.writeFile('./output.txt', JSON.stringify(myObject), handleWriteFile);
// Creamos la función de callback
//Creamos constante

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Error:`, err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(`Error:`, err);
    } else {
      callback();
    }
  });
};

readFile('./input-file.json', (fileContent) => {
  const newObject = {
    user: 'gloriarodrife',
    email: 'gloriarodrife@gmail.com',
    age: 29,
  };
  fileContent = newObject;
  writeFile('./input-file.json', JSON.stringify(fileContent), () => {
    console.log('Nuevo contenido copiado correctamente');
  });
});
