import '../styles/App.scss';
import '../styles/Header.scss';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
// import ls from '../services/localStorage';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
// import PropTypes from 'prop-types';
import Header from './Header';
import CharactersList from './CharactersList';
import CharacterDetail from './CharacterDetail';
function App() {
  const [data, setData] = useState([]);
  const [specieSelected, setSpecieSelected] = useState('All');

  // Recojo los datos de la API y los meto en data
  useEffect(() => {
    callToApi().then((response) => setData(response));
  }, []);

  const handleSpecieSelect = (value) => {
    setSpecieSelected(value);
  };

  const dataFilterSpecie = data.filter((character) => {
    if (specieSelected === 'All') {
      return data;
    } else {
      return character.species === specieSelected;
    }
  });
  //buscar cual es la peli que quiero mostrar en detalle
  const { pathname } = useLocation(); // Obtengo la ruta de la aplicacion

  const dataPath = matchPath('/character/:id', pathname); //busco si coincide con la ruta dinámica

  const characterId = dataPath !== null ? dataPath.params.id : null; //buscando el id del personaje

  const characterFound = data.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log({ characterFound });
  return (
    <>
      <Header
        specieSelected={specieSelected}
        handleSpecieSelect={handleSpecieSelect}
      />
      {/* // Buscar por personaje con un input */}
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<CharactersList data={dataFilterSpecie} />}
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail character={characterFound} />}
          />
        </Routes>
      </main>
    </>
  );
}

export { App };
