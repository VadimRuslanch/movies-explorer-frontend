import { Link } from "react-router-dom";

export default function HeaderMovies({ onSidePane, ActiveButtoneMovies, ActiveButtoneSaveMovies }) {
    return (
        <>
            <div className='header__screen header__screen_desktop'>
                <nav className='header__profile'>
                    <Link
                        className={`header__link-profile ${ActiveButtoneMovies ? "header__link-profile_active" : ""}`}
                        to="/movies">Фильмы</Link>
                    <Link
                        className={`header__link-profile ${ActiveButtoneSaveMovies ? "header__link-profile_active" : ""}`}
                        to="/saved-movies">Сохранённые фильмы</Link>
                </nav>
                <Link className="header__btn-profile" to="/profile">
                    <div className="header__icon-profile" />
                    <p className="header__text-profile">Аккаунт</p>
                </Link>
            </div>
            <button className="header__btn-menu header__btn-menu_mobile" onClick={onSidePane}></button>
        </>
    )
}