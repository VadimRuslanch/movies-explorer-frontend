class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getMoviesList() {
        return fetch(this._url, {
            headers: this._headers,
        })
            .then(res => { return res.json() });
    }
}

const MoviesApi = new Api({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: { 'Content-Type': 'application/json' },

})

export default MoviesApi