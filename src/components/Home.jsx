import React, { useEffect, useState } from 'react';
import Service from './Service';
import About from './Aboutus';

// Popup Image Import
import admissionBanner from './assets/admission-popup.png';

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div>

      {/* Popup */}
      {showPopup && (
        <div style={styles.overlay}>

          <div style={styles.popup}>

            {/* Close Button */}
            <button
              style={styles.closeBtn}
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            {/* Banner Image */}
            <img
              src={admissionBanner}
              alt="Admission Open"
              style={styles.image}
            />

          </div>
        </div>
      )}

      <Service />
      <About />
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '10px',
  },

  popup: {
    position: 'relative',
    width: '90%',
    maxWidth: '900px',
    borderRadius: '15px',
    overflow: 'hidden',
    animation: 'popupAnimation 0.4s ease',
  },

  image: {
    width: '100%',
    display: 'block',
    borderRadius: '15px',
  },

  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    zIndex: 10,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
};