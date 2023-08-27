import AuthBlock from "../AuthBlock/AuthBlock";
import { useState } from "react";

export default function Register({ onRegister }) {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = formValue;
        onRegister({ name, email, password });
    }

    return (
        <>
            <AuthBlock
                register={true}
                title={"Добро пожаловать!"}
                buttonText={"Зарегистрироваться"}
                buttonLink={"Войти"}
                formValue={formValue}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};