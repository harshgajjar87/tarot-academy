import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AntigravityScene from '../components/AntigravityScene';

export default function Home() {
  return (
    <div style={{ background: 'radial-gradient(ellipse at center, #1a0035 0%, #0d0020 60%, #000010 100%)', minHeight: '100vh' }}>

      {/* ── HERO: full viewport, 3D behind text ── */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

        {/* 3D canvas — absolute fill, mouse reactive */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <AntigravityScene />
        </div>

        {/* Text — top half, padded below navbar (70px) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '55%',
          zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '70px 2rem 0',
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(10,0,25,0.72) 0%, rgba(10,0,25,0.35) 75%, transparent 100%)',
        }}>
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <p className="font-cinzel" style={{ color: 'rgba(201,168,76,0.8)', letterSpacing: 6, fontSize: '0.8rem', marginBottom: '1.2rem' }}>
              ✦ WELCOME TO THE SACRED ACADEMY ✦
            </p>
            <h1 className="font-cinzel-deco shimmer-text" style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.15, marginBottom: '1.2rem',
              textShadow: '0 2px 30px rgba(0,0,0,1), 0 0 60px rgba(201,168,76,0.25)',
            }}>
              The Art of Tarot
            </h1>
            <h2 className="font-cinzel" style={{ color: 'rgba(155,89,182,1)', fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', letterSpacing: 4, marginBottom: '1.5rem', fontWeight: 400, textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}>
              Rider-Waite Complete Course
            </h2>
            <div className="divider-gold" style={{ maxWidth: 500, margin: '0 auto 1.5rem' }} />
            <p style={{ maxWidth: 560, margin: '0 auto', color: 'rgba(232,213,183,0.95)', lineHeight: 2, fontSize: '1.05rem', textShadow: '0 1px 12px rgba(0,0,0,0.9)' }}>
              Journey through the 78 sacred cards. Master history, symbolism, numerology,
              color language, and the 7 aspects of every card — from Past to Daily Guidance.
            </p>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          style={{ position: 'absolute', bottom: '10%', left: 0, right: 0, zIndex: 20, display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/cards"><button className="btn-mystical" style={{ fontSize: '1rem', padding: '14px 40px' }}>Explore the 78 Cards</button></Link>
          <Link to="/history"><button className="btn-mystical" style={{ borderColor: '#9b59b6', color: '#9b59b6', fontSize: '1rem', padding: '14px 40px' }}>History & Origins</button></Link>
        </motion.div>
      </div>

      {/* ── SECTION 1: Feature grid ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: 3, marginBottom: '0.75rem' }}>✦ What You Will Learn ✦</h2>
          <div className="divider-gold" style={{ maxWidth: 300, margin: '0 auto' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '📜', title: 'History & Origins', desc: 'From 15th century Italy to the revolutionary Rider-Waite deck of 1909 — trace the full lineage of tarot.', link: '/history', color: '#c9a84c' },
            { icon: '🔢', title: 'Sacred Numbers', desc: 'The numerological vibration behind every card number 0 through 21 and how it shapes meaning.', link: '/numerology', color: '#9b59b6' },
            { icon: '🎨', title: 'Color Symbolism', desc: 'Every color Pamela Colman Smith chose carries deep spiritual meaning — learn to read the palette.', link: '/colors', color: '#3498db' },
            { icon: '🃏', title: '78 Cards In Depth', desc: 'Full symbolism, 7 aspects of prediction, and 5 practice Q&As per card across all 78 cards.', link: '/cards', color: '#2ecc71' },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={f.link} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.4s', borderColor: `${f.color}33`, height: '100%' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 className="font-cinzel" style={{ color: f.color, marginBottom: '0.75rem', fontSize: '1rem', letterSpacing: 1 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(232,213,183,0.65)', fontSize: '0.9rem', lineHeight: 1.8 }}>{f.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── SECTION 2: The 4 Suits ── */}
      <div style={{ background: 'rgba(201,168,76,0.04)', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: 3, marginBottom: '0.75rem' }}>✦ The Four Suits ✦</h2>
            <p style={{ color: 'rgba(232,213,183,0.6)', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>Each suit governs a domain of human experience — fire, water, air, and earth.</p>
            <div className="divider-gold" style={{ maxWidth: 300, margin: '1rem auto 0' }} />
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🔥', suit: 'Wands', element: 'Fire', theme: 'Passion, creativity, ambition, and the spark of new ventures.', color: '#e74c3c' },
              { icon: '💧', suit: 'Cups', element: 'Water', theme: 'Emotions, relationships, intuition, and the flow of feeling.', color: '#3498db' },
              { icon: '💨', suit: 'Swords', element: 'Air', theme: 'Intellect, conflict, truth, and the power of the mind.', color: '#95a5a6' },
              { icon: '🌿', suit: 'Pentacles', element: 'Earth', theme: 'Material world, finances, health, and practical matters.', color: '#2ecc71' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to="/cards" style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', borderColor: `${s.color}33`, cursor: 'pointer' }}>
                    <div style={{ fontSize: '2.8rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                    <h3 className="font-cinzel" style={{ color: s.color, fontSize: '1.1rem', letterSpacing: 2, marginBottom: '0.3rem' }}>{s.suit}</h3>
                    <p style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.75rem', fontFamily: 'Cinzel', letterSpacing: 2, marginBottom: '0.75rem' }}>{s.element}</p>
                    <p style={{ color: 'rgba(232,213,183,0.65)', fontSize: '0.88rem', lineHeight: 1.7 }}>{s.theme}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 3: Major Arcana highlight ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: 3, marginBottom: '0.75rem' }}>✦ The Major Arcana ✦</h2>
          <p style={{ color: 'rgba(232,213,183,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.9 }}>
            22 cards that map the soul's journey — from The Fool's first step to The World's completion. Each card is an archetype, a mirror, and a teacher.
          </p>
          <div className="divider-gold" style={{ maxWidth: 300, margin: '1rem auto 0' }} />
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
          {[
            { name: 'The Fool', num: '0', img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg', id: 0 },
            { name: 'The Magician', num: 'I', img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg', id: 1 },
            { name: 'High Priestess', num: 'II', img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg', id: 2 },
            { name: 'The Empress', num: 'III', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg', id: 3 },
            { name: 'The Emperor', num: 'IV', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg', id: 4 },
            { name: 'The Lovers', num: 'VI', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg', id: 6 },
            { name: 'The Chariot', num: 'VII', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg', id: 7 },
            { name: 'The Star', num: 'XVII', img: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg', id: 17 },
          ].map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.04 }}>
              <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ overflow: 'hidden', cursor: 'pointer', borderColor: 'rgba(201,168,76,0.2)' }}>
                  <div style={{ position: 'relative', paddingTop: '145%', overflow: 'hidden' }}>
                    <img src={card.img} alt={card.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,0,32,0.9) 0%, transparent 55%)' }} />
                    <span className="font-cinzel" style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(201,168,76,0.2)', border: '1px solid var(--gold)', borderRadius: 20, padding: '2px 8px', fontSize: '0.7rem', color: 'var(--gold)' }}>{card.num}</span>
                  </div>
                  <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <p className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: 1 }}>{card.name}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/cards"><button className="btn-mystical" style={{ fontSize: '1rem', padding: '14px 40px' }}>View All 78 Cards →</button></Link>
        </motion.div>
      </div>

      {/* ── SECTION 4: Practice CTA ── */}
      <div style={{ background: 'rgba(155,89,182,0.06)', borderTop: '1px solid rgba(155,89,182,0.15)', padding: '5rem 2rem 6rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🃏</div>
            <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: 3, marginBottom: '1rem' }}>Ready to Practice?</h2>
            <p style={{ color: 'rgba(232,213,183,0.7)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '2rem' }}>
              Six interactive spreads — from a single daily card to the full 12-card yearly reading and the classic Celtic Cross. Draw, flip, and read.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/practice"><button className="btn-mystical" style={{ fontSize: '1rem', padding: '14px 40px' }}>✦ Start a Reading</button></Link>
              <Link to="/structure"><button className="btn-mystical" style={{ borderColor: '#9b59b6', color: '#9b59b6', fontSize: '1rem', padding: '14px 40px' }}>Deck Structure</button></Link>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
