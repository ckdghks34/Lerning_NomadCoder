import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [detail, setMoviesDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMoviesDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  });

  return (
    <div>
      <div>
        <h1>Detail</h1>
        <hr />
      </div>
      <div>
        {loading ? (
          <h2>loading...</h2>
        ) : (
          <MovieDetail
            title={detail.title}
            coverImage={detail.medium_cover_image}
            year={detail.year}
            runtime={detail.runtime}
            genres={detail.genres}
            rating={detail.rating}
            description_intro={detail.description_intro}
          />
        )}
      </div>
    </div>
  );
}

export default Detail;
