import Header from "../Header/Header";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function Profile({ isLoggedIn, headerProfile, onSidePane, onLogout }) {
    const currentUser = useContext(CurrentUserContext);
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue, [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = formValue;
        console.log({ name, email });
    }

    useEffect(() => {
        const { name, email } = currentUser;
        setFormValue({ name, email });
    }, [setFormValue, currentUser]);

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
                headerMain={headerProfile}
                onSidePane={onSidePane} />
            <main className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__inputs">
                        <p className="profile__text">Имя</p>
                        <input
                            className="profile__input"
                            minLength="2"
                            maxLength="30"
                            type="text"
                            name="name"
                            value={formValue.name || ''}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="profile__inputs">
                        <p className="profile__text">E-mail</p>
                        <input
                            className="profile__input"
                            minLength="2"
                            maxLength="40"
                            type="email"
                            name="name"
                            value={formValue.email || ''}
                            onChange={handleChange}
                            required />
                    </div>
                    <button className="profile__edit-btn">Редактировать</button>
                </form>
                <button type="button" className="profile__signout" onClick={onLogout}>Выйти из аккаунта</button>
            </main>
        </>
    )
}