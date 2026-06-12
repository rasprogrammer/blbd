import React from 'react';
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const ImportantDates = () => {
  const academicCalendar = [
    { date: "March 1, 2026", event: "Application Form Rollout", description: "Online and counter application form distribution starts." },
    { date: "June 30, 2026", event: "Last Date to Register", description: "Final structural window closure for core form entry submission." },
    { date: "July 20, 2026", event: "Primary Merit Ranking List", description: "First batch evaluation data released on the notice boards." },
    { date: "August 24, 2026", event: "Orientation Session", description: "Compulsory institutional setup overview for fresh batches." },
    { date: "August 25, 2026", event: "Commencement of Classes", description: "Formal start of regular daily lecture programs." }
  ];

  return (
    <div className="admission-page">
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Important Dates</h1>
          <p>Academic calendar and key dates for the 2026-27 admission cycle</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Important Dates</span>
          </div>
        </div>
      </section>

      <section className="calendar-section py-5">
        <div className="container">
          <h2 className="section-title">Academic Calendar Milestones</h2>
          <div className="category-events" style={{ marginTop: '30px' }}>
            {academicCalendar.map((event, idx) => (
              <div key={idx} className="event-item" style={{ marginBottom: '20px', paddingLeft: '15px', borderLeft: '3px solid #1e5128' }}>
                <h4 style={{ color: '#1e5128', fontWeight: 'bold' }}>{event.date}</h4>
                <h5>{event.event}</h5>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDates;