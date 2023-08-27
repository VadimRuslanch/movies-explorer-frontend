import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie, isSave, onSetLike, onDeleteLike }) {
    const location = useLocation();

    const handleLikeClick = () => {
        onSetLike(movie);
    };

    const handleDislikeClick = () => {
        onDeleteLike(movie);
    }

    const transformDuration = (time) => {
        const hour = Math.trunc(time / 60);
        const min = time % 60;
        if (hour !== 0) {
            return `${hour + ' ч. ' + min + ' мин.'}`;
        } else {
            return `${min + ' мин.'}`
        }
    }

    return (
        <article className="movie">
            <a href={movie.trailerLink} target='_blank' rel="noopener noreferrer">
                <img
                    className="movie__img"
                    src={movie.image}
                    alt="menu"
                />
            </a>
            <div className="movie__inner">
                <div className="movie__inner-info">
                    <p className="movie__inner-name">{movie.nameRU}</p>
                    <p className="movie__inner-time">{transformDuration(movie.duration)}</p>
                </div>
                {location.pathname === '/movies' ?
                    <button type="button" onClick={isSave ? handleDislikeClick : handleLikeClick} className={`movie__inner-like ${isSave ? "movie__inner-like_active" : ""}`} /> :
                    <button type="button" onClick={handleDislikeClick} className="movie__inner-close" />
                }

            </div>
        </article>
    )
}