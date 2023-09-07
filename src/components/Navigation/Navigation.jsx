import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation({ isOpen, onClose }) {
    const location = useLocation();

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
                            className={`navigation__link-menu ${location.pathname === "/" ? "navigation__link-menu_active" : ""}`}
                            to="/"
                        >Главная</Link>
                        <Link
                            className={`navigation__link-menu ${location.pathname === "/movies" ? "navigation__link-menu_active" : ""}`}
                            to="/movies"
                        >Фильмы</Link>
                        <Link
                            className={`navigation__link-menu ${location.pathname === "/saved-movies" ? "navigation__link-menu_active" : ""}`}
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