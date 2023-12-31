export default function AuthForm({ onChange, type, name, formValue, placeholderText, errors, id, htmlFor, pattern }) {
    return (
        <>
            <label className="auth-form__label" htmlFor={htmlFor} >{placeholderText}</label>
            <input
                onChange={onChange}
                type={type}
                name={name}
                value={formValue}
                id={id}
                minLength="2"
                maxLength="40"
                required
                className="auth-form__input"
                pattern={pattern}
            />
            <span className="auth-form__error">{errors}</span>
        </>
    )
}