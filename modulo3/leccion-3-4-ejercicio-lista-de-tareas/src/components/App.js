import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [searchTask, setSearchTask] = useState('');
  const [newTask, setNew] = useState('');
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const handleNewTask = (ev) => {
    setNew(ev.currentTarget.value);
  };

  const handleNew = (e) => {
    e.preventDefault();

    const tasksNew = {
      task: newTask,
      completed: false,
      id: '',
    };

    const nuevoArray = [...tasks, tasksNew];

    setTasks(nuevoArray);
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

    const task = tasks.find((task) => task.id === taskId);

    task.completed = !task.completed;

    setTasks([...tasks]);
  };

  const handleInput = (ev) => {
    setSearchTask(ev.target.value);
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
