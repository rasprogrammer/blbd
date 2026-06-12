import React, { useState } from 'react';

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);

  const coursesList = ["B.Sc. Nursing", "GNM", "ANM", "BMLT", "BPT"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aap yahan apna backend node api endpoint call add kar sakte hain
    alert(`Thank you ${formData.name}! Your enquiry for ${formData.course} has been submitted successfully.`);
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Side Sticky Toggle Tab */}
      <div 
        style={styles.stickyTab} 
        onClick={() => setIsOpen(true)}
        className="d-none d-md-flex"
      >
        <span>Admission Enquiry 2026</span>
      </div>

      {/* Mobile Sticky Bottom Button */}
      <div 
        style={styles.mobileStickyBtn} 
        onClick={() => setIsOpen(true)}
        className="d-block d-md-none"
      >
        📩 Enquire Now for Admissions
      </div>

      {/* Bootstrap styled Reusable Form Modal Context */}
      {isOpen && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 999999 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: '12px', border: 'none' }}>
              <div className="modal-header bg-success text-white" style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                <h5 className="modal-title fw-bold">Admission Enquiry Form 2026</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setIsOpen(false)}></button>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Student Name *</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Mobile Number *</label>
                    <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Enter 10 digit mobile number" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email ID</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Enter email address" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Select Course *</label>
                    <select name="course" className="form-select" value={formData.course} onChange={handleChange} required>
                      <option value="">-- Choose Course --</option>
                      {coursesList.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Brief Message/Query</label>
                    <textarea name="message" className="form-control" rows="3" value={formData.message} onChange={handleChange} placeholder="Ask any questions regarding fees, eligibility, etc."></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100 py-2 fw-bold rounded-pill shadow-sm">Submit Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  stickyTab: {
    position: 'fixed',
    right: 0,
    top: '40%',
    backgroundColor: '#1e5128',
    color: '#fff',
    padding: '15px 10px',
    cursor: 'pointer',
    writingMode: 'vertical-rl',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    borderRadius: '8px 0px 0px 8px',
    boxShadow: '-2px 2px 10px rgba(0,0,0,0.2)',
    zIndex: 99998,
    fontSize: '13px'
  },
  mobileStickyBtn: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '50%', // It stays on the left half while WhatsApp occupies the bottom right area safely
    backgroundColor: '#1e5128',
    color: '#fff',
    textAlign: 'center',
    padding: '12px 10px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    zIndex: 99998,
    boxShadow: '0px -2px 10px rgba(0,0,0,0.2)'
  }
};

export default AdmissionEnquiry;