import { movies } from "../../data";
import './ActorCard.css';

export default function ActorCard() {

    const actors = Array.from(new Set(movies.map((movie) => movie.cast).flat()));

    return (
        <ul>Actors:
            <div className="actorsContainer">
            {actors.map((actor) => (
                <li className="actor">{actor}</li>
                ))}
            </div>
        </ul>
    )
}