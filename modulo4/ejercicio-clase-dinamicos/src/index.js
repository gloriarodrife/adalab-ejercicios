// #npm install express cors ejs
// Importamos las librerías que implementan ExpressJS y CORS:

const express = require('express');
const cors = require('cors');
const path = require('path');

// Importamos los datos sobre las mujeres referentes de un fichero JSON a la variable women:

const women = require('./data/women.json');
// Cargamos el código del servidor en la variable con nombre server
// NOTA: A veces se llama server, a veces se le llama app. Se le puede poner el nombre que queramos, pero los más habituales son server o app.

const app = express();

// Habilitamos el servidor para que reciba fetch de cualquier dirección.
// Para el servidor de estáticos no es necesario. Es necesario cuando usamos ExpressJS para hacer APIs

// app.use(cors());

// Configuramos el servidor para decirle que tanto los datos que reciba como los que devuelva son en formato JSON (hay otros formatos: XML, YAML, ... pero se usan menos)
// Para el servidor de estáticos no es necesario. Es necesario cuando usamos ExpressJS para hacer APIs

// app.use(express.json({ limit: '10mb' }));

// En esta carpeta ponemos los ficheros estáticos (css, js, imágenes, fuentes personalizadas,... ):

const staticServerPathWeb = './public';

//  Configuramos Express para que "sirva" todos los ficheros
// que hay dentro de la carpeta ./public como si fuesen endpoints:
/*
/js/main.js
/css/main.css
*/

app.use(express.static(staticServerPathWeb));

// Configuramos el servidor de ficheros dinámicos:

app.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
// Express llamará a la función arrow del segundo parámetro cuando el servidor esté ya a la espera de peticiones en el puerto :3000

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get('/', (req, res) => {
  const womanNames = women.map((eachWoman) => eachWoman.name);

  res.render('pages/landing', { womanNames: womanNames });
});

app.get('/woman/:name', (req, res) => {
  console.log(req.params);
  console.log(req.headers);

  const womanData = women.find(
    (eachWoman) =>
      eachWoman.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
  );

  if (womanData) {
    res.render('pages/womanDetail', womanData);
  } else {
    res.render('pages/404', { wrongName: req.params.name });
  }
});
