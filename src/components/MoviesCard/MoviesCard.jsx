// import btnSaveActive from "../../images/saveBtnAct.svg"
import btnSaveDis from "../../images/saveBtnDis.svg"
import photo from "../../images/pic-color-pic.png"


export default function MoviesCard() {
    return (
        <article className="movie">
            <img
                className="movie__img"
                src={photo}
                alt="men"
            />
            <div className="movie__inner">
                <div className="movie__inner-info">
                    <p className="movie__inner-name">
                        33 слова о дизайне
                    </p>
                    <p className="movie__inner-time">1ч42м</p>
                </div>
                <button className="movie__inner-bnt" >
                    <img className="movie__inner-img" alt="" src={btnSaveDis} />
                </button >
            </div>
        </article>

    )
}