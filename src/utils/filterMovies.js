import { timeShortFilm } from "../utils/constants"

const handleTransformMovies = (movies) => {
    movies.forEach(movie => {
        if (!movie.image) {
            movie.image = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80';
            movie.thumbnail = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80';
        } else {
            movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            movie.image = `https://api.nomoreparties.co${movie.image.url}`
        }
        if (!movie.country) {
            movie.country = 'Russia';
        }
        if (!movie.nameEN) {
            movie.nameEN = movie.nameRU;
        }
    });
    return movies
}

const handleFilterMovies = (movies, text, shortMovieState) => {
    const filter = movies.filter((i) => {
        const movieRu = String(i.nameRU).toLowerCase().trim();
        const movieEn = String(i.nameEN).toLowerCase().trim();
        const userMovie = text.toLowerCase().trim();
        return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
    });
    if (shortMovieState) {
        return handleShortedMovie(filter);
    } else {
        return filter;
    }
};


const handleShortedMovie = (movie) => {
    return movie.filter(list => { return list.duration < timeShortFilm })
}



export { handleShortedMovie, handleFilterMovies, handleTransformMovies };