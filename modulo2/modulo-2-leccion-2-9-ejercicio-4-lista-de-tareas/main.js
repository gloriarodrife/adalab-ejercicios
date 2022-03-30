const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

function chore() {
  let chore = [];
  tasks.forEach((item) => {
    chore.push(item.name);
  });
  return chore;
}

const chores = chore();
console.log(chores);
