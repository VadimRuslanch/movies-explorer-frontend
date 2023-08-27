import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import iconSeach from "../../images/icon-seach.svg";
import { useLocation } from "react-router-dom";

export default function SearchForm({ onSubmitMovies, onFilterButtone, isFilterButtone }) {
    const [formValue, setFormValue] = useState({ film: "" });
    const saveInputMovies = JSON.parse(localStorage.getItem('nameFilm'));
    const saveInputSaveMovies = JSON.parse(localStorage.getItem('nameSaveFilm'));
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitMovies(formValue);
    };

    useEffect(() => {
        if (location.pathname === '/movies' && saveInputMovies) {
            setFormValue(saveInputMovies);
        }
        if (location.pathname === '/saved-movies' && saveInputSaveMovies) {
            setFormValue(saveInputSaveMovies)
        }
    }, [setFormValue]);

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__field" >
                    <div className="search__internalGroup">
                        <img className="search__control" alt="Иконка лупа" src={iconSeach} />
                        <input
                            className="search__input"
                            type="text"
                            name="film"
                            placeholder="Фильмы"
                            value={formValue.film}
                            onChange={handleChange}
                            required
                        />
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