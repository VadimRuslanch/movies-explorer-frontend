import photo from "../../images/pic-color-pic.png"

export default function MoviesCard() {
    return (
        <article className="movie">
            <img
                className="movie__img"
                src={photo}
                alt="menu"
            />
            <div className="movie__inner">
                <div className="movie__inner-info">
                    <p className="movie__inner-name">
                        33 слова о дизайне
                    </p>
                    <p className="movie__inner-time">1ч42м</p>
                </div>
                <button className="movie__inner-bnt" />
            </div>
        </article>

    )
}