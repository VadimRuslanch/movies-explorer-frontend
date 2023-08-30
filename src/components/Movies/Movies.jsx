import MoviesApi from '../../utils/MoviesApi';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import { useEffect, useState } from 'react';
import { handleFilterMovies, handleShortedMovie, handleTransformMovies } from '../../utils/filterMovies';

export default function Movies({ saveMovie, onSidePane, onSetLike, onDeleteLike, isLoggedIn, modalWindow }) {
    const [defaultMoviesList, setDefaultMoviesList] = useState([]);
    const [displayMoviesList, setDisplayMoviesList] = useState([]);
    const [filterMovieList, setFilterMovieList] = useState([]);
    const [isShortButtone, setIsShortButtone] = useState(false);
    const [isPreloader, setIsPreloader] = useState(false);

    // Сортировка масссива
    const handleSetFilterMovies = (movies, searchText, checkBoxStatus) => {
        const filterList = handleFilterMovies(movies, searchText, checkBoxStatus);
        if (filterList.length === 0) {
            modalWindow(true, 'Ничего не найдено');
        } else {
            setFilterMovieList(filterList);
            localStorage.setItem('filteredMovie', JSON.stringify(filterList));
            setDisplayMoviesList(checkBoxStatus ? handleShortedMovie(filterList) : filterList);
        }
    };

    // Сабмит формы поиска
    const handleSubmitMovies = (searchText) => {
        localStorage.setItem('nameFilm', JSON.stringify(searchText));
        if (defaultMoviesList.length === 0) {
            getMovies(searchText)
        } else {
            handleSetFilterMovies(defaultMoviesList, searchText.film, isShortButtone)
        }
    };

    // Получение списка фильмов с сервера 
    const getMovies = (searchText) => {
        setIsPreloader(true);
        MoviesApi
            .getMoviesList()
            .then(movies => {
                setDefaultMoviesList(movies);
                handleSetFilterMovies(handleTransformMovies(movies), searchText.film, isShortButtone);
            })
            .catch()
            .finally(() => setIsPreloader(false));
    }

    // Тумблер фильтрации короткометражек
    const handelShortMovie = () => {
        if (isShortButtone) {
            setIsShortButtone(false);
            localStorage.setItem(`button`, false);
            setDisplayMoviesList(displayMoviesList);
        } else {
            setIsShortButtone(true);
            localStorage.setItem(`button`, true);
            setDisplayMoviesList(handleShortedMovie(filterMovieList))
        }
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('filteredMovie'))) {
            const saveMovies = JSON.parse(localStorage.getItem('filteredMovie'))
            if (JSON.parse(localStorage.getItem(`button`))) {
                setDisplayMoviesList(handleShortedMovie(saveMovies));
            } else {
                setDisplayMoviesList(saveMovies);
            }
        }
    }, [])

    // Установка значений поиска и подгрузка массива при загружке сайа
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('button'))) {
            setIsShortButtone(true);
        } else {
            setIsShortButtone(false);
        }
    }, [setIsShortButtone]);

    return (
        <>
            <Header
                onSidePane={onSidePane}
                ActiveButtoneMovies={true}
                isLoggedIn={isLoggedIn}
            />
            <main className="movies">
                <SearchForm
                    onSubmitMovies={handleSubmitMovies}
                    onFilterButtone={handelShortMovie}
                    isFilterButtone={isShortButtone}
                />
                <MoviesCardList
                    seveMovie={saveMovie}
                    moviesList={displayMoviesList}
                    onSetLike={onSetLike}
                    onDeleteLike={onDeleteLike}
                />
                <Preloader
                    isPreloader={isPreloader}
                />
            </main>
            <Footer />
        </>
    );
};