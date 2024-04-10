import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import './App.css'; // Import CSS file

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <div className="header-container">
          <h1 className="app-name">Blogsphere</h1>
        </div>

        <div className="content-container">
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
