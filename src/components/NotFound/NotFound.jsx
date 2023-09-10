import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()
    const goBack = () => {
        console.log(navigate(-1));
        navigate(-1)
    }

    return (
        <main className="notfound">
            <h2 className="notfound__title">404</h2>
            <p className="notfound__description">Страница не найдена</p>
            <button className="notfound__btn" onClick={goBack}>Назад</button>
        </main>
    )
}