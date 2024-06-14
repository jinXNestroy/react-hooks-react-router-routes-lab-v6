import { Link } from 'react-router-dom';

function MovieCard({ id, title }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
}

export default MovieCard;
