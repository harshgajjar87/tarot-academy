import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/history', label: 'History' },
  { to: '/numerology', label: 'Numbers' },
  { to: '/colors', label: 'Colors' },
  { to: '/cards', label: 'Cards' },
  { to: '/structure', label: 'Structure' },
  { to: '/practice', label: 'Practice' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(13,0,32,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      padding: '0 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="font-cinzel-deco shimmer-text" style={{ fontSize: '1.3rem', letterSpacing: 3 }}>
            ✦ Tarot Academy ✦
          </span>
        </Link>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              textDecoration: 'none',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.8rem',
              letterSpacing: 2,
              color: pathname === l.to ? 'var(--gold)' : 'rgba(240,230,208,0.95)',
              borderBottom: pathname === l.to ? '1px solid var(--gold)' : '1px solid transparent',
              paddingBottom: 4,
              transition: 'all 0.3s',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', color: 'var(--gold)',
          fontSize: '1.5rem', cursor: 'pointer', display: 'none'
        }} className="mobile-toggle">☰</button>
      </div>

      {open && (
        <div style={{
          background: 'rgba(13,0,32,0.98)', padding: '1rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              textDecoration: 'none', fontFamily: 'Cinzel, serif',
              color: pathname === l.to ? 'var(--gold)' : 'var(--text-light)',
              fontSize: '0.9rem', letterSpacing: 2,
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
