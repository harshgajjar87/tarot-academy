import { motion } from 'framer-motion';

const sections = [
  {
    icon: '🔮',
    title: 'What is Tarot?',
    content: `Tarot is a set of 78 illustrated cards used for divination, self-reflection, and spiritual guidance. Each card carries rich symbolic imagery drawn from astrology, numerology, Kabbalah, alchemy, and mythology — all speaking directly to the universal human experience. From the ecstatic joy of The Sun to the crushing weight of the Ten of Swords, every card is a mirror held up to the soul.

Unlike a simple fortune-telling tool, tarot is best understood as a psychological map. The Swiss psychiatrist Carl Jung described the archetypes found in tarot as expressions of the "collective unconscious" — patterns of thought and experience shared by all of humanity across all cultures and time periods. When you draw a card, you are not receiving a fixed prediction; you are receiving a prompt to look inward.

A skilled tarot reader does not "predict the future." They illuminate the present moment with such clarity that the most likely future becomes visible — and more importantly, they empower the querent to change it.`,
  },
  {
    icon: '🃏',
    title: 'The Rider-Waite Tarot (1909)',
    content: `The Rider-Waite Tarot, published in December 1909 by the Rider Company of London, is the single most influential tarot deck ever created. Before its publication, the 56 Minor Arcana cards (the "pip" cards) were illustrated with simple geometric arrangements of suit symbols — much like a standard playing card deck. They carried no scenes, no people, and no story.

Arthur Edward Waite, a prominent member of the Hermetic Order of the Golden Dawn, commissioned the artist Pamela Colman Smith — known affectionately as "Pixie" — to illustrate a completely new kind of deck. For the first time in history, every single one of the 78 cards was given a fully illustrated narrative scene. The Three of Swords became a heart pierced by three blades in a stormy sky. The Ten of Pentacles became a wealthy patriarch watching his grandchildren play. Every card told a story.

This revolutionary decision transformed tarot from an elite occult tool into something accessible to anyone willing to look at the pictures and feel. The Rider-Waite deck became the template for virtually every tarot deck published in the 20th and 21st centuries. When you learn the Rider-Waite system, you can read almost any tarot deck in the world.`,
  },
  {
    icon: '📜',
    title: 'Ancient Origins: Playing Cards to Sacred Tool',
    content: `Tarot cards were born in northern Italy in the early 15th century — not as mystical tools, but as playing cards for the aristocracy. The earliest known decks, called "Tarocchi," were hand-painted luxury items commissioned by wealthy families like the Visconti and Sforza dynasties of Milan. These early decks were used to play a trick-taking card game similar to modern Bridge.

The 22 "trump" cards — what we now call the Major Arcana — were added to the standard 56-card deck to create a more complex game. Cards like The Emperor, The Pope (now The Hierophant), and The World were familiar figures from medieval Christian iconography and morality plays. They were not mystical; they were cultural.

It was not until the late 18th century that tarot was first associated with divination and the occult. In 1781, the French Protestant pastor Antoine Court de Gébelin published a wildly influential (and entirely fabricated) theory claiming that tarot cards were the remnants of an ancient Egyptian Book of Thoth — a sacred text of divine wisdom smuggled out of Egypt before the destruction of the Library of Alexandria. This claim was completely false, but it ignited the Western world's imagination and permanently fused tarot with mysticism.`,
  },
  {
    icon: '⚗️',
    title: 'The Occult Revival & The Golden Dawn',
    content: `The 19th century saw an explosion of interest in Western esotericism. Secret societies, Freemasonry, Rosicrucianism, and Hermeticism all flourished in Europe, and tarot became a central tool of occult practice.

The most important organization in the history of modern tarot was the Hermetic Order of the Golden Dawn, founded in London in 1888. Its members included some of the most brilliant and eccentric minds of the Victorian era: the poet W.B. Yeats, the infamous occultist Aleister Crowley, the novelist Arthur Machen, and the scholar Arthur Edward Waite — the man who would later commission the Rider-Waite deck.

The Golden Dawn created a comprehensive system that linked each tarot card to a specific Hebrew letter, a planet or zodiac sign, a path on the Kabbalistic Tree of Life, and a specific magical ritual. This system gave tarot an intellectual and spiritual depth it had never possessed before. It transformed the cards from a parlor game into a complete cosmological map of the universe and the human soul.

The Golden Dawn's teachings were kept strictly secret for decades, but when the organization fractured in the early 1900s, its members began publishing their knowledge. Arthur Waite's Rider-Waite deck was his attempt to encode the Golden Dawn's secret system into a publicly accessible form — hiding the deepest teachings in plain sight within the illustrations.`,
  },
  {
    icon: '🎨',
    title: 'Pamela Colman Smith: The Forgotten Genius',
    content: `One of the great injustices of tarot history is the near-total erasure of Pamela Colman Smith from the story of the deck that bears her art. The deck is named after the publisher (Rider) and the occultist who directed the project (Waite), but it was Pamela — a young, mixed-race, Jamaican-born artist living in London — who actually created the images that changed the world.

Pamela Colman Smith was a remarkable woman. She was a published illustrator, a theatrical set designer, a storyteller, and a practicing occultist. She was a synesthete — she could "see" music as color and shape — and this gift infused her illustrations with a vibrational quality that goes beyond mere decoration.

Waite gave Pamela very little guidance. He provided written descriptions for the Major Arcana and left the Minor Arcana almost entirely to her imagination. She painted all 78 cards in less than six months, working at extraordinary speed. For this monumental achievement, she was paid a flat fee — no royalties, no ongoing credit. She died in 1951 in poverty, her contribution largely forgotten.

Today, tarot scholars and practitioners are working to restore Pamela Colman Smith to her rightful place as the true creative genius behind the world's most famous tarot deck. Many modern editions now credit the deck as the "Rider-Waite-Smith" tarot in her honor.`,
  },
  {
    icon: '🌍',
    title: 'Tarot in the Modern World',
    content: `The 20th century saw tarot spread from the occult underground into mainstream culture. The publication of Eden Gray's "A Complete Guide to the Tarot" in 1970 introduced the cards to the counterculture generation, and tarot became a fixture of the New Age movement alongside astrology, crystals, and meditation.

Today, tarot is experiencing its greatest renaissance in history. Millions of people around the world use tarot cards daily — not necessarily as a supernatural oracle, but as a tool for mindfulness, journaling, therapy, and creative inspiration. Therapists use tarot in clinical settings. Artists use it for creative prompts. Coaches use it for goal-setting. The cards have transcended their occult origins to become a universal language of the human psyche.

There are now thousands of tarot decks available, representing every culture, aesthetic, and spiritual tradition imaginable — from the Thoth Tarot designed by Aleister Crowley and Lady Frieda Harris, to the Tarot of the Orishas, the Linestrider Tarot, and countless others. Yet all of them, without exception, trace their structure and symbolism back to the revolutionary template established by Pamela Colman Smith and Arthur Edward Waite in 1909.

The Rider-Waite system is not just a deck. It is the grammar of a universal visual language — one that speaks directly to the deepest layers of the human mind.`,
  },
];

