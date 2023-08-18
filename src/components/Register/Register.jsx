import AuthBlock from "../AuthBlock/AuthBlock";

export default function Register() {
    return (
        <>
            <AuthBlock
                register={true}
                title={"Добро пожаловать!"}
                buttonText={"Зарегистрироваться"}
                buttonSignature={"Уже зарегистрированы? "}
                buttonLink={"Войти"}
            />
        </>
    );
};