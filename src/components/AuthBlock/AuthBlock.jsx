import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

export default function AuthBlock({ onChange, onSubmit, formValue, register, title, buttonText, buttonLink, errors, isDisabled }) {
    return (
        <main className="auth">
            <div className="auth__block">
                <Link className="auth__logo" to="/" />
                <h2 className="auth__title" >{title}</h2>
                <form className="auth-form" onSubmit={onSubmit} id="form">
                    {register && <AuthForm
                        onChange={onChange}
                        type="text"
                        name="name"
                        formValue={formValue.name}
                        placeholderText={"Имя"}
                        errors={errors.name}
                        id="nameForm"
                        htmlFor="nameForm"
                    />}
                    <AuthForm
                        name="email"
                        type="email"
                        onChange={onChange}
                        formValue={formValue.email}
                        placeholderText={"E-mail"}
                        errors={errors.email}
                        id="emailForm"
                        htmlFor="emailForm"
                    />
                    <AuthForm
                        onChange={onChange}
                        formValue={formValue.password}
                        type={"password"}
                        name={"password"}
                        placeholderText={"Пароль"}
                        errors={errors.password}
                        id="passwordForm"
                        htmlFor="passwordForm"
                    />
                    <button
                        button="submit"
                        className={`auth__button ${isDisabled ? "auth__button__inactive" : ""}`}
                        disabled={isDisabled ? true : false}
                    >{buttonText}</button>
                    <p className="auth__text">Уже зарегистрированы? <Link className="auth__link-text" to={register ? "/signin" : "/signup"} >{buttonLink}</Link></p>
                </form>
            </div>
        </main>
    );
};