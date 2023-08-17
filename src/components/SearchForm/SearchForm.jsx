import iconSeach from "../../images/icon-seach.svg";

export default function SearchForm({ onFilterButtone, isFilterButtone }) {
    return (
        <section className="search">
            <div className="search__form">
                <form className="search__field">
                    <div className="search__internalGroup">
                        <img className="search__control" alt="Иконка лупа" src={iconSeach} />
                        <input
                            className="search__input"
                            type="text"
                            name="films"
                            placeholder="Фильмы"
                            required />
                    </div>
                    <button className="search__icon" />
                </form>
                <div className="search__filter search__filter_desktop">
                    <button type="button" onClick={onFilterButtone} className={`search__filter-button ${isFilterButtone ? "search__filter-button_active" : ""}`} />
                    <p className="search__filter-text">Короткометражки</p>
                </div>
            </div>
            <div className="search__filter search__filter_mobile">
                <button type="button" onClick={onFilterButtone} className={`search__filter-button ${isFilterButtone ? "search__filter-button_active" : ""}`} />
                <p className="search__filter-text">Короткометражки</p>
            </div>
        </section>
    )
}