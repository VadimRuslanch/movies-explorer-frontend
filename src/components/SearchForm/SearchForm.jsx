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
            <div className="search__form" >
                <form className="search__field" onSubmit={handleSubmit} noValidate>
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
                </form>
                <div className="search__filter search__filter_desktop">
                    <button type="submit" onClick={onFilterButtone} className={`search__filter-button ${isFilterButtone ? "search__filter-button_active" : ""}`} />
                    <p className="search__filter-text">Короткометражки</p>
                </div>
            </div>
            <FilterCheckbox onFilterButtone={onFilterButtone} isFilterButtone={isFilterButtone} />

        </section>
    )
}