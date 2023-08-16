import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import HeaderSign from "../HeaderSign/HeaderSign";

export default function Register() {
    return (
        <section className="register">
            <div className="register__main-block">
                <HeaderSign headerTitle={'Добро пожаловать!'}/>
                <form className="sign-form">
                    <p className="sign-form__text-name">Имя</p>
                    <input
                        className="sign-form__input-name"
                        type="name"
                        name="name"
                        minLength="2"
                        maxLength="30"
                        required />
                    <span className="form__error"></span>
                    <AuthForm
                        btnText="Зарегистрироваться" />
                </form>
                <p className="register__text">Уже зарегистрированы?
                    <Link className="register__text-link" to="/signin"> Войти</Link>
                </p>
            </div>
        </section>
    );
};