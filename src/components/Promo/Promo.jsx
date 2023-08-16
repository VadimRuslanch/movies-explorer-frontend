import logo from '../../images/landing-logo.svg';

export default function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img alt='Логотип Яндекс.Практикум' src={logo} className="promo__img" />
        </section>
    )
}