'use strict';

const text = document.querySelector('.js-text');

text.addEventListener('mouseover', () => {
  console.log('ups');
  text.innerHTML += ` <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero
    consequuntur harum nostrum. Ducimus rem libero commodi quod repudiandae
    delectus voluptatem minus at beatae illo quae voluptate, quisquam corrupti
    vel.
  </p>`;
});
