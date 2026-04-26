import React from 'react';

function Card({ pageLink, imageLink, title, text, source, sourceClass }) {
  return (
    <div className="article-card reveal">
      <span className={`article-source ${sourceClass}`}>{source}</span>
      <h3 className="article-title">{title}</h3>
      <p className="article-excerpt">{text}</p>
      <a href={pageLink} target="_blank" rel="noopener noreferrer" className="article-link">
        Read Article
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default Card;
