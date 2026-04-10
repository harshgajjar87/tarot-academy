import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const STRUCTURE = {
  major: {
    label: 'Major Arcana',
    subtitle: '22 Cards · The Great Mysteries',
    color: '#c9a84c',
    icon: '✦',
    description: 'The Major Arcana represents the soul\'s journey through life — from the innocent leap of The Fool to the complete integration of The World. These 22 cards deal with universal themes, karmic lessons, and the deeper forces shaping our lives.',
    cards: [
      { id: 0, name: 'The Fool', number: '0' },
      { id: 1, name: 'The Magician', number: 'I' },
      { id: 2, name: 'The High Priestess', number: 'II' },
      { id: 3, name: 'The Empress', number: 'III' },
      { id: 4, name: 'The Emperor', number: 'IV' },
      { id: 5, name: 'The Hierophant', number: 'V' },
      { id: 6, name: 'The Lovers', number: 'VI' },
      { id: 7, name: 'The Chariot', number: 'VII' },
      { id: 8, name: 'Strength', number: 'VIII' },
      { id: 9, name: 'The Hermit', number: 'IX' },
      { id: 10, name: 'Wheel of Fortune', number: 'X' },
      { id: 11, name: 'Justice', number: 'XI' },
      { id: 12, name: 'The Hanged Man', number: 'XII' },
      { id: 13, name: 'Death', number: 'XIII' },
      { id: 14, name: 'Temperance', number: 'XIV' },
      { id: 15, name: 'The Devil', number: 'XV' },
      { id: 16, name: 'The Tower', number: 'XVI' },
      { id: 17, name: 'The Star', number: 'XVII' },
      { id: 18, name: 'The Moon', number: 'XVIII' },
      { id: 19, name: 'The Sun', number: 'XIX' },
      { id: 20, name: 'Judgement', number: 'XX' },
      { id: 21, name: 'The World', number: 'XXI' },
    ],
  },
  minor: {
    label: 'Minor Arcana',
    subtitle: '56 Cards · The Human Experience',
    color: '#9b59b6',
    icon: '◆',
    description: 'The Minor Arcana reflects the everyday events, emotions, and challenges of daily life. Divided into four suits, each suit governs a different domain of human experience.',
    suits: [
      {
        name: 'Wands',
        element: 'Fire',
        icon: '🔥',
        color: '#e67e22',
        theme: 'Passion, creativity, ambition, career, energy',
        pips: [
          { id: 22, name: 'Ace of Wands', number: 'Ace' },
          { id: 23, name: 'Two of Wands', number: '2' },
          { id: 24, name: 'Three of Wands', number: '3' },
          { id: 25, name: 'Four of Wands', number: '4' },
          { id: 26, name: 'Five of Wands', number: '5' },
          { id: 27, name: 'Six of Wands', number: '6' },
          { id: 28, name: 'Seven of Wands', number: '7' },
          { id: 29, name: 'Eight of Wands', number: '8' },
          { id: 30, name: 'Nine of Wands', number: '9' },
          { id: 31, name: 'Ten of Wands', number: '10' },
        ],
        court: [
          { id: 32, name: 'Page of Wands', number: 'Page', role: 'The enthusiastic student — curious, adventurous, full of new ideas.' },
          { id: 33, name: 'Knight of Wands', number: 'Knight', role: 'The bold adventurer — passionate, impulsive, driven by fire.' },
          { id: 34, name: 'Queen of Wands', number: 'Queen', role: 'The magnetic leader — confident, warm, fiercely independent.' },
          { id: 35, name: 'King of Wands', number: 'King', role: 'The visionary entrepreneur — charismatic, bold, a natural leader.' },
        ],
      },
      {
        name: 'Cups',
        element: 'Water',
        icon: '💧',
        color: '#3498db',
        theme: 'Emotions, relationships, intuition, dreams, love',
        pips: [
          { id: 36, name: 'Ace of Cups', number: 'Ace' },
          { id: 37, name: 'Two of Cups', number: '2' },
          { id: 38, name: 'Three of Cups', number: '3' },
          { id: 39, name: 'Four of Cups', number: '4' },
          { id: 40, name: 'Five of Cups', number: '5' },
          { id: 41, name: 'Six of Cups', number: '6' },
          { id: 42, name: 'Seven of Cups', number: '7' },
          { id: 43, name: 'Eight of Cups', number: '8' },
          { id: 44, name: 'Nine of Cups', number: '9' },
          { id: 45, name: 'Ten of Cups', number: '10' },
        ],
        court: [
          { id: 46, name: 'Page of Cups', number: 'Page', role: 'The dreamy messenger — sensitive, creative, emotionally open.' },
          { id: 47, name: 'Knight of Cups', number: 'Knight', role: 'The romantic idealist — charming, imaginative, led by the heart.' },
          { id: 48, name: 'Queen of Cups', number: 'Queen', role: 'The empathic healer — compassionate, intuitive, deeply nurturing.' },
          { id: 49, name: 'King of Cups', number: 'King', role: 'The emotionally wise ruler — balanced, diplomatic, master of feelings.' },
        ],
      },
      {
        name: 'Swords',
        element: 'Air',
        icon: '💨',
        color: '#95a5a6',
        theme: 'Intellect, conflict, truth, communication, challenges',
        pips: [
          { id: 50, name: 'Ace of Swords', number: 'Ace' },
          { id: 51, name: 'Two of Swords', number: '2' },
          { id: 52, name: 'Three of Swords', number: '3' },
          { id: 53, name: 'Four of Swords', number: '4' },
          { id: 54, name: 'Five of Swords', number: '5' },
          { id: 55, name: 'Six of Swords', number: '6' },
          { id: 56, name: 'Seven of Swords', number: '7' },
          { id: 57, name: 'Eight of Swords', number: '8' },
          { id: 58, name: 'Nine of Swords', number: '9' },
          { id: 59, name: 'Ten of Swords', number: '10' },
        ],
        court: [
          { id: 60, name: 'Page of Swords', number: 'Page', role: 'The sharp-minded student — curious, vigilant, quick to learn.' },
          { id: 61, name: 'Knight of Swords', number: 'Knight', role: 'The fierce warrior — ambitious, direct, charges ahead without hesitation.' },
          { id: 62, name: 'Queen of Swords', number: 'Queen', role: 'The clear-eyed truth-teller — independent, perceptive, cuts through illusion.' },
          { id: 63, name: 'King of Swords', number: 'King', role: 'The intellectual authority — analytical, just, master of logic and truth.' },
        ],
      },
      {
        name: 'Pentacles',
        element: 'Earth',
        icon: '🌿',
        color: '#2ecc71',
        theme: 'Material world, finances, work, health, nature',
        pips: [
          { id: 64, name: 'Ace of Pentacles', number: 'Ace' },
          { id: 65, name: 'Two of Pentacles', number: '2' },
          { id: 66, name: 'Three of Pentacles', number: '3' },
          { id: 67, name: 'Four of Pentacles', number: '4' },
          { id: 68, name: 'Five of Pentacles', number: '5' },
          { id: 69, name: 'Six of Pentacles', number: '6' },
          { id: 70, name: 'Seven of Pentacles', number: '7' },
          { id: 71, name: 'Eight of Pentacles', number: '8' },
          { id: 72, name: 'Nine of Pentacles', number: '9' },
          { id: 73, name: 'Ten of Pentacles', number: '10' },
        ],
        court: [
          { id: 74, name: 'Page of Pentacles', number: 'Page', role: 'The diligent student — ambitious, practical, eager to build skills.' },
          { id: 75, name: 'Knight of Pentacles', number: 'Knight', role: 'The reliable worker — methodical, patient, committed to the long game.' },
          { id: 76, name: 'Queen of Pentacles', number: 'Queen', role: 'The nurturing provider — practical, generous, creates abundance.' },
          { id: 77, name: 'King of Pentacles', number: 'King', role: 'The master of material success — wealthy, stable, a builder of empires.' },
        ],
      },
    ],
  },
};

