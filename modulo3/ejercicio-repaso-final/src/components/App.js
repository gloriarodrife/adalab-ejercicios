import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import ls from '../services/localStorage';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
function App() {
  const [data, setdata] = useState([]);
  const [filters, setFilters] = useState({ city: 'all' });

  // Llamamaos a la API para obtener los datos que queremos
  useEffect(() => {
    callToApi().then((response) => setdata(response));
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFilters({ ...filters, [name]: value });
  };

  const renderList = data.map((user, index) => {
    return (
      <li
        key={user.id !== null ? user.id : index}
        id={user.id !== null ? user.id : index}
      >
        <img
          src={user.photo.large || user.photo.medium || user.photo.thumbnail}
          alt="user"
        />
        <section>
          <h2>
            {user.name} {user.lastname}
          </h2>
          <p>
            Vive en {user.city} y tiene {user.age}
          </p>
        </section>
      </li>
    );
  });
  return (
    <div className="App">
      <form>
        <section>
          <label htmlFor="city">Filtrar por ciudad</label>
          <select name="city" onChange={handleInput}>
            <option>Todos</option>
            {data.map((data, index) => (
              <option key={index} value={data.city}>
                {data.city}
              </option>
            ))}
          </select>
        </section>
      </form>
      <ul>{renderList}</ul>
    </div>
  );
}

export { App };
