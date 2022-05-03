import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
function App() {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    callToApi().then((response) => setDataUsers(response));
  }, []);

  console.log(dataUsers);
  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
    </>
  );
}

export { App };
