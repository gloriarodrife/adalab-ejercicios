'use strict';

// Creamos una constante en la cual guardamos el valor de la llamada a la API
const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json(),
  );

const dogsElement = document.querySelector('.dogs');

// Funcion   que crea las promesas de las peticiones al servidor
function getBreedImages() {
  // const promises = [createPromise(), createPromise()];

  dogsElement.innerHTML = '';

  const numberOfDogs = 5;
  const promises = [];
  for (let index = 0; index < numberOfDogs; index++) {
    promises.push(createPromise());
  }

  Promise.all(promises).then((responses) => {
    for (let i = 0; i < promises.length; i++) {
      const imgElement = document.createElement('img');
      const imgUrl = responses[i].message;
      imgElement.src = imgUrl;

      // Añadimos la imagen del perro al contenedor de los perros
      dogsElement.appendChild(imgElement);
    }
  });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);
