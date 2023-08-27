import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { handleFilterMovies, handleShortedMovie } from '../../utils/filterMovies';
import { useEffect, useState } from "react";


export default function SavedMovies({ saveMovie, isLoggedIn, onDeleteLike, onSidePane }) {
    const [isShortButtone, setIsShortButtone] = useState(false);
    const [displayMoviesList, setDisplayMoviesList] = useState(saveMovie);
    const [filterMovieList, setFilterMovieList] = useState(displayMoviesList);

    // Сортировка масссива
    const handleSetFilterMovies = (searchText) => {
        localStorage.setItem('nameSaveFilm', JSON.stringify(searchText));
        const filterList = handleFilterMovies(saveMovie, searchText.film, isShortButtone);
        setFilterMovieList(filterList);
        setDisplayMoviesList(filterList);
    };

    // Тумблер фильтрации короткометражек
    const handelShortMovie = () => {
        if (isShortButtone) {
            setIsShortButtone(false);
            localStorage.setItem(`buttonSaveMovies`, false);
            setDisplayMoviesList(filterMovieList);
        } else {
            setIsShortButtone(true);
            localStorage.setItem(`buttonSaveMovies`, true);
            setDisplayMoviesList(handleShortedMovie(saveMovie));
        };
    };

    // Состояние тумблер фильтрации короткометражек
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem(`buttonSaveMovies`))) {
            setIsShortButtone(false);
            setDisplayMoviesList(saveMovie);
        } else {
            setIsShortButtone(true);
            setDisplayMoviesList(handleShortedMovie(saveMovie));
        }
    }, [setDisplayMoviesList, saveMovie]);

    useEffect(() => {
        setFilterMovieList(saveMovie);
    }, [saveMovie]);

    return (
        <>
            <Header
                onSidePane={onSidePane}
                ActiveButtoneSaveMovies={true}
                isLoggedIn={isLoggedIn}
            />
            <main className="saved-movies">
                <SearchForm
                    onSubmitMovies={handleSetFilterMovies}
                    onFilterButtone={handelShortMovie}
                    isFilterButtone={isShortButtone}
                />
                <MoviesCardList
                    moviesList={displayMoviesList}
                    seveMovie={saveMovie}
                    onDeleteLike={onDeleteLike} />
            </main>
            <Footer />
        </>
    )
};
