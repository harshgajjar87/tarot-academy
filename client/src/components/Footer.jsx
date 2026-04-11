import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/history', label: 'History' },
  { to: '/numerology', label: 'Numerology' },
  { to: '/colors', label: 'Colors' },
  { to: '/cards', label: '78 Cards' },
  { to: '/structure', label: 'Structure' },
  { to: '/practice', label: 'Practice' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(13,0,32,0.95)',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      padding: '3rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>

          {/* Brand + author */}
          <div>
            <span className="font-cinzel-deco shimmer-text" style={{ fontSize: '1.2rem', letterSpacing: 3, display: 'block', marginBottom: '0.5rem' }}>
              ✦ Tarot Academy ✦
            </span>
            <p style={{ color: 'rgba(232,213,183,0.6)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 280 }}>
              A complete Rider-Waite tarot course — symbolism, numerology, color theory, and interactive readings.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(155,89,182,0.3))', border: '1px solid rgba(201,168,76,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>
                H
              </div>
              <div>
                <div className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: 2 }}>Harsh Gajjar</div>
                <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.65rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>Tarot Reader · Computer Engineering Student</div>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="font-cinzel" style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.7rem', letterSpacing: 3, marginBottom: '1rem' }}>EXPLORE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.map(l => (
                <Link key={l.to} to={l.to} style={{ textDecoration: 'none', color: 'rgba(232,213,183,0.7)', fontFamily: 'Cinzel', fontSize: '0.8rem', letterSpacing: 1, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(232,213,183,0.7)'}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Deck info */}
          <div>
            <div className="font-cinzel" style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.7rem', letterSpacing: 3, marginBottom: '1rem' }}>THE DECK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: '22 Major Arcana', color: '#c9a84c' },
                { label: '14 Wands  🔥', color: '#e74c3c' },
                { label: '14 Cups  💧', color: '#3498db' },
                { label: '14 Swords  💨', color: '#95a5a6' },
                { label: '14 Pentacles  🌿', color: '#2ecc71' },
              ].map((item, i) => (
                <div key={i} style={{ color: item.color, fontFamily: 'Cinzel', fontSize: '0.75rem', letterSpacing: 1, opacity: 0.85 }}>{item.label}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold" style={{ margin: '0 0 1.25rem' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: 'rgba(201,168,76,0.4)', fontSize: '0.72rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>
            © {new Date().getFullYear()} Harsh Gajjar · Tarot Academy · All rights reserved
          </p>
          <p style={{ color: 'rgba(201,168,76,0.35)', fontSize: '0.68rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>
            Rider-Waite-Smith deck (1909) · Public domain images via Wikimedia Commons
          </p>
        </div>

      </div>
    </footer>
  );
}
