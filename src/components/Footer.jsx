import React from 'react'
import './style.css';

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-2">
                        
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Quick Links</h4>
                            <a href=""><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Our Blog & News</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Our Team</a>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Services</h4>
                            <a href=""><i className="fas fa-angle-right me-2"></i> All Services</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Physiotherapy</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Diagnostics</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Manual Therapy</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Massage Therapy</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Rehabilitation</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Contact Info</h4>
                            <a href=""><i className="fa fa-map-marker-alt me-2"></i> Mandar, PIN - 835214, Ranchi, Jharkhand,INDIA</a>
                            <a href=""><i className="fas fa-envelope me-2"></i> blbd.edu@gmail.com</a>
                            <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i className="fas fa-phone me-2"></i> +91 920-495-1513</a>
                            <a href="" className="mb-3"><i className="fas fa-print me-2"></i> +91 912-217-5661</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
        
        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-white"><a href="#"><i className="fas fa-copyright text-light me-2"></i>BLBD</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-white">
                        Designed By <a className="border-bottom" href="#">Prabha IT Solution</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Copyright End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-success btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a> 
    </div>
  );
}