const timeline = [
  { year: '1420s', event: 'Earliest known Tarocchi decks hand-painted for the Visconti-Sforza family of Milan, Italy' },
  { year: '1440s', event: 'The 22 "trump" cards (Major Arcana) added to the standard 56-card deck for the game of Tarocchi' },
  { year: '1500s', event: 'Tarot spreads across Europe as a popular card game; no mystical associations yet' },
  { year: '1781', event: 'Antoine Court de Gébelin falsely claims tarot originated in ancient Egypt — the occult era begins' },
  { year: '1791', event: 'Jean-Baptiste Alliette (Etteilla) publishes the first tarot deck designed specifically for divination' },
  { year: '1850s', event: 'French occultist Eliphas Lévi links tarot to Kabbalah and the Hebrew alphabet for the first time' },
  { year: '1888', event: 'The Hermetic Order of the Golden Dawn founded in London; tarot becomes central to their magical system' },
  { year: '1890s', event: 'Golden Dawn members including W.B. Yeats, Aleister Crowley, and Arthur Waite develop a complete tarot cosmology' },
  { year: '1909', event: 'Arthur Edward Waite commissions Pamela Colman Smith to illustrate a revolutionary new deck' },
  { year: 'Dec 1909', event: 'The Rider-Waite Tarot published — the first deck to fully illustrate all 78 cards with narrative scenes' },
  { year: '1910', event: 'Waite publishes "The Pictorial Key to the Tarot" — the first comprehensive guide to the Rider-Waite system' },
  { year: '1944', event: 'Aleister Crowley and Lady Frieda Harris complete the Thoth Tarot — the second most influential deck in history' },
  { year: '1970', event: 'Eden Gray\'s "A Complete Guide to the Tarot" brings tarot to the mainstream counterculture generation' },
  { year: '1971', event: 'The Tarot of Marseille standardized and republished, reviving interest in pre-Rider-Waite traditions' },
  { year: '1980s', event: 'The New Age movement adopts tarot; hundreds of new decks published for the first time' },
  { year: '2000s', event: 'Internet communities form around tarot; online readings and digital decks emerge' },
  { year: '2020s', event: 'Tarot reaches its greatest mainstream popularity in history; millions of practitioners worldwide across all cultures' },
];

