'use strict';

const list = document.querySelector('.js_list');

const liValue = [1, 2, 3];

for (const item of liValue) {
  const nodeLi = document.createElement('li');
  const newContent = document.createTextNode(item);
  nodeLi.appendChild(newContent);
  list.appendChild(nodeLi);
  console.log(list);
}
