import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserList from './UserList';
import Filters from './Filters';
function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterCountry, setFilterCountry] = useState('All');

  useEffect(() => {
    callToApi().then((response) => setDataUsers(response));
  }, []);

  // Creamos funcion para obtener datos del filtro de la ciudad
  const handleFilterCountry = (value) => {
    setFilterCountry(value);
  };

  // Variable que enviamos en la que los datos ya estan filtrados
  // Filtra los usuarios cuyo pais sea igual al de la variable de estado
  const UserFilters = dataUsers.filter((user) => {
    return filterCountry === 'All' ? dataUsers : user.country === filterCountry;
  });

  // Funcion que permite sacar solo las ciudades de los usuarios

  const getCities = () => {
    // Creo un nuevo array con todaslas ciudades
    const userCities = dataUsers.map((user) => user.city);
    console.log(userCities);
  };
  getCities();
  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      {/* Envio el array con la lista de usuarios para poderpintar la lista  */}

      <div className="col2">
        <Filters handleFilterCountry={handleFilterCountry} />
        <UserList users={UserFilters} />
      </div>
    </>
  );
}

export { App };
