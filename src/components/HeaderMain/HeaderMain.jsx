import { Link } from 'react-router-dom';
import logo from '../../images/logo-header.svg';

export default function HeaderMain() {
    return (
        <>
            <Link className='header-main__logo' to="/">
                <img className='header-main__logo' alt="Логотип" src={logo} />
            </Link>
            <div className='header-main__links'>
                <Link className='header-main__link' to="/signup">Регистрация</Link>
                <Link className='header-main__link header-main__link_signin' to="/signin">Войти</Link>
            </div>
        </>
    );
};