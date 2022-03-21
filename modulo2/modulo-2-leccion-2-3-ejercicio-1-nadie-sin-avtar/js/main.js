'use strict';

// avatar por defecto
const DEFAULT_AVATAR =
  'https://media.istockphoto.com/photos/beautiful-portrait-dog-breed-border-collie-on-the-brown-ground-with-picture-id1316582288?b=1&k=20&m=1316582288&s=170667a&w=0&h=CQC2cAk1F7H2-4DiLxe164gfa5xxz1_m24QfZGjyDTI=';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

// Guardamos la referencia del nodo de img en una constante
const img = document.querySelector('.user__avatar');
// Agregamos el atributo src en la etiqueta img
img.src = userAvatar;
console.log(img);

// Mostrar avatar de usuario o avatar por defecto
img.src = userAvatar || DEFAULT_AVATAR;
