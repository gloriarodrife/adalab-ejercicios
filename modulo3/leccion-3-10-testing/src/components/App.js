import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getMovies from "../services/fetchMovies";
import localStorage from "../services/localStorage";
import Header from './Header';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import MovieDetail from './MovieDetail';
import Home from './Home';
import ImageReader from './ImageReader';

function App() {
  // Variable estado que guardará un array de objetos con datos de películas
  // Al principio, estará vacio (valor por defecto: [])
  const [movies, setMovies] = useState(localStorage.get("movies", []));


  // Variable estado para tener los elementos del formulario controlados.
  // Usamos un objeto con una propiedad para cada elemento que guardará su value.
  const [newMovie, setNewMovie] = useState({
    id: '',
    name: '',
    synopsis: ''
  });

  // Usamos un useEffect para ejecutar el fetch() una sóla vez al cargar la página.
  // El fetch() está en la función getMovies() del servicio fetchMovies.
  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then(data => {
        localStorage.set("movies", data);
        setMovies(data);
      })
    }
  }, []);

  const addMovie = () => {
    // Añade una nueva película al array de películas con los datos
    // que se han recogido en el formulario.

    setMovies([...movies, newMovie]);
  }

  // Función que se encarga de cambiar las variables estado.
  // Al ejecutarla, tenemos que indicar que propiedad/variable queremos cambiar (newTitle, newSynopsis)
  // en el primer parámetro y cual va a ser el nuevo valor, del segundo parámetro.
  // La función va a guardar el valor en la propiedad que se indique en el primer parámetro:
  const changeData = (nombreInput, valueInput) => {
    setNewMovie({
      ...newMovie,
      [nombreInput]: valueInput
    });
  }

  /**
   * http://localhost:3000/movies/list
   * http://localhost:3000/movies/new
   * http://localhost:3000/
   */


  //buscar cual es la peli que quiero mostrar en detalle
  const { pathname } = useLocation(); // Obtengo la ruta de la aplicacion

  const dataPath = matchPath("/movie/:id", pathname); //busco si coincide con la ruta dinámica 

  const movieId = dataPath !== null ? dataPath.params.id : null; //buscando el id de la película

  const movieFound = movies.find(item => item.id === movieId); //busco toda la info de la peli

  const handleImage = (imageData) => {
    console.log(imageData);
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Home></Home>} />

        <Route path='/movies/list' element={<MovieList moviesList={movies} />} />
        <Route
          path='/movies/new'
          element={
            <MovieForm
              newMovie={newMovie}
              addMovie={addMovie}
              changeData={changeData}
            />} />
        <Route
          path='/movie/:id' element={<MovieDetail movie={movieFound} />} //paso la info de la pelicula
        />
      </Routes>


    </div>
  );
}

export default App;
