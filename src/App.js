import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import About from './Components/About';

function App() {
  return (
    <div className="app">
      <div className="mediablock" >
        <BrowserRouter>
          <nav className="links-block">
            <div className="links"><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></div>
            <div className="links"> <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></div>
            <div className="links"><NavLink to="/Signup" className={({ isActive }) => isActive ? "active" : ""}>Signup</NavLink></div>
            <div className="links"><NavLink to="/Login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></div>
            
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
