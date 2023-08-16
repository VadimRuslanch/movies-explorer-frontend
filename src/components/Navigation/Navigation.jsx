import { useEffect } from "react";
import { Link } from "react-router-dom";
import iconProfile from "../../images/icon-profile.svg";

export default function Navigation({ isOpen, onClose, onSidePane }) {
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
            <div
                className={`navigation ${isOpen ? "navigation_opened" : ""}`}
                onClick={handleOverlay}
            >
                <div className="navigation__side-panel">
                    <button className="navigation__btn-close" onClick={onClose}></button>
                    <div className="navigation__menu">
                        <Link className="navigation__menu-link" to="/">Главная</Link>
                        <Link className={`navigation__menu-link ${"navigation__menu-link_border"}`} to="/movies">Фильмы</Link>
                        <Link className="navigation__menu-link" to="/saved-movies">Сохранённые фильмы</Link>
                    </div>
                    <Link className="header-nav__btn-profile navigation__btn-profile_side-panel" to="/profile">
                        <img className="header-nav__icon-profile" alt="Логотип профиль" src={iconProfile} />
                        <p className="header-nav__text-profile">Аккаунт</p>
                    </Link>
                </div>
            </div>
        </>
    )
}