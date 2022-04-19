import '../styles/App.css';
import { useState } from 'react';

function App() {
  // hook
  const [mode, setMode] = useState('');

  const handleMode = (ev) => {
    const current = ev.currentTarget.parentNode;

    if (mode === 'dark') {
      setMode('ligth');
      current.classList.remove('dark');
      current.classList.add('ligth');
    } else {
      setMode('dark');
      current.classList.add('dark');
    }
  };

  return (
    <div className="App">
      <button onClick={handleMode}>Des / Activar dark</button>

      <p>Tienes activado el {mode}</p>
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sequi
        ex omnis impedit illum iusto necessitatibus laborum rerum fugit nostrum,
        pariatur, inventore, assumenda eum id! Veniam dignissimos odio rem quam!
      </p> */}
    </div>
  );
}

export default App;
