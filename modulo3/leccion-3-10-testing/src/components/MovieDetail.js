import { useParams } from 'react-router';
import '../styles/MovieList.scss';
import PropTypes from 'prop-types';

function MovieDetail(props) {

    const { id, name, year, synopsis } = props.movie;


    return (
        <>
            <li key={id} className="movies__item movies__detail" >
                <h2 className="movies__title">{name}</h2>
                <p>{synopsis}</p>
                <p>{year}</p>
            </li>
        </>
    );
}

MovieDetail.defaultProps = {
    movie: {
        id: "Not defined",
        name: "Not defined",
        synopsis: "Not defined",
        year: "Not defined",
    }
}


MovieDetail.propTypes = {
    movie: PropTypes.object
}


export default MovieDetail;