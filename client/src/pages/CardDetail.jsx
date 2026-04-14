import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allCards } from '../data/allCards';

const LANGS = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'hi', label: 'हि', full: 'Hindi' },
  { code: 'gu', label: 'ગુ', full: 'Gujarati' },
];

// Translate a single string via MyMemory free API
async function translateText(text, targetLang) {
  if (!text || targetLang === 'en') return text;
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    );
    const data = await res.json();
    return data?.responseData?.translatedText || text;
  } catch {
    return text;
  }
}

// Translate an array of strings
async function translateArray(arr, targetLang) {
  if (!arr || targetLang === 'en') return arr;
  return Promise.all(arr.map(s => translateText(s, targetLang)));
}

// Translate aspects object
async function translateAspects(aspects, targetLang) {
  if (!aspects || targetLang === 'en') return aspects;
  const entries = await Promise.all(
    Object.entries(aspects).map(async ([k, v]) => [k, await translateText(v, targetLang)])
  );
  return Object.fromEntries(entries);
}

// Translate practiceQuestions array
async function translatePracticeQuestions(pqs, targetLang) {
  if (!pqs || targetLang === 'en') return pqs;
  return Promise.all(pqs.map(async pq => ({
    q: await translateText(pq.q, targetLang),
    a: await translateText(pq.a, targetLang),
  })));
}

// Only these IDs are accessible to regular users
const UNLOCKED_IDS = new Set([0, 22, 36, 50, 64]);

const aspectIcons = {
  past: { icon: '⏮', label: 'Past', color: '#9b59b6' },
  present: { icon: '⊕', label: 'Present', color: '#c9a84c' },
  future: { icon: '⏭', label: 'Future', color: '#3498db' },
  career: { icon: '💼', label: 'Career', color: '#2ecc71' },
  health: { icon: '💚', label: 'Health', color: '#e74c3c' },
  relationship: { icon: '💕', label: 'Relationship', color: '#e91e63' },
  dailyGuidance: { icon: '☀', label: 'Daily Guidance', color: '#f39c12' },
};

