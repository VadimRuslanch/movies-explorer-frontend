import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation({ isOpen, onClose, ActiveButtoneMovies, ActiveButtoneSaveMovies }) {
    useEffect(() => {
        if (!isOpen) return
        const closeByEscape = (e) => {
            if (e.key === 'Escape') onClose();
        }
        document.addEventListener('keydown', closeByEscape);
        return () => document.removeEventListener('keydown', closeByEscape);
    },);

    function handleOverlay(e) {
        if (e.target === e.currentTarget) {
            onClose();
        };
    };

    return (
        <>
            <section
                className={`navigation ${isOpen ? "navigation_opened" : ""}`}
                onClick={handleOverlay}
            >
                <div className="navigation__side-panel">
                    <button className="navigation__btn-close" onClick={onClose}></button>
                    <div className="navigation__menu">
                        <Link
                            className={`navigation__link-menu`}
                            to="/"
                        >Главная</Link>
                        <Link
                            className={`navigation__link-menu ${ActiveButtoneMovies ? "navigation__link-menu_active" : ""}`}
                            to="/movies"
                        >Фильмы</Link>
                        <Link
                            className={`navigation__link-menu ${ActiveButtoneSaveMovies ? "navigation__link-menu_active" : ""}`}
                            to="/saved-movies"
                        >Сохранённые фильмы</Link>
                    </div>
                    <Link className="navigation__btn-profile" to="/profile">
                        <div className="navigation__icon-profile" />
                        <p className="navigation__text-profile">Аккаунт</p>
                    </Link>
                </div>
            </section>
        </>
    )
}