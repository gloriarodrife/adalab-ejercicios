import '../styles/App.css';
import { useState } from 'react';

function App() {
  // hook
  const [mode, setMode] = useState('ligth');

  const handleMode = (ev) => {
    const current = ev.currentTarget.parentNode;

    if (mode === 'dark') {
      setMode('ligth');
      current.classList.remove('dark');
    } else {
      setMode('dark');
      current.classList.add('dark');
    }
  };

  const renderDarkModeText = () => {
    if (mode === 'dark') {
      return <p>Tienes activado el {mode}</p>;
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <button onClick={handleMode}>Des / Activar dark</button>
      {renderDarkModeText()}
    </div>
  );
}

export default App;
