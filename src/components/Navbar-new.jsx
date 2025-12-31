import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/blbd-hindi-logo.png'; // Place your logo here or use public/logo.png
import carousel from './assets/med.jpg'
import carousel2 from './assets/clg.jpg'
import carouse3 from './assets/med2.jpg'
// import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="BLBD Institute" height="50" />
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Service */}
            <li className="nav-item">
              <Link className="nav-link" to="/services">Service</Link>
            </li>

            {/* Approvals */}
            <li className="nav-item">
              <Link className="nav-link" to="/approvals">Approvals</Link>
            </li>

            {/* Admissions Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="admissionsDropdown" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Admissions
              </a>
              <ul className="dropdown-menu" aria-labelledby="admissionsDropdown">
                <li>
                  <Link className="dropdown-item" to="/admissions/eligibility-criteria">
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admissions/application-process">
                    Application Process
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admissions/important-dates">
                    Important Dates
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admissions/scholarships">
                    Scholarships
                  </Link>
                </li>
              </ul>
            </li>

            {/* Campus Life */}
            <li className="nav-item">
              <Link className="nav-link" to="/campus-life">Campus Life</Link>
            </li>

            {/* News and Updates */}
            <li className="nav-item">
              <Link className="nav-link" to="/news">News and Updates</Link>
            </li>

            {/* Career */}
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
