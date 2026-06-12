import React from 'react';
import { Link } from 'react-router-dom';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';

const GREEN      = '#1a6b35';
const GREEN_DARK = '#124d26';
const GOLD       = '#e8a020';

export default function Aboutus() {
  const milestones = [
    { year: '2024', event: 'Institute established at Mandar, Ranchi' },
    { year: '2024', event: 'INC approval received for ANM & GNM programs' },
    { year: '2024', event: 'AKU affiliation granted for B.Sc Nursing' },
    { year: '2025', event: 'First batch of 150+ students enrolled' },
    { year: '2026', event: 'New paramedical wing launched — BMLT & BPT added' },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.heroOverlay}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={s.eyebrow}>Our Story</span>
          <h1 style={s.heroH1}>About BLBD Institute</h1>
          <p style={s.heroP}>Nurturing Healthcare Professionals Since 2024</p>
          <div style={s.breadcrumb}>
            <Link to="/" style={s.breadLink}>Home</Link>
            <span style={s.breadSep}>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div style={{ position: 'relative', paddingBottom: 30 }}>
                <img src={about1} alt="BLBD Campus" style={s.img1} />
                <img src={about2} alt="BLBD Lab"    style={s.img2} />
                <div style={s.statBadge}>
                  <div style={s.statNum}>500+</div>
                  <div style={s.statTxt}>Students Trained</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <span style={s.sectionEyebrow}>Who We Are</span>
              <h2 style={s.h2}>
                Babu Lal Badamiya Devi<br />
                <span style={{ color: GREEN }}>Institute of Health</span>
              </h2>
              <p style={s.body}>
                Established in 2024, Babu Lal Badamiya Devi Institute of Health is a premier
                destination for nursing and paramedical education in Jharkhand. We are dedicated to
                providing top-quality healthcare education and advanced paramedical training, fostering
                ethical values and compassionate patient care.
              </p>
              <p style={s.body}>
                Affiliated with <strong>Aryabhatta Knowledge University (AKU)</strong> and approved by
                <strong> INC, BNRC & PCI</strong>, our institute empowers students to become highly
                skilled healthcare professionals ready to serve communities across India.
              </p>
              <div className="row g-3 mt-2">
                {[
                  { icon: '✓', text: 'INC, BNRC & PCI Approved Programs' },
                  { icon: '✓', text: 'Affiliated with Aryabhatta Knowledge University (AKU)' },
                  { icon: '✓', text: 'Fully Equipped Modern Labs & Premium Campus' },
                  { icon: '✓', text: 'Dedicated Placement & Career Guidance Cell' },
                  { icon: '✓', text: 'Merit & Need-Based Scholarships Available' },
                ].map((pt, i) => (
                  <div key={i} className="col-12">
                    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <span style={s.checkIcon}>{pt.icon}</span>
                      <span style={{ fontSize:14, color:'#444' }}>{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 mt-4 flex-wrap">
                <Link to="/eligibilitycriteria" style={s.btnPrimary}>Apply for Admission</Link>
                <a href="tel:+919204951513" style={s.btnOutline}>📞 Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION MISSION ── */}
      <section style={{ background: '#f4faf6', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={s.sectionEyebrow}>Our Purpose</span>
            <h2 style={s.h2}>Vision & Mission</h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: '🎯',
                title: 'Our Vision',
                text: 'To become the most trusted centre of nursing and paramedical excellence in Jharkhand — producing skilled, compassionate, and ethical healthcare professionals who serve with dignity.',
              },
              {
                icon: '🚀',
                title: 'Our Mission',
                text: 'To deliver world-class healthcare education through modern infrastructure, experienced faculty, and real clinical exposure — making quality education accessible and affordable for every aspiring student.',
              },
              {
                icon: '💎',
                title: 'Our Values',
                text: 'Compassion · Integrity · Excellence · Service · Innovation. These five values guide every decision we make — from curriculum design to patient interaction training.',
              },
            ].map((vm, i) => (
              <div key={i} className="col-md-4">
                <div style={s.vmCard}>
                  <div style={s.vmIcon}>{vm.icon}</div>
                  <h4 style={s.vmTitle}>{vm.title}</h4>
                  <p style={{ fontSize:14, color:'#555', lineHeight:1.8, marginBottom:0 }}>{vm.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROVALS & AFFILIATIONS ── */}
      <section style={{ background: GREEN_DARK, padding: '60px 0' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h3 style={{ color: '#fff', fontWeight: 800, marginBottom: 8 }}>Approved & Affiliated By</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>All programs comply with national regulatory standards</p>
          </div>
          <div className="row g-3 justify-content-center">
            {[
              { code: 'INC',  full: 'Indian Nursing Council' },
              { code: 'BNRC', full: 'Bihar Nurses Registration Council' },
              { code: 'PCI',  full: 'Pharmacy Council of India' },
              { code: 'AKU',  full: 'Aryabhatta Knowledge University' },
              { code: 'JSMF', full: 'Jharkhand State Medical Faculty' },
            ].map((a, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <div style={s.approvalCard}>
                  <div style={s.approvalCode}>{a.code}</div>
                  <div style={s.approvalFull}>{a.full}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={s.sectionEyebrow}>Our Journey</span>
            <h2 style={s.h2}>Key Milestones</h2>
          </div>
          <div style={s.timeline}>
            {milestones.map((m, i) => (
              <div key={i} style={s.timelineItem}>
                <div style={s.timelineYear}>{m.year}</div>
                <div style={s.timelineDot}></div>
                <div style={s.timelineText}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: `linear-gradient(135deg,${GREEN_DARK},${GREEN})`, padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 12 }}>
            Ready to Begin Your Healthcare Journey?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: 15 }}>
            Admissions open for 2026-27 batch. Limited seats available.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Link to="/eligibilitycriteria" style={{ ...s.btnPrimary, background: GOLD }}>Apply Now</Link>
            <a href="tel:+919204951513"     style={s.btnWhite}>Call: +91 920-495-1513</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const s = {
  hero: {
    background: `linear-gradient(135deg, #0d3d1e 0%, #1a6b35 100%)`,
    minHeight: 320,
    display: 'flex', alignItems: 'center',
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
  },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 70% 50%, rgba(232,160,32,0.1) 0%, transparent 70%)',
  },
  eyebrow: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.12)',
    color: '#fff', fontSize: 12, fontWeight: 700,
    letterSpacing: 1.5, textTransform: 'uppercase',
    padding: '4px 14px', borderRadius: 20, marginBottom: 14,
  },
  heroH1:   { fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: '#fff', marginBottom: 10 },
  heroP:    { fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 16 },
  breadcrumb: { fontSize: 13, color: 'rgba(255,255,255,0.7)' },
  breadLink:  { color: 'rgba(255,255,255,0.85)', textDecoration: 'none' },
  breadSep:   { margin: '0 8px', opacity: 0.5 },

  sectionEyebrow: {
    display: 'inline-block',
    background: 'rgba(26,107,53,0.1)', color: '#1a6b35',
    fontWeight: 700, fontSize: 12, letterSpacing: 1.5,
    textTransform: 'uppercase', padding: '4px 14px', borderRadius: 20, marginBottom: 12,
  },
  h2: { fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, color: '#124d26', marginBottom: 16 },
  body: { fontSize: 14.5, color: '#555', lineHeight: 1.8, marginBottom: 12 },

  img1: { width: '80%', borderRadius: 14, display: 'block', marginLeft: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.12)' },
  img2: { width: '48%', borderRadius: 12, position: 'absolute', bottom: 0, left: 0, border: '4px solid #fff', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' },
  statBadge: { position: 'absolute', bottom: 16, right: 20, background: '#e8a020', borderRadius: 12, padding: '12px 16px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' },
  statNum:   { fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1 },
  statTxt:   { fontSize: 10, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: 0.5 },
  checkIcon: { width: 22, height: 22, borderRadius: '50%', background: '#1a6b35', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 },

  btnPrimary: { display: 'inline-block', padding: '11px 28px', background: 'linear-gradient(135deg,#1a6b35,#2d8a4f)', color: '#fff', borderRadius: 25, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: '0 4px 14px rgba(26,107,53,0.3)' },
  btnOutline: { display: 'inline-block', padding: '11px 24px', border: '2px solid #1a6b35', color: '#1a6b35', borderRadius: 25, fontWeight: 600, fontSize: 14, textDecoration: 'none' },
  btnWhite:   { display: 'inline-block', padding: '11px 28px', border: '2px solid rgba(255,255,255,0.8)', color: '#fff', borderRadius: 25, fontWeight: 600, fontSize: 14, textDecoration: 'none' },

  vmCard:  { background: '#fff', borderRadius: 14, padding: 30, height: '100%', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid #e8f5ec', textAlign: 'center' },
  vmIcon:  { fontSize: 40, marginBottom: 16 },
  vmTitle: { fontSize: 18, fontWeight: 700, color: '#124d26', marginBottom: 12 },

  approvalCard: { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(232,160,32,0.4)', borderRadius: 12, padding: '18px 12px', textAlign: 'center' },
  approvalCode: { fontSize: 22, fontWeight: 800, color: '#e8a020', marginBottom: 6 },
  approvalFull: { fontSize: 11, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 },

  timeline: { maxWidth: 700, margin: '0 auto', position: 'relative', paddingLeft: 30 },
  timelineItem: { display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 30, position: 'relative' },
  timelineYear: { flexShrink: 0, width: 60, fontWeight: 800, color: '#e8a020', fontSize: 15 },
  timelineDot:  { flexShrink: 0, width: 14, height: 14, borderRadius: '50%', background: '#1a6b35', marginTop: 4, boxShadow: '0 0 0 4px rgba(26,107,53,0.15)' },
  timelineText: { fontSize: 14, color: '#444', lineHeight: 1.6 },
};