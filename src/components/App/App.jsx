import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import AuthApi from '../../utils/AuthApi';
import ProtectedRoute from '../../utils/ProtectedRoute';
import MainApi from '../../utils/MainApi';

export default function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [saveMovie, setSaveMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AuthApi
      .checkToken()
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          handleGetMovies();
        };
      });
  }, [setCurrentUser, setIsLoggedIn])

  const handleGetMovies = () => {
    MainApi
      .getMovies()
      .then(movies => {
        setSaveMovie(movies);
      });
  };

  // Вход в аккаунт
  const handleLogin = (data) => {
    AuthApi
      .login(data)
      .then(res => {
        if (res) {
          setIsLoggedIn(true)
          navigate('/');
        }
      })
  }

  // Выход из аккаунта
  const handleLogout = () => {
    AuthApi.logout();
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  // Регистрация
  const handleRegister = (data) => {
    AuthApi.register(data)
  }

  // Добавление и удаление фильма в "Сохраненные"
  const handleSetLike = (movie) => {
    MainApi
      .addMovie(movie)
      .then((movie) => { setSaveMovie([movie, ...saveMovie]) })
  };

  // Удаление фильма из "Сохраненные"
  const handleDeleteMovie = (movie) => {
    console.log(movie);
    const film = saveMovie.find((item) => item.id === movie.id);
    console.log(film);
    MainApi
      .deliteMovie(film)
      .then(() => {
        const newMovieList = saveMovie.filter(film => {
          if (movie.id === film.id) {
            return false
          } else {
            return true
          }
        })
        setSaveMovie(newMovieList);
      })
  }

  // Управление мадальными окнами
  const handleSidePanelOpen = () => {
    setIsSidePanelOpen(true);
  };

  const closeAllPopups = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              headerMain={true}
              onSidePane={handleSidePanelOpen}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path='/movies'
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <Movies
                  saveMovie={saveMovie}
                  onSetLike={handleSetLike}
                  onDeleteLike={handleDeleteMovie}
                  onSidePane={handleSidePanelOpen}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <SavedMovies
                  saveMovie={saveMovie}
                  isLoggedIn={isLoggedIn}
                  onDeleteLike={handleDeleteMovie}
                  onSidePane={handleSidePanelOpen}
                />
              }
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  headerProfile={false}
                  onSidePane={handleSidePanelOpen}
                  onLogout={handleLogout}
                />
              }
            />
          }
        />
        <Route
          path='/signin'
          element={<Login
            onLogin={handleLogin} />}
        />
        <Route
          path='/signup'
          element={<Register
            onRegister={handleRegister} />}
        />
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
      <Navigation
        isOpen={isSidePanelOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
};
