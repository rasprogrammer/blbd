import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppWidget from './WhatsAppWidget';
import AdmissionEnquiry from './AdmissionEnquiry';
import admissionBanner from './assets/admission-popup.png';
import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';
import education from './assets/education.jpg';
import department from './assets/department.jpg';
import consultation from './assets/consultation.jpg';
import service2 from './assets/247service.jpg';

const GREEN      = '#1a6b35';
const GREEN_DARK = '#124d26';
const GOLD       = '#e8a020';
const BG_LIGHT   = '#f4faf6';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const courses = [
    { name: 'ANM',         full: 'Auxiliary Nursing & Midwifery',   dur: '2 Years',      cat: 'Nursing',     icon: '🩺' },
    { name: 'GNM',         full: 'General Nursing & Midwifery',     dur: '3 Years',      cat: 'Nursing',     icon: '👩‍⚕️' },
    { name: 'B.Sc Nursing',full: 'Bachelor of Science in Nursing',  dur: '4 Years',      cat: 'Nursing',     icon: '🏥' },
    { name: 'BMLT',        full: 'Bachelor of Medical Lab Tech',     dur: '3+6m Intern',  cat: 'Paramedical', icon: '🔬' },
    { name: 'BPT',         full: 'Bachelor of Physiotherapy',       dur: '4.5 Years',    cat: 'Paramedical', icon: '🦴' },
    { name: 'DMLT',        full: 'Diploma Medical Lab Technology',  dur: '2 Years',      cat: 'Diploma',     icon: '🧪' },
  ];

  const whyUs = [
    { icon: '🎓', title: 'INC & BNRC Approved', desc: 'All nursing programs approved by Indian Nursing Council and Bihar Nurses Registration Council.' },
    { icon: '🏛️', title: 'AKU Affiliated',       desc: 'Affiliated with Aryabhatta Knowledge University — degrees recognised across India.' },
    { icon: '🔬', title: 'Modern Labs',            desc: 'Fully equipped anatomy, physiology, and skill labs for hands-on clinical training.' },
    { icon: '🤝', title: '100% Placement Support', desc: 'Dedicated placement cell with hospital tie-ups to launch your healthcare career.' },
    { icon: '💰', title: 'Scholarships Available', desc: 'Merit, need-based & government scholarships for eligible students.' },
    { icon: '📅', title: 'Admissions Open 2026',  desc: 'Limited seats — apply early to secure your place in the upcoming batch.' },
  ];

  const testimonials = [
    { name: 'Priya Sharma',   course: 'B.Sc Nursing, 2024', text: '"Excellent clinical training and incredibly supportive faculty. The hands-on practice prepared me for real patient care from day one."' },
    { name: 'Rahul Kumar',    course: 'BMLT, 2023',          text: '"Modern lab equipment and an industry-relevant curriculum. I got placed in a top diagnostic centre right after completing my course."' },
    { name: 'Anjali Singh',   course: 'ANM, 2024',           text: '"The perfect blend of theory and community health training. I\'m proud to serve my village as a certified ANM nurse."' },
    { name: 'Sunita Devi',    course: 'GNM, 2023',           text: '"The faculty genuinely cares about every student. The clinical rotation at the associated hospital was invaluable experience."' },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
      <AdmissionEnquiry />
      <WhatsAppWidget />

      {/* ── ADMISSION POPUP ── */}
      {showPopup && (
        <div style={s.overlay} onClick={() => setShowPopup(false)}>
          <div style={s.popup} onClick={e => e.stopPropagation()}>
            <button style={s.closeBtn} onClick={() => setShowPopup(false)}>✕</button>
            <img src={admissionBanner} alt="Admission Open 2026" style={s.popupImg} />
            <div style={s.popupBottom}>
              <Link to="/eligibilitycriteria" style={s.popupCta} onClick={() => setShowPopup(false)}>
                Apply Now — Batch 2026
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── NOTICE TICKER ── */}
      <div style={s.ticker}>
        <span style={s.tickerBadge}>📢 Notice</span>
        <div style={s.tickerTrack}>
          <span>
            🎓 Admissions Open for 2026-27 Batch &nbsp;|&nbsp;
            📅 Last Date to Apply: 30 June 2026 &nbsp;|&nbsp;
            💰 Scholarships available for meritorious students &nbsp;|&nbsp;
            📞 Call us: +91 920-495-1513 &nbsp;|&nbsp;
            🏥 INC & AKU Approved — ANM · GNM · B.Sc Nursing
          </span>
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div style={{ position: 'relative' }}>
                <img src={about1} alt="BLBD Campus" style={s.aboutImg1} />
                <img src={about2} alt="BLBD Lab"    style={s.aboutImg2} />
                <div style={s.aboutBadge}>
                  <div style={s.aboutBadgeNum}>2024</div>
                  <div style={s.aboutBadgeTxt}>Est.</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <span style={s.sectionEyebrow}>Who We Are</span>
              <h2 style={s.sectionH2}>
                Babu Lal Badamiya Devi<br />
                <span style={{ color: GREEN }}>Institute of Health</span>
              </h2>
              <p style={s.bodyText}>
                Established in 2024, BLBD Institute is a premier destination for nursing and paramedical
                education in Jharkhand. Affiliated with Aryabhatta Knowledge University (AKU) and approved
                by INC, BNRC & PCI, we are committed to producing highly skilled, compassionate
                healthcare professionals ready to serve the nation.
              </p>
              <p style={s.bodyText}>
                Our state-of-the-art labs, experienced faculty, and strong hospital tie-ups give our
                students real-world clinical exposure from the very first year.
              </p>
              <div className="row g-3 mt-2">
                {[
                  'INC, BNRC & PCI Approved Programs',
                  'Affiliated with Aryabhatta Knowledge University',
                  'Fully Equipped Modern Labs & Premium Campus',
                  'Dedicated Placement & Career Guidance Cell',
                ].map((pt, i) => (
                  <div key={i} className="col-12">
                    <div style={s.checkRow}>
                      <span style={s.checkIcon}>✓</span>
                      <span style={{ fontSize: 14, color: '#444' }}>{pt}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 mt-4 flex-wrap">
                <Link to="/about" style={s.btnPrimary}>About Us</Link>
                <Link to="/eligibilitycriteria" style={s.btnOutline}>Admission Info</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES SECTION ── */}
      <section style={{ background: BG_LIGHT, padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={s.sectionEyebrow}>What We Offer</span>
            <h2 style={s.sectionH2}>Our Healthcare Programs</h2>
            <p style={{ color: '#666', maxWidth: 560, margin: '0 auto', fontSize: 15 }}>
              Industry-aligned courses approved by national regulatory bodies
            </p>
          </div>
          <div className="row g-4">
            {courses.map((c, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div style={s.courseCard}>
                  <div style={s.courseIcon}>{c.icon}</div>
                  <div style={s.courseCat}>{c.cat}</div>
                  <h4 style={s.courseTitle}>{c.name}</h4>
                  <p style={s.courseFull}>{c.full}</p>
                  <div style={s.courseMeta}>
                    <span>⏱ {c.dur}</span>
                  </div>
                  <Link to="/eligibilitycriteria" style={s.courseBtn}>View Details →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/services" style={s.btnPrimary}>View All Courses</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: GREEN_DARK, padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ ...s.sectionEyebrow, background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Our Strengths</span>
            <h2 style={{ ...s.sectionH2, color: '#fff' }}>Why Choose BLBD Institute?</h2>
          </div>
          <div className="row g-4">
            {whyUs.map((w, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div style={s.whyCard}>
                  <div style={s.whyIcon}>{w.icon}</div>
                  <h5 style={s.whyTitle}>{w.title}</h5>
                  <p style={s.whyDesc}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES HIGHLIGHT ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={s.sectionEyebrow}>What We Provide</span>
            <h2 style={s.sectionH2}>Our Services</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { img: education,   title: 'Education',        desc: 'ANM, GNM and B.Sc Nursing — three professional nursing courses with INC approval and AKU affiliation.' },
              { img: department,  title: 'Department',       desc: 'Well-structured medical & paramedical departments providing comprehensive surgical and clinical training.' },
              { img: consultation,title: 'Consultation',     desc: 'Academic and career counselling sessions by experienced faculty and healthcare professionals.' },
              { img: service2,    title: '24 / 7 Support',   desc: 'Round-the-clock campus support and emergency assistance for all resident and day-scholar students.' },
            ].map((sv, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div style={s.serviceCard}>
                  <div style={s.serviceImgWrap}>
                    <img src={sv.img} alt={sv.title} style={s.serviceImg} />
                    <div style={s.serviceImgOverlay}></div>
                  </div>
                  <div style={s.serviceBody}>
                    <h5 style={s.serviceTitle}>{sv.title}</h5>
                    <p style={s.serviceDesc}>{sv.desc}</p>
                    <Link to="/services" style={s.serviceLink}>Read More →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: BG_LIGHT, padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={s.sectionEyebrow}>Student Voices</span>
            <h2 style={s.sectionH2}>What Our Students Say</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div style={s.testCard}>
                  <div style={s.testQuote}>"</div>
                  <p style={s.testText}>{t.text}</p>
                  <div style={s.testAuthor}>
                    <div style={s.testAvatar}>{t.name[0]}</div>
                    <div>
                      <div style={s.testName}>{t.name}</div>
                      <div style={s.testCourse}>{t.course}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={s.ctaBanner}>
        <div className="container text-center">
          <h2 style={s.ctaH2}>Start Your Healthcare Career in 2026</h2>
          <p style={s.ctaP}>Limited seats available. Apply now to secure your admission.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Link to="/eligibilitycriteria" style={s.ctaBtn1}>Apply for Admission</Link>
            <a href="tel:+919204951513" style={s.ctaBtn2}>📞 Call Us Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── STYLES ── */
const s = {
  /* Popup */
  overlay:   { position:'fixed',inset:0,background:'rgba(0,0,0,0.72)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,padding:16 },
  popup:     { position:'relative',width:'100%',maxWidth:780,borderRadius:16,overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,0.4)' },
  closeBtn:  { position:'absolute',top:12,right:12,width:36,height:36,borderRadius:'50%',border:'none',background:'#fff',fontSize:18,fontWeight:700,cursor:'pointer',zIndex:10,boxShadow:'0 2px 8px rgba(0,0,0,0.2)' },
  popupImg:  { width:'100%',display:'block' },
  popupBottom:{ background:GREEN_DARK,padding:'14px 20px',textAlign:'center' },
  popupCta:  { display:'inline-block',padding:'10px 32px',background:GOLD,color:'#fff',borderRadius:25,fontWeight:700,fontSize:15,textDecoration:'none' },

  /* Ticker */
  ticker:      { display:'flex',alignItems:'center',background:'#fff7e6',borderBottom:`2px solid ${GOLD}`,overflow:'hidden',height:38 },
  tickerBadge: { flexShrink:0,background:GOLD,color:'#fff',fontWeight:700,fontSize:12,padding:'4px 14px',marginRight:16,whiteSpace:'nowrap' },
  tickerTrack: { overflow:'hidden',whiteSpace:'nowrap',animation:'marquee 30s linear infinite',fontSize:13,color:'#555' },

  /* Eyebrow / headings */
  sectionEyebrow: { display:'inline-block',background:'rgba(26,107,53,0.1)',color:GREEN,fontWeight:700,fontSize:12,letterSpacing:1.5,textTransform:'uppercase',padding:'4px 14px',borderRadius:20,marginBottom:12 },
  sectionH2: { fontSize:'clamp(1.6rem, 3vw, 2.2rem)',fontWeight:800,color:GREEN_DARK,marginBottom:16 },
  bodyText:  { fontSize:15,color:'#555',lineHeight:1.8,marginBottom:12 },

  /* About */
  aboutImg1: { width:'75%',borderRadius:12,display:'block',marginLeft:'auto',boxShadow:'0 10px 30px rgba(0,0,0,0.12)' },
  aboutImg2: { width:'50%',borderRadius:12,position:'absolute',bottom:-24,left:0,border:'4px solid #fff',boxShadow:'0 8px 24px rgba(0,0,0,0.15)' },
  aboutBadge:{ position:'absolute',bottom:30,right:16,background:GOLD,borderRadius:12,padding:'14px 18px',textAlign:'center',boxShadow:'0 4px 16px rgba(0,0,0,0.2)' },
  aboutBadgeNum:{ fontSize:22,fontWeight:800,color:'#fff',lineHeight:1 },
  aboutBadgeTxt:{ fontSize:11,color:'rgba(255,255,255,0.85)',textTransform:'uppercase' },
  checkRow:  { display:'flex',alignItems:'center',gap:10 },
  checkIcon: { width:22,height:22,borderRadius:'50%',background:GREEN,color:'#fff',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,flexShrink:0 },

  /* Buttons */
  btnPrimary: { display:'inline-block',padding:'11px 28px',background:`linear-gradient(135deg,${GREEN},#2d8a4f)`,color:'#fff',borderRadius:25,fontWeight:700,fontSize:14,textDecoration:'none',boxShadow:`0 4px 14px rgba(26,107,53,0.3)` },
  btnOutline: { display:'inline-block',padding:'11px 28px',border:`2px solid ${GREEN}`,color:GREEN,borderRadius:25,fontWeight:700,fontSize:14,textDecoration:'none' },

  /* Course cards */
  courseCard:  { background:'#fff',borderRadius:14,padding:28,height:'100%',boxShadow:'0 4px 16px rgba(0,0,0,0.07)',transition:'transform 0.2s,box-shadow 0.2s',border:`1px solid #e8f5ec` },
  courseIcon:  { fontSize:32,marginBottom:12 },
  courseCat:   { fontSize:11,fontWeight:700,color:GOLD,textTransform:'uppercase',letterSpacing:1,marginBottom:6 },
  courseTitle: { fontSize:18,fontWeight:800,color:GREEN_DARK,marginBottom:4 },
  courseFull:  { fontSize:13,color:'#777',marginBottom:10 },
  courseMeta:  { fontSize:13,color:'#555',marginBottom:16 },
  courseBtn:   { display:'inline-block',padding:'8px 20px',background:`linear-gradient(135deg,${GREEN},#2d8a4f)`,color:'#fff',borderRadius:20,fontSize:13,fontWeight:600,textDecoration:'none' },

  /* Why cards */
  whyCard:  { background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:14,padding:28,height:'100%' },
  whyIcon:  { fontSize:32,marginBottom:14 },
  whyTitle: { fontSize:16,fontWeight:700,color:'#fff',marginBottom:8 },
  whyDesc:  { fontSize:13,color:'rgba(255,255,255,0.75)',lineHeight:1.7,marginBottom:0 },

  /* Service cards */
  serviceCard:     { borderRadius:14,overflow:'hidden',boxShadow:'0 4px 16px rgba(0,0,0,0.09)',height:'100%' },
  serviceImgWrap:  { position:'relative',height:180,overflow:'hidden' },
  serviceImg:      { width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.4s' },
  serviceImgOverlay:{ position:'absolute',inset:0,background:'rgba(18,77,38,0.25)' },
  serviceBody:     { background:'#fff',padding:'20px 22px' },
  serviceTitle:    { fontSize:16,fontWeight:700,color:GREEN_DARK,marginBottom:8 },
  serviceDesc:     { fontSize:13,color:'#666',lineHeight:1.7,marginBottom:14 },
  serviceLink:     { fontSize:13,fontWeight:600,color:GREEN,textDecoration:'none' },

  /* Testimonials */
  testCard:   { background:'#fff',borderRadius:14,padding:28,height:'100%',boxShadow:'0 4px 16px rgba(0,0,0,0.07)',position:'relative' },
  testQuote:  { fontSize:60,color:`rgba(26,107,53,0.1)`,lineHeight:0.8,marginBottom:12,fontFamily:'Georgia,serif' },
  testText:   { fontSize:13,color:'#555',lineHeight:1.8,marginBottom:20,fontStyle:'italic' },
  testAuthor: { display:'flex',alignItems:'center',gap:12 },
  testAvatar: { width:42,height:42,borderRadius:'50%',background:GREEN,color:'#fff',fontWeight:700,fontSize:16,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 },
  testName:   { fontWeight:700,fontSize:14,color:GREEN_DARK },
  testCourse: { fontSize:12,color:'#888' },

  /* CTA Banner */
  ctaBanner: { background:`linear-gradient(135deg,${GREEN_DARK},${GREEN})`,padding:'80px 0',color:'#fff' },
  ctaH2:     { fontSize:'clamp(1.6rem,3vw,2.4rem)',fontWeight:800,color:'#fff',marginBottom:12 },
  ctaP:      { fontSize:16,color:'rgba(255,255,255,0.85)',marginBottom:0 },
  ctaBtn1:   { display:'inline-block',padding:'13px 32px',background:GOLD,color:'#fff',borderRadius:25,fontWeight:700,fontSize:15,textDecoration:'none',boxShadow:'0 4px 16px rgba(0,0,0,0.25)' },
  ctaBtn2:   { display:'inline-block',padding:'13px 32px',border:'2px solid rgba(255,255,255,0.8)',color:'#fff',borderRadius:25,fontWeight:600,fontSize:15,textDecoration:'none' },
};