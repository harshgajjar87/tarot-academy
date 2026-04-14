import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DECK = [
  { id: 0, name: "The Fool", number: "0", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", keywords: "New beginnings, leap of faith" },
  { id: 1, name: "The Magician", number: "I", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", keywords: "Willpower, manifestation" },
  { id: 2, name: "The High Priestess", number: "II", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", keywords: "Intuition, mystery" },
  { id: 3, name: "The Empress", number: "III", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", keywords: "Fertility, abundance" },
  { id: 4, name: "The Emperor", number: "IV", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", keywords: "Authority, structure" },
  { id: 5, name: "The Hierophant", number: "V", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", keywords: "Tradition, guidance" },
  { id: 6, name: "The Lovers", number: "VI", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", keywords: "Love, choices" },
  { id: 7, name: "The Chariot", number: "VII", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", keywords: "Victory, willpower" },
  { id: 8, name: "Strength", number: "VIII", image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/RWS_Tarot_08_Strength.jpg", keywords: "Inner strength, courage" },
  { id: 9, name: "The Hermit", number: "IX", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", keywords: "Solitude, wisdom" },
  { id: 10, name: "Wheel of Fortune", number: "X", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", keywords: "Cycles, fate" },
  { id: 11, name: "Justice", number: "XI", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", keywords: "Fairness, truth" },
  { id: 12, name: "The Hanged Man", number: "XII", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", keywords: "Surrender, new perspective" },
  { id: 13, name: "Death", number: "XIII", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", keywords: "Transformation, endings" },
  { id: 14, name: "Temperance", number: "XIV", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", keywords: "Balance, moderation" },
  { id: 15, name: "The Devil", number: "XV", image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", keywords: "Shadow self, bondage" },
  { id: 16, name: "The Tower", number: "XVI", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", keywords: "Upheaval, revelation" },
  { id: 17, name: "The Star", number: "XVII", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", keywords: "Hope, renewal" },
  { id: 18, name: "The Moon", number: "XVIII", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", keywords: "Illusion, subconscious" },
  { id: 19, name: "The Sun", number: "XIX", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", keywords: "Joy, success" },
  { id: 20, name: "Judgement", number: "XX", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", keywords: "Awakening, rebirth" },
  { id: 21, name: "The World", number: "XXI", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", keywords: "Completion, wholeness" },

  // Wands
  { id: 22, name: "Ace of Wands", number: "Ace", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg", keywords: "New spark, inspiration, potential" },
  { id: 23, name: "Two of Wands", number: "II", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg", keywords: "Planning, future vision, boldness" },
  { id: 24, name: "Three of Wands", number: "III", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg", keywords: "Expansion, foresight, progress" },
  { id: 25, name: "Four of Wands", number: "IV", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg", keywords: "Celebration, harmony, homecoming" },
  { id: 26, name: "Five of Wands", number: "V", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg", keywords: "Conflict, competition, tension" },
  { id: 27, name: "Six of Wands", number: "VI", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg", keywords: "Victory, recognition, confidence" },
  { id: 28, name: "Seven of Wands", number: "VII", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg", keywords: "Perseverance, defense, challenge" },
  { id: 29, name: "Eight of Wands", number: "VIII", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg", keywords: "Speed, movement, swift action" },
  { id: 30, name: "Nine of Wands", number: "IX", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg", keywords: "Resilience, persistence, last stand" },
  { id: 31, name: "Ten of Wands", number: "X", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg", keywords: "Burden, overcommitment, responsibility" },
  { id: 32, name: "Page of Wands", number: "Page", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Wands11.jpg", keywords: "Enthusiasm, exploration, free spirit" },
  { id: 33, name: "Knight of Wands", number: "Knight", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg", keywords: "Action, adventure, impulsiveness" },
  { id: 34, name: "Queen of Wands", number: "Queen", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Wands13.jpg", keywords: "Confidence, independence, charisma" },
  { id: 35, name: "King of Wands", number: "King", suit: "Wands", image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg", keywords: "Leadership, vision, entrepreneur" },

  // Cups
  { id: 36, name: "Ace of Cups", number: "Ace", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg", keywords: "New love, emotional opening, intuition" },
  { id: 37, name: "Two of Cups", number: "II", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg", keywords: "Partnership, attraction, union" },
  { id: 38, name: "Three of Cups", number: "III", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg", keywords: "Friendship, celebration, community" },
  { id: 39, name: "Four of Cups", number: "IV", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg", keywords: "Apathy, contemplation, missed opportunity" },
  { id: 40, name: "Five of Cups", number: "V", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg", keywords: "Loss, grief, regret" },
  { id: 41, name: "Six of Cups", number: "VI", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg", keywords: "Nostalgia, innocence, childhood" },
  { id: 42, name: "Seven of Cups", number: "VII", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg", keywords: "Illusion, fantasy, choices" },
  { id: 43, name: "Eight of Cups", number: "VIII", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg", keywords: "Withdrawal, moving on, seeking more" },
  { id: 44, name: "Nine of Cups", number: "IX", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg", keywords: "Contentment, satisfaction, wish fulfilled" },
  { id: 45, name: "Ten of Cups", number: "X", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg", keywords: "Harmony, joy, family bliss" },
  { id: 46, name: "Page of Cups", number: "Page", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg", keywords: "Creativity, intuition, dreamer" },
  { id: 47, name: "Knight of Cups", number: "Knight", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg", keywords: "Romance, charm, following the heart" },
  { id: 48, name: "Queen of Cups", number: "Queen", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg", keywords: "Compassion, empathy, emotional depth" },
  { id: 49, name: "King of Cups", number: "King", suit: "Cups", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg", keywords: "Emotional balance, wisdom, diplomacy" },

  // Swords
  { id: 50, name: "Ace of Swords", number: "Ace", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg", keywords: "Clarity, truth, breakthrough" },
  { id: 51, name: "Two of Swords", number: "II", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg", keywords: "Indecision, stalemate, blocked emotions" },
  { id: 52, name: "Three of Swords", number: "III", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg", keywords: "Heartbreak, sorrow, grief" },
  { id: 53, name: "Four of Swords", number: "IV", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg", keywords: "Rest, recovery, contemplation" },
  { id: 54, name: "Five of Swords", number: "V", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg", keywords: "Conflict, defeat, hollow victory" },
  { id: 55, name: "Six of Swords", number: "VI", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg", keywords: "Transition, moving on, calmer waters" },
  { id: 56, name: "Seven of Swords", number: "VII", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg", keywords: "Deception, strategy, stealth" },
  { id: 57, name: "Eight of Swords", number: "VIII", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg", keywords: "Restriction, self-imprisonment, powerlessness" },
  { id: 58, name: "Nine of Swords", number: "IX", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg", keywords: "Anxiety, nightmares, despair" },
  { id: 59, name: "Ten of Swords", number: "X", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg", keywords: "Painful ending, betrayal, rock bottom" },
  { id: 60, name: "Page of Swords", number: "Page", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg", keywords: "Curiosity, vigilance, mental agility" },
  { id: 61, name: "Knight of Swords", number: "Knight", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg", keywords: "Ambition, action, blunt truth" },
  { id: 62, name: "Queen of Swords", number: "Queen", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg", keywords: "Independence, sharp mind, clear boundaries" },
  { id: 63, name: "King of Swords", number: "King", suit: "Swords", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg", keywords: "Authority, intellect, ethical judgment" },

  // Pentacles
  { id: 64, name: "Ace of Pentacles", number: "Ace", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg", keywords: "New opportunity, prosperity, manifestation" },
  { id: 65, name: "Two of Pentacles", number: "II", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg", keywords: "Balance, adaptability, juggling priorities" },
  { id: 66, name: "Three of Pentacles", number: "III", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg", keywords: "Teamwork, skill, collaboration" },
  { id: 67, name: "Four of Pentacles", number: "IV", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg", keywords: "Security, control, possessiveness" },
  { id: 68, name: "Five of Pentacles", number: "V", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg", keywords: "Hardship, poverty, isolation" },
  { id: 69, name: "Six of Pentacles", number: "VI", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg", keywords: "Generosity, charity, giving and receiving" },
  { id: 70, name: "Seven of Pentacles", number: "VII", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg", keywords: "Patience, investment, long-term vision" },
  { id: 71, name: "Eight of Pentacles", number: "VIII", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg", keywords: "Diligence, mastery, craftsmanship" },
  { id: 72, name: "Nine of Pentacles", number: "IX", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg", keywords: "Abundance, self-sufficiency, luxury" },
  { id: 73, name: "Ten of Pentacles", number: "X", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg", keywords: "Legacy, wealth, family stability" },
  { id: 74, name: "Page of Pentacles", number: "Page", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg", keywords: "Ambition, diligence, new skills" },
  { id: 75, name: "Knight of Pentacles", number: "Knight", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg", keywords: "Reliability, hard work, methodical" },
  { id: 76, name: "Queen of Pentacles", number: "Queen", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg", keywords: "Nurturing, practicality, financial security" },
  { id: 77, name: "King of Pentacles", number: "King", suit: "Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg", keywords: "Wealth, abundance, business mastery" },
];

const SPREADS = [
  {
    id: 'single', name: 'Single Card', subtitle: 'Daily Guidance', icon: '✦', color: '#c9a84c', cardCount: 1,
    description: 'One card drawn for a quick daily message or a single focus area.',
    positions: [{ label: 'Your Message', desc: 'The energy, lesson, or guidance for today or your question.' }],
    usedFor: 'Daily check-in, single focus meditation'
  },
  {
    id: 'two-card', name: 'Two Card Spread', subtitle: 'Situation & Advice', icon: '⚖', color: '#e67e22', cardCount: 2,
    description: 'Two cards revealing the current situation and the guidance or action to take.',
    positions: [
      { label: 'Situation', desc: 'What is happening right now — the core energy.' },
      { label: 'Advice', desc: 'What the cards advise you to do or consider.' }
    ],
    usedFor: 'Quick decisions, problem and solution'
  },
  {
    id: 'past-present-future', name: 'Past · Present · Future', subtitle: '3-Card Timeline', icon: '⊕', color: '#9b59b6', cardCount: 3,
    description: 'Three cards reveal the timeline — where you came from, where you are, and where you are heading.',
    positions: [
      { label: 'Past', desc: 'What has already happened that influences this situation.' },
      { label: 'Present', desc: 'The current energy, challenge, or opportunity right now.' },
      { label: 'Future', desc: 'The likely outcome if you continue on this path.' }
    ],
    usedFor: 'Relationships, career decisions, general life questions'
  },
  {
    id: 'lovers', name: 'Lovers Spread', subtitle: 'Love & Relationship — 5 Cards', icon: '💕', color: '#e91e63', cardCount: 5,
    description: 'Five cards exploring the heart of a relationship — your energy, their energy, the connection, the challenge, and the path forward.',
    positions: [
      { label: 'You', desc: 'Your energy, feelings, and role in this relationship.' },
      { label: 'Them', desc: 'Their energy, feelings, and role in this relationship.' },
      { label: 'Current Energy', desc: 'What connects you — the heart of the relationship.' },
      { label: 'The Challenge', desc: 'The main obstacle or tension between you.' },
      { label: 'Guidence', desc: 'Where this relationship is heading and what to do.' }
    ],
    usedFor: 'Romantic relationships, new love, deepening connection'
  },
  {
    id: 'yearly', name: 'Yearly Spread', subtitle: '12 Cards — Full Year Overview', icon: '🌟', color: '#3498db', cardCount: 12,
    description: 'Twelve cards covering the full year: health for each half-year, career, relationships, and guidance for both halves.',
    positions: [
      { label: 'Health — Jan to Jun', desc: 'Your health energy for the first six months.' },
      { label: 'Health — Jul to Dec', desc: 'Your health energy for the second six months.' },
      { label: 'Career — Jan to Jun', desc: 'Career energy and opportunities in the first half.' },
      { label: 'Career — Jul to Dec', desc: 'Career energy and opportunities in the second half.' },
      { label: 'Relationship — Jan to Jun', desc: 'Relationship energy in the first half.' },
      { label: 'Relationship — Jul to Dec', desc: 'Relationship energy in the second half.' },
      { label: 'Guidance — Jan to Jun', desc: 'Spiritual guidance for the first six months.' },
      { label: 'Guidance — Jul to Dec', desc: 'Spiritual guidance for the second six months.' },
      { label: 'Theme of the Year', desc: 'The overarching energy and lesson of the entire year.' },
      { label: 'Challenge of the Year', desc: 'The main obstacle or growth area for the year.' },
      { label: 'Opportunity of the Year', desc: 'The greatest opportunity available to you this year.' },
      { label: 'Final Outcome', desc: 'Where the year leads you — the ultimate resolution.' }
    ],
    usedFor: 'New Year readings, annual planning, life overview'
  },
  {
    id: 'celtic-cross', name: 'Celtic Cross', subtitle: 'The Classic 10-Card Spread', icon: '✝', color: '#c9a84c', cardCount: 10,
    description: 'Ten cards reveal every dimension of a situation — the core issue, hidden influences, hopes, fears, and final outcome.',
    positions: [
      { label: 'Present Situation', desc: 'The heart of the matter — what is happening right now.' },
      { label: 'The Challenge', desc: 'What crosses you — the obstacle or complicating factor.' },
      { label: 'Distant Past', desc: 'The foundation — what happened long ago that still affects this.' },
      { label: 'Recent Past', desc: 'What has just passed and is still influencing the situation.' },
      { label: 'Best Outcome', desc: 'The best possible outcome if things go well.' },
      { label: 'Near Future', desc: 'What is coming in the near future.' },
      { label: 'Your Attitude', desc: 'How you see yourself in this situation.' },
      { label: 'External Influences', desc: 'How others and the environment affect this.' },
      { label: 'Hopes & Fears', desc: 'What you hope for — and what you fear.' },
      { label: 'Final Outcome', desc: 'The ultimate resolution of the situation.' }
    ],
    usedFor: 'Deep life questions, complex situations, full readings'
  },
];

// Flip card — bigger size, NO yes/no/not sure anywhere
function TarotFlipCard({ card, position, isRevealed, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', width: 220 }}
      onClick={onClick}
    >
      <span style={{
        fontFamily: 'Cinzel, serif', fontSize: '0.75rem', color: 'rgba(201,168,76,0.75)',
        letterSpacing: 1, textTransform: 'uppercase', textAlign: 'center', maxWidth: 220, lineHeight: 1.3
      }}>{position.label}</span>

      <div className="spread-card-wrap" style={{ width: 220, height: 340, perspective: 1000 }}>
        <motion.div
          animate={{ rotateY: isRevealed ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
          className="spread-card-inner"
        >
          {/* Card Back */}
          <div style={{
            position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            borderRadius: 10, background: 'linear-gradient(135deg, #1a0035, #0d0020)',
            border: '2px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(201,168,76,0.2)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✦</div>
              <div style={{ width: 60, height: 1, background: 'rgba(201,168,76,0.4)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '0.7rem', color: 'rgba(201,168,76,0.5)', fontFamily: 'Cinzel', letterSpacing: 2 }}>TAROT</div>
            </div>
          </div>

          {/* Card Front */}
          <div style={{
            position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)', borderRadius: 10, overflow: 'hidden',
            border: '2px solid rgba(201,168,76,0.6)', boxShadow: '0 0 25px rgba(201,168,76,0.4)',
          }}>
            {card && (
              <img src={card.image} alt={card.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.src = `https://via.placeholder.com/220x340/1a0035/c9a84c?text=${encodeURIComponent(card?.name || '?')}`; }} />
            )}
          </div>
        </motion.div>
      </div>

      {/* Card name + keywords + position desc after reveal */}
      <AnimatePresence>
        {isRevealed && card && (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', maxWidth: 220 }}>
            <div style={{ fontFamily: 'Cinzel', fontSize: '0.8rem', color: 'var(--gold)', lineHeight: 1.4 }}>{card.name}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(232,213,183,0.55)', marginTop: '0.2rem' }}>{card.keywords}</div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(232,213,183,0.75)', marginTop: '0.5rem', lineHeight: 1.6, fontStyle: 'italic' }}>{position.desc}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Reading result panel — no yes/no anywhere
function ReadingResult({ spread, drawnCards, onReset }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
        {spread.positions.map((pos, i) => {
          const card = drawnCards[i];
          const isActive = activeCard === i;
          return (
            <motion.div key={i} whileHover={{ y: -3 }}
              className="glass-card"
              style={{ padding: '1.25rem', cursor: 'pointer', borderColor: isActive ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.15)' }}
              onClick={() => setActiveCard(isActive ? null : i)}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 55, height: 85, borderRadius: 6, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(201,168,76,0.4)' }}>
                  <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.src = `https://via.placeholder.com/55x85/1a0035/c9a84c?text=?`; }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Cinzel', fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', letterSpacing: 1, marginBottom: '0.2rem' }}>{pos.label}</div>
                  <div style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '0.3rem' }}>{card.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(232,213,183,0.6)' }}>{card.keywords}</div>
                </div>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(232,213,183,0.85)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--gold)' }}>Position: </span>{pos.desc}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(232,213,183,0.7)', lineHeight: 1.7, marginTop: '0.5rem' }}>
                      <span style={{ color: 'var(--gold)' }}>Card energy: </span>
                      {card.name} brings {card.keywords.toLowerCase()}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn-mystical" onClick={onReset}>✦ New Reading</button>
      </div>
    </motion.div>
  );
}

function SpreadReading({ spread, onBack }) {
  const [drawnCards, setDrawnCards] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [allRevealed, setAllRevealed] = useState(false);
  const [shuffling, setShuffling] = useState(false);

  const drawCards = () => {
    setShuffling(true);
    setTimeout(() => {
      const shuffled = [...DECK].sort(() => Math.random() - 0.5);
      setDrawnCards(shuffled.slice(0, spread.cardCount));
      setRevealed(new Array(spread.cardCount).fill(false));
      setAllRevealed(false);
      setShuffling(false);
    }, 800);
  };

  const revealCard = (i) => {
    if (!drawnCards.length) return;
    const next = [...revealed];
    next[i] = true;
    setRevealed(next);
    if (next.every(Boolean)) setAllRevealed(true);
  };

  const revealAll = () => { setRevealed(new Array(spread.cardCount).fill(true)); setAllRevealed(true); };
  const reset = () => { setDrawnCards([]); setRevealed([]); setAllRevealed(false); };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button onClick={onBack} style={{ background: 'none', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '6px 16px', color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', fontSize: '0.8rem', cursor: 'pointer' }}>
          ← Spreads
        </button>
        <div>
          <h2 className="font-cinzel" style={{ color: spread.color, fontSize: '1.4rem', letterSpacing: 1 }}>{spread.icon} {spread.name}</h2>
          <p style={{ color: 'rgba(232,213,183,0.6)', fontSize: '0.85rem' }}>{spread.subtitle} · {spread.cardCount} card{spread.cardCount > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>{spread.description}</p>
        <p style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.8rem', marginTop: '0.5rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>USED FOR: {spread.usedFor}</p>
      </div>

      {drawnCards.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <motion.div animate={{ rotate: shuffling ? 360 : 0 }} transition={{ duration: 0.8, ease: 'linear' }}
            style={{ fontSize: '4rem', marginBottom: '1.5rem', display: 'inline-block' }}>
            {shuffling ? '🔄' : '🃏'}
          </motion.div>
          <p style={{ color: 'rgba(232,213,183,0.6)', marginBottom: '2rem', fontFamily: 'Cinzel', letterSpacing: 1, fontSize: '0.9rem' }}>
            {shuffling ? 'Shuffling the deck...' : 'Focus on your question, then draw your cards'}
          </p>
          <button className="btn-mystical" onClick={drawCards} disabled={shuffling}
            style={{ fontSize: '1rem', padding: '14px 40px', opacity: shuffling ? 0.5 : 1 }}>
            {shuffling ? 'Shuffling...' : `✦ Draw ${spread.cardCount} Card${spread.cardCount > 1 ? 's' : ''}`}
          </button>
        </div>
      )}

      {drawnCards.length > 0 && !allRevealed && (
        <div>
          <p style={{ textAlign: 'center', color: 'rgba(232,213,183,0.6)', fontFamily: 'Cinzel', fontSize: '0.85rem', letterSpacing: 1, marginBottom: '2rem' }}>
            Click each card to reveal it
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {spread.positions.map((pos, i) => (
              <TarotFlipCard key={i} card={drawnCards[i]} position={pos} isRevealed={revealed[i]} onClick={() => revealCard(i)} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-mystical" onClick={revealAll}>Reveal All Cards</button>
            <button className="btn-mystical" onClick={reset} style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.5)' }}>Reshuffle</button>
          </div>
        </div>
      )}

      {allRevealed && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {spread.positions.map((pos, i) => (
              <TarotFlipCard key={i} card={drawnCards[i]} position={pos} isRevealed={true} onClick={() => {}} index={i} />
            ))}
          </div>
          <div className="divider-gold" />
          <ReadingResult spread={spread} drawnCards={drawnCards} onReset={reset} />
        </div>
      )}
    </div>
  );
}

export default function Practice() {
  const [activeSpread, setActiveSpread] = useState(null);

  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        {!activeSpread ? (
          <>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🃏</div>
              <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>Practice Spreads</h1>
              <p style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', letterSpacing: 3, fontSize: '0.85rem' }}>6 SPREADS · INTERACTIVE READINGS · FLIP TO REVEAL</p>
              <div className="divider-gold" />
              <p style={{ color: 'var(--text-light)', maxWidth: 600, margin: '0 auto', lineHeight: 1.9 }}>
                Choose a spread, focus on your question, draw your cards, and click each one to flip and reveal.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {SPREADS.map((spread, i) => (
                <motion.div key={spread.id}
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card"
                  style={{ padding: '1.75rem', cursor: 'pointer', borderColor: `${spread.color}33` }}
                  onClick={() => setActiveSpread(spread)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, background: `${spread.color}22`, border: `1px solid ${spread.color}66`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>{spread.icon}</div>
                    <div>
                      <h3 className="font-cinzel" style={{ color: spread.color, fontSize: '1rem', letterSpacing: 1 }}>{spread.name}</h3>
                      <p style={{ color: 'rgba(232,213,183,0.5)', fontSize: '0.8rem' }}>{spread.subtitle}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span style={{ background: `${spread.color}22`, border: `1px solid ${spread.color}44`, borderRadius: 20, padding: '3px 10px', fontSize: '0.75rem', color: spread.color, fontFamily: 'Cinzel' }}>{spread.cardCount} card{spread.cardCount > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(232,213,183,0.65)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>{spread.description}</p>
                  <div style={{ borderTop: `1px solid ${spread.color}22`, paddingTop: '0.75rem' }}>
                    <span style={{ color: `${spread.color}99`, fontSize: '0.75rem', fontFamily: 'Cinzel', letterSpacing: 1 }}>FOR: {spread.usedFor}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <SpreadReading spread={activeSpread} onBack={() => setActiveSpread(null)} />
        )}
      </div>
    </div>
  );
}
