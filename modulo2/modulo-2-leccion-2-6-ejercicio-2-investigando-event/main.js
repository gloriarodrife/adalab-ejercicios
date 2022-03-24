const adalaber1 = {
  name: 'Susana',
  age: 34,
  profesion: ' periodista',
};

const button = document.querySelector('.button');
const input = document.querySelector('.input');

button.addEventListener('click', (event) => {
  button.classList.add('color');
  console.dir(button);
});

console.dir(input);
// value = ""
// NodeNAme = "INPUT"
// required = false
