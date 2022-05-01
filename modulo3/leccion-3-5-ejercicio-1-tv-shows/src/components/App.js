import '../styles/App.css';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
import Loader from './Loader';

function App() {
  const [search, setSearch] = useState('');
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    setIsLoading(true);
  };

  useEffect(() => {
    callToApi(search).then((response) => {
      setTvShows(response);
      setIsLoading(false);
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
      <Loader isEditMode={isLoading} />
      <ul>
        {tvShows.map((show) => (
          <li key={show.id}>{show.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
