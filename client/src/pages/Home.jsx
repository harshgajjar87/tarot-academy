import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AntigravityScene from '../components/AntigravityScene';

export default function Home() {
  return (
    <div style={{ background: 'radial-gradient(ellipse at center, #1a0035 0%, #0d0020 60%, #000010 100%)', minHeight: '100vh' }}>

      {/* ── HERO wrapper — full viewport height ── */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

        {/* Stars-only background layer — fills entire hero, mouse reactive */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <AntigravityScene />
        </div>

        {/* Text block — top half, sits above stars, NO 3D objects behind it */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '52%',
          zIndex: 20,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '80px 2rem 0',
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(13,0,32,0.55) 0%, rgba(13,0,32,0.15) 85%, transparent 100%)',
        }}>
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <p className="font-cinzel" style={{ color: 'rgba(201,168,76,0.75)', letterSpacing: 6, fontSize: '0.8rem', marginBottom: '1.2rem' }}>
              ✦ WELCOME TO THE SACRED ACADEMY ✦
            </p>
            <h1 className="font-cinzel-deco shimmer-text" style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.15, marginBottom: '1.2rem',
              textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(201,168,76,0.3)',
            }}>
              The Art of Tarot
            </h1>
            <h2 className="font-cinzel" style={{ color: 'rgba(155,89,182,0.95)', fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', letterSpacing: 4, marginBottom: '1.5rem', fontWeight: 400 }}>
              Rider-Waite Complete Course
            </h2>
            <div className="divider-gold" style={{ maxWidth: 500, margin: '0 auto 1.5rem' }} />
            <p style={{ maxWidth: 560, margin: '0 auto', color: 'rgba(232,213,183,0.9)', lineHeight: 2, fontSize: '1.05rem' }}>
              Journey through the 78 sacred cards. Master history, symbolism, numerology,
              color language, and the 7 aspects of every card — from Past to Daily Guidance.
            </p>
          </motion.div>
        </div>

        {/* CTA buttons — lower portion, above 3D scene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          style={{
            position: 'absolute', bottom: '10%', left: 0, right: 0, zIndex: 20,
            display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap',
            pointerEvents: 'all',
          }}
        >
          <Link to="/cards"><button className="btn-mystical" style={{ fontSize: '1rem', padding: '14px 40px' }}>Explore the 78 Cards</button></Link>
          <Link to="/history"><button className="btn-mystical" style={{ borderColor: '#9b59b6', color: '#9b59b6', fontSize: '1rem', padding: '14px 40px' }}>History & Origins</button></Link>
        </motion.div>

      </div>

      {/* ── Feature grid — below hero ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {[
          { icon: '📜', title: 'History & Origins', desc: 'From 15th century Italy to the revolutionary Rider-Waite deck of 1909', link: '/history', color: '#c9a84c' },
          { icon: '🔢', title: 'Sacred Numbers', desc: 'The numerological vibration behind every card number 0 through 21', link: '/numerology', color: '#9b59b6' },
          { icon: '🎨', title: 'Color Symbolism', desc: 'Every color Pamela Colman Smith chose carries deep spiritual meaning', link: '/colors', color: '#3498db' },
          { icon: '🃏', title: '78 Cards In Depth', desc: 'Full symbolism, 7 aspects of prediction, and 5 practice Q&As per card', link: '/cards', color: '#2ecc71' },
        ].map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15 }}>
            <Link to={f.link} style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.4s', borderColor: `${f.color}33` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 className="font-cinzel" style={{ color: f.color, marginBottom: '0.75rem', fontSize: '1rem', letterSpacing: 1 }}>{f.title}</h3>
                <p style={{ color: 'rgba(232,213,183,0.65)', fontSize: '0.9rem', lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
