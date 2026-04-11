# 🃏 Tarot Academy — Rider-Waite Complete Course

A full-stack interactive tarot learning platform built with React + Vite. Covers all 78 cards of the Rider-Waite deck with deep symbolism, 7 aspects of prediction, color theory, numerology, and 6 interactive spread readings.

---

## What This Project Is

Tarot Academy is a structured educational web app for learning tarot — not as a mystical gimmick, but as a system of symbolism, psychology, and pattern recognition. Every card in the 78-card Rider-Waite deck is documented with:

- Full picture description (what you actually see in the card)
- Upright and reversed meanings
- Symbol-by-symbol breakdown
- Color meanings
- 7 aspects of prediction: Past, Present, Future, Career, Health, Relationship, Daily Guidance
- 5 real-world practice Q&As per card

The site also covers the broader foundations of tarot: its history from 15th century Italy to the 1909 Rider-Waite publication, the numerological system behind card numbers, and the color language Pamela Colman Smith embedded into every illustration.

---

## Pages & Features

| Page | What It Does |
|---|---|
| **Home** | Hero with interactive 3D antigravity card scene (mouse-reactive), feature overview, suit breakdown, Major Arcana preview |
| **History** | Full timeline of tarot from playing cards to occult tool to modern psychological system |
| **Numerology** | The meaning of numbers 0–21 and how they shape each Major Arcana card |
| **Colors** | Color symbolism guide — what every color in the RWS deck means spiritually and psychologically |
| **Cards** | Full 78-card grid with filter by arcana/suit, search, admin lock system |
| **Card Detail** | Deep-dive page per card — image, keywords, upright/reversed, picture description, symbols, 7 aspects, 5 practice Q&As |
| **Structure** | Visual breakdown of how the 78-card deck is structured (Major Arcana, 4 suits, court cards) |
| **Practice** | 6 interactive spread readings with flip animations — Single Card, Two Card, Past/Present/Future, Lovers Spread, Yearly (12 cards), Celtic Cross (10 cards) |

---

## Data Architecture

All card data lives in separate files to keep load distributed:

```
src/data/
├── courseCards.js     ← 22 Major Arcana (full content)
├── wands.js           ← 14 Wands cards (full content)
├── cups.js            ← 14 Cups cards (full content)
├── swords.js          ← 14 Swords cards (full content)
├── pentacles.js       ← 14 Pentacles cards (full content)
└── allCards.js        ← merges all 5 files, assigns numeric IDs 0–77
```

Each card object contains:
```js
{
  id, name, number, arcana, suit,
  image,              // Wikimedia Commons RWS image URL
  keywords,           // array of 5 keywords
  pictureDescription, // visual description of the card illustration
  upright,            // upright meaning paragraph
  reversed,           // reversed meaning (Major Arcana)
  colors,             // array of color names
  colorMeanings,      // object mapping color → meaning
  symbols,            // array of "Symbol — meaning" strings
  aspects: {
    past, present, future,
    career, health, relationship, dailyGuidance
  },
  practiceQuestions   // array of { q, type, a }
}
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Animations | Framer Motion |
| 3D Scene | Three.js (custom antigravity card physics) |
| Styling | Pure CSS with CSS variables, glassmorphism |
| Fonts | Cinzel, Cinzel Decorative (Google Fonts) |
| Images | Wikimedia Commons (Rider-Waite-Smith public domain) |
| Data | Local JS modules (no database needed) |

---

## Admin System

The card detail pages are locked behind a simple admin session:

- 5 cards are free for everyone: The Fool (0), Ace of Wands (22), Ace of Cups (36), Ace of Swords (50), Ace of Pentacles (64)
- Admin credentials are stored in `.env` as `VITE_ADMIN_USER` and `VITE_ADMIN_PASS`
- Session is stored in `sessionStorage` — clears on tab close

```env
VITE_ADMIN_USER=your_username
VITE_ADMIN_PASS=your_password
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/tarot-academy.git
cd tarot-academy/client

# Install dependencies
npm install

# Create .env file
echo VITE_ADMIN_USER=admin > .env
echo VITE_ADMIN_PASS=yourpassword >> .env

# Run dev server
npm run dev
```

---

## Project Structure

```
tarot-academy/
└── client/
    ├── public/
    └── src/
        ├── components/
        │   ├── AntigravityScene.jsx   ← Three.js 3D hero scene
        │   ├── Navbar.jsx
        │   └── StarField.jsx          ← Animated star background
        ├── data/
        │   ├── allCards.js
        │   ├── courseCards.js
        │   ├── wands.js
        │   ├── cups.js
        │   ├── swords.js
        │   └── pentacles.js
        ├── pages/
        │   ├── Home.jsx
        │   ├── History.jsx
        │   ├── Numerology.jsx
        │   ├── Colors.jsx
        │   ├── Cards.jsx
        │   ├── CardDetail.jsx
        │   ├── Structure.jsx
        │   └── Practice.jsx
        ├── App.jsx
        └── main.jsx
```

---

## AI Usage

This project used AI (Amazon Q) as a development assistant for:

- Generating the full card content (picture descriptions, symbol breakdowns, 7 aspects, practice Q&As) for all 78 cards
- Scaffolding React component structure
- Debugging data architecture and import chains
- Writing CSS animations and glassmorphism styles

All tarot knowledge, card interpretations, reading methodology, and educational structure were authored by the project creator based on personal study and practice. AI was used as a writing and coding tool, not as the source of tarot knowledge.

---

## Cards Covered

**Major Arcana (22 cards):** The Fool through The World

**Minor Arcana (56 cards):**
- 🔥 Wands — Ace through King (Fire · Passion, Creativity, Ambition)
- 💧 Cups — Ace through King (Water · Emotions, Relationships, Intuition)
- 💨 Swords — Ace through King (Air · Intellect, Conflict, Truth)
- 🌿 Pentacles — Ace through King (Earth · Money, Work, Material World)

---

## License

Images are from the Rider-Waite-Smith Tarot deck (1909), illustrated by Pamela Colman Smith, published by Arthur Edward Waite. The deck is in the public domain. Images sourced from Wikimedia Commons.

Code and content © 2024. All rights reserved.
