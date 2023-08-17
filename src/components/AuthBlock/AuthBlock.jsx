import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

export default function AuthBlock({ register, title, buttonText, buttonLink }) {
    return (
        <mian className="auth">
            <div className="auth__block">
                <Link className="auth__logo" to="/" />
                <h2 className="auth__title" >{title}</h2>
                <form className="auth-form">
                    {register ? <AuthForm placeholderText={"Имя"} /> : ""}
                    <AuthForm
                        placeholderText={"E-mail"} />
                    <AuthForm
                        placeholderText={"Пароль"} />
                    <button className="auth__button">{buttonText}</button>
                    <p className="auth__text">Уже зарегистрированы? <Link className="auth__link-text" to={register ? "/signin" : "/signup"} >{buttonLink}</Link></p>
                </form>
            </div>
        </mian>
    );
};