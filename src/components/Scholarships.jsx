import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdmissionPages.css';

const Scholarships = () => {
  const [calculatorData, setCalculatorData] = useState({
    category: 'general',
    annualIncome: '',
    meritPercentage: ''
  });

  const scholarshipCategories = [
    {
      id: 1,
      name: "Merit-Based Scholarships",
      icon: "🏆",
      color: "#FFD700",
      scholarships: [
        {
          name: "Gold Medal Scholarship",
          eligibility: "90% and above in qualifying examination",
          benefit: "100% tuition fee waiver + ₹50,000/year",
          seats: "Top 5 students"
        },
        {
          name: "Silver Medal Scholarship",
          eligibility: "85-89.99% in qualifying examination",
          benefit: "75% tuition fee waiver + ₹30,000/year",
          seats: "Next 10 students"
        },
        {
          name: "Bronze Medal Scholarship",
          eligibility: "80-84.99% in qualifying examination",
          benefit: "50% tuition fee waiver",
          seats: "Next 20 students"
        },
        {
          name: "Academic Excellence Award",
          eligibility: "75-79.99% in qualifying examination",
          benefit: "25% tuition fee waiver",
          seats: "Next 30 students"
        }
      ]
    },
    {
      id: 2,
      name: "Need-Based Scholarships",
      icon: "🤝",
      color: "#4CAF50",
      scholarships: [
        {
          name: "Financial Aid Scholarship",
          eligibility: "Family income below ₹2 lakh/year",
          benefit: "Up to 100% tuition fee waiver",
          seats: "As per requirement"
        },
        {
          name: "Middle Income Group Support",
          eligibility: "Family income ₹2-5 lakh/year",
          benefit: "Up to 50% tuition fee waiver",
          seats: "Limited seats"
        },
        {
          name: "Emergency Support Fund",
          eligibility: "Sudden financial crisis during course",
          benefit: "One-time assistance up to ₹50,000",
          seats: "Case by case"
        }
      ]
    },
    {
      id: 3,
      name: "Category-Based Scholarships",
      icon: "👥",
      color: "#2196F3",
      scholarships: [
        {
          name: "SC/ST Scholarship",
          eligibility: "Valid caste certificate",
          benefit: "As per government norms",
          seats: "All eligible students"
        },
        {
          name: "OBC Scholarship",
          eligibility: "Valid OBC certificate (Non-creamy layer)",
          benefit: "As per government norms",
          seats: "All eligible students"
        },
        {
          name: "Minority Scholarship",
          eligibility: "Minority community certificate",
          benefit: "₹20,000 - ₹50,000/year",
          seats: "All eligible students"
        }
      ]
    },
    {
      id: 4,
      name: "Special Scholarships",
      icon: "⭐",
      color: "#9C27B0",
      scholarships: [
        {
          name: "Girl Child Scholarship",
          eligibility: "Female students with 70%+ marks",
          benefit: "₹25,000/year",
          seats: "100 students"
        },
        {
          name: "Single Parent Ward Scholarship",
          eligibility: "Children of single parents",
          benefit: "30% tuition fee waiver",
          seats: "As per requirement"
        },
        {
          name: "Differently Abled Scholarship",
          eligibility: "40% or more disability certificate",
          benefit: "50% tuition fee waiver",
          seats: "All eligible students"
        },
        {
          name: "Sports Excellence Scholarship",
          eligibility: "National/State level sports achievement",
          benefit: "₹30,000 - ₹75,000/year",
          seats: "10 students"
        },
        {
          name: "Talent Scholarship",
          eligibility: "Excellence in arts, music, or cultural activities",
          benefit: "₹20,000/year",
          seats: "15 students"
        }
      ]
    },
    {
      id: 5,
      name: "Government Scholarships",
      icon: "🏛️",
      color: "#FF5722",
      scholarships: [
        {
          name: "National Scholarship Portal",
          eligibility: "As per respective scheme guidelines",
          benefit: "Variable (₹10,000 - ₹50,000)",
          seats: "As per scheme"
        },
        {
          name: "State Government Scholarship",
          eligibility: "Domicile of respective state",
          benefit: "As per state government norms",
          seats: "As per scheme"
        },
        {
          name: "Central Sector Scholarship",
          eligibility: "Students from economically weaker sections",
          benefit: "₹12,000 - ₹20,000/year",
          seats: "As per allocation"
        }
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Review the eligibility criteria for various scholarships",
      icon: "✓"
    },
    {
      step: 2,
      title: "Collect Documents",
      description: "Gather all required documents (income certificate, mark sheets, etc.)",
      icon: "📄"
    },
    {
      step: 3,
      title: "Fill Application",
      description: "Complete the scholarship application form online or offline",
      icon: "📝"
    },
    {
      step: 4,
      title: "Submit Documents",
      description: "Submit application with all supporting documents",
      icon: "📤"
    },
    {
      step: 5,
      title: "Verification",
      description: "Wait for document verification and approval",
      icon: "🔍"
    },
    {
      step: 6,
      title: "Award Notification",
      description: "Receive scholarship award notification",
      icon: "🎉"
    }
  ];

  const requiredDocuments = [
    "Completed scholarship application form",
    "Mark sheets of qualifying examination",
    "Income certificate (for need-based scholarships)",
    "Caste certificate (if applicable)",
    "Domicile certificate",
    "Bank account details (passbook copy)",
    "Aadhaar card",
    "Passport size photographs",
    "Disability certificate (if applicable)",
    "Sports/Talent achievement certificates (if applicable)",
    "Affidavit for single parent (if applicable)",
    "Any other relevant supporting documents"
  ];

  const faqs = [
    {
      question: "Can I apply for multiple scholarships?",
      answer: "Yes, students can apply for multiple scholarships provided they meet the eligibility criteria. However, only one major scholarship (merit or need-based) can be availed at a time."
    },
    {
      question: "When should I apply for scholarships?",
      answer: "Scholarship applications open along with the admission process. It's recommended to apply as early as possible. Some scholarships have limited seats."
    },
    {
      question: "Is there a separate application fee for scholarships?",
      answer: "No, there is no application fee for institutional scholarships. However, some government scholarships may have their own guidelines."
    },
    {
      question: "How are scholarship recipients selected?",
      answer: "Selection is based on academic merit, financial need, and availability of funds. A scholarship committee reviews all applications."
    },
    {
      question: "Can my scholarship be renewed each year?",
      answer: "Yes, most scholarships are renewable subject to maintaining required academic performance and other eligibility criteria."
    },
    {
      question: "What if my family's financial situation changes?",
      answer: "You can apply for need-based scholarships or emergency support fund if your financial situation worsens during the course."
    }
  ];

  const calculateScholarship = () => {
    let eligibleScholarships = [];
    const { category, annualIncome, meritPercentage } = calculatorData;
    
    // Add logic to determine eligible scholarships based on inputs
    // This is a simplified example
    return eligibleScholarships;
  };

  return (
    <div className="admission-page">
      {/* Hero Section */}
      <section className="admission-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Scholarships & Financial Aid</h1>
          <p>Making quality education accessible to deserving students</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/admissions">Admissions</Link> / <span>Scholarships</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="scholarship-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">₹2+ Cr</div>
              <div className="stat-label">Total Scholarships Awarded</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Benefited</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Scholarship Programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Tuition Coverage (Top Performers)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Calculator */}
      <section className="calculator-section">
        <div className="container">
          <div className="calculator-card">
            <h2>Scholarship Eligibility Calculator</h2>
            <p>Check which scholarships you may be eligible for</p>
            
            <form className="calculator-form">
              <div className="form-group">
                <label>Category</label>
                <select 
                  value={calculatorData.category}
                  onChange={(e) => setCalculatorData({...calculatorData, category: e.target.value})}
                >
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="minority">Minority</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Annual Family Income (₹)</label>
                <input 
                  type="number" 
                  placeholder="Enter annual income"
                  value={calculatorData.annualIncome}
                  onChange={(e) => setCalculatorData({...calculatorData, annualIncome: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Percentage in Qualifying Exam (%)</label>
                <input 
                  type="number" 
                  placeholder="Enter percentage"
                  value={calculatorData.meritPercentage}
                  onChange={(e) => setCalculatorData({...calculatorData, meritPercentage: e.target.value})}
                />
              </div>
              
              <button type="button" className="btn-calculate" onClick={calculateScholarship}>
                Calculate Eligibility
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Scholarship Categories */}
      <section className="scholarship-categories">
        <div className="container">
          <h2 className="section-title">Available Scholarships</h2>
          <p className="section-subtitle">
            Explore various scholarship opportunities for deserving students
          </p>

          {scholarshipCategories.map((category) => (
            <div key={category.id} className="category-section">
              <div className="category-header" style={{ borderLeftColor: category.color }}>
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>
              
              <div className="scholarships-grid">
                {category.scholarships.map((scholarship, index) => (
                  <div key={index} className="scholarship-card">
                    <div className="scholarship-badge" style={{ backgroundColor: category.color }}>
                      {category.icon}
                    </div>
                    <h4>{scholarship.name}</h4>
                    <div className="scholarship-details">
                      <div className="detail-item">
                        <strong>Eligibility:</strong>
                        <p>{scholarship.eligibility}</p>
                      </div>
                      <div className="detail-item">
                        <strong>Benefit:</strong>
                        <p className="benefit-amount">{scholarship.benefit}</p>
                      </div>
                      <div className="detail-item">
                        <strong>Available Seats:</strong>
                        <p>{scholarship.seats}</p>
                      </div>
                    </div>
                    <button className="btn-apply-scholarship">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Application Process</h2>
          <div className="process-timeline">
            {applicationProcess.map((step) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
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
          <h2 className="section-title">Required Documents</h2>
          <div className="documents-grid">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="document-item">
                <span className="doc-icon">📄</span>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-image">
                <img src="/images/student1.jpg" alt="Student" />
              </div>
              <div className="story-content">
                <h4>Priya Kumar</h4>
                <p className="story-course">B.Sc. Nursing, 2023 Batch</p>
                <p className="story-text">
                  "The Gold Medal Scholarship helped me pursue my dream of becoming a nurse. 
                  The financial support allowed me to focus entirely on my studies."
                </p>
                <div className="story-scholarship">Gold Medal Scholarship Recipient</div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image">
                <img src="/images/student2.jpg" alt="Student" />
              </div>
              <div className="story-content">
                <h4>Rahul Singh</h4>
                <p className="story-course">BPT, 2022 Batch</p>
                <p className="story-text">
                  "Coming from a financially challenged background, the need-based scholarship 
                  was a blessing. Today, I'm successfully practicing as a physiotherapist."
                </p>
                <div className="story-scholarship">Financial Aid Scholarship Recipient</div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image">
                <img src="/images/student3.jpg" alt="Student" />
              </div>
              <div className="story-content">
                <h4>Anjali Devi</h4>
                <p className="story-course">GNM, 2024 Batch</p>
                <p className="story-text">
                  "The Girl Child Scholarship empowered me to break barriers and achieve my goals. 
                  I'm grateful for the opportunity and support."
                </p>
                <div className="story-scholarship">Girl Child Scholarship Recipient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">
                  <span className="faq-icon">Q.</span>
                  {faq.question}
                </h4>
                <p className="faq-answer">
                  <span className="answer-icon">A.</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="external-resources">
        <div className="container">
          <h2 className="section-title">External Scholarship Resources</h2>
          <div className="resources-grid">
            <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-icon">🌐</div>
              <h4>National Scholarship Portal</h4>
              <p>Apply for central & state government scholarships</p>
              <span className="external-link">Visit Website →</span>
            </a>

            <a href="https://www.buddy4study.com" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-icon">📚</div>
              <h4>Buddy4Study</h4>
              <p>Find and apply for various scholarship opportunities</p>
              <span className="external-link">Visit Website →</span>
            </a>

            <a href="https://www.vidyalakshmi.co.in" target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-icon">🏦</div>
              <h4>Vidyalakshmi Portal</h4>
              <p>Education loan schemes from banks</p>
              <span className="external-link">Visit Website →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="scholarship-contact">
        <div className="container">
          <div className="contact-card">
            <h3>Need Help with Scholarship Application?</h3>
            <p>Our scholarship coordinator is here to assist you</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>📞 Phone:</strong>
                <a href="tel:+919204951513">+91 920-495-1513</a>
              </div>
              <div className="contact-item">
                <strong>📧 Email:</strong>
                <a href="mailto:scholarships@blbd.edu">scholarships@blbd.edu</a>
              </div>
              <div className="contact-item">
                <strong>⏰ Office Hours:</strong>
                <span>Mon-Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't Let Finance Stop Your Dreams</h2>
            <p>Apply for scholarships and make quality education affordable</p>
            <div className="cta-buttons">
              <Link to="/apply-scholarship" className="btn-primary">
                Apply for Scholarship
              </Link>
              <Link to="/admissions/application-process" className="btn-secondary">
                Admission Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
