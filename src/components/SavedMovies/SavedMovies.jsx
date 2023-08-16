import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

export default function SavedMovies({ onSidePane }) {
    return (
        <>
            <Header
                onSidePane={onSidePane} 
                ActiveButtoneSaveMovies={true} />
            <section className="saved-movies">
                <SearchForm />
                <MoviesCardList />
            </section>
            <Footer />
        </>
    )
}