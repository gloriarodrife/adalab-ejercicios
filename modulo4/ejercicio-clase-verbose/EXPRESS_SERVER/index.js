// Importamos las librerías que implementan ExpressJS y CORS:

const express = require('express');
const cors = require('cors');

// Importamos los datos de un fichero JSON a la variable names:

const names = require('./names.json');

// Cargamos el código del servidor en la variable con nombre server
// NOTA: A veces se llama server, a veces se le llama app. Se le puede poner el nombre que queramos, pero los más habituales son server o app.

const server = express();

// Habilitamos el servidor para que reciba fetch de cualquier dirección.

server.use(cors());

// Configuramos el servidor para decirle que tanto los datos que reciba como los que devuelva son en formato JSON (hay otros formatos: XML, YAML, ... pero se usan menos)

server.use(express.json());

// Arrancamos el servidor en el puerto 3000
// Express llamará a la función arrow del segundo parámetro cuando el servidor esté ya a la espera de peticiones en el puerto :3000

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Nuestro primer ENDPOINT
// Esta función va a atender peticiones GET (del navegador, de fetch, ...) que lleguen a http://localhost:3000/ (a la ruta raíz)
// Este endpoint sólo responde holis.

server.get('/', (req, res) => {
  console.log('Ha pasao por aqui.');
  res.send('Holis!!');
});

// Endpoint para el api de nombres
// Esta función va a atender las peticiones GET que lleguen a la dirección http://localhost:3000/api/names
// Pueden llegar dos parámetros query que hemos programado para que sean opcionales:
//  - limit para poner un tope máximo de resultados. Por defecto son todos
//  - search para que filtre los nombres según ese parámetro. Por defecto devuelve todos
// Devolverá al navegador un array JSON con una lista de nombres como String.
server.post('/api/names', (req, res) => {
  console.log('ESTAS QUERIENDO METER DATOS');
  console.log(req.body);
  console.log(res.body);

  names.push(req.body.name);
  res.json({ status: 'Ok' });
});

server.get('/api/names', (req, res) => {
  // Este log se muestra en la terminal donde se ejecuta el servidor:
  // (con node, la terminal es la nueva consola)
  console.log('Vamos a preparar un JSON.');

  // Con este log mostramos en la terminal los parámetros query que
  // llegan al servidor Express
  console.log(req.query);

  // Nos traemos los parámetros a variables del código y, si no vienen
  // en query, usamos valores por defecto:
  const limit = req.query.limit ? parseInt(req.query.limit) : names.length;
  const search = req.query.search ? req.query.search : '';

  // Filtramos la lista de todos los nombres según el parámetro search
  // y nos quedamos como máximo con el número de resultados que nos indique limit
  res.json(
    names
      .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
      .splice(0, limit)
  );
});
