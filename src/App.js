// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AnotherPage from './pages/AnotherPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column vh-100">
        <NavbarComponent />
        <div className="flex-grow-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/another" element={<AnotherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;