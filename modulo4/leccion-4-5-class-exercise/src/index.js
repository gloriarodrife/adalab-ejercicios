// npm install express cors ejs
// Importamos las librerías que implementan ExpressJS y CORS:

const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
// Cargamos el código del servidor en la variable con nombre server
// NOTA: A veces se llama server, a veces se le llama app. Se le puede poner el nombre que queramos, pero los más habituales son server o app.

const server = express();

// Habilitamos el servidor para que reciba fetch de cualquier dirección.
// Para el servidor de estáticos no es necesario. Es necesario cuando usamos ExpressJS para hacer APIs

// server.use(cors());

// Configuramos el servidor para decirle que tanto los datos que reciba como los que devuelva son en formato JSON (hay otros formatos: XML, YAML, ... pero se usan menos)
// Para el servidor de estáticos no es necesario. Es necesario cuando usamos ExpressJS para hacer APIs

// server.use(express.json({limit: '10mb}));

// En esta carpeta ponemos los ficheros estáticos (css, js, imágenes, fuentes personalizadas,... ):

const staticServerPathWeb = './public';

//  Configuramos Express para que "sirva" todos los ficheros
// que hay dentro de la carpeta ./public como si fuesen endpoints:
//  - /js/main.js
//  - /css/main.css

server.use(express.static(staticServerPathWeb));

// LECCIÓN 4.4: Configuramos el servidor de ficheros dinámicos:

server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
// Express llamará a la función arrow del segundo parámetro cuando el servidor esté ya a la espera de peticiones en el puerto :3000

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

/* LECCIÓN 4.4:
  Ahora programaremos una función server.get() por cada tipo de página que
  queramos que tenga nuestro sitio:

    - http://localhost:3000/   -> Página de la lista (plantilla o view: landing)
    - http://localhost:3000/woman/:name -> Página que muestra el detalle (plantilla o view: womanDetail)

*/
//Definino  la DB con la que vamos a trabajar. para pintar las sentencias sql en la consola
const db = Database('./src/data/promos.db', { verbose: console.log });

// Endpoint para servir dinámicamente la landing
server.get('/', (req, res) => {
  //buscamos en la DB los datos que necesito
  const query = db.prepare(`SELECT  * FROM women  ORDER BY  name `);
  //Ejecuto la sentencia SQL
  const womenList = query.all();
  res.render('pages/landing', { womenList });
});

//   Importamos los datos sobre las mujeres referentes de un fichero JSON a la variable women:
//   (ATENCIÓN, todos los require deben ir al principio del fichero,
// lo dejo aquí, pero por razones pedagógicas...)

//const women = require('./data/women.json');

//   Endpoint para servir dinámicamente la página de detalle de
// cada mujer referente de la promo

server.get('/woman/:name', (req, res) => {
  // El valor de la parte variable de la ruta (donde hemos puesto :name)
  // viene en la variable req.params.name ( :name -> name )
  console.log(req.params.name);

  // Buscamos en nuestra lista de referentes, un objeto con los datos de la mujar
  // que tenga el nombre igual que lo que viene en la parte variable de la ruta
  // (sin tener en cuenta mayús/minus)
  /*const womanData = women.find(
    (eachWoman) =>
      eachWoman.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
  );*/
  //Busco en la DB los datos de la mujer especifica
  const query = db.prepare(`SELECT  * FROM women WHERE  name = ? `);
  const womanData = query.get(req.params.name);
  //   womanData es una variable con un objeto con los datos a renderizar
  // (o con los que hidratar la plantilla)
  //  - name
  //  - image
  //  - brief
  //  - description
  console.log(womanData);

  res.render('pages/womanDetail', womanData);
});

server.post('/add', (req, res) => {
  // preparamos sentencia SQL
  const name = 'Petronila';
  const brief = 'nueva mujer';
  const image =
    'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/01/05/16413845847668.png';
  const description = 'nueva mujer';

  // validacion para comprobar si la mujer que estamos buscando esta en la lista
  const selectWomen = db.prepare('SELECT id FROM women where name = ?');

  const foundWomen = selectWomen.get(name);

  if (foundWomen === undefined) {
    const query = db.prepare(
      'INSERT INTO women(name,  description, image, brief) VALUES (?,?,?,? )'
    );

    const insertWomen = query.run(name, brief, image, description);

    res.json({
      success: true,
      // propiedasd de la base de datos que devuelve el valor del ultimo id insertado
      userID: insertWomen.lastInsertRowid,
    });
  } else {
    res.json({
      success: false,
      // propiedasd de la base de datos que devuelve el valor del ultimo id insertado
      msj: ' La mujer ya existe',
    });
  }
});

server.patch('/update', (req, res) => {
  const name = 'Gloria';
  const brief =
    'Coming from the customer service world, I decided to start a new path in technology through web programming. I started with online courses until I trained as a frontend developer at Adalab.';
  const image =
    'https://gloriarodrife.com/static/media/profile_image.1a7377f3802f34f99a37.jpg';
  const description = 'Galician animal lover';
  const id = 5;
  // recibir datos por body params
  const query = db.prepare(
    'UPDATE women SET name = ?, image= ?, brief= ?, description= ? WHERE id = ?'
  );

  // ejecutamos sentencia
  const womenUpdate = query.run(name, image, brief, description, id);

  if (womenUpdate.changes !== 0) {
    res.json({
      error: false,
      // propiedasd de la base de datos que devuelve el valor del ultimo id insertado
      msj: 'Se modifico con exito',
    });
  } else {
    res.json({
      error: false,
      // propiedasd de la base de datos que devuelve el valor del ultimo id insertado
      msj: 'Ha ocurrido algún error',
    });
  }
});

server.patch('/delete', (req, res) => {
  const id = 4;
  // recibir datos por body params
  const query = db.prepare('DELETE FROM women WHERE id = ?');

  // ejecutamos sentencia
  const womenDelete = query.run(id);

  if (womenDelete.changes !== 0) {
    res.json({
      error: false,
      // propiedasd de la base de datos que devuelve el valor del ultimo id insertado
      msj: 'Se elimino con exito',
    });
  } else {
    res.json({
      error: false,
      // propiedasd de la base de datos que devuelve el valor del ultimo id insertado
      msj: 'Ha ocurrido algún error no se ha eliminado',
    });
  }
});
