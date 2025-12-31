
import React from 'react'
import about1 from './assets/about1.jpg'
import about2 from './assets/about2.jpg'

export default function Aboutus() {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationdelay: '0.1s', animationname: 'fadeIn'}}>
                    <div className="d-flex flex-column dFlexnew">
                        <img className="img-fluid rounded w-75 align-self-end" src={about1} alt=""/>
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3 about2Img" src={about2} alt="" style={{marginTop: '-6rem'}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: 'visible', animationdelay: '0.5s', animationname: 'fadeIn'}}>
                    {/* <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p> */}
                    <h1 className="mb-4">Get Know About Us!</h1>
                    <p>Dedicated to the enduring vision of late Babu Lal and late Badamiya Devi, our institute creates a transformative path for future generations to learn, heal, and serve. We are committed to providing top-quality nursing education and advanced training, fostering ethical values and compassionate care. Our college, established as a dream fulfilled, empowers students to become skilled healthcare professionals ready to serve the community and shape a better medical future in Ranchi, Jharkhand.</p>
                    {/*<p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>*/}
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
                
            </div>
        </div>
    </div>
  );
}
