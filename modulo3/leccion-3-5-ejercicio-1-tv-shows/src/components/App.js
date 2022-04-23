import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';

function App() {
  const [search, setSearch] = useState('');
  const [tvShows, setTvShows] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    callToApi(search).then((response) => {
      setTvShows(response);
    });
  }, [search]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await callToApi(search);
  //     setTvShows(response);
  //   }
  //   fetchData();
  // }, [search]);

  return (
    <div className="App">
      <input type="text" name="search" onChange={handleInput} />
      <ul>
        {tvShows.map((show) => (
          <li key={show.id}>{show.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
