export default function AuthForm({ btnText }) {
    return (
        <>
            <p className="sign-form__text-name">E-mail</p>
            <input
                className="sign-form__input-name"
                type='email'
                name="email"
                minLength="2" 
                maxLength="40" 
                required
            />
            <span className="form__error"></span>
            <p className="sign-form__text-name">Пароль</p>
            <input
                className="sign-form__input-name"
                type="password"
                name="password"
                minLength="2" 
                maxLength="40" 
                required
            />
            <span className="form__error">Что то пошло не так ¯\_(ツ)_/¯</span>
            <button className="form__btn">{btnText}</button>
            {/* <p className="form__btn-text"></p> */}
        </>
    )
}