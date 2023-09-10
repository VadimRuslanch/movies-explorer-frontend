class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    };

    // проверка статуса запроса
    async _requestResult(res) {
        const result = await res.json();
        return res.ok ? result : Promise.reject(result.message);
    };

    // Регистрация пользователя
    register(data) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => { return this._requestResult(res) })
    };

    // Авторизация пользователя
    login(data) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => { return this._requestResult(res) })
    };

    // Проверка токена пользователя для автологина
    getUser() {
        return fetch(`${this._url}/user/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
            .then(res => this._requestResult(res))
    };

    editUser(data) {
        return fetch(`${this._url}/user/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => this._requestResult(res))
    }

    // Выход из аккаунтв пользователя
    logout() {
        return fetch(`${this._url}/signout`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            credentials: 'include',
        });
    };

    //Подтягивание карточек с сервера
    getMovies() {
        return fetch(`${this._url}/movies/`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
            .then(res => this._requestResult(res))
    };

    // Добавление нового фильма
    addMovie(movie) {
        return fetch(`${this._url}/movies/`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movie)
        })
            .then(res => this._requestResult(res))
    };

    // Удаление фильма
    deliteMovie(movie) {
        return fetch(`${this._url}/movies/${movie.id}/`, {
            method: "DELETE",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movie),

        })
            .then(res => this._requestResult(res))
    };
};

const AuthApi = new Api({
    url: 'http://localhost:4000',
    //  url: 'https://api.vadim-lebedev.movies.nomoreparties.co',
    headers: { 'Content-Type': 'application/json' },
});

export default AuthApi;