import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { LoginPayload } from './components/Login/types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const socket = new WebSocket('ws://localhost:3005');

  socket.onmessage = (MessageEvent) => {
    console.log(MessageEvent.data);
  };

  const handleLogout = () => setIsLoggedIn(false);
  const handleLogin = (loginPayload: LoginPayload) => {
    socket.send(JSON.stringify(loginPayload));
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <Main /> : <Login onLogin={handleLogin} />;
}

export default App;
