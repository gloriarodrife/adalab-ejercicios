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
  const [filterCities, setFilterCities] = useState([]);

  useEffect(() => {
    callToApi().then((response) => setDataUsers(response));
  }, []);

  // Creamos funcion para obtener datos del filtro de la ciudad
  const handleFilterCountry = (value) => {
    setFilterCountry(value);
  };

  // Creamos funcion en la que metemos las ciudades que recibimos
  // Comprobamos que no se repitan
  const handleFilterCity = (value) => {
    if (filterCities.includes(value)) {
      // Si filterCities NO !== tiene la ciudad que le paso, que meta la meta
      const newCities = filterCities.filter((city) => city !== value);
      setFilterCities(newCities);

      // Otra manera con el splice
      // const positionCity = filterCities.indexOf(value);
      // const newCities = filterCities.splice(1, positionCity);
      // setFilterCities(newCities);
    } else {
      setFilterCities([...filterCities, value]);
    }
  };
  // Variable que enviamos en la que los datos ya estan filtrados
  // Filtra los usuarios cuyo pais sea igual al de la variable de estado
  const UserFilters = dataUsers
    .filter((user) => {
      return filterCountry === 'All'
        ? dataUsers
        : user.country === filterCountry;
    })
    .filter((user) => {
      // Si la longiud del filtro de ciudad es cero devuelvelos todos
      if (filterCities === 0) {
        return true;
      } else {
        return filterCities.includes(user.city);
      }
    });

  // Funcion que permite sacar solo las ciudades de los usuarios
  // Se la mandamos a filterCity
  const getCities = () => {
    // Creo un nuevo array con todaslas ciudades
    const userCities = dataUsers.map((user) => user.city);
    // const uniqueCities = userCities.filter((item, index) => {
    //   return userCities.indexOf(item) === index;
    // });
    //Creamos una constante y aplicamos el objeto set (estructura de datos)
    const dataUniqueCities = new Set(userCities);
    // El objeto que obtenemos lo convertimos en un array
    let uniqueCities = [...dataUniqueCities];
    return uniqueCities;
  };

  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      {/* Envio el array con la lista de usuarios para poderpintar la lista  */}

      <div className="col2">
        <Filters
          handleFilterCountry={handleFilterCountry}
          handleFilterCity={handleFilterCity}
          cities={getCities()}
        />
        <UserList users={UserFilters} />
      </div>
    </>
  );
}

export { App };
