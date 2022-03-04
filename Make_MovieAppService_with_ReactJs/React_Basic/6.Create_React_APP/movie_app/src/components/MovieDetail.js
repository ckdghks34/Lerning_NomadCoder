import PropTypes from "prop-types";

function MovieDetail({ title, coverImage, year, runtime, genres, rating, description_intro }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImage} alt={title}></img>
      <ul>
        <li>
          <p>
            <strong>Year</strong> : {year}
          </p>
        </li>
        <li>
          <p>
            <strong>Running time</strong> : {runtime} (min)
          </p>
        </li>
        <li>
          <p>
            <strong>Rating</strong> : {rating}
          </p>
        </li>
        <li>
          <p>
            <strong>Genres </strong> :
          </p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </li>
        <li>
          <p>
            <strong>Description</strong> :{" "}
          </p>
          <p>{description_intro}</p>
        </li>
      </ul>
    </div>
  );
}

/*

*/
MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  description_intro: PropTypes.string.isRequired,
};

export default MovieDetail;
