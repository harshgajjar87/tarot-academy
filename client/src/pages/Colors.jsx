import { motion } from 'framer-motion';

const colors = [
  { color: "Red", hex: "#CC0000", meaning: "Passion, energy, action, courage, desire, life force", cards: "The Emperor, The Tower, Strength" },
  { color: "Blue", hex: "#0044CC", meaning: "Intuition, calm, truth, wisdom, spiritual depth, emotion", cards: "The High Priestess, The Star, Judgement" },
  { color: "Yellow", hex: "#FFD700", meaning: "Intellect, clarity, optimism, consciousness, solar energy", cards: "The Fool, The Sun, The Magician" },
  { color: "White", hex: "#F0F0F0", meaning: "Purity, innocence, spiritual truth, divine light, new beginnings", cards: "The Fool, The High Priestess, Judgement" },
  { color: "Black", hex: "#222222", meaning: "Mystery, the unknown, shadow self, endings, the unconscious", cards: "The High Priestess, Death, The Devil" },
  { color: "Green", hex: "#228B22", meaning: "Growth, nature, healing, abundance, fertility, heart energy", cards: "The Empress, The World, Ace of Pentacles" },
  { color: "Purple", hex: "#6A0DAD", meaning: "Royalty, spiritual power, higher consciousness, mystery", cards: "The Hierophant, The High Priestess, The Hermit" },
  { color: "Orange", hex: "#FF6600", meaning: "Creativity, enthusiasm, warmth, courage, social energy", cards: "The Emperor, The Hermit, Strength" },
  { color: "Gold", hex: "#FFB800", meaning: "Divine wisdom, success, achievement, solar consciousness", cards: "The Sun, The Star, The World" },
  { color: "Gray", hex: "#808080", meaning: "Neutrality, balance between opposites, wisdom, ambiguity", cards: "The Hermit, Justice, The Moon" },
  { color: "Brown", hex: "#8B4513", meaning: "Earth, grounding, practicality, stability, material world", cards: "Pentacles suit, The Emperor, The Hierophant" },
];

export default function Colors() {
  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            Color Symbolism
          </h1>
          <p style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', letterSpacing: 3, fontSize: '0.85rem' }}>
            THE CHROMATIC LANGUAGE OF THE ARCANA
          </p>
          <div className="divider-gold" />
          <p style={{ color: 'var(--text-light)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            Pamela Colman Smith chose every color in the Rider-Waite deck with deliberate symbolic intent. 
            Colors are a visual language that speaks directly to the subconscious.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {colors.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className="glass-card" style={{ padding: '1.5rem', overflow: 'hidden', position: 'relative' }}>
              {/* Color accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: c.hex, opacity: 0.8 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: c.hex,
                  boxShadow: `0 0 20px ${c.hex}66`,
                  border: '2px solid rgba(255,255,255,0.2)',
                  flexShrink: 0,
                }} />
                <h3 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: 1 }}>{c.color}</h3>
              </div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>{c.meaning}</p>
              <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '0.75rem' }}>
                <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.8rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>SEEN IN: </span>
                <span style={{ color: 'rgba(232,213,183,0.6)', fontSize: '0.8rem' }}>{c.cards}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
