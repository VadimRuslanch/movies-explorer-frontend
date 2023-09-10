import './FilterCheckbox.css';

export default function FilterCheckbox({ onFilterButtone, isFilterButtone }) {
    return (
        <label className="search__filter-input">
            <input
                className={`search__filter-checkbox `}
                type="checkbox"
                onChange={onFilterButtone}
                checked={isFilterButtone ? true : false}
            />
            <span className={`search__filter-tumbler`} />
            <span className="search__filter-input-text">Короткометражки</span>
        </label>
    );
}