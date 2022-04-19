import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('');

  const handleMode = (ev) => {
    const current = ev.currentTarget.parentNode;
    setMode('dark');
    current.classList.add('dark');
  };
  const handleModeLigth = (ev) => {
    const current = ev.currentTarget.parentNode;
    setMode('ligth');
    current.classList.remove('dark');
    current.classList.add('ligth');
  };

  return (
    <div className="App">
      <button onClick={handleMode}>Activar dark</button>
      <button onClick={handleModeLigth}>Desactivar dark</button>
      <p>Tienes activado el {mode}</p>
    </div>
  );
}

export default App;
