import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./Login"
import Home from "./Home"

import Profile from './Profile';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Login/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
  );
};

export default App;
