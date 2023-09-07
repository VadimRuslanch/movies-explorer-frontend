import AuthBlock from "../AuthBlock/AuthBlock";
import useForm from "../../hooks/useForm";

export default function Register({ onRegister }) {
    const { enteredValues, errors, handleChange, isFormValid } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({
            name: enteredValues.name,
            email: enteredValues.email,
            password: enteredValues.password,
        });
    };
    return (
        <AuthBlock
            register={true}
            title={"Добро пожаловать!"}
            buttonText={"Зарегистрироваться"}
            buttonLink={"Войти"}
            formValue={enteredValues}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            isDisabled={!isFormValid}
        />
    )
};