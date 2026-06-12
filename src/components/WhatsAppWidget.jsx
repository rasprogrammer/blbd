// ─── WhatsAppWidget.jsx ───────────────────────────────────────────────────────
import React from 'react';

const WhatsAppWidget = () => {
  const phone   = "919204951513";
  const message = encodeURIComponent(
    "Hello! I am interested in taking admission at Babu Lal Badamiya Devi Institute of Health. Please provide more details about courses and fees."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={wStyles.float}
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp" style={{ fontSize: 22 }}></i>
      <span style={{ fontWeight: 600, fontSize: 13, fontFamily: 'sans-serif' }}>Chat With Us</span>
    </a>
  );
};

const wStyles = {
  float: {
    position: 'fixed',
    bottom: 25,
    right: 20,
    backgroundColor: '#25d366',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    zIndex: 99999,
    transition: 'all 0.3s ease',
  },
};

export { WhatsAppWidget };
export default WhatsAppWidget;