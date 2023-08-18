import { Link } from 'react-router-dom';

export default function HeaderMain() {
    return (
        <>
            <div className='header__main'>
                <Link className='header__main-link' to="/signup">Регистрация</Link>
                <Link className='header__main-link header__main-link_signin' to="/signin">Войти</Link>
            </div>
        </>
    );
};