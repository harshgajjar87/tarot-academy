// ═══════════════════════════════════════════════════════════════
// ALL CARDS — Unified lookup by numeric ID (0–77)
// Maps every card to its full course content.
// ═══════════════════════════════════════════════════════════════

import { courseCards } from './courseCards';
import { wandsCards } from './wands';
import { cupsCards } from './cups';
import { swordsCards } from './swords';
import { pentaclesCards } from './pentacles';

// Numeric ID order for Minor Arcana suits (Ace=1 through King=14)
// Wands: 22–35 | Cups: 36–49 | Swords: 50–63 | Pentacles: 64–77

function assignIds(cards, startId) {
  return cards.map((card, i) => ({ ...card, id: startId + i }));
}

const wandsWithIds    = assignIds(wandsCards,    22);
const cupsWithIds     = assignIds(cupsCards,     36);
const swordsWithIds   = assignIds(swordsCards,   50);
const pentaclesWithIds = assignIds(pentaclesCards, 64);

const allCardsArray = [
  ...courseCards,
  ...wandsWithIds,
  ...cupsWithIds,
  ...swordsWithIds,
  ...pentaclesWithIds,
];

// Keyed lookup by numeric id for O(1) access in CardDetail
export const allCards = Object.fromEntries(allCardsArray.map(c => [c.id, c]));

export default allCardsArray;
