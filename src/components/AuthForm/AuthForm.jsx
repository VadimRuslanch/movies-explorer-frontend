export default function AuthForm({ onChange, type, name, formValue, placeholderText }) {
    return (
        <>
            <label className="auth-form__label" htmlFor="form" >{placeholderText}</label>
            <input
                onChange={onChange}
                type={type}
                name={name}
                value={formValue}
                id="form"
                minLength="2"
                maxLength="40"
                required
                className="auth-form__input"
            />
            <span className="auth-form__error"></span>
        </>
    )
}