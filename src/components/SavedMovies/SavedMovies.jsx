import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer"

export default function SavedMovies({ isOpen, onClose, onSidePane, onFilterButtone, isFilterButtone }) {
    return (
        <>
            <Header
                onSidePane={onSidePane}
                ActiveButtoneSaveMovies={true} />
            <main className="saved-movies">
                <SearchForm
                    onFilterButtone={onFilterButtone}
                    isFilterButtone={isFilterButtone} />
                <MoviesCardList />
                <Navigation
                    isOpen={isOpen}
                    onClose={onClose}
                    ActiveButtoneSaveMovies={true}
                />
            </main>
            <Footer />
        </>
    )
}
