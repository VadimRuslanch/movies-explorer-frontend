export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__name-links">
                <p className="footer__name">© 2020</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target='_blank' rel="noopener noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/VadimRuslanch" target='_blank' rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </footer>
    );
};