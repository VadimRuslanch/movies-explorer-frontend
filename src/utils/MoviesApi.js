class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    // проверка статуса запроса
    async _requestResult(res) {
        const result = await res.json();
        return res.ok ? result : Promise.reject(result.message);
    };

    getMoviesList() {
        return fetch(this._url, {
            headers: this._headers,
        })
            .then(res => this._requestResult(res));
    }
}

const MoviesApi = new Api({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: { 'Content-Type': 'application/json' },

})

export default MoviesApi