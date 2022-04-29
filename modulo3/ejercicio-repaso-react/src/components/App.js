import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
// import ls from '../services/localStorage';
// import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import RepoList from './RepoList';

function App() {
  // Creamos constante en la cual guardamos los datos de la Api
  const [data, setData] = useState([]);

  // Usamos useEffect con [] indicamos que se ejecute la funcion una osla vez cuando carge la pagina
  // Si no tiene [] cada vez que se renderice la página se ejecuta
  // Se ejecuta cuando cambia una variable de estado
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  const handleDeleteRepo = (id) => {
    // Buscamos la posicin del elemento que queremos eliminar
    // parseInt el id por que el id del button es tipo string
    const findIndex = data.findIndex((repo) => repo.id === parseInt(id));
    // Elimino ese elemento
    data.splice(findIndex, 1);
    // Meto el nuevo array con el elemento eliminado
    setData([...data]);
  };
  return (
    <div className="App">
      <main>
        <Header
          subtitle="Clase de resolución de dudas"
          lesson="Modulo 3 leccion"
          number="3.8"
        />
        <section className="controls"></section>
        <section className="results">
          <RepoList listData={data} deleteRepo={handleDeleteRepo} />
        </section>
      </main>
    </div>
  );
}

export { App };
