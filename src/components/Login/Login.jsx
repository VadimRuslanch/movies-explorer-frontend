import HeaderSign from "../HeaderSign/HeaderSign";
import AuthForm from "../AuthForm/AuthForm";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="register">
            <div className="register__main-block">
                <HeaderSign headerTitle={'Рады видеть!'}/>


                <form className="sign-form">
                    <AuthForm
                        btnText="Войти" />
                </form>
                <p className="register__text">Уже зарегистрированы?
                    <Link className="register__text-link" to="/signup"> Регистрация</Link>
                </p>
            </div>
        </section>
    );
};