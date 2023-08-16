import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';


export default function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  // const [isActiveButtone, setIsActiveButtone] = useState(false);

  // const handelActiveButtone = ()=>{
  //   setIsActiveButtone(true);
  // }

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
          element={<Movies
            onSidePane={handelSidePanelOpen}
          />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies
            onSidePane={handelSidePanelOpen}
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
      <Navigation
        isOpen={isSidePanelOpen}
        onClose={closeAllPopups} />
    </>
  );
};