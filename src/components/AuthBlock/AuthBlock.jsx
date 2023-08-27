import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

export default function AuthBlock({ onChange, onSubmit, formValue, register, title, buttonText, buttonLink }) {
    return (
        <main className="auth">
            <div className="auth__block">
                <Link className="auth__logo" to="/" />
                <h2 className="auth__title" >{title}</h2>
                <form className="auth-form" onSubmit={onSubmit}>
                    {register ? <AuthForm
                        onChange={onChange}
                        type={"text"}
                        name={"name"}
                        formValue={formValue.name}
                        placeholderText={"Имя"} /> : ""}
                    <AuthForm
                        onChange={onChange}
                        type={"email"}
                        name={"email"}
                        formValue={formValue.email}
                        placeholderText={"E-mail"}
                    />
                    <AuthForm
                        onChange={onChange}
                        formValue={formValue.password}
                        type={"password"}
                        name={"password"}
                        placeholderText={"Пароль"} />
                    <button button="submit" className="auth__button">{buttonText}</button>
                    <p className="auth__text">Уже зарегистрированы? <Link className="auth__link-text" to={register ? "/signin" : "/signup"} >{buttonLink}</Link></p>
                </form>
            </div>
        </main>
    );
};