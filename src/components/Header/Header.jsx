import HeaderMovies from '../HeaderMovies/HeaderMovies';
import HeaderMain from '../HeaderMain/HeaderMain';

export default function Header({ onSidePane, headerMain, ActiveButtoneMovies, ActiveButtoneSaveMovies }) {
    return (
        <section className={`header ${headerMain ? "header_main" : "header_profile"}`}>
            {headerMain ?
                <HeaderMain />
                :
                <HeaderMovies
                    onSidePane={onSidePane}
                    ActiveButtoneMovies={ActiveButtoneMovies}
                    ActiveButtoneSaveMovies={ActiveButtoneSaveMovies} />}
        </section>
    )
}