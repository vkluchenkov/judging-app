import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GuardedRoute } from './components/GuardedRoute';
import { UserContext } from './contexts/UserContext';
import { Login } from './pages/Login';
import { Main } from './pages/Main';

function App() {
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false })

  return (
    <UserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={
          <GuardedRoute>
            <Main />
          </GuardedRoute>
        } />
        <Route path='login' element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
