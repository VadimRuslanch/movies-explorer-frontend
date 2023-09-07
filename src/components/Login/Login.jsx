import AuthBlock from "../AuthBlock/AuthBlock";
import useForm from "../../hooks/useForm";

export default function Login({ onLogin }) {
    const { enteredValues, errors, handleChange, isFormValid } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(enteredValues);
    };

    return (
        <AuthBlock
            register={false}
            title={"Рады видеть!"}
            buttonText={"Войти"}
            buttonLink={"Регистрация"}
            formValue={enteredValues}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            isDisabled={!isFormValid}
        />
    );
};