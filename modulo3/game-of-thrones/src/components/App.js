import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
function App() {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState('');
  // Llamamaos a la API para obtener los datos que queremos
  useEffect(() => {
    callToApi(search).then((response) => setdata(response));
  }, [search]);

  const handleInput = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };
  const renderList = data.map((user) => {
    return (
      <li key={user.id} id={user.id}>
        <img src={user.image} alt={user.name} />

        <h2>
          {user.name} {user.lastname}
        </h2>
      </li>
    );
  });
  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <ul>{renderList}</ul>
    </div>
  );
}

export { App };
