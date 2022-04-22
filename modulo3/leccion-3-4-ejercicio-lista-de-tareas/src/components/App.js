import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [searchTask, setSearchTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '123', task: 'Comprar harina, jamón y pan rallado', completed: true },
    { id: '124', task: 'Hacer croquetas ricas', completed: true },
    { id: '125', task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      id: '127',
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

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
          id={task.id}
          key={task.id}
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
    </div>
  );
}

export default App;
