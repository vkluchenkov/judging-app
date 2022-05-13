import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GuardedRoute } from './components/GuardedRoute';
import { UserContext } from './contexts/UserContext';
import { Login } from './components/Login';
import { Main } from './components/Main';

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
