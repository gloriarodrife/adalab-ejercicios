fetch('http://localhost:3000/new-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(),
})
  .then((response) => response.json())
  .then((data) => data);
