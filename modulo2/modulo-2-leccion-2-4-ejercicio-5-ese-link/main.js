'use strict';

// ¿Recuerdas el proyecto del módulo uno? Los enlaces de la cabecera de nuestra página tenían un problema, como nuestra cabecera era flotante, al navegar a una sección parte del contenido de quedaba oculto tras la cabecera. Vamos a animarnos y a preparar un HTML muy sencillo con: una cabecera flotante que contenga un menu con tres enlaces y tres secciones con bastante 'lorem ipsum' para que haya un scroll generoso. El primer paso para arreglar este comportamiento es escuchar el click en los enlaces y prevenir el comportamiento por defecto.Hhhmm, pero entonces no pasa nada al hacer click... Correcto, ¡ejercicio terminado!

const li1 = document.querySelector('.js-li-item1');
const li2 = document.querySelector('.js-li-item2');
const li3 = document.querySelector('.js-li-item3');

const handleLi = (e) => {
  e.preventDefault();
  console.log('Li');
};

li1.addEventListener('click', handleLi);
li2.addEventListener('click', handleLi);
li3.addEventListener('click', handleLi);
