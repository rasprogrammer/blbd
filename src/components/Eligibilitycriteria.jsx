import React from 'react'
import carousel from './assets/service.jpg'
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const EligibilityCriteria = () => {
  const programs = [
    {
      id: 1,
      name: "B.Sc. Nursing",
      duration: "4 Years",
      eligibility: [
        "Passed 10+2 examination with Physics, Chemistry, Biology and English",
        "Minimum 45% marks in PCB (40% for SC/ST candidates)",
        "Age: 17-35 years as on 31st December of admission year",
        "Must be medically fit"
      ],
      seats: "60"
    },
    {
      id: 2,
      name: "GNM (General Nursing & Midwifery)",
      duration: "3.5 Years",
      eligibility: [
        "Passed 10+2 examination in any stream (Science preferred)",
        "Minimum 40% marks in 10+2 (35% for SC/ST candidates)",
        "Age: 17-35 years as on 31st December of admission year",
        "Physically and mentally fit"
      ],
      seats: "40"
    },
    {
      id: 3,
      name: "Post Basic B.Sc. Nursing",
      duration: "2 Years",
      eligibility: [
        "Registered nurse with State Nursing Council",
        "Passed GNM/B.Sc. Nursing from recognized institution",
        "Minimum 1 year of work experience after registration",
        "Valid nursing registration certificate"
      ],
      seats: "30"
    },
    {
      id: 4,
      name: "M.Sc. Nursing",
      duration: "2 Years",
      eligibility: [
        "B.Sc. Nursing degree from recognized university",
        "Minimum 55% marks in B.Sc. Nursing (50% for SC/ST)",
        "Registered with State/Indian Nursing Council",
        "Valid NORCET/entrance exam score"
      ],
      seats: "20"
    },
    {
      id: 5,
      name: "Diploma in Physiotherapy",
      duration: "2 Years",
      eligibility: [
        "Passed 10+2 with Physics, Chemistry, Biology",
        "Minimum 45% marks in PCB aggregate",
        "Age: 17-25 years",
        "No physical disabilities"
      ],
      seats: "50"
    },
    {
      id: 6,
      name: "Bachelor of Physiotherapy (BPT)",
      duration: "4.5 Years",
      eligibility: [
        "Passed 10+2 with Physics, Chemistry, Biology and English",
        "Minimum 50% marks in PCB (45% for SC/ST)",
        "Age: 17-25 years as on admission date",
        "Physically fit for practical training"
      ],
      seats: "40"
    },
    {
      id: 7,
      name: "Diploma in Medical Lab Technology",
      duration: "2 Years",
      eligibility: [
        "Passed 10+2 with Physics, Chemistry, Biology",
        "Minimum 45% marks in PCB",
        "Age: 17-30 years",
        "Good vision (corrected allowed)"
      ],
      seats: "35"
    },
    {
      id: 8,
      name: "B.Sc. Medical Lab Technology",
      duration: "3 Years",
      eligibility: [
        "Passed 10+2 with PCB and English",
        "Minimum 50% marks in PCB aggregate",
        "Age: 17-25 years",
        "Should not be color blind"
      ],
      seats: "30"
    },
    {
      id: 9,
      name: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
      duration: "5.5 Years",
      eligibility: [
        "Passed 10+2 with Physics, Chemistry, Biology",
        "Minimum 50% marks in PCB (40% for SC/ST/OBC)",
        "Qualified NEET examination",
        "Age: 17-25 years (relaxation for reserved categories)"
      ],
      seats: "60"
    }
  ];

  const generalRequirements = [
    {
      icon: "📋",
      title: "Academic Requirements",
      description: "All candidates must have passed their qualifying examination from a recognized board/university"
    },
    {
      icon: "🏥",
      title: "Medical Fitness",
      description: "Candidates must be medically fit and submit a fitness certificate at the time of admission"
    },
    {
      icon: "📄",
      title: "Documentation",
      description: "Original certificates and documents must be produced for verification at the time of admission"
    },
    {
      icon: "🎓",
      title: "Entrance Exam",
      description: "For certain courses, qualifying in entrance examinations (NEET, institutional exam) is mandatory"
    }
  ];

  return (
    <div className="admission-page">
      {/* Hero Section */}
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Eligibility Criteria</h1>
          <p>Comprehensive eligibility requirements for all programs at BLBD Institute</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/admissions">Admissions</Link> / <span>Eligibility Criteria</span>
          </div>
        </div>
      </section>

      {/* General Requirements */}
      <section className="general-requirements">
        <div className="container">
          <h2 className="section-title">General Requirements</h2>
          <p className="section-subtitle">
            All applicants must meet these basic requirements in addition to program-specific criteria
          </p>
          
          <div className="requirements-grid">
            {generalRequirements.map((req, index) => (
              <div key={index} className="requirement-card">
                <div className="requirement-icon">{req.icon}</div>
                <h3>{req.title}</h3>
                <p>{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program-wise Eligibility */}
      <section className="program-eligibility">
        <div className="container">
          <h2 className="section-title">Program-wise Eligibility</h2>
          <p className="section-subtitle">
            Detailed eligibility criteria for each course offered
          </p>

          <div className="programs-list">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <div>
                    <h3>{program.name}</h3>
                    <div className="program-meta">
                      <span className="duration">
                        <i className="icon-clock"></i> {program.duration}
                      </span>
                      <span className="seats">
                        <i className="icon-users"></i> {program.seats} Seats
                      </span>
                    </div>
                  </div>
                  <div className="program-badge">
                    Approved
                  </div>
                </div>
                
                <div className="program-body">
                  <h4>Eligibility Requirements:</h4>
                  <ul className="eligibility-list">
                    {program.eligibility.map((criteria, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="program-footer">
                  <Link to="/admissions/application-process" className="btn-apply">
                    Apply Now
                  </Link>
                  <Link to={`/programs/${program.id}`} className="btn-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="important-notes">
        <div className="container">
          <div className="notes-card">
            <h3>📌 Important Notes</h3>
            <ul>
              <li>Age relaxation of 5 years is applicable for SC/ST/OBC candidates as per government rules</li>
              <li>Candidates seeking admission under reserved categories must produce valid certificates</li>
              <li>The institute reserves the right to verify all documents and certificates</li>
              <li>Eligibility criteria may be subject to change as per regulatory body guidelines</li>
              <li>International students must have their degrees equivalence from AIU/respective council</li>
              <li>For NEET-based courses, candidates must meet the NEET cut-off scores</li>
              <li>Physical fitness certificate from a registered medical practitioner is mandatory</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Apply?</h2>
            <p>Check if you meet the eligibility criteria and start your application process today</p>
            <div className="cta-buttons">
              <Link to="/admissions/application-process" className="btn-primary">
                Application Process
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibilityCriteria;