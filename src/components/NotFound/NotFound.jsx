import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="notfound">
            <h2 className="notfound__title">404</h2>
            <p className="notfound__description">Страница не найдена</p>
            <Link className="notfound__btn" to="/">Назад</Link>
        </main>
    )
}