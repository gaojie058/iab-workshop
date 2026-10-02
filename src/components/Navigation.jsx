import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { navLinks } from '../data/siteData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const editionRef = useRef(null);

  useEffect(() => {
    function closeOutside(event) {
      if (editionRef.current && !editionRef.current.contains(event.target)) {
        editionRef.current.open = false;
      }
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape' && editionRef.current?.open) {
        editionRef.current.open = false;
        editionRef.current.querySelector('summary')?.focus();
      }
    }
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container">
        <a className="nav-logo" href="#top" onClick={() => setIsOpen(false)}>
          <Image unoptimized className="logo-mark" src="/iab.svg" width={30} height={30} alt="" />
          IAB
          <span className="conference-mark">CHI 2027<span>Second edition</span></span>
        </a>
        <div id="main-navigation-links" className={`nav-links${isOpen ? ' open' : ''}`}>
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <details
            className="edition-selector"
            ref={editionRef}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                event.currentTarget.open = false;
              }
            }}
          >
            <summary aria-label="Select workshop edition, current edition CHI 2027" onClick={() => setIsOpen(false)}>
              <span><span className="edition-prefix">Edition: </span>2027</span>
              <span className="edition-chevron" aria-hidden="true">▾</span>
            </summary>
            <div className="edition-menu">
              <span className="edition-menu-label">Workshop editions</span>
              <a href="#top" aria-current="page" onClick={() => { editionRef.current.open = false; }}>
                <span><strong>CHI 2027</strong><small>Second edition · Current</small></span>
                <span aria-hidden="true">✓</span>
              </a>
              <a href="https://iab-agents.github.io/" target="_blank" rel="noopener noreferrer" onClick={() => { editionRef.current.open = false; }}>
                <span><strong>NeurIPS 2026</strong><small>First edition · Opens in a new tab</small></span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </details>
          <button
            className={`nav-toggle${isOpen ? ' open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="main-navigation-links"
            onClick={() => {
              editionRef.current.open = false;
              setIsOpen((open) => !open);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
