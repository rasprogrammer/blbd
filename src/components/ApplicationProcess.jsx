import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const ApplicationProcess = () => {
  const [activeTab, setActiveTab] = useState('online');

  const steps = [
    {
      number: 1,
      title: "Check Eligibility",
      description: "Review the eligibility criteria for your desired program and ensure you meet all requirements",
      icon: "✓",
      time: "5 mins"
    },
    {
      number: 2,
      title: "Online Registration",
      description: "Fill out the online application form with accurate personal and academic details",
      icon: "📝",
      time: "15 mins"
    },
    {
      number: 3,
      title: "Document Upload",
      description: "Upload scanned copies of required documents (certificates, ID proof, photographs)",
      icon: "📎",
      time: "10 mins"
    },
    {
      number: 4,
      title: "Application Fee Payment",
      description: "Pay the non-refundable application fee through online payment gateway",
      icon: "💳",
      time: "5 mins"
    },
    {
      number: 5,
      title: "Application Review",
      description: "Review your application carefully and submit. Download the acknowledgment receipt",
      icon: "🔍",
      time: "5 mins"
    },
    {
      number: 6,
      title: "Entrance Exam/Merit List",
      description: "Appear for entrance exam (if applicable) or wait for merit list announcement",
      icon: "📋",
      time: "As scheduled"
    },
    {
      number: 7,
      title: "Document Verification",
      description: "Attend document verification session with original certificates on the scheduled date",
      icon: "✔️",
      time: "1-2 hours"
    },
    {
      number: 8,
      title: "Fee Payment & Admission",
      description: "Pay the admission fee and complete the enrollment process to confirm your seat",
      icon: "🎓",
      time: "30 mins"
    }
  ];

  const requiredDocuments = [
    "10th Mark Sheet & Certificate",
    "12th Mark Sheet & Certificate",
    "Transfer Certificate from previous institution",
    "Character Certificate",
    "Caste Certificate (if applicable)",
    "Income Certificate (for scholarship)",
    "Domicile Certificate",
    "Passport size photographs (6 copies)",
    "Aadhaar Card",
    "Migration Certificate (for inter-state students)",
    "NEET Scorecard (for BAMS course)",
    "Medical Fitness Certificate",
    "Gap Certificate (if applicable)"
  ];

  const applicationFees = [
    { program: "B.Sc. Nursing", fee: "₹1,500", category: "General" },
    { program: "GNM", fee: "₹1,200", category: "General" },
    { program: "Post Basic B.Sc. Nursing", fee: "₹1,500", category: "General" },
    { program: "M.Sc. Nursing", fee: "₹2,000", category: "General" },
    { program: "BPT", fee: "₹1,500", category: "General" },
    { program: "BAMS", fee: "₹2,000", category: "General" },
    { program: "SC/ST Category", fee: "₹750", category: "Reserved" },
    { program: "OBC Category", fee: "₹1,000", category: "Reserved" }
  ];

  const paymentMethods = [
    { name: "Credit/Debit Card", icon: "💳", available: true },
    { name: "Net Banking", icon: "🏦", available: true },
    { name: "UPI Payment", icon: "📱", available: true },
    { name: "Demand Draft", icon: "📄", available: true }
  ];

  const importantDates = [
    { event: "Application Form Release", date: "March 1, 2024", status: "upcoming" },
    { event: "Last Date to Apply", date: "June 30, 2024", status: "upcoming" },
    { event: "Entrance Exam (if applicable)", date: "July 15, 2024", status: "upcoming" },
    { event: "Merit List Announcement", date: "July 25, 2024", status: "upcoming" },
    { event: "Document Verification", date: "August 1-5, 2024", status: "upcoming" },
    { event: "Final Admission", date: "August 15, 2024", status: "upcoming" }
  ];

  return (
    <div className="admission-page">
      {/* Hero Section */}
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Application Process</h1>
          <p>Step-by-step guide to apply for admission at BLBD Institute</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/admissions">Admissions</Link> / <span>Application Process</span>
          </div>
        </div>
      </section>

      {/* Application Tabs */}
      <section className="application-tabs-section">
        <div className="container">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'online' ? 'active' : ''}`}
              onClick={() => setActiveTab('online')}
            >
              Online Application
            </button>
            <button 
              className={`tab-btn ${activeTab === 'offline' ? 'active' : ''}`}
              onClick={() => setActiveTab('offline')}
            >
              Offline Application
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'online' && (
              <div className="tab-panel">
                <h3>Online Application Process</h3>
                <p className="process-intro">
                  Complete your admission application online from anywhere, anytime. Follow these simple steps:
                </p>
                <div className="start-application">
                  <Link to="/apply-online" className="btn-primary-large">
                    Start Online Application →
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'offline' && (
              <div className="tab-panel">
                <h3>Offline Application Process</h3>
                <p className="process-intro">
                  Visit our campus to submit your application in person:
                </p>
                <div className="offline-details">
                  <div className="detail-item">
                    <strong>Location:</strong> Admissions Office, BLBD Institute, Mandar, PIN - 835214, Ranchi
                  </div>
                  <div className="detail-item">
                    <strong>Timing:</strong> Monday to Saturday, 9:00 AM - 5:00 PM
                  </div>
                  <div className="detail-item">
                    <strong>Required:</strong> Bring all original documents and photocopies
                  </div>
                  <div className="detail-item">
                    <strong>Fee Payment:</strong> Cash, DD, or online transfer
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title">Application Steps</h2>
          <p className="section-subtitle">Follow these steps to complete your application</p>

          <div className="steps-timeline">
            {steps.map((step) => (
              <div key={step.number} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-header">
                    <h3>{step.title}</h3>
                    <span className="step-time">{step.time}</span>
                  </div>
                  <p>{step.description}</p>
                  <div className="step-icon">{step.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="documents-section">
        <div className="container">
          <div className="documents-card">
            <h2>Required Documents Checklist</h2>
            <p>Ensure you have all these documents ready before starting your application</p>
            
            <div className="documents-grid">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="document-item">
                  <span className="doc-check">□</span>
                  <span className="doc-name">{doc}</span>
                </div>
              ))}
            </div>

            <div className="document-note">
              <strong>Note:</strong> All documents should be self-attested. Original documents must be presented during verification.
            </div>
          </div>
        </div>
      </section>

      {/* Application Fee */}
      <section className="fee-section">
        <div className="container">
          <h2 className="section-title">Application Fee Structure</h2>
          
          <div className="fee-table-wrapper">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Program / Category</th>
                  <th>Application Fee</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {applicationFees.map((item, index) => (
                  <tr key={index}>
                    <td>{item.program}</td>
                    <td className="fee-amount">{item.fee}</td>
                    <td>
                      <span className={`category-badge ${item.category.toLowerCase()}`}>
                        {item.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="payment-methods">
            <h3>Accepted Payment Methods</h3>
            <div className="payment-grid">
              {paymentMethods.map((method, index) => (
                <div key={index} className="payment-method">
                  <div className="payment-icon">{method.icon}</div>
                  <div className="payment-name">{method.name}</div>
                  {method.available && <span className="available-badge">Available</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="dates-timeline">
            {importantDates.map((item, index) => (
              <div key={index} className="date-item">
                <div className="date-marker"></div>
                <div className="date-content">
                  <h4>{item.event}</h4>
                  <p className="date-value">{item.date}</p>
                  <span className={`status-badge ${item.status}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I edit my application after submission?</h4>
              <p>Yes, you can edit your application before the final submission deadline. After payment, only minor corrections are allowed.</p>
            </div>
            <div className="faq-item">
              <h4>Is the application fee refundable?</h4>
              <p>No, the application fee is non-refundable under any circumstances.</p>
            </div>
            <div className="faq-item">
              <h4>How will I know if my application is accepted?</h4>
              <p>You will receive notifications via email and SMS. You can also check your application status on the portal.</p>
            </div>
            <div className="faq-item">
              <h4>What if I miss the application deadline?</h4>
              <p>Late applications may be considered on a case-by-case basis with a late fee. Contact the admissions office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <div className="container">
          <div className="help-card">
            <h3>Need Help with Application?</h3>
            <p>Our admissions team is here to assist you throughout the application process</p>
            <div className="help-contacts">
              <div className="help-item">
                <strong>📞 Phone:</strong>
                <a href="tel:+919204951513">+91 920-495-1513</a>
              </div>
              <div className="help-item">
                <strong>📧 Email:</strong>
                <a href="mailto:blbd.edu@gmail.com">blbd.edu@gmail.com</a>
              </div>
              <div className="help-item">
                <strong>⏰ Office Hours:</strong>
                <span>Mon-Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <Link to="/contact" className="btn-secondary">
              Visit Admissions Office
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Start your application now and join the BLBD Institute family</p>
            <div className="cta-buttons">
              <Link to="/apply-online" className="btn-primary">
                Apply Online Now
              </Link>
              <Link to="/admissions/important-dates" className="btn-secondary">
                View All Dates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;
