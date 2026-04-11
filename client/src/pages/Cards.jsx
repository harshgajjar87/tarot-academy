import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import allCardsArray from '../data/allCards';


// Only these card IDs are accessible to regular users
const UNLOCKED_IDS = new Set([0, 22, 36, 50, 64]); // The Fool + all 4 Aces

const ADMIN_USER = import.meta.env.VITE_ADMIN_USER;
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS;

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [lockedModal, setLockedModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminError, setAdminError] = useState('');
  const [isAdmin, setIsAdmin] = useState(() => sessionStorage.getItem('tarot_admin') === 'true');

  const handleAdminLogin = () => {
    if (adminUser === ADMIN_USER && adminPass === ADMIN_PASS) {
      sessionStorage.setItem('tarot_admin', 'true');
      setIsAdmin(true);
      setAdminModal(false);
      setAdminError('');
      setAdminUser('');
      setAdminPass('');
    } else {
      setAdminError('Invalid credentials. Try again.');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('tarot_admin');
    setIsAdmin(false);
  };

  useEffect(() => {
    // Use local fallback directly — server only has Major Arcana for now
    setCards(allCardsArray);
  }, []);

  const filtered = cards.filter(c => {
    let matchFilter = false;
    if (filter === 'All') matchFilter = true;
    else if (filter === 'Major') matchFilter = c.arcana === 'Major';
    else matchFilter = c.suit === filter;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🃏</div>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            The 78 Sacred Cards
          </h1>
          <p style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', letterSpacing: 3, fontSize: '0.85rem' }}>
            RIDER-WAITE TAROT COMPLETE GUIDE
          </p>
          <div className="divider-gold" />
          {/* Admin toggle */}
          <div style={{ marginTop: '0.75rem' }}>
            {isAdmin ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontFamily: 'Cinzel', fontSize: '0.75rem', color: '#2ecc71', letterSpacing: 1 }}>
                  ✓ Admin Mode — All 78 cards unlocked
                </span>
                <button onClick={handleAdminLogout} style={{
                  background: 'none', border: '1px solid rgba(231,76,60,0.5)', borderRadius: 20,
                  padding: '3px 12px', color: 'rgba(231,76,60,0.8)', fontFamily: 'Cinzel',
                  fontSize: '0.7rem', cursor: 'pointer', letterSpacing: 1,
                }}>Logout</button>
              </div>
            ) : (
              <button onClick={() => { setAdminModal(true); setAdminError(''); }} style={{
                background: 'none', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20,
                padding: '5px 16px', color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel',
                fontSize: '0.72rem', cursor: 'pointer', letterSpacing: 1,
              }}>🔑 Admin Login</button>
            )}
          </div>
        </motion.div>

        {/* Filters */}
        <div className="filters-row" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[
            { key: 'All', label: 'All 78' },
            { key: 'Major', label: 'Major Arcana' },
            { key: 'Wands', label: '🔥 Wands' },
            { key: 'Cups', label: '💧 Cups' },
            { key: 'Swords', label: '💨 Swords' },
            { key: 'Pentacles', label: '🌿 Pentacles' },
          ].map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} className="btn-mystical"
              style={{ opacity: filter === f.key ? 1 : 0.5, transform: filter === f.key ? 'scale(1.05)' : 'scale(1)', fontSize: '0.8rem', padding: '8px 16px' }}>
              {f.label}
            </button>
          ))}
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search cards..."
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: 50, padding: '10px 20px', color: 'var(--text-light)',
              fontFamily: 'Cinzel', fontSize: '0.85rem', outline: 'none', minWidth: 200,
            }}
          />
        </div>

        {/* Card Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((card, i) => {
            const isUnlocked = isAdmin || UNLOCKED_IDS.has(card.id);
            return (
              <motion.div key={card.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                {isUnlocked ? (
                  <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
                    <div className="tarot-card-3d glass-card card-glow" style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                      <div style={{ position: 'relative', paddingTop: '140%', overflow: 'hidden' }}>
                        <img src={card.image} alt={card.name}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          onError={e => { e.target.src = 'https://via.placeholder.com/200x280/1a0035/c9a84c?text=' + encodeURIComponent(card.name); }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,0,32,0.9) 0%, transparent 50%)' }} />
                        <div style={{ position: 'absolute', top: 8, left: 8 }}>
                          <span className="font-cinzel" style={{ background: 'rgba(201,168,76,0.2)', border: '1px solid var(--gold)', borderRadius: 20, padding: '2px 10px', fontSize: '0.75rem', color: 'var(--gold)' }}>{card.number}</span>
                        </div>
                        {/* Free badge */}
                        <div style={{ position: 'absolute', top: 8, right: 8 }}>
                          <span style={{ background: 'rgba(46,204,113,0.25)', border: '1px solid #2ecc71', borderRadius: 20, padding: '2px 8px', fontSize: '0.65rem', color: '#2ecc71', fontFamily: 'Cinzel' }}>FREE</span>
                        </div>
                      </div>
                      <div style={{ padding: '1rem' }}>
                        <h3 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: 1 }}>{card.name}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                          {(card.keywords || []).slice(0, 2).map((k, j) => (
                            <span key={j} style={{ fontSize: '0.7rem', color: 'rgba(240,230,208,0.85)', background: 'rgba(201,168,76,0.1)', borderRadius: 10, padding: '2px 8px' }}>{k}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div onClick={() => setLockedModal(true)} style={{ cursor: 'pointer' }}>
                    <div className="glass-card" style={{ overflow: 'hidden', position: 'relative', opacity: 0.6 }}>
                      <div style={{ position: 'relative', paddingTop: '140%', overflow: 'hidden' }}>
                        <img src={card.image} alt={card.name}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(3px) brightness(0.4)' }}
                          onError={e => { e.target.src = 'https://via.placeholder.com/200x280/1a0035/c9a84c?text=' + encodeURIComponent(card.name); }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,0,32,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.4rem' }}>
                          <span style={{ fontSize: '1.8rem' }}>🔒</span>
                          <span style={{ fontFamily: 'Cinzel', fontSize: '0.65rem', color: 'rgba(201,168,76,0.7)', letterSpacing: 1 }}>ADMIN ONLY</span>
                        </div>
                        <div style={{ position: 'absolute', top: 8, left: 8 }}>
                          <span className="font-cinzel" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '2px 10px', fontSize: '0.75rem', color: 'rgba(201,168,76,0.5)' }}>{card.number}</span>
                        </div>
                      </div>
                      <div style={{ padding: '1rem' }}>
                        <h3 className="font-cinzel" style={{ color: 'rgba(201,168,76,0.4)', fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: 1 }}>{card.name}</h3>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(232,213,183,0.3)' }}>Admin access required</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Locked modal */}
        {lockedModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
            onClick={() => setLockedModal(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              className="glass-card" style={{ maxWidth: 420, width: '100%', padding: '2.5rem', textAlign: 'center' }}
              onClick={e => e.stopPropagation()}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: 2, marginBottom: '1rem' }}>Admin Access Only</h3>
              <p style={{ color: 'rgba(232,213,183,0.7)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                This card's full reading is reserved for admin access. 
                Explore <strong style={{ color: 'var(--gold)' }}>The Fool</strong>, <strong style={{ color: 'var(--gold)' }}>Ace of Wands</strong>, <strong style={{ color: 'var(--gold)' }}>Ace of Cups</strong>, <strong style={{ color: 'var(--gold)' }}>Ace of Swords</strong>, and <strong style={{ color: 'var(--gold)' }}>Ace of Pentacles</strong> — available free for everyone.
              </p>
              <button className="btn-mystical" onClick={() => setLockedModal(false)}>Close</button>
            </motion.div>
          </div>
        )}

        {/* Admin login modal */}
        {adminModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
            onClick={() => setAdminModal(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              className="glass-card" style={{ maxWidth: 400, width: '100%', padding: '2.5rem' }}
              onClick={e => e.stopPropagation()}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔑</div>
                <h3 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: 2 }}>Admin Login</h3>
                <p style={{ color: 'rgba(232,213,183,0.5)', fontSize: '0.8rem', marginTop: '0.4rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>
                  Enter credentials to unlock all 78 cards
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ fontFamily: 'Cinzel', fontSize: '0.72rem', color: 'rgba(201,168,76,0.6)', letterSpacing: 1, display: 'block', marginBottom: '0.4rem' }}>USERNAME</label>
                  <input
                    type="text"
                    value={adminUser}
                    onChange={e => setAdminUser(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAdminLogin()}
                    placeholder="Enter username"
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,168,76,0.3)', borderRadius: 8,
                      padding: '10px 14px', color: 'var(--text-light)',
                      fontFamily: 'Cinzel', fontSize: '0.85rem', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Cinzel', fontSize: '0.72rem', color: 'rgba(201,168,76,0.6)', letterSpacing: 1, display: 'block', marginBottom: '0.4rem' }}>PASSWORD</label>
                  <input
                    type="password"
                    value={adminPass}
                    onChange={e => setAdminPass(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAdminLogin()}
                    placeholder="Enter password"
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,168,76,0.3)', borderRadius: 8,
                      padding: '10px 14px', color: 'var(--text-light)',
                      fontFamily: 'Cinzel', fontSize: '0.85rem', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                {adminError && (
                  <p style={{ color: '#e74c3c', fontSize: '0.8rem', fontFamily: 'Cinzel', textAlign: 'center', margin: 0 }}>
                    ✗ {adminError}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn-mystical" onClick={handleAdminLogin} style={{ flex: 1, justifyContent: 'center' }}>
                  Unlock All Cards
                </button>
                <button onClick={() => setAdminModal(false)} style={{
                  background: 'none', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8,
                  padding: '10px 16px', color: 'rgba(201,168,76,0.4)', fontFamily: 'Cinzel',
                  fontSize: '0.8rem', cursor: 'pointer',
                }}>Cancel</button>
              </div>
            </motion.div>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(232,213,183,0.5)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p className="font-cinzel">No cards found</p>
          </div>
        )}
      </div>
    </div>
  );
}
