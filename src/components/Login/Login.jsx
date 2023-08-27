import AuthBlock from "../AuthBlock/AuthBlock";
import { useState } from "react";

export default function Login({ onLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formValue;
        onLogin({ email, password })
    }
    return (
        <>
            <AuthBlock
                register={false}
                title={"Рады видеть!"}
                buttonText={"Войти"}
                buttonLink={"Регистрация"}
                formValue={formValue}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};