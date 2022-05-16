const express = require('express');
const cors = require('cors');
const data = require('./data/users.json');
// create server
const app = express();

app.use(cors());
app.use(express.json());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get('/users/:userId', (req, res) => {
  console.log(req.params);

  const character = () => {
    const foundCharacter = data.results.find(
      (character) => character.id === parseInt(req.params.userId)
    );
    if (foundCharacter) {
      res.json(foundCharacter);
    } else {
      res.json({ result: 'Personaje no encontrado' });
    }
  };

  res.json(character());
});

app.get('/users/:userId/episodes', (req, res) => {
  const character = () => {
    const foundCharacter = data.results.find(
      (character) => character.id === parseInt(req.params.userId)
    );
    if (foundCharacter) {
      res.json(foundCharacter.episode);
    } else {
      res.json({ result: 'Personaje no encontrado' });
    }
  };

  res.json(character());
});
