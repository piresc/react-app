// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';


// Import your new pages
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import OtpInput  from './pages/otp-input';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <nav>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/otp-input">OTP-input</Link></button>
          </nav>

          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/otp-input" element={<OtpInput/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;