import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./../css/Movie.module.css";
function Movie({ id, coverImage, title, genres, summary }) {
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title}></img>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 255)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie;
