import React, { Component, useEffect, useRef, useState } from 'react';
import './App.css';
import Card from './listings/Card';
import CardData from '../data/card-data.json';
import Nav from './page_components/navbar';
import Consent from './page_components/cookie-consent';
import Footer from './page_components/footer';
import AboutData from '../data/about.json';
import MediaData from '../data/media-data.json';

/* ═══════════════════════════════════════════════════════════
   FLOATING PARTICLES
   ═══════════════════════════════════════════════════════════ */
function Particles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 10 + Math.random() * 14,
    size: 1 + Math.random() * 2,
  }));
  return (
    <div className="particles-container">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════════════════ */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

/* ═══════════════════════════════════════════════════════════
   FLOATING SHAPES
   ═══════════════════════════════════════════════════════════ */
const shapes = [
  { size: 120, top: '10%', left: '5%', delay: 0, dur: 22 },
  { size: 60, top: '20%', right: '10%', delay: -3, dur: 18 },
  { size: 80, top: '55%', left: '10%', delay: -7, dur: 24 },
  { size: 150, top: '65%', right: '5%', delay: -5, dur: 26 },
  { size: 40, top: '45%', left: '3%', delay: -10, dur: 16 },
  { size: 70, bottom: '15%', left: '35%', delay: -2, dur: 20 },
  { size: 50, top: '35%', right: '20%', delay: -8, dur: 21 },
];

function FloatingShapes() {
  return (
    <div className="hero-shapes">
      {shapes.map((s, i) => (
        <div
          key={i}
          className="hero-shape"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left || undefined,
            right: s.right || undefined,
            bottom: s.bottom || undefined,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '16px',
            transform: i % 3 === 1 ? 'rotate(45deg)' : undefined,
            borderColor: i % 3 === 0 ? 'rgba(0,155,58,0.06)' : i % 3 === 1 ? 'rgba(252,221,9,0.05)' : 'rgba(218,18,26,0.04)',
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════ */
function AnimatedCounter({ number, visible }) {
  const [current, setCurrent] = useState(0);
  const num = parseInt(number, 10);
  const hasLetter = /\D/.test(number);
  const cleanNum = hasLetter ? parseInt(number.replace(/\D/g, ''), 10) : num;
  const suffix = hasLetter ? number.replace(/\d/g, '') : '';

  // If no digits found, just render the raw string without animation
  if (isNaN(cleanNum)) {
    return <div className="stat-number">{number}</div>;
  }

  useEffect(() => {
    if (!visible) return;
    let start = null;
    const duration = 2000;
    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.round(cleanNum * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, cleanNum]);

  return <div className="stat-number">{current}{suffix}</div>;
}

/* ═══════════════════════════════════════════════════════════
   TILT CARD
   ═══════════════════════════════════════════════════════════ */
function TiltCard({ children, className, ...rest }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1000px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-3px) scale(1.005)`,
      transition: 'transform 0.15s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
  };

  return (
    <div ref={ref} className={className} style={style} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} {...rest}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
function Home() {
  const Cards = CardData.map((element, i) => (
    <TiltCard key={i}>
      <Card
        pageLink={element.pageLink}
        imageLink={element.imageLink}
        title={element.title}
        text={element.text}
        source={element.source}
        sourceClass={element.sourceClass}
        className={`article-card reveal stagger-${i + 1}`}
      />
    </TiltCard>
  ));

  return (
    <>
      <section className="hero" id="hero">
        <FloatingShapes />
        <div className="hero-content">
          <img src="/imgs/lmd.svg" alt="Laeke Mariam Demessie" className="hero-lmd" />
          <div className="hero-tag">Journalist &amp; Writer</div>
          <h1>
            <span className="line"><span>Laeke Mariam</span></span>
            <span className="line"><span className="accent">Demessie</span></span>
          </h1>
          <p className="hero-subtitle">
            Covering Africa's most critical stories — from Ethiopia's ancient heritage to the Horn of Africa's peace struggles. Reporting where it matters most.
          </p>
          <div className="hero-cta">
            <a href="#articles" className="btn btn-primary magnetic">
              <span>Read Articles</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a href="#about" className="btn btn-outline magnetic">About</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-circle"></div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {['Ethiopian Affairs', 'Horn of Africa', 'Sudan & Darfur', 'Peace & Conflict', 'Biodiversity', 'Ancient Heritage', 'Telecommunications', 'De-mining', 'Bio-Piracy', 'Street Culture', 'African Science', 'Ge\'ez Script'].map((topic, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">{topic}</span>
              <span className="sep">✦</span>
            </React.Fragment>
          ))}
          {['Ethiopian Affairs', 'Horn of Africa', 'Sudan & Darfur', 'Peace & Conflict', 'Biodiversity', 'Ancient Heritage', 'Telecommunications', 'De-mining', 'Bio-Piracy', 'Street Culture', 'African Science', 'Ge\'ez Script'].map((topic, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="marquee-item">{topic}</span>
              <span className="sep">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="section-container" id="about">
        <div className="section-number reveal" data-number="01">About</div>
        <div className="about-grid">
          <div className="about-image reveal reveal-left stagger-2">
            <img src="/imgs/lmd.svg" alt="Laeke Mariam Demessie" className="about-image-svg" />
          </div>
          <div className="about-text reveal reveal-right stagger-3">
            <div className="section-label">About</div>
            <h3>Reporting from the heart of Africa</h3>
            <p>{AboutData.bio}</p>
            <p>{AboutData.bio2}</p>
            <div className="about-stats">
              {AboutData.stats.map((stat, i) => (
                <div key={i} className="stat-item reveal reveal-up stagger-4">
                  <StatNumberWrapper stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="section-container" id="articles">
        <div className="section-number reveal" data-number="02">Articles</div>
        <div className="section-label">Selected Work</div>
        <h2 className="section-title reveal reveal-down">Articles &amp; Reports</h2>
        <p className="section-desc reveal reveal-down stagger-1">
          A collection of reporting from across the African continent — covering politics, culture, science, and the ongoing struggle for peace and development.
        </p>
        <div className="articles-grid">
          {Cards}
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="section-container" id="topics">
        <div className="section-number reveal" data-number="03">Topics</div>
        <div className="section-label">Coverage</div>
        <h2 className="section-title reveal reveal-down">Areas of Focus</h2>
        <p className="section-desc reveal reveal-down stagger-1">The themes that define this body of work.</p>
        <div className="topics reveal reveal-scale stagger-2">
          <span className="topic-tag">Ethiopian Affairs</span>
          <span className="topic-tag">Horn of Africa</span>
          <span className="topic-tag">Sudan &amp; Darfur</span>
          <span className="topic-tag">Peace &amp; Conflict</span>
          <span className="topic-tag">Biodiversity</span>
          <span className="topic-tag">Ancient Heritage</span>
          <span className="topic-tag">Telecommunications</span>
          <span className="topic-tag">De-mining</span>
          <span className="topic-tag">Bio-Piracy</span>
          <span className="topic-tag">Street Culture</span>
          <span className="topic-tag">African Science</span>
          <span className="topic-tag">Ge'ez Script</span>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════════
          MEDIA & PUBLICATIONS — Combined Section
          ═══════════════════════════════════════════════════════════ */}
      <section className="section-container" id="media" style={{ paddingTop: '8rem' }}>
        <div className="section-number reveal" data-number="04">Media</div>
        <div className="section-label">Press</div>
        <h2 className="section-title reveal reveal-down">Media &amp; Publications</h2>
        <p className="section-desc reveal reveal-down stagger-1">
          Laeke's work has been featured across major international publications and broadcast networks.
        </p>
        <div className="media-grid">
          {MediaData.map((item, i) => (
            <TiltCard
              key={i}
              className={`media-card reveal stagger-${i + 1}`}
            >
              <div className="card-type">{item.type}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
                Visit →
              </a>
            </TiltCard>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>

      {/* ═══════════════════════════════════════════════════════════
          BOOK — Coming Soon Section
          ═══════════════════════════════════════════════════════════ */}
      <section className="section-container" id="book" style={{ paddingTop: '8rem' }}>
        <div className="section-number reveal" data-number="05">Book</div>
        <div className="section-label">Published Work</div>
        <h2 className="section-title reveal reveal-down">Coming Soon</h2>
        <p className="section-desc reveal reveal-down stagger-1">
          A comprehensive collection of Laeke Mariam Demessie's reporting from across the African continent.
        </p>
        <div className="book-section">
          <div className="book-cover reveal reveal-scale stagger-2">
            <span style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.7 }}>Coming 2026</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: "var(--font-serif)" }}>LAKE</div>
              <div style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.6, fontStyle: 'italic' }}>Stories from the Horn</div>
            </span>
          </div>
          <div className="book-info reveal reveal-right stagger-3">
            <h3>A New Book</h3>
            <p>
              In-depth reporting and analysis compiled into book form — weaving together stories of conflict, culture, science, and the enduring spirit of a continent in transformation.
            </p>
            <p>
              Drawing on decades of field reporting from Ethiopia, Sudan, Darfur, and the wider Horn of Africa.
            </p>
            <a href="#articles" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              <span>Read Articles Now</span>
            </a>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

function StatNumberWrapper({ stat }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <AnimatedCounter number={stat.number} visible={visible} />
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN APP — Single-page layout (Home always renders)
   ═══════════════════════════════════════════════════════════ */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      navScrolled: false,
    };
    this.observer = null;
    this.cursorDot = null;
    this.cursorRing = null;
  }

  componentDidMount() {
    this.setupObserver();
    this.setupCursor();
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) this.observer.disconnect();
    if (this.cursorDot) this.cursorDot.remove();
    if (this.cursorRing) this.cursorRing.remove();
  }

  setupObserver = () => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    reveals.forEach(el => revealObserver.observe(el));

    const numbers = document.querySelectorAll('.section-number');
    const numObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    numbers.forEach(el => numObserver.observe(el));

    const labels = document.querySelectorAll('.section-label');
    const labelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.5 }
    );
    labels.forEach(el => labelObserver.observe(el));

    const titles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.3 }
    );
    titles.forEach(el => titleObserver.observe(el));

    const descs = document.querySelectorAll('.section-desc');
    const descObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.3 }
    );
    descs.forEach(el => descObserver.observe(el));
  };

  setupCursor = () => {
    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'cursor-dot';
    this.cursorRing = document.createElement('div');
    this.cursorRing.className = 'cursor-ring';
    document.body.appendChild(this.cursorDot);
    document.body.appendChild(this.cursorRing);

    let timeout = null;
    const moveCursor = (e) => {
      this.cursorDot.style.left = `${e.clientX}px`;
      this.cursorDot.style.top = `${e.clientY}px`;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.cursorRing.style.left = `${e.clientX}px`;
        this.cursorRing.style.top = `${e.clientY}px`;
      }, 50);
    };

    const showRing = () => {
      this.cursorRing.classList.add('hover');
    };

    const hideRing = () => {
      this.cursorRing.classList.remove('hover');
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverTargets = document.querySelectorAll('a, button, .topic-tag, .article-card, .media-card, input');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', showRing);
      el.addEventListener('mouseleave', hideRing);
    });

    // Re-check for dynamically added elements
    setInterval(() => {
      document.querySelectorAll('a, button, .topic-tag, .article-card, .media-card, input').forEach(el => {
        if (!el.dataset.cursorBound) {
          el.dataset.cursorBound = 'true';
          el.addEventListener('mouseenter', showRing);
          el.addEventListener('mouseleave', hideRing);
        }
      });
    }, 1000);
  };

  handleScroll = () => {
    const scrollY = window.scrollY;
    const navScrolled = scrollY > 80;
    if (this.state.scrollY !== scrollY) {
      this.setState({ scrollY, navScrolled });
    }
  };

  render() {
    return (
      <div className="app">
        <Particles />
        <ScrollProgress />
        <Nav scrollY={this.state.scrollY} navScrolled={this.state.navScrolled} />
        <Home />
        <Footer />
        <Consent />
      </div>
    );
  }
}

export default App;
