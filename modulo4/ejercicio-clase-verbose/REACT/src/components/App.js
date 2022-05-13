import { useState, useEffect } from 'react';
import NameList from './NameList';
import '../styles/App.scss';

function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/names')
      .then((response) => response.json())
      .then((data) => {
        setNames(data);
      })
      .catch((error) => {
        console.dir(error);
        setError(error);
      });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setNames([...names, newName]);
    setNewName('');
  };

  const handleChange = (ev) => {
    setNewName(ev.target.value);
  };

  const getErrorLink = (errorMessage) => {
    return `https://stackoverflow.com/search?q=${encodeURIComponent(
      error.message
    )}`;
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">Adalabers</h1>
      </header>
      <main className="page">
        <h2 className="subtitle">...que molan</h2>

        {!!error && (
          <div className="mt-1 mb-1">
            <p className="text--error">{error.message}</p>
            <a href={getErrorLink(error.message)} title="Ver en StackOverflow">
              Más info
            </a>
          </div>
        )}
        <NameList names={names} />

        <form className="form mt-1 mb-1" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="name">
            Nuevo nombre:
          </label>
          <input
            className="form__input-text"
            type="text"
            placeholder="Ej: MariCarmen"
            name="newName"
            id="name"
            onChange={handleChange}
            value={newName}
          />
          <button className="form__btn block" title="Guardar el nuevo nombre">
            Guardar
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
