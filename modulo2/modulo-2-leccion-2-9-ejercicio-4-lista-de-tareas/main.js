'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

function renderMessage() {
  const messageElement = document.querySelector('.message');

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const message = `Tienes ${totalTasks} tareas. ${completedTasks} completadas y ${pendingTasks} por realizar.`;

  messageElement.innerHTML = message;
}

function renderTaskList() {
  const taskListElement = document.querySelector('.js_list');

  let taskLis = '';

  tasks.forEach((task) => {
    if (task.completed) {
      taskLis += `
        <li class="completed js_task">
          <input type="checkbox" name="task" checked>
          La tarea: ${task.name}
        </li>
      `;
    } else if (!task.completed) {
      taskLis += `
        <li class="js_task">
          <input type="checkbox" name="task">
          La tarea: ${task.name}
        </li>
      `;
    }
  });

  taskListElement.innerHTML += taskLis;
}

function addInteraction() {
  const liTaskList = document.querySelectorAll('.js_task');

  liTaskList.forEach((liTaskElement, index) => {
    const inputElement = liTaskElement.querySelector('input');

    inputElement.addEventListener('change', (event) => {
      const isElementChecked = event.currentTarget.checked;
      tasks[index].completed = isElementChecked;
      liTaskElement.classList.toggle('completed');
      renderMessage();
    });
  });
}

renderMessage();
renderTaskList();
addInteraction();