const keyFigures = [
  {
    name: 'Pamela Colman Smith',
    years: '1878–1951',
    role: 'Artist & Illustrator',
    desc: 'The true creative genius of the Rider-Waite deck. A synesthetic artist who painted all 78 cards in under six months, encoding centuries of occult wisdom into accessible visual narratives. Tragically uncredited and underpaid in her lifetime.',
    color: '#e91e63',
  },
  {
    name: 'Arthur Edward Waite',
    years: '1857–1942',
    role: 'Occultist & Director',
    desc: 'Scholar, mystic, and member of the Golden Dawn who directed the creation of the Rider-Waite deck. He encoded the Golden Dawn\'s secret Kabbalistic and astrological system into the card imagery, making esoteric wisdom publicly accessible for the first time.',
    color: '#c9a84c',
  },
  {
    name: 'Antoine Court de Gébelin',
    years: '1725–1784',
    role: 'French Scholar',
    desc: 'The man who accidentally launched the occult tarot tradition by falsely claiming the cards were remnants of an ancient Egyptian sacred text. His theory was entirely fabricated, but it permanently fused tarot with mysticism and changed its history forever.',
    color: '#3498db',
  },
  {
    name: 'Eliphas Lévi',
    years: '1810–1875',
    role: 'French Occultist',
    desc: 'The first person to formally link tarot to the Kabbalah and the 22 Hebrew letters. His work laid the intellectual foundation for the Golden Dawn\'s complete tarot system and established the framework that Waite and Smith would later bring to life visually.',
    color: '#9b59b6',
  },
  {
    name: 'Aleister Crowley',
    years: '1875–1947',
    role: 'Occultist & Author',
    desc: 'Controversial Golden Dawn member who later created the Thoth Tarot with artist Lady Frieda Harris. His "Book of Thoth" remains one of the most intellectually rigorous tarot texts ever written, despite — or perhaps because of — his deeply polarizing personality.',
    color: '#e74c3c',
  },
  {
    name: 'Carl Gustav Jung',
    years: '1875–1961',
    role: 'Psychologist',
    desc: 'Though not a tarot practitioner, Jung\'s theories of archetypes and the collective unconscious provided the modern psychological framework for understanding tarot. His work transformed the cards from a supernatural oracle into a legitimate tool for self-exploration and depth psychology.',
    color: '#2ecc71',
  },
];

const deckStructure = [
  { label: 'Major Arcana', count: '22 cards', desc: 'The soul\'s journey — from The Fool (0) to The World (XXI). These cards represent the major, universal themes of human existence: love, death, transformation, justice, and enlightenment. When a Major Arcana card appears, the universe is speaking loudly.', color: '#c9a84c' },
  { label: 'Minor Arcana', count: '56 cards', desc: 'The everyday matters of human life, divided into four suits of 14 cards each. These cards deal with the practical, daily experiences of work, relationships, thoughts, and material reality.', color: '#9b59b6' },
  { label: 'Suit of Wands', count: '14 cards', desc: 'Element of Fire. Governs passion, creativity, ambition, career, and the spark of new ventures. The Wands people are bold, energetic, and driven.', color: '#e74c3c' },
  { label: 'Suit of Cups', count: '14 cards', desc: 'Element of Water. Governs emotions, relationships, intuition, dreams, and the subconscious. The Cups people are sensitive, empathetic, and deeply feeling.', color: '#3498db' },
  { label: 'Suit of Swords', count: '14 cards', desc: 'Element of Air. Governs intellect, conflict, truth, communication, and the power of the mind. The Swords people are sharp, logical, and direct.', color: '#95a5a6' },
  { label: 'Suit of Pentacles', count: '14 cards', desc: 'Element of Earth. Governs money, work, physical health, real estate, and material reality. The Pentacles people are grounded, practical, and reliable.', color: '#2ecc71' },
];

