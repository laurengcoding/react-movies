import { useParams } from "react-router-dom";
import { movies } from "../../data";

export default function MovieDetailPage() {
  let { movieName } = useParams();
  const movieDetails = movies.find((movie) =>  movie.title === movieName
  );
    return (
      <div>
        <h1>{movieDetails.title}</h1>
        <h3>{movieDetails.releaseDate}</h3>
        <p>Cast: {movieDetails.cast.join(', ')}</p>
        <img src={movieDetails.posterPath} alt="Movie Poster" />
      </div>
    );
  }
  