import React from 'react'
import carousel from './assets/service.jpg'

import education from './assets/education.jpg'
import department from './assets/department.jpg'
import research from './assets/research.jpg'
import services from './assets/services.jpg'
import otherservice from './assets/otherservice.jpg'
import service2 from './assets/247service.jpg'
import consultation from './assets/consultation.jpg'
import emergency from './assets/emergency.jpg';
import './style.css';

export default function Service() {
  return (
    
    // <!-- Services Start -->
    <div className="container-fluid">
        {/* <div className="container py-5"> */}
            <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
                <div className="sub-style">
                    <h4 className="sub-title px-3 mb-0 mt-2">Our Services</h4>
                </div>
                {/* <h1 className="display-3 mb-4">Our Service</h1> */}
                {/* <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p> */}
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src={education} className="img-fluid rounded-top w-100" alt=""/>
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Education</h5>
                                    <p className="mb-4">We offer three professional nursing courses: ANM , GNM , and B.Science in Nursing.

</p>
                                    <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={research} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">Research</h5>
                                <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={department} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">Department</h5>
                                <p className="mb-4">Hospital provides for the provision of medical and surgical care to patients arriving at the hospital.</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={services} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">Medical services</h5>
                                <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={consultation} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">Consultation OPD</h5>
                                <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={emergency} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">Emergency Care</h5>
                                <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={service2} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">24/7 Hour Service</h5>
                                <p className="mb-4">A medical emergency is an unforeseen injury or illness requiring immediate medical care.</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded">
                       <div className="service-img rounded-top">
                       <img src={otherservice} className="img-fluid rounded-top w-100" alt=""/>
                       </div>
                        <div className="service-content rounded-bottom bg-light p-4">
                            <div className="service-content-inner">
                                <h5 className="mb-4">Other Service</h5>
                                <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                <a href="#" className="btn btn-success rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                    <a className="btn btn-success rounded-pill text-white py-3 px-5" href="#">Services More</a>
                </div>
            </div>
        {/* </div> */}
        
    </div>
   
  );
}
