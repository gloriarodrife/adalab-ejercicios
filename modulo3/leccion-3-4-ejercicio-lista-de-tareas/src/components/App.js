import { useState } from 'react';
import '../styles/App.css';
import ls from '../services/localStorage';

function App() {
  const [searchTask, setSearchTask] = useState('');

  const defaultTasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];
  const tasksCache = ls.get('task', defaultTasks);
  const [tasks, setTasks] = useState(tasksCache);

  const [newTask, setNew] = useState('');
  const handleNewTask = (ev) => {
    setNew(ev.currentTarget.value);
  };

  const handleNew = (e) => {
    e.preventDefault();
    const tasksNew = {
      task: newTask,
      completed: false,
    };

    const nuevoArray = [...tasks, tasksNew];

    setTasks(nuevoArray);
    ls.set('task', nuevoArray);
  };
  const renderTasksCmpleted = () => {
    return (
      <div>
        <p>Tareas totales: {tasks.length}</p>
        <p>
          Tareas completadas: {tasks.filter((task) => task.completed).length}
        </p>
        <p>
          Tareas pendientes: {tasks.filter((task) => !task.completed).length}
        </p>
      </div>
    );
  };

  const hadleComplete = (ev) => {
    const taskId = ev.currentTarget.id;

    const task = tasks[taskId];

    task.completed = !task.completed;

    setTasks([...tasks]);
  };

  const handleInput = (ev) => {
    setSearchTask(ev.target.value);
  };
  const handelReset = (e) => {
    const buttonId = e.target.id;
    tasks.splice(buttonId, 1);
    ls.set('task', tasks);
  };

  const renderTasks = () => {
    return tasks
      .filter((task) =>
        task.task.toLowerCase().includes(searchTask.toLowerCase())
      )
      .map((task, index) => (
        <li
          id={index}
          key={index}
          className={task.completed ? 'crossOut' : ''}
          onClick={hadleComplete}
        >
          {task.task}
          <button id={index} onClick={handelReset}>
            X
          </button>
        </li>
      ));
  };
  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <input type="text" onChange={handleInput} value={searchTask} />
      <ul>{renderTasks()}</ul>
      {renderTasksCmpleted()}
      <input type="text" onChange={handleNewTask} />
      <button onClick={handleNew}>+</button>
    </div>
  );
}

export default App;