export default function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [activeQ, setActiveQ] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [lang, setLang] = useState('en');
  const [translated, setTranslated] = useState(null);
  const [translating, setTranslating] = useState(false);

  useEffect(() => {
    const c = allCards[parseInt(id)] || allCards[0];
    setCard(c);
    setTranslated(null);
    setLang('en');
  }, [id]);

  const handleLang = useCallback(async (targetLang) => {
    if (targetLang === lang) return;
    setLang(targetLang);
    if (targetLang === 'en') { setTranslated(null); return; }
    setTranslating(true);
    const [upright, pictureDescription, keywords, symbols, colors, aspects, practiceQuestions] = await Promise.all([
      translateText(card.upright, targetLang),
      translateText(card.pictureDescription, targetLang),
      translateArray(card.keywords, targetLang),
      translateArray(card.symbols, targetLang),
      translateArray(card.colors, targetLang),
      translateAspects(card.aspects, targetLang),
      translatePracticeQuestions(card.practiceQuestions, targetLang),
    ]);
    setTranslated({ upright, pictureDescription, keywords, symbols, colors, aspects, practiceQuestions });
    setTranslating(false);
  }, [card, lang]);

  // Use translated content if available, else original
  const display = translated ? { ...card, ...translated } : card;

  if (!card) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'var(--gold)', fontFamily: 'Cinzel', fontSize: '1.2rem' }}>✦ Loading the arcana... ✦</div>
    </div>
  );

  // Block access to locked cards (unless admin session active)
  const isAdmin = sessionStorage.getItem('tarot_admin') === 'true';
  if (!isAdmin && !UNLOCKED_IDS.has(parseInt(id))) {
    return (
      <div className="nebula-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          className="glass-card" style={{ maxWidth: 460, width: '100%', padding: '3rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔒</div>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: 2, marginBottom: '1rem' }}>Admin Access Only</h2>
          <p style={{ color: 'rgba(232,213,183,0.85)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '2rem' }}>
            This card's full reading is reserved for admin access only.<br />
            The free preview cards are <strong style={{ color: 'var(--gold)' }}>The Fool</strong>, <strong style={{ color: 'var(--gold)' }}>Ace of Wands</strong>, <strong style={{ color: 'var(--gold)' }}>Ace of Cups</strong>, <strong style={{ color: 'var(--gold)' }}>Ace of Swords</strong>, and <strong style={{ color: 'var(--gold)' }}>Ace of Pentacles</strong>.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/cards/0"><button className="btn-mystical">The Fool</button></Link>
            <Link to="/cards/22"><button className="btn-mystical">Ace of Wands</button></Link>
            <Link to="/cards/36"><button className="btn-mystical">Ace of Cups</button></Link>
            <Link to="/cards/50"><button className="btn-mystical">Ace of Swords</button></Link>
            <Link to="/cards/64"><button className="btn-mystical">Ace of Pentacles</button></Link>
            <Link to="/cards"><button className="btn-mystical" style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.5)' }}>← All Cards</button></Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Back */}
        <Link to="/cards" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: 1 }}>
          ← Back to Cards
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="font-cinzel" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: 4, fontSize: '0.85rem' }}>
            {card.arcana} Arcana · {card.number}
          </span>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0.5rem 0' }}>
            {card.name}
          </h1>
          <div className="divider-gold" style={{ maxWidth: 300, margin: '0 auto 1.25rem' }} />

          {/* Language toggle */}
          <div style={{ display: 'inline-flex', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: 30, padding: '4px 6px' }}>
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => handleLang(l.code)}
                disabled={translating}
                title={l.full}
                style={{
                  background: lang === l.code ? 'rgba(201,168,76,0.25)' : 'transparent',
                  border: lang === l.code ? '1px solid rgba(201,168,76,0.6)' : '1px solid transparent',
                  borderRadius: 20, padding: '4px 14px', cursor: translating ? 'wait' : 'pointer',
                  color: lang === l.code ? 'var(--gold)' : 'rgba(201,168,76,0.55)',
                  fontFamily: 'Cinzel', fontSize: '0.8rem', letterSpacing: 1,
                  transition: 'all 0.25s',
                }}
              >
                {translating && lang !== l.code && l.code !== 'en' ? l.label : l.label}
              </button>
            ))}
            {translating && (
              <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.75rem', alignSelf: 'center', paddingRight: 6 }}>...</span>
            )}
          </div>
        </motion.div>

        {/* Card image + basic info */}
        <div className="card-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 320px) 1fr', gap: '3rem', marginBottom: '3rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
            <div
              className="tarot-card-3d card-glow"
              onClick={() => setFlipped(!flipped)}
              style={{
                borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.8s cubic-bezier(0.23,1,0.32,1)',
                transformStyle: 'preserve-3d',
              }}
            >
              <img src={card.image} alt={card.name} style={{ width: '100%', display: 'block' }}
                onError={e => { e.target.src = `https://via.placeholder.com/300x420/1a0035/c9a84c?text=${encodeURIComponent(card.name)}`; }} />
            </div>
            <p style={{ textAlign: 'center', color: 'rgba(201,168,76,0.5)', fontSize: '0.75rem', marginTop: '0.5rem', fontFamily: 'Cinzel' }}>
              Click card to flip
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
            {/* Keywords */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {(display.keywords || []).map((k, i) => (
                <span key={i} style={{
                  background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
                  borderRadius: 20, padding: '4px 14px', fontSize: '0.85rem', color: 'var(--gold)',
                  fontFamily: 'Cinzel', letterSpacing: 1,
                }}>{k}</span>
              ))}
            </div>

            {/* Upright meaning */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1rem' }}>
                <div style={{ color: '#2ecc71', fontFamily: 'Cinzel', fontSize: '0.8rem', letterSpacing: 1, marginBottom: '0.5rem' }}>↑ MEANING</div>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>{display.upright}</p>
              </div>
            </div>

            {/* Picture description */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: 1, marginBottom: '0.75rem' }}>🖼 Card Description</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>{display.pictureDescription}</p>
            </div>

            {/* Colors */}
            {card.colors && (
              <div className="glass-card" style={{ padding: '1rem' }}>
                <h3 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: 1, marginBottom: '0.75rem' }}>🎨 Colors</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {display.colors.map((c, i) => (
                    <span key={i} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '3px 12px', fontSize: '0.8rem', color: 'var(--text-light)' }}>{c}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Symbols */}
        {card.symbols && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h2 className="font-cinzel" style={{ color: 'var(--gold)', marginBottom: '1.5rem', letterSpacing: 2 }}>✦ Symbols & Their Meanings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {display.symbols.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', marginTop: 2 }}>◆</span>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 7 Aspects */}
        {card.aspects && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ marginBottom: '2rem' }}>
            <h2 className="font-cinzel" style={{ color: 'var(--gold)', marginBottom: '1.5rem', letterSpacing: 2, textAlign: 'center' }}>
              ✦ 7 Aspects of Prediction ✦
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {Object.entries(display.aspects).map(([key, value]) => {
                const meta = aspectIcons[key] || { icon: '✦', label: key, color: 'var(--gold)' };
                return (
                  <div key={key} className="aspect-badge">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{meta.icon}</span>
                      <span className="font-cinzel" style={{ color: meta.color, fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase' }}>{meta.label}</span>
                    </div>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Practice Questions */}
        {card.practiceQuestions && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h2 className="font-cinzel" style={{ color: 'var(--gold)', marginBottom: '1.5rem', letterSpacing: 2, textAlign: 'center' }}>
              ✦ Practice Questions ✦
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {display.practiceQuestions.map((pq, i) => (
                <div key={i} className="glass-card" style={{ overflow: 'hidden' }}>
                  <button
                    onClick={() => setActiveQ(activeQ === i ? null : i)}
                    style={{
                      width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                      padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      color: 'var(--text-light)', textAlign: 'left',
                    }}
                  >
                    <span style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', color: activeQ === i ? 'var(--gold)' : 'var(--text-light)' }}>
                      Q{i + 1}: {pq.q}
                    </span>
                    <span style={{ color: 'var(--gold)', fontSize: '1.2rem', transition: 'transform 0.3s', transform: activeQ === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </button>
                  {activeQ === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      style={{ padding: '0 1.5rem 1.25rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                      <p style={{ color: 'rgba(232,213,183,0.85)', lineHeight: 1.8, fontSize: '0.95rem', paddingTop: '1rem' }}>
                        <span style={{ color: 'var(--gold)' }}>A: </span>{pq.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
          {parseInt(id) > 0 && (
            <Link to={`/cards/${parseInt(id) - 1}`}><button className="btn-mystical">← Previous Card</button></Link>
          )}
          {parseInt(id) < 77 && (
            <Link to={`/cards/${parseInt(id) + 1}`} style={{ marginLeft: 'auto' }}><button className="btn-mystical">Next Card →</button></Link>
          )}
        </div>
      </div>
    </div>
  );
}
