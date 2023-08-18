import Header from "../Header/Header";

export default function Profile({ headerProfile, onSidePane }) {
    return (
        <>
            <Header
                headerMain={headerProfile}
                onSidePane={onSidePane} />
            <main className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form">
                    <div className="profile__inputs">
                        <p className="profile__text">Имя</p>
                        <input
                            className="profile__input"
                            minLength="2"
                            maxLength="30"
                            required />
                    </div>
                    <div className="profile__inputs">
                        <p className="profile__text">E-mail</p>
                        <input className="profile__input"
                            minLength="2"
                            maxLength="40"
                            required />
                    </div>
                    <button className="profile__edit-btn">Редактировать</button>
                </form>
                <button className="profile__signout">Выйти из аккаунта</button>
            </main>
        </>
    )
}