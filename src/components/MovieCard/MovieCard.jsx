import "./MovieCard.css";

export default function MovieCard({ posterPath, title, releaseDate }) {
    const cardStyle = {
        backgroundImage: `url(${posterPath})`,
    };

    return (
        <div className="movieCard" style={cardStyle}>
            <h1 className="movieTitle">{title}</h1>
            <h3 className="releaseDate">{releaseDate}</h3>
        </div>
    );
}