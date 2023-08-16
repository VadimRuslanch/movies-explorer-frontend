import avatar from '../../images/avatar.png'

export default function AboutMe() {
    return (
        <section className="reseme" id='AboutMe'>
            <h3 className="reseme__title">Студент</h3>
            <div className="reseme__info-block">
                <div>
                    <h2 className="reseme__name">Виталий</h2>
                    <p className="reseme__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="reseme__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className='reseme__link' href="https://github.com/VadimRuslanch" target='_blank' rel="noopener noreferrer">Github</a>
                </div>
                <img alt="Фото" src={avatar} className="reseme__avatar"></img>
            </div >
        </section>
    )
}