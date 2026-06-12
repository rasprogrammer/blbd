import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const ApplicationProcess = () => {
  const [activeTab, setActiveTab] = useState('online');

  const steps = [
    { number: 1, title: "Check Eligibility", description: "Review course criteria for B.Sc. Nursing, GNM, ANM, or Paramedical choices.", icon: "✓", time: "5 mins" },
    { number: 2, title: "Registration", description: "Fill out the application form with accurate personal and academic details.", icon: "📝", time: "15 mins" },
    { number: 3, title: "Document Submission", description: "Attach clear copies of educational certificates, Aadhaar proof, and photos.", icon: "📎", time: "10 mins" },
    { number: 4, title: "Fee Payment", description: "Pay the designated non-refundable registration fee via approved channels.", icon: "💳", time: "5 mins" }
  ];

  const requiredDocuments = [
    "10th Mark Sheet & Passing Certificate",
    "12th Mark Sheet & Passing Certificate",
    "School / College Leaving Certificate (SLC/CLC)",
    "Migration Certificate (Original mandatory)",
    "Character Certificate",
    "Aadhaar Card Copy",
    "Medical Fitness Certificate"
  ];

  return (
    <div className="admission-page">
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Application Process</h1>
          <p>Step-by-step guide to secure admission at Babu Lal Badamiya Devi Institute</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Application Process</span>
          </div>
        </div>
      </section>

      <section className="application-tabs-section">
        <div className="container">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'online' ? 'active' : ''}`} onClick={() => setActiveTab('online')}>Online Mode</button>
            <button className={`tab-btn ${activeTab === 'offline' ? 'active' : ''}`} onClick={() => setActiveTab('offline')}>Campus Desk</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'online' && (
              <div className="tab-panel">
                <h3>Online Application Portal</h3>
                <Link to="/contact" className="btn-primary-large">Get Admission Enquiry Form →</Link>
              </div>
            )}
            {activeTab === 'offline' && (
              <div className="tab-panel">
                <h3>Campus Admissions Office</h3>
                <p><strong>Location:</strong> Admissions Desk, Babu Lal Badamiya Devi Institute Campus</p>
                <p><strong>Timing:</strong> Monday to Saturday, 10:00 AM - 4:00 PM</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <h2 className="section-title">Application Steps</h2>
          <div className="steps-timeline">
            {steps.map((step) => (
              <div key={step.number} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="documents-section">
        <div className="container">
          <div className="documents-card">
            <h2>Required Documents Checklist</h2>
            <div className="documents-grid">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="document-item">
                  <span className="doc-check">□</span> <span className="doc-name">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;