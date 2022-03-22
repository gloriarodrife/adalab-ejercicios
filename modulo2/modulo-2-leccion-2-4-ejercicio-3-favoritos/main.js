'use strict';

// Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.

const sectionAboutElement = document.querySelectorAll('.teacher');

for (const teacher of sectionAboutElement) {
  teacher.addEventListener('click', (event) => {
    teacher.classList.toggle('teacher--selected');

    // con teacher buscamos la clase favorite ddentro de cada tecaher
    const text = teacher.querySelector('.favorite');
    if (text.innerHTML === 'Añadir') {
      text.innerHTML = 'Quitar';
    } else if (text.innerHTML === 'Quitar') {
      text.innerHTML = 'Añadir';
    }
  });
}

// Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
