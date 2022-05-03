import '../styles/MovieList.scss';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

function MovieList(props) {
  const htmlMovies = props.moviesList.map((movieItem, index) => {
    return <MovieItem className="movies__list" key={index} movie={movieItem} />;
  });

  return (
    <>
      <ul className="movies__list">{htmlMovies}</ul>
    </>
  );
}

// Definimos que por defecto sea un listado vacio []
MovieList.defaultProps = {
  moviesList: [],
};
MovieList.PropType = {
  moviesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
