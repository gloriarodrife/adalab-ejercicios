'use strict';

const radioList = document.querySelectorAll('.js_radio');
const body = document.querySelector('.js_body');

for (const radioElement of radioList) {
  radioElement.addEventListener('click', (event) => {
    const theme = event.target.value;
    localStorage.setItem('theme', theme);

    if (event.target.value === 'light') {
      body.classList.add('light');
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
    }
  });
}

const themeLocalStorage = localStorage.getItem('theme');
body.classList.add(themeLocalStorage);
