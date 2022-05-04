import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function MovieItem(props) {
    const { id, name, synopsis } = props.movie;
    return (
        <>
            <li key={id} className="movies__item" >
                <h2 className="movies__title">{name}</h2>
                <p>{synopsis}</p>
                <Link to={`/movie/${id}`}> Más info</Link>

            </li>


        </>
    );
}

MovieItem.defaultProps = {
    movie: {
        id: "Not defined",
        name: "Not defined",
        synopsis: "Not defined"
    }
}


MovieItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        synopsis: PropTypes.string
    })
}


export default MovieItem;
