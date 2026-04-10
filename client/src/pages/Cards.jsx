import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

// Fallback local data — all 78 cards
const fallbackCards = [
  // Major Arcana (0–21)
  { id: 0, name: "The Fool", number: "0", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", keywords: ["New beginnings", "Innocence", "Leap of faith"] },
  { id: 1, name: "The Magician", number: "I", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", keywords: ["Willpower", "Manifestation", "Skill"] },
  { id: 2, name: "The High Priestess", number: "II", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", keywords: ["Intuition", "Mystery", "Inner knowing"] },
  { id: 3, name: "The Empress", number: "III", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", keywords: ["Fertility", "Abundance", "Nurturing"] },
  { id: 4, name: "The Emperor", number: "IV", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", keywords: ["Authority", "Structure", "Leadership"] },
  { id: 5, name: "The Hierophant", number: "V", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", keywords: ["Tradition", "Spiritual guidance", "Institutions"] },
  { id: 6, name: "The Lovers", number: "VI", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", keywords: ["Love", "Union", "Choices"] },
  { id: 7, name: "The Chariot", number: "VII", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", keywords: ["Victory", "Control", "Willpower"] },
  { id: 8, name: "Strength", number: "VIII", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/RWS_Tarot_08_Strength.jpg", keywords: ["Inner strength", "Courage", "Compassion"] },
  { id: 9, name: "The Hermit", number: "IX", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", keywords: ["Solitude", "Inner guidance", "Wisdom"] },
  { id: 10, name: "Wheel of Fortune", number: "X", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", keywords: ["Cycles", "Fate", "Luck"] },
  { id: 11, name: "Justice", number: "XI", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", keywords: ["Fairness", "Truth", "Law"] },
  { id: 12, name: "The Hanged Man", number: "XII", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", keywords: ["Surrender", "Pause", "New perspective"] },
  { id: 13, name: "Death", number: "XIII", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", keywords: ["Transformation", "Endings", "Change"] },
  { id: 14, name: "Temperance", number: "XIV", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", keywords: ["Balance", "Moderation", "Patience"] },
  { id: 15, name: "The Devil", number: "XV", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", keywords: ["Shadow self", "Addiction", "Bondage"] },
  { id: 16, name: "The Tower", number: "XVI", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", keywords: ["Upheaval", "Revelation", "Chaos"] },
  { id: 17, name: "The Star", number: "XVII", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", keywords: ["Hope", "Renewal", "Inspiration"] },
  { id: 18, name: "The Moon", number: "XVIII", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", keywords: ["Illusion", "Subconscious", "Confusion"] },
  { id: 19, name: "The Sun", number: "XIX", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", keywords: ["Joy", "Success", "Vitality"] },
  { id: 20, name: "Judgement", number: "XX", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", keywords: ["Awakening", "Rebirth", "Calling"] },
  { id: 21, name: "The World", number: "XXI", arcana: "Major", suit: null, image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", keywords: ["Completion", "Wholeness", "Integration"] },
  // Minor Arcana — Wands (22–35)
  { id: 22, name: "Ace of Wands", number: "Ace", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg", keywords: ["Inspiration", "New venture", "Spark"] },
  { id: 23, name: "Two of Wands", number: "2", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg", keywords: ["Planning", "Future vision", "Discovery"] },
  { id: 24, name: "Three of Wands", number: "3", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg", keywords: ["Expansion", "Foresight", "Progress"] },
  { id: 25, name: "Four of Wands", number: "4", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg", keywords: ["Celebration", "Harmony", "Homecoming"] },
  { id: 26, name: "Five of Wands", number: "5", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg", keywords: ["Conflict", "Competition", "Tension"] },
  { id: 27, name: "Six of Wands", number: "6", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg", keywords: ["Victory", "Recognition", "Success"] },
  { id: 28, name: "Seven of Wands", number: "7", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg", keywords: ["Perseverance", "Defense", "Challenge"] },
  { id: 29, name: "Eight of Wands", number: "8", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg", keywords: ["Speed", "Action", "Movement"] },
  { id: 30, name: "Nine of Wands", number: "9", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg", keywords: ["Resilience", "Persistence", "Last stand"] },
  { id: 31, name: "Ten of Wands", number: "10", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg", keywords: ["Burden", "Responsibility", "Overwhelm"] },
  { id: 32, name: "Page of Wands", number: "Page", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg", keywords: ["Enthusiasm", "Exploration", "Free spirit"] },
  { id: 33, name: "Knight of Wands", number: "Knight", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg", keywords: ["Energy", "Passion", "Adventure"] },
  { id: 34, name: "Queen of Wands", number: "Queen", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg", keywords: ["Confidence", "Determination", "Charisma"] },
  { id: 35, name: "King of Wands", number: "King", arcana: "Minor", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg", keywords: ["Leadership", "Vision", "Entrepreneur"] },
  // Minor Arcana — Cups (36–49)
  { id: 36, name: "Ace of Cups", number: "Ace", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg", keywords: ["New love", "Intuition", "Emotional opening"] },
  { id: 37, name: "Two of Cups", number: "2", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg", keywords: ["Partnership", "Attraction", "Connection"] },
  { id: 38, name: "Three of Cups", number: "3", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg", keywords: ["Celebration", "Friendship", "Community"] },
  { id: 39, name: "Four of Cups", number: "4", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg", keywords: ["Apathy", "Contemplation", "Discontent"] },
  { id: 40, name: "Five of Cups", number: "5", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg", keywords: ["Loss", "Grief", "Regret"] },
  { id: 41, name: "Six of Cups", number: "6", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg", keywords: ["Nostalgia", "Innocence", "Reunion"] },
  { id: 42, name: "Seven of Cups", number: "7", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg", keywords: ["Illusion", "Fantasy", "Choices"] },
  { id: 43, name: "Eight of Cups", number: "8", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg", keywords: ["Abandonment", "Withdrawal", "Seeking more"] },
  { id: 44, name: "Nine of Cups", number: "9", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg", keywords: ["Contentment", "Satisfaction", "Wish fulfilled"] },
  { id: 45, name: "Ten of Cups", number: "10", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg", keywords: ["Harmony", "Family", "Emotional fulfillment"] },
  { id: 46, name: "Page of Cups", number: "Page", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg", keywords: ["Creativity", "Intuition", "Sensitivity"] },
  { id: 47, name: "Knight of Cups", number: "Knight", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg", keywords: ["Romance", "Charm", "Imagination"] },
  { id: 48, name: "Queen of Cups", number: "Queen", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg", keywords: ["Compassion", "Empathy", "Nurturing"] },
  { id: 49, name: "King of Cups", number: "King", arcana: "Minor", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg", keywords: ["Emotional balance", "Diplomacy", "Wisdom"] },
  // Minor Arcana — Swords (50–63)
  { id: 50, name: "Ace of Swords", number: "Ace", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg", keywords: ["Clarity", "Truth", "Breakthrough"] },
  { id: 51, name: "Two of Swords", number: "2", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg", keywords: ["Indecision", "Stalemate", "Blocked emotions"] },
  { id: 52, name: "Three of Swords", number: "3", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg", keywords: ["Heartbreak", "Grief", "Sorrow"] },
  { id: 53, name: "Four of Swords", number: "4", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg", keywords: ["Rest", "Recovery", "Contemplation"] },
  { id: 54, name: "Five of Swords", number: "5", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg", keywords: ["Conflict", "Defeat", "Hollow victory"] },
  { id: 55, name: "Six of Swords", number: "6", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg", keywords: ["Transition", "Moving on", "Calmer waters"] },
  { id: 56, name: "Seven of Swords", number: "7", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg", keywords: ["Deception", "Strategy", "Stealth"] },
  { id: 57, name: "Eight of Swords", number: "8", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg", keywords: ["Restriction", "Trapped", "Victim mentality"] },
  { id: 58, name: "Nine of Swords", number: "9", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg", keywords: ["Anxiety", "Nightmares", "Despair"] },
  { id: 59, name: "Ten of Swords", number: "10", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg", keywords: ["Painful ending", "Betrayal", "Rock bottom"] },
  { id: 60, name: "Page of Swords", number: "Page", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg", keywords: ["Curiosity", "Vigilance", "Mental agility"] },
  { id: 61, name: "Knight of Swords", number: "Knight", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg", keywords: ["Ambition", "Action", "Impulsiveness"] },
  { id: 62, name: "Queen of Swords", number: "Queen", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg", keywords: ["Independence", "Clarity", "Direct communication"] },
  { id: 63, name: "King of Swords", number: "King", arcana: "Minor", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg", keywords: ["Authority", "Truth", "Intellectual power"] },
  // Minor Arcana — Pentacles (64–77)
  { id: 64, name: "Ace of Pentacles", number: "Ace", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg", keywords: ["Opportunity", "Prosperity", "New financial start"] },
  { id: 65, name: "Two of Pentacles", number: "2", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg", keywords: ["Balance", "Adaptability", "Juggling priorities"] },
  { id: 66, name: "Three of Pentacles", number: "3", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg", keywords: ["Teamwork", "Skill", "Craftsmanship"] },
  { id: 67, name: "Four of Pentacles", number: "4", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg", keywords: ["Security", "Control", "Possessiveness"] },
  { id: 68, name: "Five of Pentacles", number: "5", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg", keywords: ["Hardship", "Poverty", "Isolation"] },
  { id: 69, name: "Six of Pentacles", number: "6", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg", keywords: ["Generosity", "Charity", "Giving and receiving"] },
  { id: 70, name: "Seven of Pentacles", number: "7", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg", keywords: ["Patience", "Investment", "Long-term vision"] },
  { id: 71, name: "Eight of Pentacles", number: "8", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg", keywords: ["Diligence", "Mastery", "Skill development"] },
  { id: 72, name: "Nine of Pentacles", number: "9", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg", keywords: ["Abundance", "Independence", "Self-sufficiency"] },
  { id: 73, name: "Ten of Pentacles", number: "10", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg", keywords: ["Legacy", "Family wealth", "Long-term success"] },
  { id: 74, name: "Page of Pentacles", number: "Page", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg", keywords: ["Ambition", "Diligence", "New skills"] },
  { id: 75, name: "Knight of Pentacles", number: "Knight", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg", keywords: ["Reliability", "Hard work", "Patience"] },
  { id: 76, name: "Queen of Pentacles", number: "Queen", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg", keywords: ["Nurturing", "Practicality", "Financial security"] },
  { id: 77, name: "King of Pentacles", number: "King", arcana: "Minor", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg", keywords: ["Wealth", "Business", "Abundance"] },
];

// Only these card IDs are accessible to regular users
const UNLOCKED_IDS = new Set([0, 36]); // The Fool, Ace of Cups

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
    axios.get(`${import.meta.env.VITE_API_URL}/api/tarot/cards`)
      .then(r => setCards(r.data))
      .catch(() => setCards(fallbackCards));
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
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
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
                            <span key={j} style={{ fontSize: '0.7rem', color: 'rgba(232,213,183,0.6)', background: 'rgba(201,168,76,0.1)', borderRadius: 10, padding: '2px 8px' }}>{k}</span>
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
                Explore <strong style={{ color: 'var(--gold)' }}>The Fool</strong> and <strong style={{ color: 'var(--gold)' }}>Ace of Cups</strong> — available free for everyone.
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
