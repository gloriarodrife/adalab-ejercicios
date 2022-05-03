import { Link } from 'react-router-dom';


function MovieItem(props) {
    return (
        <>

            <li key={props.movie.id} className="movies__item" >
                <h2 className="movies__title">{props.movie.name}</h2>
                <p>{props.movie.synopsis}</p>
                <Link to={`/movie/${props.movie.id}`}> Más info</Link>

            </li>


        </>
    );
}

export default MovieItem;
