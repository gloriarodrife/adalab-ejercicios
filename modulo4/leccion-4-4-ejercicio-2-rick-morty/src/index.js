const express = require('express');
const cors = require('cors');

// create server
const server = express();

server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// STATIC SERVER: listen files in public folder
const staticServerPath = './public';
server.use(express.static(staticServerPath));
