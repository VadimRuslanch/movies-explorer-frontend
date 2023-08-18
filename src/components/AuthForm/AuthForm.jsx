export default function AuthForm({ placeholderText }) {
    return (
        <>
            <label className="auth-form__label" for="form" >{placeholderText}</label>
            <input
                className="auth-form__input"
                id="form"
                type='email'
                name="email"
                minLength="2"
                maxLength="40"
                required
            />
            <span className="auth-form__error"></span>
        </>
    )
}