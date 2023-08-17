import HeaderMovies from '../HeaderProfile/HeaderProfile';
import HeaderMain from '../HeaderMain/HeaderMain';
import { Link } from 'react-router-dom';


export default function Header({ onSidePane, headerMain, ActiveButtoneMovies, ActiveButtoneSaveMovies }) {
    return (
        <header className={`header ${headerMain ? "header_main" : "header_profile"}`}>
            <Link className='header__logo' to="/" />

            {headerMain ? <HeaderMain /> : <HeaderMovies onSidePane={onSidePane} ActiveButtoneMovies={ActiveButtoneMovies} ActiveButtoneSaveMovies={ActiveButtoneSaveMovies} />}

        </header>
    )
}