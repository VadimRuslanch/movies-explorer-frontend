import logo from '../../images/logo-header.svg';
import { Link } from "react-router-dom";

export default function HeaderMovies({ onSidePane, ActiveButtoneMovies, ActiveButtoneSaveMovies }) {
    return (
        <>
            <div className="header-nav header-nav_desktop">
                <Link className='header-nav__logo' to="/"></Link>
                <Link
                    className={`header-nav__link ${ActiveButtoneMovies ? "header-nav__link_active" : ""}`}
                    to="/movies">Фильмы</Link>
                <Link
                    className={`header-nav__link ${ActiveButtoneSaveMovies ? "header-nav__link_active" : ""}`}
                    to="/saved-movies">Сохранённые фильмы</Link>
            </div>
            <Link className="header-nav__btn-profile header-nav__btn-profile_desktop" to="/profile">
                <button className="header-nav__icon-profile" />
                <p className="header-nav__text-profile">Аккаунт</p>
            </Link>


            <div className="header-nav header-nav_mobile">
                <Link className='header-nav__logo' to="/"><img className='header-nav__logo' alt="Логотип" src={logo} /></Link>
            </div>

            <button className="header-nav__btn-menu header-nav__btn-menu_mobile" onClick={onSidePane}></button>

        </>
    )
}