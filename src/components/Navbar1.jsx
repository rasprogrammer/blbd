import React from 'react'
import PropTypes, { string } from 'prop-types'
import logo from './assets/blbd-logo.png'
import carousel from './assets/service-5.jpg'
import carousel2 from './assets/service.jpg'
import './style.css'

export default function Navbar1() {
  return (
    <>
           {/* <!-- Topbar Start --> */}
           

        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0 align-items-center" style={{height: '45px'}}>
                <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <a href="#" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                        <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+91 920-495-1513</a>
                        <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2"></i> blbd.edu@gmail.com</a>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-flex align-items-center justify-content-end">
                        <a href="https://www.facebook.com/profile.php?id=61578119375234" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/blbdranchi/" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/babu-lal-badamiya-devi-institute-of-health-630690373/" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <img src={logo} alt="Logo"/>
                </a>
               <span class="text-xl md:text-2xl font-bold text-gray-900">Babu Lal Badamiya Devi Institute of Health</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Education</a>
                            <div className="dropdown-menu m-0">
                                <a href="appointment.html" className="dropdown-item">ANM</a>
                                <a href="feature.html" className="dropdown-item">GNM</a>
                                <a href="blog.html" className="dropdown-item">B.sc Nursing</a>
                            </div>
                        </div>
                        
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        
                        <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                            <div className="dropdown-menu m-0">
                                <a href="team.html" className="dropdown-item">Founders Vision</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Book Appointment</a>
                </div>
            </nav>
        </div>


        {/* <!-- Navbar End --> */}
 <div className="container-fluid position-relative px-1">
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={carousel} className="d-block w-100" alt="image1" style={{height:'35rem'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={carousel2} className="d-block w-100" alt="image2" style={{height:'35rem'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel} className="d-block w-100" alt="image3" style={{height:'35rem'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
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
{/* <div className="header-carousel owl-carousel owl-loaded owl-drag">
                
                
            <div className="owl-stage-outer">
            <div className="owl-stage" style={{transform: 'translate3d(-3840px, 0px, 0px)', transition: 'all', width: '7680px'}}>
            <div className="owl-item cloned" style={{width: '1280px'}}>
            <div className="header-carousel-item">
                    <img src={carousel} className="img-fluid w-100" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>


                </div>
                </div>
                <div className="owl-item cloned" style={{width: '1280px'}}><div className="header-carousel-item">
                    <img src={carousel2} className="img-fluid w-100" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div></div><div className="owl-item" style={{width: '1280px'}}><div className="header-carousel-item">
                    <img src={carousel} className="img-fluid w-100" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div></div><div className="owl-item active" style={{width: '1280px'}}><div className="header-carousel-item">
                    <img src={carousel2} className="img-fluid w-100" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div></div><div className="owl-item cloned" style={{width: '1280px'}}><div className="header-carousel-item">
                    <img src={carousel} className="img-fluid w-100" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div></div><div className="owl-item cloned" style={{width: '1280px'}}><div className="header-carousel-item">
                    <img src={carousel2}className="img-fluid w-100" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px'}}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="bi bi-arrow-left"></i></div><div className="owl-next"><i className="bi bi-arrow-right"></i></div></div><div className="owl-dots disabled"></div></div> */}
    </>
  );
}
