'use strict';

const titleElement = document.querySelector('.title');
titleElement.innerHTML = titleElement.innerHTML + ' mundo';
// Esto es lo mismo que:
titleElement += 'mundo';
