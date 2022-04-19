import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    const contador = number + 1;
    setNumber(contador);
  };
  const handleRest = () => {
    const contador = number - 1;
    setNumber(contador);
  };
  return (
    <div className="App">
      <button className="button" onClick={handleNumber}>
        +
      </button>
      <p>Contador: {number} </p>
      <button
        className="button
"
        onClick={handleRest}
      >
        -
      </button>
    </div>
  );
}

export default App;
