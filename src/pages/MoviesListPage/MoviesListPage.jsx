import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";
import "./MovieListPage.css"

export default function MoviesListPage({ movies }) {

    const movieInfo = movies.map((movie) => (
        <Link to={`/movies/${movie.title}`}>
            <MovieCard posterPath={movie.posterPath} title={movie.title} releaseDate={movie.releaseDate} />
        </Link>
    ))


    return (
        <div className="movieInfo">
            {movieInfo}
        </div>
        
    )
}