import Header from "../Header/Header";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useForm from "../../hooks/useForm";

export default function Profile({ isLoggedIn, headerProfile, onSidePane, onLogout, onEditUser }) {
    const currentUser = useContext(CurrentUserContext);
    const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [resetForm, currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditUser(enteredValues);
    };

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
                headerMain={headerProfile}
                onSidePane={onSidePane} />
            <main className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit} id="form" noValidate>
                    <div className="profile__inputs">
                        <label className="profile__text">Имя</label>
                        <input
                            className="profile__input"
                            type="text"
                            name="name"
                            value={enteredValues.name || ''}
                            minLength="2"
                            maxLength="40"
                            required
                            onChange={handleChange} />
                    </div>
                    <span className="auth-form__error">{errors.name}</span>
                    <div className="profile__inputs">
                        <label className="profile__text">E-mail</label>
                        <input
                            className="profile__input"
                            type="email"
                            name="email"
                            value={enteredValues.email || ''}
                            minLength="2"
                            maxLength="40"
                            required
                            onChange={handleChange} />
                    </div>
                    <span className="auth-form__error">{errors.email}</span>
                    <button className={`profile__button ${isFormValid ? 'profile__button_active' : ''}`} button="submit">Сохранить</button>
                    <button className={`profile__edit-btn ${isFormValid ? 'profile__edit-btn_inactive' : ''}`}>Редактировать</button>
                    <button className={`profile__signout ${isFormValid ? 'profile__signout_inactive' : ''}`} onClick={onLogout} type="button" >Выйти из аккаунта</button>
                </form>
            </main >
        </>
    );
};