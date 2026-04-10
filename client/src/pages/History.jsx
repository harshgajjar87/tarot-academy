import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function History() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tarot/overview')
      .then(r => setData(r.data))
      .catch(() => setData({
        history: {
          whatIsTarot: `Tarot is a set of 78 illustrated cards used for divination, self-reflection, and spiritual guidance. Each card carries symbolic imagery that speaks to the human experience — from joy and love to fear and transformation.`,
          riderWaite: `The Rider-Waite Tarot, created in 1909, is the most widely used tarot deck in the world. Designed by Pamela Colman Smith under Arthur Edward Waite's direction, it revolutionized tarot by illustrating every single card with full scenes.`,
          history: `Tarot cards originated in northern Italy in the 15th century as playing cards. They were not used for divination until the late 18th century when French occultists began assigning mystical meanings to them.`
        }
      }));
  }, []);

  const sections = data ? [
    { icon: '🔮', title: 'What is Tarot?', content: data.history.whatIsTarot },
    { icon: '🃏', title: 'The Rider-Waite Tarot', content: data.history.riderWaite },
    { icon: '📜', title: 'History & Origins', content: data.history.history },
  ] : [];

  const timeline = [
    { year: '1400s', event: 'Tarot cards created in northern Italy as playing cards (Tarocchi)' },
    { year: '1781', event: 'Antoine Court de Gébelin claims Egyptian origins — mystique grows' },
    { year: '1850s', event: 'Hermetic Order of the Golden Dawn integrates tarot into Western esotericism' },
    { year: '1909', event: 'Arthur Waite and Pamela Colman Smith create the Rider-Waite deck' },
    { year: '1910', event: 'Rider-Waite published — becomes the gold standard for all modern tarot' },
    { year: 'Today', event: 'Thousands of decks exist worldwide, all rooted in Rider-Waite symbolism' },
  ];

  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            History of Tarot
          </h1>
          <div className="divider-gold" />
        </motion.div>

        {sections.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}
            className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>{s.icon}</span>
              <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: 1 }}>{s.title}</h2>
            </div>
            <p style={{ lineHeight: 1.9, color: 'var(--text-light)', fontSize: '1rem' }}>{s.content}</p>
          </motion.div>
        ))}

        {/* Timeline */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: '2rem', letterSpacing: 2 }}>
            ✦ Timeline ✦
          </h2>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '1rem', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />
            {timeline.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.1 }}
                style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ position: 'absolute', left: '0.65rem', width: 12, height: 12, borderRadius: '50%', background: 'var(--gold)', marginTop: 4, boxShadow: '0 0 10px var(--gold)' }} />
                <div className="glass-card" style={{ padding: '1rem 1.5rem', flex: 1 }}>
                  <span className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: 2 }}>{t.year}</span>
                  <p style={{ color: 'var(--text-light)', marginTop: '0.3rem', fontSize: '0.95rem' }}>{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
