import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function Movies({ onSidePane }) {
    return (
        <>
            <Header
                onSidePane={onSidePane}
                ActiveButtoneMovies={true} />
            <section className="movies">
                <SearchForm />
                <MoviesCardList />
                <Preloader />
            </section>
            <Footer />
        </>
    );
};