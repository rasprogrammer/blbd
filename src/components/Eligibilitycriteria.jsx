import React from 'react'
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const EligibilityCriteria = () => {
  const programs = [
    {
      id: 1,
      name: "B.Sc. Nursing",
      duration: "4 Years",
      eligibility: [
        "Passed 10+2 examination with Physics, Chemistry, Biology and English individually",
        "Minimum 45% aggregate marks in PCB (40% for SC/ST candidates)",
        "Minimum age of 17 years on or before 31st December of the admission year",
        "Must be medically fit and certified by a registered medical practitioner"
      ],
      seats: "60"
    },
    {
      id: 2,
      name: "GNM (General Nursing & Midwifery)",
      duration: "3 Years",
      eligibility: [
        "Passed 10+2 examination in any stream (Science preferred with PCB and English)",
        "Minimum 40% aggregate marks in 10+2 from a recognized board",
        "Registered ANM with pass marks are also eligible",
        "Age limit: 17-35 years as on 31st December of admission year"
      ],
      seats: "40"
    },
    {
      id: 3,
      name: "ANM (Auxiliary Nursing & Midwifery)",
      duration: "2 Years",
      eligibility: [
        "Passed 10+2 examination in Arts/Science/Commerce from recognized board",
        "Minimum 40% aggregate marks in 10+2",
        "Minimum age of 17 years as on 31st December of admission year",
        "Physically and mentally fit for medical training"
      ],
      seats: "50"
    },
    {
      id: 4,
      name: "BMLT (Bachelor of Medical Lab Technology)",
      duration: "3 Years",
      eligibility: [
        "Passed 10+2 with Physics, Chemistry, and Biology from a recognized board",
        "Minimum 50% aggregate marks in PCB",
        "Age criteria: 17 years minimum on admission"
      ],
      seats: "40"
    },
    {
      id: 5,
      name: "BPT (Bachelor of Physiotherapy)",
      duration: "4.5 Years",
      eligibility: [
        "Passed 10+2 with Physics, Chemistry, Biology and English",
        "Minimum 50% aggregate marks in PCB from recognized board",
        "Physically fit for rigorous practical clinical training"
      ],
      seats: "40"
    }
  ];

  const generalRequirements = [
    { icon: "🎓", title: "Academic Recognition", description: "All candidates must pass from recognized Central/State education boards or Universities." },
    { icon: "🩺", title: "Medical Fitness", description: "Candidates must be physically and mentally fit, requiring an official medical fitness certificate." },
    { icon: "📁", title: "Documentation", description: "All original mark sheets, migration, and transfer certificates must be submitted for university verification." },
    { icon: "📝", title: "Affiliation Norms", description: "Admissions strictly follow guidelines set by Aryabhatta Knowledge University, INC, PCI, and BNRC." }
  ];

  return (
    <div className="admission-page">
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Eligibility Criteria</h1>
          <p>Comprehensive eligibility requirements for Babu Lal Badamiya Devi Institute</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Eligibility</span>
          </div>
        </div>
      </section>

      <section className="general-requirements">
        <div className="container">
          <h2 className="section-title">General Requirements</h2>
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

      <section className="program-eligibility">
        <div className="container">
          <h2 className="section-title">Program-wise Eligibility</h2>
          <div className="programs-list">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <div>
                    <h3>{program.name}</h3>
                    <div className="program-meta">
                      <span className="duration">⏳ {program.duration}</span>
                      <span className="seats">👥 {program.seats} Seats</span>
                    </div>
                  </div>
                  <div className="program-badge">Approved</div>
                </div>
                <div className="program-body">
                  <h4>Eligibility Requirements:</h4>
                  <ul className="eligibility-list">
                    {program.eligibility.map((criteria, index) => (
                      <li key={index}><strong>✓</strong> {criteria}</li>
                    ))}
                  </ul>
                </div>
                <div className="program-footer">
                  <Link to="/applicationprocess" className="btn-apply">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EligibilityCriteria;