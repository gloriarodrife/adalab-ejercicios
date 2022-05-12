const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3005;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post('/user', (req, res) => {
  console.log('Body params:', req.body);
  // console.log('Body param userName:', req.body.userName);
  // console.log('Body param userEmail:', req.body.userEmail);

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });

  res.json({
    result: 'User created',
  });
});

server.post('/users', (req, res) => {
  const filterByName = req.body.filterByName;
  const filterByEmail = req.body.filterByEmail;
  console.log(filterByEmail);
  const newUsers = users.filter((user) =>
    user.name === filterByName || user.email === filterByEmail ? true : false
  );
  console.log(newUsers);

  res.json({ result: newUsers });
});
