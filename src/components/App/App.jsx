import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import ModalWindow from '../ModalWindow/ModalWindow';

export default function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [saveMovie, setSaveMovie] = useState([]);
  const [isModalWindow, setIsModalWindow] = useState(false);
  const [textModalWindow, setTextModalWindow] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;


  // Проверка авторизации
  useEffect(() => {
    AuthApi
      .getUser()
      .then(res => {
        if (res.email) {
          setIsLoggedIn(true);
          setCurrentUser(res);
        } else {
          setIsLoggedIn(false);
        }
        navigate(path);
      })
      .catch(err => { return err });
  }, []);

  // Получение сохраненных фильмов
  useEffect(() => {
    AuthApi
      .getMovies()
      .then(movies => {
        setSaveMovie(movies);
      })
      .catch(err => { return err });
  }, [setSaveMovie]);

  // Получение данных пользователя
  const handleGetUser = () => {
    AuthApi
      .getUser()
      .then(res => {
        if (res.email) {
          setIsLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch(err => { return err });
  };

  // Вход в аккаунт
  const handleLogin = (data) => {
    AuthApi.login(data)
      .then(res => {
        if (res) {
          setIsLoggedIn(true)
          setCurrentUser(res);
          navigate('/movies');
        }
      })
      .catch(err => { return err });
  }

  // Выход из аккаунта
  const handleLogout = () => {
    AuthApi.logout()
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch(err => { return err })
  }

  // Редактирование пользователя
  const hadleEditUser = (data) => {
    AuthApi.editUser(data)
      .then((res) => {
        setCurrentUser(data);
        hadleModalWindow(true, "Информация успешно изменена")
      })
      .catch(err => { return err });
  };

  // Регистрация
  const handleRegister = (data) => {
    AuthApi
      .register(data)
      .then(res => {
        if (res) {
          handleLogin({ email: data.email, password: data.password })
        }
      })
      .catch(err => { return err });
  }

  // Добавление и удаление фильма в "Сохраненные"
  const handleSetLike = (movie) => {
    AuthApi
      .addMovie(movie)
      .then(movie => {
        setSaveMovie([movie, ...saveMovie])
      })
      .catch(err => { return err });
  };

  // Удаление фильма из "Сохраненные"
  const handleDeleteMovie = (movie) => {
    const film = saveMovie.find((item) => item.id === movie.id);
    AuthApi
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
      .catch(err => { return err });
  };

  const hadleModalWindow = (isActive, text) => {
    setIsModalWindow(isActive);
    setTextModalWindow(text);
  }

  // Управление мадальными окнами
  const handleSidePanelOpen = () => {
    setIsSidePanelOpen(true);
  };

  const closeAllPopups = () => {
    setIsSidePanelOpen(false);
    setIsModalWindow(false);
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
                  modalWindow={hadleModalWindow}
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
                  modalWindow={hadleModalWindow}
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
                  onEditUser={hadleEditUser}
                  modalWindow={hadleModalWindow}
                />
              }
            />
          }
        />
        <Route
          path='/signin'
          element={
            <ProtectedRoute
              isLoggedIn={!isLoggedIn}
              element={
                <Login
                  onLogin={handleLogin}
                />
              }
            />
          }
        />
        <Route
          path='/signup'
          element={
            <ProtectedRoute
              isLoggedIn={!isLoggedIn}
              element={
                <Register
                  onRegister={handleRegister}
                />
              }
            />
          }
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
      <ModalWindow
        isActive={isModalWindow}
        text={textModalWindow}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
};