export default function History() {
  return (
    <div className="nebula-bg" style={{ minHeight: '100vh', paddingTop: 90, paddingBottom: 80 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>
          <h1 className="font-cinzel-deco shimmer-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            History of Tarot
          </h1>
          <p style={{ color: 'rgba(201,168,76,0.7)', fontFamily: 'Cinzel', letterSpacing: 3, fontSize: '0.8rem', marginBottom: '1rem' }}>
            FROM PLAYING CARDS TO SACRED ORACLE
          </p>
          <div className="divider-gold" />
        </motion.div>

        {/* Main content sections */}
        {sections.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card"
            style={{ padding: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '2rem' }}>{s.icon}</span>
              <h2 className="font-cinzel" style={{ color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: 1 }}>{s.title}</h2>
            </div>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ lineHeight: 1.95, color: 'rgba(232,213,183,0.92)', fontSize: '0.97rem', marginBottom: j < s.content.split('\n\n').length - 1 ? '1rem' : 0 }}>
                {para}
              </p>
            ))}
          </motion.div>
        ))}

        {/* Deck Structure */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: '0.5rem', letterSpacing: 2, fontSize: '1.3rem' }}>
            ✦ Anatomy of the 78-Card Deck ✦
          </h2>
          <p style={{ color: 'rgba(232,213,183,0.7)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Understanding how the deck is structured is the foundation of reading tarot.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {deckStructure.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-card" style={{ padding: '1.5rem', borderColor: `${d.color}33` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 className="font-cinzel" style={{ color: d.color, fontSize: '0.95rem', letterSpacing: 1 }}>{d.label}</h3>
                  <span style={{ background: `${d.color}22`, border: `1px solid ${d.color}55`, borderRadius: 20, padding: '2px 10px', fontSize: '0.75rem', color: d.color, fontFamily: 'Cinzel' }}>{d.count}</span>
                </div>
                <p style={{ color: 'rgba(232,213,183,0.88)', fontSize: '0.88rem', lineHeight: 1.75 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Figures */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: '0.5rem', letterSpacing: 2, fontSize: '1.3rem' }}>
            ✦ The Key Figures of Tarot History ✦
          </h2>
          <p style={{ color: 'rgba(232,213,183,0.7)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            The visionaries, scholars, and artists who shaped the tarot we know today.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {keyFigures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass-card" style={{ padding: '1.75rem', borderColor: `${f.color}33` }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <h3 className="font-cinzel" style={{ color: f.color, fontSize: '1rem', letterSpacing: 1, marginBottom: '0.2rem' }}>{f.name}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(201,168,76,0.6)', fontFamily: 'Cinzel', letterSpacing: 1 }}>{f.years}</span>
                    <span style={{ fontSize: '0.72rem', color: `${f.color}99`, fontFamily: 'Cinzel', letterSpacing: 1 }}>· {f.role}</span>
                  </div>
                </div>
                <p style={{ color: 'rgba(232,213,183,0.88)', fontSize: '0.88rem', lineHeight: 1.8 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-cinzel" style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: '0.5rem', letterSpacing: 2, fontSize: '1.3rem' }}>
            ✦ Complete Timeline ✦
          </h2>
          <p style={{ color: 'rgba(232,213,183,0.7)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            Six centuries of tarot history, from Italian playing cards to global phenomenon.
          </p>
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            <div style={{ position: 'absolute', left: '1rem', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, var(--gold) 10%, var(--gold) 90%, transparent)' }} />
            {timeline.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', alignItems: 'flex-start', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.85rem', width: 14, height: 14, borderRadius: '50%', background: i === 9 ? 'var(--gold)' : 'rgba(201,168,76,0.4)', border: '2px solid var(--gold)', marginTop: 6, boxShadow: i === 9 ? '0 0 14px var(--gold)' : 'none' }} />
                <div className="glass-card" style={{ padding: '0.9rem 1.4rem', flex: 1, borderColor: i === 9 ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.1)' }}>
                  <span className="font-cinzel" style={{ color: i === 9 ? 'var(--gold)' : 'rgba(201,168,76,0.7)', fontSize: '0.82rem', letterSpacing: 2 }}>{t.year}</span>
                  <p style={{ color: 'rgba(232,213,183,0.9)', marginTop: '0.25rem', fontSize: '0.92rem', lineHeight: 1.6 }}>{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing quote */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '2.5rem', textAlign: 'center', marginTop: '3rem', borderColor: 'rgba(201,168,76,0.3)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✦</div>
          <p style={{ color: 'rgba(232,213,183,0.9)', fontSize: '1.05rem', lineHeight: 2, fontStyle: 'italic', maxWidth: 680, margin: '0 auto' }}>
            "The Tarot embodies symbolical presentations of universal ideas, behind which lie all the implicits of the human mind, and it is in this sense that they contain secret doctrine."
          </p>
          <p className="font-cinzel" style={{ color: 'rgba(201,168,76,0.7)', fontSize: '0.8rem', letterSpacing: 2, marginTop: '1.25rem' }}>
            — ARTHUR EDWARD WAITE, The Pictorial Key to the Tarot, 1910
          </p>
        </motion.div>

      </div>
    </div>
  );
}
