import '../styles/MovieList.scss';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

function MovieList(props) {

    const { moviesList } = props;

    const htmlMovies = moviesList.map((movieItem, index) => {
        return <MovieItem className="movies__list" key={index} movie={movieItem} />
    });

    return (
        <>
            {
                moviesList.length === 0 ?
                    <p>Cargando datos...</p> :
                    <ul className="movies__list">
                        {htmlMovies}
                    </ul>
            }

        </>


    );
}

MovieList.defaultProps = {
    moviesList: []
}
MovieList.protoType = {
    moviesList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MovieList;