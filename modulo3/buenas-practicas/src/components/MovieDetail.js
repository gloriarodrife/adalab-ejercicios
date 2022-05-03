import { useParams } from 'react-router';
import '../styles/MovieList.scss';

function MovieDetail(props) {
  const { id } = useParams();

  return (
    <>
      <li key={props.movie.id} className="movies__item movies__detail">
        <h2 className="movies__title">{props.movie.name}</h2>
        <p>{props.movie.synopsis}</p>
        <p>{props.movie.year}</p>
      </li>
    </>
  );
}
MovieDetail.defaultProps = {
  movie: {
    id: 'Not defined',
    name: 'Not defined',
    synopsis: 'Not defined',
    year: 'Not defined',
  },
};
export default MovieDetail;
