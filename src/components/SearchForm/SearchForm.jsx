import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ onSubmitMovies, onFilterButtone, isFilterButtone }) {
    const [formValue, setFormValue] = useState({ film: "" });
    const [isErrorText, setIsErrorText] = useState(false);
    const saveInputMovies = JSON.parse(localStorage.getItem('nameFilm'));
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValue.film.length === 0) {
            setIsErrorText(true);
        } else {
            setIsErrorText(false);
            onSubmitMovies(formValue);
        }
    };

    useEffect(() => {
        if (location.pathname === '/movies' && saveInputMovies) {
            setFormValue(saveInputMovies);
        }
    }, [location]);

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit} noValidate>
                <input
                    className="search__input"
                    type="text"
                    name="film"
                    placeholder="Фильмы"
                    value={formValue.film}
                    onChange={handleChange}
                />
                {isErrorText && <span className="search__input-error">Введите название</span>}
                <button
                    className="search__btn"
                    type="submit"
                />
                <FilterCheckbox onFilterButtone={onFilterButtone} isFilterButtone={isFilterButtone} />
            </form>
        </div>
    )
}