import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { handleFilterMovies, handleShortedMovie } from '../../utils/utils';
import { useEffect, useState } from "react";

export default function SavedMovies({ saveMovie, isLoggedIn, onDeleteLike, onSidePane, modalWindow }) {
    const [isShortButtone, setIsShortButtone] = useState(false);
    const [displayMoviesList, setDisplayMoviesList] = useState(saveMovie);
    const [filterMovieList, setFilterMovieList] = useState(displayMoviesList);
    const [name, setName] = useState({ film: '' })

    // Сохранение теста поиска
    const handleSetFilterMovies = (searchText) => {
        setName(searchText);
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

    // Сортировка массива 
    useEffect(() => {
        const filterList = handleFilterMovies(saveMovie, name.film, isShortButtone);
        if (filterList.length === 0) {
            modalWindow(true, 'Вы не добавили фильмы');
            setFilterMovieList(filterList);
            setDisplayMoviesList(filterList);
        } else {
            setFilterMovieList(filterList);
            setDisplayMoviesList(filterList);
        }
    }, [isShortButtone, name, saveMovie]);


    return (
        <>
            <Header
                onSidePane={onSidePane}
                ActiveButtoneSaveMovies={true}
                isLoggedIn={isLoggedIn}
            />
            <main className="main">
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