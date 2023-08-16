export default function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <a className="portfolio__link" href="https://github.com/VadimRuslanch/how-to-learn" target='_blank' rel="noopener noreferrer">Статичный сайт
                <p className="portfolio__link-arrow">↗</p>
            </a>
            <a className="portfolio__link" href="https://github.com/VadimRuslanch/russian-travel" target='_blank' rel="noopener noreferrer">Адаптивный сайт
                <p className="portfolio__link-arrow" >↗</p>
            </a>
            <a className="portfolio__link" href="https://github.com/VadimRuslanch/react-mesto-auth" target='_blank' rel="noopener noreferrer">Одностраничное приложение
                <p className="portfolio__link-arrow">↗</p>
            </a>
        </section>
    )
}