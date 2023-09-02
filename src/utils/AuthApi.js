class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    };

    // Регистрация пользователя
    register(data) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => { return res })
    };

    // Авторизация пользователя
    login(data) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => { return res })
    };

    // Проверка токена пользователя для автологина
    getUser() {
        return fetch(`${this._url}/user/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
            .then(res => { return res.json() })
    };

    editUser(data) {
        return fetch(`${this._url}/user/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => { return res.json() })
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
};

const AuthApi = new Api({
    url: 'http://localhost:4000',
    //  url: 'https://api.vadim-lebedev.movies.nomoreparties.co',
    headers: { 'Content-Type': 'application/json' },
});

export default AuthApi;