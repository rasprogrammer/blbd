import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/blbd-hindi-logo.png'; // Place your logo here or use public/logo.png
import carousel from './assets/med.jpg'
import carousel2 from './assets/clg.jpg'
import carouse3 from './assets/med2.jpg'

export default function Navbar(props) {
  return (
    <>
      {/* Top Bar */}
      <div className="bgLight py-1 border-bottom">
        <div className="container d-flex justify-content-between align-items-center small">
            <div className="d-flex flex-wrap">
                            <Link to="#" className="text-dark me-4"><i className="fas fa-map-marker textColor me-2"></i>Get Location</Link>
                            <Link to="#" className="text-dark me-4"><i className="fas fa-phone-alt textColor me-2"></i>+91 920-495-1513</Link>
                            <Link to="#" className="text-dark me-0"><i className="fas fa-envelope textColor me-2"></i> blbd.edu@gmail.com</Link>
            </div>
          {/* <div>
             <Link to="https://www.facebook.com/profile.php?id=61578119375234" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter"></i></Link>
                        <Link to="https://www.instagram.com/blbdranchi/" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/babu-lal-badamiya-devi-institute-of-health-630690373/" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in"></i></Link>
          </div> */}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          {/* Logo and Company Name */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" className="me-2 logLeft" />
            <div className="d-flex flex-column lh-sm">
                {/* <span className="fw-bold fs-5">Babu Lal Badamiya Devi</span>
                <span className="text-muted small">Institute of Health, Ranchi</span> */}
            </div>
            </Link>

          {/* Toggler for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">{props.tittle}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Service</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle no-arrow" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Courses</Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/nursing">ANM</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">GNM</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">B.sc Nursing</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Paramedical</Link></li>
                </ul>
              </li> */}
                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle no-arrow"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Approvals
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/nursing">Courses Recognised by Jharkhand State Medical Faculty</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">ANM (INC Approved)</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">GNM (INC Approved)</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">B.sc Nursing (INC Approved)</Link></li>
                </ul>
                </li>

                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle no-arrow"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Admissions
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/nursing">Eligibility Criteria</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">Application Procss</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Important Dates</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Scholarships</Link></li>
                </ul>
                </li>

                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle no-arrow"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Campus Life
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/nursing">Student Activities and Clubs</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">Events and cultural Programs</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Sports Facilities</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Photo Gallery</Link></li>
                </ul>
                </li>

                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle no-arrow"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    News and Updates
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/nursing">Course News</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">Announcements</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Exam Results</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Blog</Link></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle no-arrow"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Career
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><Link className="dropdown-item" to="/services/nursing">Placement Assistance</Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">Alumni Success Stories</Link></li>
                    <li><Link className="dropdown-item" to="/services/ayurveda">Internship Opportunities</Link></li>
                </ul>
                </li>

                <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle no-arrow"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    About Us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    {/* <li><Link className="dropdown-item" to="/services/nursing">Alumni Registration </Link></li> */}
                    <li><Link className="dropdown-item" to="/about">Alumni Registration </Link></li>
                    <li><Link className="dropdown-item" to="/services/paramedical">Grivance Commitee</Link></li>
                </ul>
                </li>

                {/* prabha end */}

                
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li> */}
            </ul>

          </div>
        </div>
      </nav>
      {/* slide Start */}
      <div className="container-fluid px-0">
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    
    {/* Indicators */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    {/* Carousel Items */}
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={carousel} className="d-block w-100 img-fluid" alt="image1" style={{ maxHeight: '35rem', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={carousel2} className="d-block w-100 img-fluid" alt="image2" style={{ maxHeight: '35rem', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={carouse3} className="d-block w-100 img-fluid" alt="image3" style={{ maxHeight: '35rem', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </>
  );
};

