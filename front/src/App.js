
import './App.css';
import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './modules/Navbar';
import Home from './modules/Home';
import AddComment from './modules/elements/AddComment';
import UserProfile from './modules/elements/UserProfile';
import Register from "./modules/Register";
import { hasAuthenticated } from "./services/AuthAPI";
import AuthContext from './context/Auth';
import AuthenticatedRoute from './routes/AuthenticatedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <>
        <Navbar />
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/comments/addComment" element={<AddComment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={
            <AuthenticatedRoute element={<UserProfile />} /> 
          } />
        </Routes>
      </>
    </Auth.Provider>
  );
}

export default App;
