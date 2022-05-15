import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => setIsLoggedIn(false)
  const handleLogin = () => setIsLoggedIn(true)

  return (
    isLoggedIn ? <Main /> : <Login onLogin={handleLogin} />
  );
}

export default App;
