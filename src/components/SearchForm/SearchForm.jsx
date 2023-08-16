import iconSeach from "../../images/icon-seach.svg";

export default function SearchForm() {
    return (
        <div className="search-movies">
            <div className="form">
                <form className="form__search">
                    <div className="form__search-icon">
                        <img className="form__icon" alt="Иконка лупа" src={iconSeach} />
                        <input
                            className="form__input"
                            type="films"
                            name="films"
                            placeholder="Фильмы"
                            required />
                    </div>

                    <button className="form__button-find" />
                </form>
                <div className="form__filter form__filter_desktop">
                    <button className="form__filter-button" />
                    <p className="form__filter-text">Короткометражки</p>
                </div>
            </div>
            <div className="form__filter form__filter_mobile">
                <button className="form__filter-button" />
                <p className="form__filter-text">Короткометражки</p>
            </div>
        </div>


    )
}