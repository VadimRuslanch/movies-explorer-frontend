import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Movies({ isOpen, onClose, onSidePane, onFilterButtone, isFilterButtone }) {
    return (
        <>
            <Header
                onSidePane={onSidePane}
                ActiveButtoneMovies={true} />
            <main className="movies">
                <SearchForm
                    onFilterButtone={onFilterButtone}
                    isFilterButtone={isFilterButtone} />
                <MoviesCardList />
                <Preloader />
                <Navigation
                    isOpen={isOpen}
                    onClose={onClose}
                    ActiveButtoneMovies={true}
                />
            </main>
            <Footer />
        </>
    );
};