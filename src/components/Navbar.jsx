import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/blbd-hindi-logo.png';
import carousel from './assets/med.jpg';
import carousel2 from './assets/clg.jpg';
import carousel3 from './assets/med2.jpg';

export default function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div style={styles.topbar}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex flex-wrap gap-3">
              <a href="tel:+919204951513" style={styles.topLink}>
                <i className="fas fa-phone-alt me-1" style={styles.topIcon}></i> +91 920-495-1513
              </a>
              <a href="mailto:blbd.edu@gmail.com" style={styles.topLink}>
                <i className="fas fa-envelope me-1" style={styles.topIcon}></i> blbd.edu@gmail.com
              </a>
              <span style={styles.topLink}>
                <i className="fas fa-map-marker-alt me-1" style={styles.topIcon}></i> Mandar, Ranchi, Jharkhand
              </span>
            </div>
            <div className="d-none d-md-flex gap-2">
              <a href="https://www.facebook.com/profile.php?id=61578119375234" target="_blank" rel="noreferrer" style={styles.socialBtn}><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/blbdranchi/" target="_blank" rel="noreferrer" style={styles.socialBtn}><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/babu-lal-badamiya-devi-institute-of-health-630690373/" target="_blank" rel="noreferrer" style={styles.socialBtn}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{ ...styles.navbar, boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)' }}
      >
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="BLBD Logo" style={styles.logo} />
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1">

              <li className="nav-item">
                <Link className="nav-link fw-semibold px-3" style={styles.navLink} to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold px-3" style={styles.navLink} to="/services">Services</Link>
              </li>

              {/* Approvals */}
              <li className="nav-item dropdown">
                <a className="nav-link fw-semibold px-3 dropdown-toggle" style={styles.navLink} href="#" data-bs-toggle="dropdown">
                  Approvals
                </a>
                <ul className="dropdown-menu shadow border-0" style={styles.dropdown}>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/approvals/jsmf">Jharkhand State Medical Faculty</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/approvals/anm">ANM — INC Approved</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/approvals/gnm">GNM — INC Approved</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/approvals/bsc">B.Sc Nursing — INC Approved</Link></li>
                </ul>
              </li>

              {/* Admissions */}
              <li className="nav-item dropdown">
                <a className="nav-link fw-semibold px-3 dropdown-toggle" style={styles.navLink} href="#" data-bs-toggle="dropdown">
                  Admissions
                </a>
                <ul className="dropdown-menu shadow border-0" style={styles.dropdown}>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/eligibilitycriteria">Eligibility Criteria</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/applicationprocess">Application Process</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/important-dates">Important Dates</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/scholarships">Scholarships</Link></li>
                </ul>
              </li>

              {/* Campus Life */}
              <li className="nav-item dropdown">
                <a className="nav-link fw-semibold px-3 dropdown-toggle" style={styles.navLink} href="#" data-bs-toggle="dropdown">
                  Campus Life
                </a>
                <ul className="dropdown-menu shadow border-0" style={styles.dropdown}>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/campus/activities">Student Activities & Clubs</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/campus/events">Events & Cultural Programs</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/campus/sports">Sports Facilities</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/campus/gallery">Photo Gallery</Link></li>
                </ul>
              </li>

              {/* About */}
              <li className="nav-item dropdown">
                <a className="nav-link fw-semibold px-3 dropdown-toggle" style={styles.navLink} href="#" data-bs-toggle="dropdown">
                  About Us
                </a>
                <ul className="dropdown-menu shadow border-0" style={styles.dropdown}>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/about">About Institute</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/about/alumni">Alumni Registration</Link></li>
                  <li><Link className="dropdown-item py-2" style={styles.dropItem} to="/about/grievance">Grievance Committee</Link></li>
                </ul>
              </li>

              {/* CTA Button */}
              <li className="nav-item ms-lg-2">
                <Link
                  to="/eligibilitycriteria"
                  className="btn fw-bold px-4 py-2"
                  style={styles.ctaBtn}
                >
                  Apply Now 2026
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ── HERO CAROUSEL ── */}
      <div className="container-fluid px-0">
        <div id="blbdCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <div className="carousel-indicators">
            {[0,1,2].map(i => (
              <button
                key={i}
                type="button"
                data-bs-target="#blbdCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-label={`Slide ${i+1}`}
                style={styles.indicator}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active" data-bs-interval="5000">
              <div style={{ position: 'relative' }}>
                <img src={carousel} className="d-block w-100" alt="BLBD Campus" style={styles.carouselImg} />
                <div style={styles.carouselOverlay}></div>
                <div className="carousel-caption" style={styles.caption}>
                  <span style={styles.captionBadge}>INC & BNRC Approved</span>
                  <h2 style={styles.captionH2}>Shaping Tomorrow's<br/>Healthcare Heroes</h2>
                  <p style={styles.captionP}>Premier Nursing & Paramedical Education in Jharkhand</p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-3">
                    <Link to="/eligibilitycriteria" style={styles.capBtn1}>Apply for Admission</Link>
                    <Link to="/about" style={styles.capBtn2}>Know More</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div style={{ position: 'relative' }}>
                <img src={carousel2} className="d-block w-100" alt="BLBD College" style={styles.carouselImg} />
                <div style={styles.carouselOverlay}></div>
                <div className="carousel-caption" style={styles.caption}>
                  <span style={styles.captionBadge}>Affiliated — AKU</span>
                  <h2 style={styles.captionH2}>World-Class Facilities,<br/>Compassionate Training</h2>
                  <p style={styles.captionP}>Modern labs, clinical exposure & dedicated faculty</p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-3">
                    <Link to="/services" style={styles.capBtn1}>Our Courses</Link>
                    <Link to="/applicationprocess" style={styles.capBtn2}>Admission Process</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div style={{ position: 'relative' }}>
                <img src={carousel3} className="d-block w-100" alt="BLBD Medical" style={styles.carouselImg} />
                <div style={styles.carouselOverlay}></div>
                <div className="carousel-caption" style={styles.caption}>
                  <span style={styles.captionBadge}>Scholarships Available</span>
                  <h2 style={styles.captionH2}>Your Dream Career<br/>in Healthcare Starts Here</h2>
                  <p style={styles.captionP}>ANM · GNM · B.Sc Nursing · BMLT · BPT & more</p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-3">
                    <Link to="/scholarships" style={styles.capBtn1}>View Scholarships</Link>
                    <Link to="/eligibilitycriteria" style={styles.capBtn2}>Check Eligibility</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#blbdCarousel" data-bs-slide="prev">
            <span style={styles.carouselCtrl}><i className="fas fa-chevron-left"></i></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#blbdCarousel" data-bs-slide="next">
            <span style={styles.carouselCtrl}><i className="fas fa-chevron-right"></i></span>
          </button>
        </div>
      </div>

      {/* ── QUICK STATS BAR ── */}
      <div style={styles.statsBar}>
        <div className="container">
          <div className="row g-0 text-center">
            {[
              { num: '500+', label: 'Students Enrolled' },
              { num: '3',    label: 'INC Approved Courses' },
              { num: '100%', label: 'Placement Support' },
              { num: '2024', label: 'Established' },
            ].map((s, i) => (
              <div key={i} className="col-6 col-md-3" style={styles.statItem}>
                <div style={styles.statNum}>{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const GREEN       = '#1a6b35';
const GREEN_DARK  = '#124d26';
const GREEN_LIGHT = '#e8f5ec';
const GOLD        = '#e8a020';

const styles = {
  topbar: {
    background: GREEN_DARK,
    color: '#fff',
    padding: '7px 0',
    fontSize: '13px',
  },
  topLink: {
    color: 'rgba(255,255,255,0.88)',
    textDecoration: 'none',
    fontSize: '13px',
  },
  topIcon: { color: GOLD },
  socialBtn: {
    width: 28, height: 28,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 12,
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  navbar: {
    background: '#fff',
    transition: 'box-shadow 0.3s',
    padding: '10px 0',
  },
  logo: { height: 52, objectFit: 'contain' },
  brandTitle: { fontWeight: 700, fontSize: 15, color: GREEN_DARK, lineHeight: 1.2 },
  brandSub:   { fontSize: 11, color: '#666', lineHeight: 1.2 },
  navLink: { color: '#2c3e50', transition: 'color 0.2s', fontSize: 14 },
  dropdown: { borderRadius: 10, minWidth: 240, padding: '8px 0' },
  dropItem: { color: '#2c3e50', fontSize: 14 },
  ctaBtn: {
    background: `linear-gradient(135deg, ${GREEN}, ${GOLD})`,
    color: '#fff',
    borderRadius: 25,
    fontSize: 13,
    border: 'none',
    boxShadow: `0 4px 14px rgba(26,107,53,0.35)`,
  },
  carouselImg: {
    height: 'clamp(260px, 55vw, 580px)',
    objectFit: 'cover',
    width: '100%',
  },
  carouselOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to right, rgba(10,40,18,0.75) 0%, rgba(10,40,18,0.25) 70%, transparent 100%)',
  },
  caption: {
    left: '5%',
    right: 'auto',
    bottom: '50%',
    transform: 'translateY(50%)',
    textAlign: 'left',
    maxWidth: 540,
  },
  captionBadge: {
    display: 'inline-block',
    background: GOLD,
    color: '#fff',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: 20,
    marginBottom: 12,
  },
  captionH2: {
    fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
    fontWeight: 800,
    lineHeight: 1.2,
    color: '#fff',
    textShadow: '0 2px 12px rgba(0,0,0,0.4)',
    marginBottom: 10,
  },
  captionP: {
    fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 0,
  },
  capBtn1: {
    display: 'inline-block',
    padding: '10px 24px',
    background: GOLD,
    color: '#fff',
    borderRadius: 25,
    fontWeight: 700,
    fontSize: 14,
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
  },
  capBtn2: {
    display: 'inline-block',
    padding: '10px 24px',
    background: 'rgba(255,255,255,0.15)',
    border: '2px solid rgba(255,255,255,0.8)',
    color: '#fff',
    borderRadius: 25,
    fontWeight: 600,
    fontSize: 14,
    textDecoration: 'none',
    backdropFilter: 'blur(4px)',
  },
  indicator: { width: 10, height: 10, borderRadius: '50%' },
  carouselCtrl: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 42, height: 42,
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '50%',
    backdropFilter: 'blur(4px)',
    fontSize: 16,
    color: '#fff',
  },
  statsBar: {
    background: GREEN,
    color: '#fff',
    padding: '0',
  },
  statItem: {
    padding: '18px 10px',
    borderRight: '1px solid rgba(255,255,255,0.15)',
  },
  statNum:   { fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: GOLD },
  statLabel: { fontSize: 12, color: 'rgba(255,255,255,0.85)', letterSpacing: 0.5, textTransform: 'uppercase' },
};