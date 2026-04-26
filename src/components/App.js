import React, { Component } from "react";
import './App.css';
import Card from './listings/Card';
import CardData from '../data/card-data.json';
import Nav from './page_components/navbar';
import Consent from './page_components/cookie-consent';
import Footer from './page_components/footer';
import AboutData from '../data/about.json';
import MediaData from '../data/media-data.json';

function Home() {
  const Cards = CardData.map((element, i) => (
    <Card
      key={i}
      pageLink={element.pageLink}
      imageLink={element.imageLink}
      title={element.title}
      text={element.text}
      source={element.source}
      sourceClass={element.sourceClass}
    />
  ));

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <img src="/imgs/lmd.svg" alt="Laeke Mariam Demessie" className="hero-lmd" />
          <div className="hero-tag">Journalist &amp; Writer</div>
          <h1>Laeke Mariam<br /><span className="accent">Demessie</span></h1>
          <p className="hero-subtitle">
            Covering Africa's most critical stories — from Ethiopia's ancient heritage to the Horn of Africa's peace struggles. Reporting where it matters most.
          </p>
          <div className="hero-cta">
            <a href="#articles" className="btn btn-primary">
              Read Articles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">About</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="section-container" id="about">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/imgs/lmd.svg" alt="Laeke Mariam Demessie" className="about-image-svg" />
          </div>
          <div className="about-text reveal">
            <div className="section-label">About</div>
            <h3>Reporting from the heart of Africa</h3>
            <p>{AboutData.bio}</p>
            <p>{AboutData.bio2}</p>
            <div className="about-stats">
              {AboutData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="section-container" id="articles">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title reveal">Articles &amp; Reports</h2>
        <p className="section-desc reveal">
          A collection of reporting from across the African continent — covering politics, culture, science, and the ongoing struggle for peace and development.
        </p>
        <div className="articles-grid">
          {Cards}
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="section-container" id="topics">
        <div className="section-label">Coverage</div>
        <h2 className="section-title reveal">Areas of Focus</h2>
        <p className="section-desc reveal">The themes that define this body of work.</p>
        <div className="topics reveal">
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
    </>
  );
}

function MediaPage() {
  const MediaCards = MediaData.map((item, i) => (
    <div key={i} className="media-card reveal">
      <div className="media-source">{item.type}</div>
      <h3 className="media-title">{item.title}</h3>
      <p className="media-desc">{item.description}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="article-link" style={{ marginTop: '1rem' }}>
        Visit {item.title}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  ));

  return (
    <>
      <section className="section-container" id="media" style={{ paddingTop: '8rem' }}>
        <div className="section-label">Press</div>
        <h2 className="section-title reveal">Media &amp; Publications</h2>
        <p className="section-desc reveal">
          Laeke's work has been featured across major international publications and broadcast networks.
        </p>
        <div className="media-grid">
          {MediaCards}
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

function BookPage() {
  return (
    <>
      <section className="section-container" id="book" style={{ paddingTop: '8rem' }}>
        <div className="section-label">Published Work</div>
        <h2 className="section-title reveal">Book</h2>
        <p className="section-desc reveal">
          In-depth reporting and analysis compiled into book form.
        </p>
        <div className="book-section">
          <div className="book-cover reveal">
            Cover
          </div>
          <div className="book-info reveal">
            <h3>Coming Soon</h3>
            <p>
              A comprehensive collection of Laeke Mariam Demessie's reporting from across the African continent, weaving together stories of conflict, culture, science, and the enduring spirit of a continent in transformation.
            </p>
            <p>
              The book draws on decades of field reporting from Ethiopia, Sudan, Darfur, and the wider Horn of Africa — covering the peace process, biodiversity conservation, ancient heritage, and the everyday realities of life in the region.
            </p>
            <a href="#articles" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Read Articles Now
            </a>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
    this.observer = null;
  }

  componentDidMount() {
    this.setupObserver();
    // Set initial page from current hash on mount
    const initialHash = window.location.hash.replace('#', '') || 'home';
    this.setState({ currentPage: initialHash });
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
    // Clean up observer to avoid stale references
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupObserver = () => {
    // Observe reveal elements
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    reveals.forEach(el => revealObserver.observe(el));
  };

  handleHashChange = () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.setState({ currentPage: hash });
  };

  componentDidUpdate(prevProps, prevState) {
    // Poll for hash changes — more reliable than hashchange event which
    // the browser sometimes swallows during anchor navigation
    const currentHash = window.location.hash.replace('#', '') || 'home';
    if (prevState.currentPage !== currentHash) {
      this.setState({ currentPage: currentHash });
    }
  }

  render() {
    const { currentPage } = this.state;
    const page = currentPage === 'media' ? 'media' : currentPage === 'book' ? 'book' : 'home';

    return (
      <div className="App">
        <Nav />
        {page === 'home' && <Home />}
        {page === 'media' && <MediaPage />}
        {page === 'book' && <BookPage />}
        <Consent />
        <Footer />
      </div>
    );
  }
}

export default App;
