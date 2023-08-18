export default function AboutProject() {
    return (
        <section className="about" id="AboutProject">
            <h3 className="about__title">О проекте</h3>
            <div className="about__info-block">
                <div className="about__info-project" >
                    <h4 className="about__info-title">Дипломный проект включал 5 этапов</h4>
                    <p className="about__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__info-project" >
                    <h4 className="about__info-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="about__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__study-time">
                <p className="about__study-text about__study-text_white about__study-line about__study-line_blue">1 неделя</p>
                <p className="about__study-text about__study-line about__study-line_grey">4 неделя</p>
                <p className="about__study-text about__study-text_gray">Back-end</p>
                <p className="about__study-text about__study-text_gray">Front-end</p>
            </div>
        </section>
    )
}