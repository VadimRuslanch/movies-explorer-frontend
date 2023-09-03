class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    };

    getMovies() {
        return fetch(`${this._url}/movies/`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
            .then(res => { return res.json() })
    };

    addMovie(movie) {
        return fetch(`${this._url}/movies/`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movie)
        })
            .then(res => { return res })
    };

    deliteMovie(movie) {
        return fetch(`${this._url}/movies/${movie.id}/`, {
            method: "DELETE",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movie),

        })
            .then(res => { return res })
    };
}

const MainApi = new Api({
    // url: 'http://localhost:4000',
    url: 'https://api.vadim-lebedev.movies.nomoreparties.co',
    headers: { 'Content-Type': 'application/json' },

})

export default MainApi