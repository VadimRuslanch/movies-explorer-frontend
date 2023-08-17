import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

export default function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isFilterButtone, setIsFilterButtone] = useState(false);

  const handelButtonFilter = () => {
    if (isFilterButtone) {
      setIsFilterButtone(false);
    } else {
      setIsFilterButtone(true);
    }
  }

  const handelSidePanelOpen = () => {
    setIsSidePanelOpen(true);
  };

  const closeAllPopups = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Main
            headerMain={true}
          />}
        />
        <Route
          path='/movies'
          element={
            <Movies
              isOpen={isSidePanelOpen}
              onClose={closeAllPopups}
              onSidePane={handelSidePanelOpen}
              onFilterButtone={handelButtonFilter}
              isFilterButtone={isFilterButtone}
            />}
        />
        <Route
          path='/saved-movies'
          element={
            <SavedMovies
              isOpen={isSidePanelOpen}
              onClose={closeAllPopups}
              onSidePane={handelSidePanelOpen}
              onFilterButtone={handelButtonFilter}
              isFilterButtone={isFilterButtone}
            />}
        />
        <Route
          path='/profile'
          element={<Profile
            headerProfile={false}
            onSidePane={handelSidePanelOpen}
          />}
        />
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};