const COURT_ROLES = {
  Page: 'Student energy — learning, curiosity, messages, new beginnings in the suit\'s domain.',
  Knight: 'Action energy — movement, pursuit, the extreme expression of the suit\'s qualities.',
  Queen: 'Receptive mastery — internalized wisdom, nurturing the suit\'s energy from within.',
  King: 'Active mastery — outward authority, commanding the suit\'s energy in the world.',
};

export default function Structure() {
  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗂</div>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            Structure of the Tarot
          </h1>
          <p style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', letterSpacing: 3, fontSize: '0.85rem' }}>
            78 CARDS · 2 ARCANA · 4 SUITS · 16 COURT CARDS
          </p>
          <div className="divider-gold" />
          <p style={{ color: 'var(--text-light)', maxWidth: 700, margin: '0 auto', lineHeight: 1.9, fontSize: '0.95rem' }}>
            The 78 cards of the Rider-Waite Tarot are divided into two main groups: the Major Arcana and the Minor Arcana.
            Understanding this structure is the foundation of reading tarot with clarity and depth.
          </p>
        </motion.div>

        {/* Overview tree */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', marginBottom: '1.5rem', letterSpacing: 2, textAlign: 'center' }}>
            ✦ The 78-Card Tree ✦
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ borderLeft: '3px solid #c9a84c', paddingLeft: '1.5rem' }}>
              <div className="font-cinzel" style={{ color: '#c9a84c', fontSize: '1rem', letterSpacing: 2, marginBottom: '0.5rem' }}>MAJOR ARCANA</div>
              <div style={{ color: 'rgba(232,213,183,0.7)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                22 cards (0–XXI)<br />
                Universal archetypes<br />
                Soul-level themes<br />
                The Fool's Journey
              </div>
            </div>
            <div style={{ borderLeft: '3px solid #9b59b6', paddingLeft: '1.5rem' }}>
              <div className="font-cinzel" style={{ color: '#9b59b6', fontSize: '1rem', letterSpacing: 2, marginBottom: '0.5rem' }}>MINOR ARCANA</div>
              <div style={{ color: 'rgba(232,213,183,0.7)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                56 cards across 4 suits<br />
                Ace through 10 (40 pip cards)<br />
                Page, Knight, Queen, King (16 court cards)<br />
                Wands · Cups · Swords · Pentacles
              </div>
            </div>
          </div>
        </motion.div>

        {/* Major Arcana section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>✦</div>
            <div>
              <h2 className="font-cinzel" style={{ color: '#c9a84c', fontSize: '1.3rem', letterSpacing: 2 }}>{STRUCTURE.major.label}</h2>
              <p style={{ color: 'rgba(232,213,183,0.5)', fontSize: '0.8rem' }}>{STRUCTURE.major.subtitle}</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>{STRUCTURE.major.description}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {STRUCTURE.major.cards.map((card, i) => (
              <motion.div key={card.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}>
                <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'}>
                    <span style={{ fontFamily: 'Cinzel', fontSize: '0.7rem', color: 'rgba(201,168,76,0.6)', minWidth: 28 }}>{card.number}</span>
                    <span style={{ fontFamily: 'Cinzel', fontSize: '0.8rem', color: 'var(--text-light)' }}>{card.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Court Cards explanation */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', marginBottom: '1.5rem', letterSpacing: 2 }}>◆ Court Cards — The 16 Personalities</h2>
          <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Each of the four suits contains four court cards — Page, Knight, Queen, and King. These 16 cards represent personality types, people in your life, or aspects of yourself. They can also indicate how to approach a situation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {Object.entries(COURT_ROLES).map(([rank, desc]) => (
              <div key={rank} style={{ borderLeft: '3px solid rgba(201,168,76,0.4)', paddingLeft: '1rem' }}>
                <div className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: 2, marginBottom: '0.4rem' }}>{rank.toUpperCase()}</div>
                <p style={{ color: 'rgba(232,213,183,0.7)', fontSize: '0.85rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Minor Arcana suits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(155,89,182,0.15)', border: '1px solid rgba(155,89,182,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>◆</div>
            <div>
              <h2 className="font-cinzel" style={{ color: '#9b59b6', fontSize: '1.3rem', letterSpacing: 2 }}>{STRUCTURE.minor.label}</h2>
              <p style={{ color: 'rgba(232,213,183,0.5)', fontSize: '0.8rem' }}>{STRUCTURE.minor.subtitle}</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>{STRUCTURE.minor.description}</p>
          </div>
        </motion.div>

        {/* Each suit */}
        {STRUCTURE.minor.suits.map((suit, si) => (
          <motion.div key={suit.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + si * 0.08 }}
            style={{ marginBottom: '2.5rem' }}>
            {/* Suit header */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem', borderColor: `${suit.color}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{suit.icon}</span>
                <div>
                  <h3 className="font-cinzel" style={{ color: suit.color, fontSize: '1.1rem', letterSpacing: 2 }}>Suit of {suit.name}</h3>
                  <p style={{ color: 'rgba(232,213,183,0.5)', fontSize: '0.8rem' }}>Element: {suit.element}</p>
                </div>
              </div>
              <p style={{ color: 'rgba(232,213,183,0.7)', fontSize: '0.85rem' }}>{suit.theme}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* Pip cards */}
              <div>
                <div className="font-cinzel" style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.75rem', letterSpacing: 2, marginBottom: '0.75rem' }}>ACE — TEN (Pip Cards)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {suit.pips.map(card => (
                    <Link key={card.id} to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
                      <div className="glass-card" style={{ padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = `${suit.color}66`}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'}>
                        <span style={{ fontFamily: 'Cinzel', fontSize: '0.7rem', color: suit.color, minWidth: 28 }}>{card.number}</span>
                        <span style={{ fontFamily: 'Cinzel', fontSize: '0.8rem', color: 'var(--text-light)' }}>{card.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Court cards */}
              <div>
                <div className="font-cinzel" style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.75rem', letterSpacing: 2, marginBottom: '0.75rem' }}>COURT CARDS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {suit.court.map(card => (
                    <Link key={card.id} to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
                      <div className="glass-card" style={{ padding: '0.75rem 1rem', cursor: 'pointer', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = `${suit.color}66`}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'}>
                        <div className="font-cinzel" style={{ color: suit.color, fontSize: '0.85rem', marginBottom: '0.3rem' }}>{card.name}</div>
                        <p style={{ color: 'rgba(232,213,183,0.6)', fontSize: '0.78rem', lineHeight: 1.5 }}>{card.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Footer CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div className="divider-gold" />
          <p style={{ color: 'rgba(232,213,183,0.6)', fontFamily: 'Cinzel', letterSpacing: 2, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            EXPLORE ALL 78 CARDS IN DETAIL
          </p>
          <Link to="/cards">
            <button className="btn-mystical" style={{ fontSize: '1rem', padding: '14px 40px' }}>
              ✦ Browse All Cards
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
