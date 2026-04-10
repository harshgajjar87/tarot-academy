import { motion } from 'framer-motion';

const numbers = [
  { n: 0, meaning: "Infinite potential, new beginnings, the void before creation, pure possibility", symbol: "∞" },
  { n: 1, meaning: "New starts, willpower, individuality, leadership, manifestation", symbol: "☀" },
  { n: 2, meaning: "Duality, balance, partnership, intuition, waiting", symbol: "☯" },
  { n: 3, meaning: "Creativity, growth, expression, collaboration, abundance", symbol: "△" },
  { n: 4, meaning: "Stability, structure, foundation, order, practicality", symbol: "⊞" },
  { n: 5, meaning: "Change, conflict, challenge, freedom, instability", symbol: "⛤" },
  { n: 6, meaning: "Harmony, responsibility, love, healing, community", symbol: "✡" },
  { n: 7, meaning: "Spirituality, introspection, mystery, wisdom, solitude", symbol: "☽" },
  { n: 8, meaning: "Power, ambition, karma, cycles, strength", symbol: "∞" },
  { n: 9, meaning: "Completion, wisdom, fulfillment, near the end of a cycle", symbol: "◎" },
  { n: 10, meaning: "Endings and new beginnings, completion of a cycle, transformation", symbol: "⊕" },
  { n: 11, meaning: "Justice, balance of karma, higher truth", symbol: "⚖" },
  { n: 12, meaning: "Surrender, sacrifice, seeing from a new perspective", symbol: "✝" },
  { n: 13, meaning: "Death, transformation, endings that lead to rebirth", symbol: "☠" },
  { n: 14, meaning: "Temperance, moderation, divine timing", symbol: "⚗" },
  { n: 15, meaning: "Shadow self, materialism, bondage, illusion", symbol: "⛧" },
  { n: 16, meaning: "Sudden change, revelation, destruction of false structures", symbol: "⚡" },
  { n: 17, meaning: "Hope, inspiration, renewal, cosmic guidance", symbol: "★" },
  { n: 18, meaning: "Illusion, subconscious, fear, the unknown", symbol: "🌙" },
  { n: 19, meaning: "Joy, success, vitality, clarity, achievement", symbol: "☉" },
  { n: 20, meaning: "Awakening, judgment, rebirth, calling", symbol: "📯" },
  { n: 21, meaning: "Completion, wholeness, integration, the world as one", symbol: "◉" },
];

export default function Numerology() {
  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔢</div>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            Sacred Numbers
          </h1>
          <p style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', letterSpacing: 3, fontSize: '0.85rem' }}>
            THE NUMEROLOGICAL LANGUAGE OF TAROT
          </p>
          <div className="divider-gold" />
          <p style={{ color: 'var(--text-light)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            Every number in tarot carries a vibrational frequency and archetypal meaning. 
            Understanding numbers unlocks the deeper language of every card.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {numbers.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
              className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                minWidth: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(155,89,182,0.2))',
                border: '1px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <span className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.1rem', fontWeight: 700 }}>{item.n}</span>
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{item.symbol}</div>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.meaning}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
