import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ItemsList from './ItemsList';
// import ls from '../services/localStorage';
// import { Link, Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
function App() {
  const [data, setdata] = useState([]);
  // Llamamaos a la API para obtener los datos que queremos
  useEffect(() => {
    callToApi().then((response) => setdata(response));
  }, []);

  const handleInput = (event) => {
    const searchValue = event.target.value;
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <ItemsList data={data} />
    </div>
  );
}

export { App };
