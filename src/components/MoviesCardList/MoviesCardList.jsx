import MoviesCard from "../MoviesCard/MoviesCard";
import { DEVICE_PARAMS } from "../../utils/constants";
import useScreenWidth from "../../hooks/useScreenWidth";
import { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({ seveMovie, onDeleteLike, moviesList, isLike, onSetLike }) {
    const [displayMoviesList, setDisplayMoviesList] = useState([]);
    const [optionsMoviesList, setOptionsMoviesList] = useState({});
    const screenWidth = useScreenWidth();
    const location = useLocation();
    const { desktopLarge, desktop, tablet, mobile } = DEVICE_PARAMS;


    // Контроль отображения количества карточек в зависимости от разрешения экрана
    useEffect(() => {
        if (moviesList) {
            const lengthMoviesList = moviesList.filter((item, i) => {
                return i < optionsMoviesList.total;
            });

            setDisplayMoviesList(lengthMoviesList);
        }
    }, [moviesList, optionsMoviesList]);


    // Контроль добавления количества карточек в зависимости от разрешения экрана
    useEffect(() => {
        if (location.pathname === "/movies") {
            if (screenWidth >= desktopLarge.width) {
                setOptionsMoviesList(desktopLarge.cards);
            } else if (screenWidth >= desktop.width) {
                setOptionsMoviesList(desktop.cards);
            } else if (screenWidth >= tablet.width) {
                setOptionsMoviesList(tablet.cards);
            } else if (screenWidth >= mobile.width) {
                setOptionsMoviesList(mobile.cards);
            }
        }
    }, [location, screenWidth, desktopLarge, desktop, tablet, mobile])

    // Управления добавления количесва карточек при нажатии на кнопку "Еще" в зависимости от разрешения экрана
    const handleAddMovie = () => {
        const startLength = displayMoviesList.length;
        const addedLength = startLength + optionsMoviesList.more;
        const endMovies = moviesList.length - startLength;
        if (endMovies > 0) {
            const newMoviesList = moviesList.slice(startLength, addedLength);
            setDisplayMoviesList([...displayMoviesList, ...newMoviesList]);
        }
    }

    // Конопка сохраненных фильмов
    const getSavedMovieCard = (saveMovie, movie) => {
        return saveMovie.find((item) => {
            return item.id === (movie.id || movie.id);
        });
    }

    return (
        <section className="movies-list">
            <div className="movies-list__cadrs">
                {displayMoviesList.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                        isLike={isLike}
                        onSetLike={onSetLike}
                        onDeleteLike={onDeleteLike}
                        isSave={getSavedMovieCard(seveMovie, movie)}
                    />
                ))}
            </div>
            {location.pathname === "/movies" && displayMoviesList.length !== moviesList.length && <button onClick={handleAddMovie} className="movie__bnt">Ещё</button>}
        </section>
    )
}