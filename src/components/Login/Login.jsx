import AuthBlock from "../AuthBlock/AuthBlock";

export default function Login() {
    return (
        <>
            <AuthBlock
                register={false}
                title={"Рады видеть!"}
                buttonText={"Войти"}
                buttonLink={"Регистрация"}
            />
        </>
    );
};