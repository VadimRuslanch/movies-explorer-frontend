import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import iconSeach from "../../images/icon-seach.svg";
import { useLocation } from "react-router-dom";

export default function SearchForm({ onSubmitMovies, onFilterButtone, isFilterButtone }) {
    const [formValue, setFormValue] = useState({ film: "" });
    const [isErrorText, setIsErrorText] = useState(false);
    const saveInputMovies = JSON.parse(localStorage.getItem('nameFilm'));
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

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
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit} noValidate>
                <div className="search__field" >
                    <img className="search__control" alt="Иконка лупа" src={iconSeach} />
                    <div className="search__internalGroup">
                        <input
                            className="search__input"
                            type="text"
                            name="film"
                            placeholder="Фильмы"
                            value={formValue.film}
                            onChange={handleChange}
                        />
                        {isErrorText && <span className="search__input-error">Нужно ввести ключевое слово</span>}
                    </div>
                    <button type="submit" className="search__btn" />
                </div>
                <div className="search__filter search__filter_desktop">
                    <button type="submit" onClick={onFilterButtone} className={`search__filter-button ${isFilterButtone ? "search__filter-button_active" : ""}`} />
                    <p className="search__filter-text">Короткометражки</p>
                </div>
            </form>
            <FilterCheckbox onFilterButtone={onFilterButtone} isFilterButtone={isFilterButtone} />

        </section>
    )
}