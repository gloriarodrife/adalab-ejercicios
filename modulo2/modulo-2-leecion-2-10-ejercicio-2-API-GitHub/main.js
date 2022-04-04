'use strict';

const button = document.querySelector('.js_button');
const input = document.querySelector('.js_input');

function getGitHub() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name !== undefined) {
        document.querySelector('.js_name').innerHTML = data.name;
      } else {
        document.querySelector(
          '.js_name',
        ).innerHTML = `No tenemos ningún usuario con ese nombre`;
      }
      document.querySelector('.js_img').src = data.avatar_url;
      document.querySelector('.js_number').innerHTML = data.public_repos;
    });
}

button.addEventListener('click', getGitHub);
