'use strict';

const users = [
  {
    name: 'Lola',
    lastname: 'Perez',
    phone: '673546654',
  },
  {
    name: 'Laura',
    lastname: 'Ruiz',
    phone: '673768432',
  },
  {
    name: 'Roberto',
    lastname: 'Pardino',
    phone: '673879098',
  },
];

const select = document.querySelectorAll('.select');
const inputName = document.querySelector('.name');
const inputLastname = document.querySelector('.lastname');
const inputPhone = document.querySelector('.phone');

function inputValue(position) {
  inputName.value = users[position].name;
  inputLastname.value = users[position].lastname;
  inputPhone.value = users[position].phone;
}

for (const item of select) {
  item.addEventListener('change', (event) => {
    const selectElement = event.target;

    if (selectElement.value === 'Lola') {
      inputValue(0);
    }
    if (selectElement.value === 'Laura') {
      inputValue(1);
    }
    if (selectElement.value === 'Roberto') {
      inputValue(2);
    }
  });
}
