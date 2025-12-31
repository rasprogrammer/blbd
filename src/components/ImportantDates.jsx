import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const ImportantDates = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const academicCalendar = {
    "2024-25": [
      {
        category: "Admission Cycle",
        color: "#4CAF50",
        events: [
          { date: "March 1, 2024", event: "Application Form Release", description: "Online and offline application forms available" },
          { date: "March 15, 2024", event: "Prospectus Available", description: "Digital and physical prospectus distribution begins" },
          { date: "June 30, 2024", event: "Last Date to Apply", description: "Final deadline for submission of applications" },
          { date: "July 5, 2024", event: "Late Application Window Opens", description: "Late applications accepted with additional fee" },
          { date: "July 10, 2024", event: "Late Application Closes", description: "Absolute final deadline for applications" }
        ]
      },
      {
        category: "Entrance & Selection",
        color: "#2196F3",
        events: [
          { date: "July 15, 2024", event: "Institutional Entrance Exam", description: "Written test for eligible programs" },
          { date: "July 18, 2024", event: "Answer Key Release", description: "Preliminary answer key published online" },
          { date: "July 20, 2024", event: "Answer Key Challenge Deadline", description: "Last date for objections to answer key" },
          { date: "July 25, 2024", event: "Merit List Announcement", description: "First merit list published on website" },
          { date: "July 30, 2024", event: "Second Merit List", description: "Second merit list for remaining seats" }
        ]
      },
      {
        category: "Document Verification",
        color: "#FF9800",
        events: [
          { date: "August 1-3, 2024", event: "First Round Verification", description: "Document verification for first merit list candidates" },
          { date: "August 5-7, 2024", event: "Second Round Verification", description: "Document verification for second merit list" },
          { date: "August 10, 2024", event: "Spot Admission Round", description: "On-the-spot admission for vacant seats" }
        ]
      },
      {
        category: "Fee Payment & Admission",
        color: "#9C27B0",
        events: [
          { date: "August 12-15, 2024", event: "Fee Payment Window", description: "Payment of admission and tuition fees" },
          { date: "August 18, 2024", event: "Final Admission Deadline", description: "Last date for fee payment and enrollment" },
          { date: "August 20, 2024", event: "Orientation Program", description: "Mandatory orientation for new students" }
        ]
      },
      {
        category: "Academic Session",
        color: "#f44336",
        events: [
          { date: "August 25, 2024", event: "Classes Commence", description: "First day of academic year 2024-25" },
          { date: "September 5, 2024", event: "Late Admission Closes", description: "Absolute final date for any admissions" },
          { date: "December 15-30, 2024", event: "First Semester Exams", description: "End semester examinations" },
          { date: "December 31, 2024 - January 14, 2025", event: "Winter Break", description: "Academic break for students" }
        ]
      },
      {
        category: "Second Semester",
        color: "#00BCD4",
        events: [
          { date: "January 15, 2025", event: "Second Semester Begins", description: "Classes resume after winter break" },
          { date: "February 20, 2025", event: "Mid-term Assessments", description: "Internal assessment tests" },
          { date: "April 15-30, 2025", event: "Second Semester Exams", description: "End semester examinations" },
          { date: "May 1-31, 2025", event: "Summer Break", description: "Academic vacation period" }
        ]
      }
    ]
  };

  const upcomingDeadlines = [
    { date: "June 30, 2024", event: "Application Deadline", daysLeft: 45, urgent: true },
    { date: "July 15, 2024", event: "Entrance Exam", daysLeft: 60, urgent: false },
    { date: "August 15, 2024", event: "Final Admission", daysLeft: 91, urgent: false }
  ];

  const examSchedule = [
    { exam: "Institutional Entrance Test", date: "July 15, 2024", time: "10:00 AM - 1:00 PM", venue: "Main Campus, BLBD Institute" },
    { exam: "Interview (if applicable)", date: "July 20-22, 2024", time: "As per schedule", venue: "Admissions Office" },
    { exam: "Document Verification", date: "August 1-7, 2024", time: "9:00 AM - 4:00 PM", venue: "Administrative Block" }
  ];

  const holidayList = [
    { date: "August 15, 2024", holiday: "Independence Day", type: "National" },
    { date: "October 2, 2024", holiday: "Gandhi Jayanti", type: "National" },
    { date: "October 24, 2024", holiday: "Dussehra", type: "Festival" },
    { date: "November 1, 2024", holiday: "Diwali", type: "Festival" },
    { date: "November 15, 2024", holiday: "Guru Nanak Jayanti", type: "Festival" },
    { date: "December 25, 2024", holiday: "Christmas", type: "Festival" },
    { date: "January 26, 2025", holiday: "Republic Day", type: "National" },
    { date: "March 8, 2025", holiday: "Maha Shivaratri", type: "Festival" },
    { date: "March 25, 2025", holiday: "Holi", type: "Festival" }
  ];

  return (
    <div className="admission-page">
      {/* Hero Section */}
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Important Dates</h1>
          <p>Academic calendar and key dates for the admission cycle</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/admissions">Admissions</Link> / <span>Important Dates</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card urgent">
              <div className="stat-icon">⚠️</div>
              <div className="stat-info">
                <h3>Next Deadline</h3>
                <p className="stat-value">June 30, 2024</p>
                <span className="stat-label">Application Closes</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-info">
                <h3>Exam Date</h3>
                <p className="stat-value">July 15, 2024</p>
                <span className="stat-label">Entrance Test</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <div className="stat-info">
                <h3>Classes Start</h3>
                <p className="stat-value">August 25, 2024</p>
                <span className="stat-label">Academic Session Begins</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <div className="stat-info">
                <h3>Merit List</h3>
                <p className="stat-value">July 25, 2024</p>
                <span className="stat-label">First List Release</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="year-selector-section">
        <div className="container">
          <div className="year-selector">
            <label>Academic Year:</label>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="2024-25">2024-25</option>
              <option value="2023-24">2023-24 (Archive)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="calendar-section">
        <div className="container">
          <h2 className="section-title">Academic Calendar {selectedYear}</h2>
          
          <div className="calendar-content">
            {academicCalendar[selectedYear].map((category, index) => (
              <div key={index} className="calendar-category">
                <div className="category-header" style={{ borderLeftColor: category.color }}>
                  <h3>{category.category}</h3>
                  <span className="event-count">{category.events.length} Events</span>
                </div>
                <div className="category-events">
                  {category.events.map((event, idx) => (
                    <div key={idx} className="event-item">
                      <div className="event-date" style={{ backgroundColor: category.color }}>
                        <div className="date-day">{new Date(event.date).getDate()}</div>
                        <div className="date-month">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                      <div className="event-details">
                        <h4>{event.event}</h4>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines */}
      <section className="deadlines-section">
        <div className="container">
          <h2 className="section-title">Upcoming Deadlines</h2>
          <div className="deadlines-grid">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className={`deadline-card ${deadline.urgent ? 'urgent' : ''}`}>
                <div className="deadline-header">
                  <span className="deadline-days">{deadline.daysLeft} Days</span>
                  {deadline.urgent && <span className="urgent-badge">Urgent</span>}
                </div>
                <h3>{deadline.event}</h3>
                <p className="deadline-date">{deadline.date}</p>
                <div className="deadline-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${100 - (deadline.daysLeft / 100 * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section className="exam-schedule-section">
        <div className="container">
          <h2 className="section-title">Examination Schedule</h2>
          <div className="exam-table-wrapper">
            <table className="exam-table">
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                </tr>
              </thead>
              <tbody>
                {examSchedule.map((exam, index) => (
                  <tr key={index}>
                    <td className="exam-name">{exam.exam}</td>
                    <td>{exam.date}</td>
                    <td>{exam.time}</td>
                    <td>{exam.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Holiday List */}
      <section className="holiday-section">
        <div className="container">
          <h2 className="section-title">Holiday List 2024-25</h2>
          <div className="holiday-grid">
            {holidayList.map((holiday, index) => (
              <div key={index} className="holiday-card">
                <div className="holiday-date">
                  <div className="month">
                    {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                  <div className="day">{new Date(holiday.date).getDate()}</div>
                </div>
                <div className="holiday-info">
                  <h4>{holiday.holiday}</h4>
                  <span className={`holiday-type ${holiday.type.toLowerCase()}`}>
                    {holiday.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <div className="download-card">
            <h3>📥 Download Academic Calendar</h3>
            <p>Get the complete academic calendar for the year 2024-25</p>
            <div className="download-buttons">
              <button className="btn-download">
                <span className="icon">📄</span>
                Download PDF
              </button>
              <button className="btn-download">
                <span className="icon">📅</span>
                Add to Google Calendar
              </button>
              <button className="btn-download">
                <span className="icon">🖨️</span>
                Print Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reminder Section */}
      <section className="reminder-section">
        <div className="container">
          <div className="reminder-card">
            <div className="reminder-icon">🔔</div>
            <div className="reminder-content">
              <h3>Get Deadline Reminders</h3>
              <p>Subscribe to receive email and SMS notifications for important dates</p>
              <form className="reminder-form">
                <input type="email" placeholder="Enter your email" />
                <input type="tel" placeholder="Enter your phone number" />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="notes-section">
        <div className="container">
          <div className="notes-card">
            <h3>📌 Important Notes</h3>
            <ul>
              <li>All dates are tentative and subject to change. Check the official website regularly for updates.</li>
              <li>Late applications may be considered with additional late fee charges.</li>
              <li>Entrance exam admit cards will be available for download 7 days before the exam date.</li>
              <li>Document verification is mandatory for all shortlisted candidates.</li>
              <li>Classes will commence as per the schedule mentioned above.</li>
              <li>The institute reserves the right to modify the academic calendar if necessary.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't Miss Important Deadlines</h2>
            <p>Start your application today and secure your seat at BLBD Institute</p>
            <div className="cta-buttons">
              <Link to="/admissions/application-process" className="btn-primary">
                Apply Now
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

export default ImportantDates;
