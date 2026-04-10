// Full Rider-Waite Tarot Data
const tarotData = {
  history: {
    whatIsTarot: `Tarot is a set of 78 illustrated cards used for divination, self-reflection, and spiritual guidance. 
    Each card carries symbolic imagery that speaks to the human experience â€” from joy and love to fear and transformation. 
    Tarot is not fortune-telling in the literal sense; it is a mirror that reflects your inner world and helps you navigate life's journey.`,
    riderWaite: `The Rider-Waite Tarot, created in 1909, is the most widely used and recognized tarot deck in the world. 
    It was designed by artist Pamela Colman Smith under the direction of occultist Arthur Edward Waite, and published by the Rider Company â€” hence the name. 
    What made this deck revolutionary was that every single card, including the 56 Minor Arcana, featured fully illustrated scenes rather than just symbols. 
    This made the cards far more accessible and intuitive to read.`,
    history: `Tarot cards originated in northern Italy in the 15th century as playing cards for games like Tarocchi. 
    They were not used for divination until the late 18th century when French occultists began assigning mystical meanings to them. 
    Antoine Court de GÃ©belin (1781) falsely claimed tarot had ancient Egyptian origins â€” a myth that stuck and added mystique. 
    By the 19th century, the Hermetic Order of the Golden Dawn (which Waite belonged to) deeply integrated tarot into Western esoteric tradition. 
    The Rider-Waite deck of 1909 became the gold standard, influencing virtually every modern deck.`
  },
  numbers: [
    { number: 0, meaning: "Infinite potential, new beginnings, the void before creation, pure possibility" },
    { number: 1, meaning: "New starts, willpower, individuality, leadership, manifestation" },
    { number: 2, meaning: "Duality, balance, partnership, intuition, waiting" },
    { number: 3, meaning: "Creativity, growth, expression, collaboration, abundance" },
    { number: 4, meaning: "Stability, structure, foundation, order, practicality" },
    { number: 5, meaning: "Change, conflict, challenge, freedom, instability" },
    { number: 6, meaning: "Harmony, responsibility, love, healing, community" },
    { number: 7, meaning: "Spirituality, introspection, mystery, wisdom, solitude" },
    { number: 8, meaning: "Power, ambition, karma, cycles, strength" },
    { number: 9, meaning: "Completion, wisdom, fulfillment, near the end of a cycle" },
    { number: 10, meaning: "Endings and new beginnings, completion of a cycle, transformation" },
    { number: 11, meaning: "Justice, balance of karma, higher truth" },
    { number: 12, meaning: "Surrender, sacrifice, seeing from a new perspective" },
    { number: 13, meaning: "Death, transformation, endings that lead to rebirth" },
    { number: 14, meaning: "Temperance, moderation, divine timing" },
    { number: 15, meaning: "Shadow self, materialism, bondage, illusion" },
    { number: 16, meaning: "Sudden change, revelation, destruction of false structures" },
    { number: 17, meaning: "Hope, inspiration, renewal, cosmic guidance" },
    { number: 18, meaning: "Illusion, subconscious, fear, the unknown" },
    { number: 19, meaning: "Joy, success, vitality, clarity, achievement" },
    { number: 20, meaning: "Awakening, judgment, rebirth, calling" },
    { number: 21, meaning: "Completion, wholeness, integration, the world as one" }
  ],
  colors: [
    { color: "Red", hex: "#CC0000", meaning: "Passion, energy, action, courage, desire, life force" },
    { color: "Blue", hex: "#0044CC", meaning: "Intuition, calm, truth, wisdom, spiritual depth, emotion" },
    { color: "Yellow", hex: "#FFD700", meaning: "Intellect, clarity, optimism, consciousness, solar energy" },
    { color: "White", hex: "#FFFFFF", meaning: "Purity, innocence, spiritual truth, divine light, new beginnings" },
    { color: "Black", hex: "#111111", meaning: "Mystery, the unknown, shadow self, endings, the unconscious" },
    { color: "Green", hex: "#228B22", meaning: "Growth, nature, healing, abundance, fertility, heart energy" },
    { color: "Purple", hex: "#6A0DAD", meaning: "Royalty, spiritual power, higher consciousness, mystery" },
    { color: "Orange", hex: "#FF6600", meaning: "Creativity, enthusiasm, warmth, courage, social energy" },
    { color: "Gold", hex: "#FFB800", meaning: "Divine wisdom, success, achievement, solar consciousness" },
    { color: "Gray", hex: "#808080", meaning: "Neutrality, balance between opposites, wisdom, ambiguity" },
    { color: "Brown", hex: "#8B4513", meaning: "Earth, grounding, practicality, stability, material world" }
  ]
};

const majorArcana = [
  {
    id: 0,
    name: "The Fool",
    number: "0",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    colors: ["Yellow", "White", "Red"],
    symbols: ["White rose (purity)", "Cliff edge (leap of faith)", "Small dog (instinct/warning)", "Knapsack (past lessons)", "Sun (consciousness)"],
    pictureDescription: "A young figure stands at the edge of a cliff, gazing upward with a white rose in one hand and a small bag on a stick over his shoulder. A small dog barks at his heels. The sun shines brightly behind him.",
    keywords: ["New beginnings", "Innocence", "Spontaneity", "Free spirit", "Leap of faith"],
    upright: "New beginnings, adventure, spontaneity, a leap of faith, unlimited potential",
    reversed: "Recklessness, risk-taking without thought, naivety, foolishness",
    aspects: {
      past: "You once took a bold leap of faith or began something new without knowing the outcome. That innocence shaped who you are.",
      present: "You are at the beginning of a new journey. Embrace the unknown with an open heart. Don't overthink â€” just begin.",
      future: "A new chapter is coming. Be ready to step into the unknown with courage and trust.",
      career: "A new job, business idea, or career path is opening up. Take the risk â€” this is your moment to start fresh.",
      health: "Your body and spirit are ready for a fresh start. Try new wellness routines or healing approaches with an open mind.",
      relationship: "A new relationship or a fresh start in an existing one is possible. Approach love with openness and no expectations.",
      dailyGuidance: "Today, say yes to something unexpected. Let go of fear and trust the universe to catch you."
    },
    practiceQuestions: [
      { q: "Does The Fool indicate a positive new beginning?", a: "Yes â€” The Fool is one of the most positive cards for new starts, representing pure potential and excitement." },
      { q: "Why does The Fool stand at the edge of a cliff?", a: "The cliff represents the leap of faith required to begin something new. It symbolizes that growth requires stepping into the unknown despite the risk." },
      { q: "What does the white rose in The Fool's hand mean?", a: "The white rose represents purity of intention and freedom from lower desires â€” the Fool acts from innocence, not ego." },
      { q: "Should I start my new business if The Fool appears?", a: "The Fool strongly encourages new beginnings. It says: the timing is now, trust yourself, and take the leap â€” but stay aware of practical risks." },
      { q: "What is the shadow side of The Fool?", a: "The shadow side is recklessness â€” acting without any thought, ignoring warnings (the dog), and being naive about real consequences." }
    ]
  },
  {
    id: 1,
    name: "The Magician",
    number: "I",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    colors: ["Red", "White", "Yellow"],
    symbols: ["Infinity symbol (unlimited potential)", "Wand raised to sky (divine will)", "Four tools on table (four elements)", "Red roses and white lilies (passion + purity)", "Lemniscate above head"],
    pictureDescription: "A robed figure stands before a table bearing a cup, wand, sword, and pentacle â€” the four suits. One hand points to the sky, the other to the earth. An infinity symbol floats above his head.",
    keywords: ["Willpower", "Manifestation", "Skill", "Resourcefulness", "Power"],
    upright: "Manifestation, willpower, skill, resourcefulness, inspired action",
    reversed: "Manipulation, poor planning, untapped talents, trickery",
    aspects: {
      past: "You had all the tools you needed but may not have fully used them. Past skills and knowledge are your foundation.",
      present: "You have everything you need right now to create what you desire. The power is in your hands â€” use it.",
      future: "Your ability to manifest is growing. What you focus on with intention will materialize.",
      career: "You have the skills and talent to succeed. This is a time to take initiative, pitch ideas, and lead projects.",
      health: "Mind-body connection is powerful now. Your thoughts directly affect your physical wellbeing â€” think positively.",
      relationship: "You have the power to shape your relationship. Communicate clearly and act with intention.",
      dailyGuidance: "Today, take one concrete action toward your goal. You have the power â€” use it deliberately."
    },
    practiceQuestions: [
      { q: "Is The Magician a yes or no card?", a: "Yes â€” The Magician is a strong yes, indicating you have the power and tools to make things happen." },
      { q: "Why does The Magician point one hand up and one down?", a: "This gesture means 'as above, so below' â€” the Magician channels divine energy from the spiritual realm into the physical world." },
      { q: "What do the four tools on the table represent?", a: "They represent the four elements: Wand (Fire/Will), Cup (Water/Emotion), Sword (Air/Mind), Pentacle (Earth/Material) â€” all resources available to the Magician." },
      { q: "I feel stuck in my career. What does The Magician say?", a: "The Magician says you already have the skills and resources â€” the block is in your belief. Take action, even a small step, and momentum will follow." },
      { q: "What is the difference between The Magician and The Fool?", a: "The Fool begins with pure potential and no plan. The Magician has gathered tools and knowledge and is ready to consciously create. The Fool leaps; the Magician acts with intention." }
    ]
  },
  {
    id: 2,
    name: "The High Priestess",
    number: "II",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    colors: ["Blue", "White", "Black"],
    symbols: ["Two pillars B and J (duality)", "Crescent moon at feet (intuition)", "Pomegranates (fertility/mystery)", "Scroll (hidden knowledge)", "Veil (the unseen)"],
    pictureDescription: "A serene woman sits between two pillars â€” one black (B for Boaz) and one white (J for Jachin). She holds a scroll partially hidden by her robe. A crescent moon rests at her feet and a veil of pomegranates hangs behind her.",
    keywords: ["Intuition", "Mystery", "Inner knowing", "Subconscious", "Divine feminine"],
    upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind, mystery",
    reversed: "Secrets, disconnected from intuition, information withheld, surface-level thinking",
    aspects: {
      past: "Your intuition has guided you before, even when you didn't fully trust it. Past experiences have deepened your inner wisdom.",
      present: "Be still. The answers you seek are within you. Trust your gut over logic right now.",
      future: "Hidden truths will be revealed. Your intuitive gifts are growing stronger.",
      career: "Trust your instincts in professional decisions. Something is not being said openly â€” read between the lines.",
      health: "Listen to your body's subtle signals. Explore mind-body healing, meditation, or energy work.",
      relationship: "There is more beneath the surface in this relationship. Don't ignore your gut feelings about what is unsaid.",
      dailyGuidance: "Spend time in silence today. Journal, meditate, or simply sit with your thoughts. The answer will come."
    },
    practiceQuestions: [
      { q: "Does The High Priestess mean yes or no?", a: "The High Priestess is neutral â€” she says 'not yet' or 'wait and listen.' The answer is not ready to be revealed." },
      { q: "Why is The High Priestess associated with the moon?", a: "The moon represents the subconscious, cycles, and intuition â€” all domains of the High Priestess. She governs what lies beneath the surface of conscious awareness." },
      { q: "What does the veil behind The High Priestess mean?", a: "The veil represents the boundary between the conscious and unconscious mind, between the known and the mystery. She guards what lies beyond ordinary perception." },
      { q: "I keep having strong gut feelings about someone. What does this card say?", a: "The High Priestess validates your intuition completely. Trust what you feel even without logical proof. Your inner knowing is accurate." },
      { q: "What is the difference between The High Priestess and The Empress?", a: "The High Priestess is inner, receptive, and mysterious â€” she represents spiritual wisdom and the subconscious. The Empress is outer, nurturing, and abundant â€” she represents physical creation and earthly love." }
    ]
  },
  {
    id: 3,
    name: "The Empress",
    number: "III",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    colors: ["Green", "Yellow", "Red"],
    symbols: ["Crown of 12 stars (zodiac/cycles)", "Venus symbol on heart shield (love/beauty)", "Wheat field (abundance)", "Flowing river (emotion)", "Lush forest (nature/fertility)"],
    pictureDescription: "A crowned woman sits on a throne in a lush garden. She wears a robe covered in pomegranates and holds a scepter. A heart-shaped shield with the Venus symbol rests beside her. Wheat grows at her feet and a waterfall flows nearby.",
    keywords: ["Fertility", "Abundance", "Nurturing", "Nature", "Creativity", "Motherhood"],
    upright: "Femininity, beauty, nature, nurturing, abundance, fertility, creativity",
    reversed: "Creative block, dependence, smothering, neglect of self",
    aspects: {
      past: "A nurturing figure or period of abundance shaped your foundation. You were cared for, or you cared deeply for others.",
      present: "You are in a fertile period â€” ideas, projects, and relationships can flourish now. Nurture what you love.",
      future: "Abundance is coming. A creative project, pregnancy, or period of growth and beauty is on the horizon.",
      career: "Creative fields, nurturing roles, or projects involving beauty and nature are favored. Your ideas will bear fruit.",
      health: "Connect with nature for healing. Nourish your body with good food, rest, and self-care. Fertility is highlighted.",
      relationship: "Deep love, nurturing connection, and possibly pregnancy or family growth. A relationship is blossoming.",
      dailyGuidance: "Do something creative or spend time in nature today. Let yourself receive as well as give."
    },
    practiceQuestions: [
      { q: "Does The Empress indicate pregnancy?", a: "Yes â€” The Empress is the strongest fertility card in tarot. It can indicate literal pregnancy or the birth of a creative project or new phase of life." },
      { q: "Why is The Empress connected to Venus?", a: "Venus rules love, beauty, pleasure, and abundance â€” all qualities embodied by The Empress. She is the earthly expression of divine feminine creative power." },
      { q: "What does the wheat at The Empress's feet symbolize?", a: "Wheat represents harvest, abundance, and the fruits of labor. It shows that what has been planted is now ready to be reaped." },
      { q: "I feel creatively blocked. What does The Empress advise?", a: "The Empress says: go outside, connect with your senses, and stop forcing it. Creativity flows when you are nourished and relaxed. Tend to yourself first." },
      { q: "Is The Empress a good card for relationships?", a: "Absolutely yes. The Empress brings warmth, love, sensuality, and deep nurturing energy to relationships. It often signals a loving, stable, and growing connection." }
    ]
  },
  {
    id: 4,
    name: "The Emperor",
    number: "IV",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    colors: ["Red", "Gray", "Orange"],
    symbols: ["Throne with ram heads (Aries/authority)", "Orb and scepter (power)", "Armor under robe (strength beneath authority)", "Mountains (permanence)", "Long white beard (wisdom/experience)"],
    pictureDescription: "A stern, bearded emperor sits on a stone throne adorned with ram heads. He wears armor beneath his red robe and holds an ankh scepter in one hand and an orb in the other. Barren mountains rise behind him.",
    keywords: ["Authority", "Structure", "Father figure", "Leadership", "Stability"],
    upright: "Authority, establishment, structure, a father figure, solid foundation",
    reversed: "Domination, rigidity, lack of discipline, abuse of power",
    aspects: {
      past: "A strong authority figure â€” a father, boss, or institution â€” shaped your sense of structure and discipline.",
      present: "Take charge. Create order in your life. Set boundaries and lead with confidence.",
      future: "A period of stability and structure is coming. You will establish something lasting.",
      career: "Leadership opportunities arise. Take authority, be decisive, and build systems that last.",
      health: "Discipline is key. Create a structured health routine and stick to it. Address issues with the spine or bones.",
      relationship: "One partner may be dominant or paternal. Ensure power is balanced. Stability and commitment are present.",
      dailyGuidance: "Create a plan today and follow it. Structure is your friend â€” bring order to one area of your life."
    },
    practiceQuestions: [
      { q: "Is The Emperor a yes or no card?", a: "Yes â€” The Emperor is a strong yes, especially for matters requiring authority, structure, and decisive action." },
      { q: "Why does The Emperor sit on a stone throne?", a: "Stone represents permanence, solidity, and unshakeable authority. The Emperor's power is built on a firm, lasting foundation." },
      { q: "What is the difference between The Emperor and The Hierophant?", a: "The Emperor represents secular authority â€” government, fatherhood, worldly power. The Hierophant represents spiritual authority â€” religion, tradition, and sacred institutions." },
      { q: "My boss is very controlling. Does The Emperor relate to this?", a: "Yes â€” The Emperor reversed or in a challenging position can represent an authoritarian, rigid, or domineering figure. It may be time to assert your own boundaries." },
      { q: "What does The Emperor say about starting a business?", a: "The Emperor is excellent for business â€” it says build a solid structure, create clear systems, lead with confidence, and think long-term. Your foundation will determine your success." }
    ]
  }
];

const majorArcana2 = [
  {
    id: 5,
    name: "The Hierophant",
    number: "V",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    colors: ["Red", "White", "Gold"],
    symbols: ["Triple crown (three worlds)", "Two keys (conscious/unconscious)", "Two monks (followers)", "Triple cross scepter (divine authority)", "Pillars (law and liberty)"],
    pictureDescription: "A religious figure sits between two pillars, wearing a triple crown and holding a triple cross. Two monks kneel before him. Two crossed keys lie at his feet.",
    keywords: ["Tradition", "Spiritual guidance", "Religion", "Conformity", "Institutions"],
    upright: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
    reversed: "Personal beliefs, freedom from convention, questioning dogma",
    aspects: {
      past: "Traditional values, religious upbringing, or institutional guidance shaped your worldview.",
      present: "Seek guidance from a mentor, teacher, or spiritual tradition. Honor what has been passed down.",
      future: "A spiritual teacher or traditional path will offer important wisdom.",
      career: "Working within established institutions or following conventional paths is favored.",
      health: "Traditional medicine and established health practices are recommended over experimental approaches.",
      relationship: "A conventional, committed relationship. Marriage or formal commitment may be indicated.",
      dailyGuidance: "Seek wisdom from someone more experienced. Honor tradition while staying true to yourself."
    },
    practiceQuestions: [
      { q: "Does The Hierophant indicate marriage?", a: "Yes â€” The Hierophant is one of the strongest marriage indicators in tarot, representing formal commitment and traditional union." },
      { q: "What do the two keys at The Hierophant's feet mean?", a: "The keys represent the keys to heaven â€” the power to unlock spiritual mysteries and the balance between conscious knowledge and unconscious wisdom." },
      { q: "Why is The Hierophant associated with Taurus?", a: "Taurus values tradition, stability, and earthly pleasures. The Hierophant embodies these through religious and institutional structures that provide stability." },
      { q: "I feel restricted by religious rules. What does this card say?", a: "The Hierophant reversed speaks directly to this â€” it encourages you to question dogma and find your own spiritual truth beyond imposed rules." },
      { q: "Is The Hierophant a good card for education?", a: "Yes â€” The Hierophant represents formal education, mentorship, and learning within established systems. It favors traditional academic paths." }
    ]
  },
  {
    id: 6,
    name: "The Lovers",
    number: "VI",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg",
    colors: ["Red", "Green", "Yellow"],
    symbols: ["Angel Raphael (divine blessing)", "Adam and Eve (duality/choice)", "Tree of Knowledge (temptation)", "Tree of Life (divine love)", "Mountain (challenges ahead)"],
    pictureDescription: "A man and woman stand naked in a garden, blessed by an angel above. Behind the woman is the Tree of Knowledge with a serpent; behind the man is the Tree of Life with flames.",
    keywords: ["Love", "Union", "Choices", "Alignment", "Values"],
    upright: "Love, harmony, relationships, values alignment, choices",
    reversed: "Disharmony, imbalance, misalignment of values, poor choices",
    aspects: {
      past: "A significant relationship or important choice defined a major chapter of your life.",
      present: "A meaningful relationship or important decision is before you. Choose from your heart and values.",
      future: "A deep connection or significant choice is coming that will shape your path.",
      career: "Choose work that aligns with your values. A partnership or collaboration is highlighted.",
      health: "Balance is needed between mind, body, and spirit. Choices about lifestyle directly affect your health.",
      relationship: "Deep love, soulmate connection, or a significant relationship choice. This is a powerful love card.",
      dailyGuidance: "Make one decision today that truly aligns with your deepest values, not just what is convenient."
    },
    practiceQuestions: [
      { q: "Does The Lovers card mean I will find love?", a: "Yes â€” The Lovers is a very positive love card. It can indicate a deep romantic connection, but also the need to make a choice aligned with your heart." },
      { q: "Why is there an angel in The Lovers card?", a: "The angel Raphael represents divine blessing and healing. His presence shows that this union or choice is spiritually guided and blessed." },
      { q: "Does The Lovers always mean romance?", a: "No â€” The Lovers also represents important choices, value alignment, and partnerships of all kinds. It asks: what do you truly love and value?" },
      { q: "I am choosing between two people. What does The Lovers say?", a: "The Lovers asks you to look beyond surface attraction and choose based on deep values alignment. Who do you truly connect with on a soul level?" },
      { q: "What is the shadow side of The Lovers?", a: "The shadow is temptation, poor choices made from lust rather than love, and relationships that look good on the surface but lack true alignment." }
    ]
  },
  {
    id: 7,
    name: "The Chariot",
    number: "VII",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    colors: ["Blue", "Black", "White"],
    symbols: ["Two sphinxes (opposing forces)", "Star crown (celestial victory)", "Armor (protection)", "Crescent moons (subconscious)", "City behind (what is left behind)", "Wand (willpower)"],
    pictureDescription: "A warrior stands in a chariot pulled by two sphinxes â€” one black, one white. He wears star-covered armor and a crown of stars. A walled city lies behind him.",
    keywords: ["Victory", "Control", "Willpower", "Determination", "Direction"],
    upright: "Control, willpower, success, action, determination, victory",
    reversed: "Lack of control, aggression, no direction, scattered energy",
    aspects: {
      past: "You overcame a significant challenge through sheer determination and willpower.",
      present: "You are in a battle that requires focus and control. Keep moving forward â€” don't let opposing forces stop you.",
      future: "Victory is ahead if you maintain discipline and direction. Success comes through focused effort.",
      career: "Drive and ambition will lead to professional success. A promotion or competitive win is possible.",
      health: "Discipline in health routines will yield results. Push through resistance â€” your body is stronger than you think.",
      relationship: "You may need to take control of a relationship situation. Don't let fear or confusion steer you off course.",
      dailyGuidance: "Focus on one goal today and pursue it with full determination. Don't let distractions pull you in two directions."
    },
    practiceQuestions: [
      { q: "Is The Chariot a yes card?", a: "Yes â€” The Chariot is a strong yes, especially for goals requiring effort, competition, or travel." },
      { q: "Why are the two sphinxes different colors?", a: "The black and white sphinxes represent opposing forces â€” like fear and courage, or logic and emotion. The Chariot's power is in controlling and directing both." },
      { q: "Does The Chariot indicate travel?", a: "Yes â€” The Chariot is one of the primary travel cards in tarot, often indicating a journey, relocation, or movement toward a goal." },
      { q: "I feel pulled in two directions. What does The Chariot say?", a: "The Chariot says: you must take the reins. Acknowledge both forces within you, but choose a direction and commit to it with full willpower." },
      { q: "What is the difference between The Chariot and Strength?", a: "The Chariot wins through external control, willpower, and force of action. Strength wins through inner courage, patience, and gentle mastery of instincts." }
    ]
  },
  {
    id: 8,
    name: "Strength",
    number: "VIII",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/RWS_Tarot_08_Strength.jpg",
    colors: ["White", "Yellow", "Green"],
    symbols: ["Infinity symbol (unlimited inner power)", "Lion (primal instincts)", "White robe (purity)", "Flower garland (nature/gentleness)", "Mountain (challenges)"],
    pictureDescription: "A woman in a white robe gently holds open the mouth of a lion. An infinity symbol floats above her head. She wears a garland of flowers and appears calm and serene.",
    keywords: ["Inner strength", "Courage", "Patience", "Compassion", "Influence"],
    upright: "Strength, courage, persuasion, influence, compassion, inner power",
    reversed: "Inner doubt, low energy, self-doubt, raw emotion, cowardice",
    aspects: {
      past: "You have shown remarkable inner strength in the past, perhaps without fully recognizing it.",
      present: "You have more strength than you realize. Face your fears with gentleness and courage.",
      future: "Your inner strength will be tested and proven. You will emerge more powerful than before.",
      career: "Lead with compassion and quiet confidence. Your soft power is more effective than force.",
      health: "Mental and emotional strength supports physical healing. Courage to face health challenges is present.",
      relationship: "Patience and compassion are needed. Tame reactive emotions and respond from a place of love.",
      dailyGuidance: "Face one fear today with gentleness rather than force. Your quiet courage is your greatest power."
    },
    practiceQuestions: [
      { q: "Is Strength a positive card?", a: "Yes â€” Strength is deeply positive, representing inner courage, compassion, and the power to overcome challenges through love rather than force." },
      { q: "Why does the woman tame the lion gently?", a: "The lion represents our primal instincts, fears, and raw emotions. The woman tames it with love and patience â€” showing that true strength is inner mastery, not suppression." },
      { q: "What does the infinity symbol above Strength mean?", a: "It represents unlimited inner power and the eternal nature of true strength. It also connects Strength to The Magician, showing that inner power can manifest outwardly." },
      { q: "I am going through something very hard. What does Strength say?", a: "Strength says: you have everything you need within you. You are braver than you believe. Face this with compassion for yourself and quiet determination." },
      { q: "Is Strength about physical strength?", a: "Not primarily â€” Strength is about emotional courage, inner resilience, and the power of compassion. Physical strength may be a secondary theme, but the core message is about the strength of character." }
    ]
  },
  {
    id: 9,
    name: "The Hermit",
    number: "IX",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    colors: ["Gray", "White", "Yellow"],
    symbols: ["Lantern with star (inner light/wisdom)", "Staff (support on the journey)", "Gray cloak (invisibility/withdrawal)", "Mountain peak (achievement/isolation)", "Six-pointed star (wisdom of Solomon)"],
    pictureDescription: "An old man stands alone on a mountain peak, wrapped in a gray cloak. He holds a lantern containing a six-pointed star and leans on a staff. The landscape is barren and cold.",
    keywords: ["Solitude", "Inner guidance", "Introspection", "Wisdom", "Soul-searching"],
    upright: "Soul-searching, introspection, being alone, inner guidance, solitude",
    reversed: "Isolation, loneliness, withdrawal, lost, anti-social",
    aspects: {
      past: "A period of solitude or withdrawal gave you deep wisdom that still guides you today.",
      present: "Step back from the noise. You need time alone to find your answers. The wisdom is within.",
      future: "A period of reflection and inner work is coming. Embrace it â€” it will illuminate your path.",
      career: "Work that requires deep focus, research, or independent thinking is favored. Mentorship roles suit you.",
      health: "Rest and solitude are healing. Reduce overstimulation. Meditation and quiet practices restore you.",
      relationship: "You or your partner may need space. Solitude is not rejection â€” it is necessary for inner growth.",
      dailyGuidance: "Spend at least 20 minutes alone in silence today. Turn off your phone. Listen to your inner voice."
    },
    practiceQuestions: [
      { q: "Does The Hermit mean I will be alone?", a: "Not necessarily in a negative sense. The Hermit indicates a necessary period of solitude for inner growth and wisdom-seeking, not permanent loneliness." },
      { q: "What does The Hermit's lantern represent?", a: "The lantern represents inner wisdom and spiritual light. The Hermit doesn't follow external lights â€” he carries his own. It shows the way for himself and others." },
      { q: "Why is The Hermit on a mountain?", a: "The mountain represents the heights of spiritual achievement and the isolation required for deep wisdom. He has climbed above the noise of ordinary life." },
      { q: "I feel very lonely. Is The Hermit telling me something?", a: "The Hermit distinguishes between chosen solitude (healing) and forced isolation (painful). If you feel lonely, it may be time to reconnect â€” but also to ask what inner work you are avoiding." },
      { q: "Is The Hermit a good card for spiritual development?", a: "Yes â€” The Hermit is one of the best cards for spiritual growth. It represents the deep inner journey, meditation, and the wisdom that comes from looking within." }
    ]
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    number: "X",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    colors: ["Blue", "Yellow", "Purple"],
    symbols: ["Wheel with TARO/ROTA (cycles)", "Four winged creatures (four fixed signs)", "Sphinx on top (wisdom)", "Snake descending (Set/chaos)", "Anubis ascending (Hermes/opportunity)", "Hebrew letters (divine names)"],
    pictureDescription: "A great wheel floats in the sky, inscribed with mystical symbols. Four winged creatures sit in the corners reading books. A sphinx sits atop the wheel, a snake descends on one side, and Anubis rises on the other.",
    keywords: ["Cycles", "Fate", "Turning point", "Luck", "Destiny"],
    upright: "Good luck, karma, life cycles, destiny, a turning point",
    reversed: "Bad luck, resistance to change, breaking cycles, no control",
    aspects: {
      past: "A major turning point or cycle of fate has already shaped your current situation.",
      present: "The wheel is turning in your favor. A lucky break or significant change is happening now.",
      future: "A major shift is coming. What goes around comes around â€” karma is at work.",
      career: "A lucky opportunity or unexpected career change is on the horizon. Be ready to seize it.",
      health: "Health cycles are shifting. What has been difficult may improve. Trust the natural cycles of healing.",
      relationship: "A fated meeting or significant turning point in a relationship. Destiny is at work.",
      dailyGuidance: "Trust that the universe is working in your favor today. Let go of control and flow with what comes."
    },
    practiceQuestions: [
      { q: "Is Wheel of Fortune a lucky card?", a: "Yes â€” it is one of the luckiest cards in tarot, indicating good fortune, positive change, and the universe working in your favor." },
      { q: "What does the wheel symbolize in this card?", a: "The wheel represents the eternal cycles of life â€” rise and fall, good times and bad, karma and destiny. Nothing stays the same forever." },
      { q: "Why are there creatures in the four corners?", a: "The four winged creatures represent the four fixed zodiac signs (Taurus, Leo, Scorpio, Aquarius) and the four elements. They represent stability amid constant change." },
      { q: "I feel like my luck has run out. What does this card say?", a: "The Wheel of Fortune reversed says: a difficult cycle is present, but it will turn. No wheel stays at the bottom forever. Your luck will change â€” hold on." },
      { q: "Does Wheel of Fortune indicate fate or free will?", a: "Both â€” the wheel represents external forces and karma (fate), but the sphinx at the top represents wisdom and the ability to rise above circumstances through conscious choice (free will)." }
    ]
  }
];


const majorArcana3 = [
  {
    id: 11,
    name: "Justice",
    number: "XI",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    colors: ["Red", "Purple", "Yellow"],
    symbols: ["Scales (balance/fairness)", "Sword (truth/decision)", "Crown (authority)", "Purple veil (wisdom)", "Square on crown (clarity of thought)"],
    pictureDescription: "A crowned figure sits between two pillars, holding a sword upright in one hand and balanced scales in the other. A purple veil hangs behind them. Their expression is calm and impartial.",
    keywords: ["Justice", "Fairness", "Truth", "Cause and effect", "Law"],
    upright: "Justice, fairness, truth, cause and effect, law, accountability",
    reversed: "Unfairness, lack of accountability, dishonesty, legal complications",
    aspects: {
      past: "A past action or decision is now returning its consequences â€” karma is completing its cycle.",
      present: "A situation requires honest evaluation. Face the truth clearly and act with integrity.",
      future: "A fair outcome is coming. What you have put out will return to you in equal measure.",
      career: "Legal matters, contracts, or performance reviews are highlighted. Act with integrity and document everything.",
      health: "Balance in lifestyle is essential. Examine what is out of equilibrium â€” diet, rest, stress.",
      relationship: "Fairness and honesty are needed. If one person is giving more than the other, this imbalance must be addressed.",
      dailyGuidance: "Make one decision today based purely on what is right, not what is convenient."
    },
    practiceQuestions: [
      { q: "Will justice be served in my situation?", a: "Yes â€” Justice indicates that truth will prevail and outcomes will be proportional to actions taken. Karma is at work." },
      { q: "Why does Justice hold both a sword and scales?", a: "The scales represent weighing all sides fairly; the sword represents the decisive, impartial cut of truth. Together they show that fair judgment requires both balance and clarity." },
      { q: "Does Justice mean I will win my legal case?", a: "Justice favors the side with truth and integrity. If your case is honest and well-documented, this card is very positive for legal matters." },
      { q: "I feel I was treated unfairly. What does Justice say?", a: "Justice reversed can validate that an injustice occurred. It encourages you to seek accountability through proper channels and to document the truth clearly." },
      { q: "Is Justice about karma?", a: "Absolutely â€” Justice is the karmic card of the Major Arcana. It says: every action has an equal and proportional consequence. What you send out returns." }
    ]
  },
  {
    id: 12,
    name: "The Hanged Man",
    number: "XII",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    colors: ["Blue", "Red", "Yellow"],
    symbols: ["Inverted figure (new perspective)", "Halo of light (enlightenment)", "T-shaped cross (sacrifice)", "Calm expression (acceptance)", "One leg crossed (number 4 â€” stability in surrender)"],
    pictureDescription: "A man hangs upside down from a T-shaped wooden cross by one foot. His other leg is bent, forming a figure-4. His expression is serene, not pained. A golden halo surrounds his head.",
    keywords: ["Surrender", "Pause", "New perspective", "Sacrifice", "Waiting"],
    upright: "Pause, surrender, letting go, new perspectives, sacrifice for greater good",
    reversed: "Delays, resistance, stalling, martyrdom, indecision",
    aspects: {
      past: "A period of waiting or sacrifice in the past gave you a perspective that others around you simply don't have.",
      present: "Stop pushing. Surrender to the pause. The answer will come when you stop forcing it.",
      future: "A period of waiting is ahead â€” use it for deep reflection. What you learn in stillness will change everything.",
      career: "A project or opportunity is on hold. Use this time to rethink your approach from a completely new angle.",
      health: "Rest is not weakness â€” it is medicine. Your body is asking you to stop and let it heal.",
      relationship: "Something is in suspension. Don't force a resolution. Let things unfold naturally.",
      dailyGuidance: "Do nothing about your biggest problem today. Simply observe it from a different angle."
    },
    practiceQuestions: [
      { q: "Does The Hanged Man mean I am stuck?", a: "Not exactly stuck â€” more like deliberately paused. The Hanged Man chooses to hang there for enlightenment. The question is: what can you see from this upside-down view?" },
      { q: "Why does The Hanged Man look peaceful?", a: "Because he has chosen surrender. He is not a victim â€” he is a willing sacrifice for greater wisdom. Peace comes from accepting what cannot be changed right now." },
      { q: "How long will this waiting period last?", a: "The Hanged Man doesn't give timelines, but it says: the waiting ends when the lesson is learned. Stop resisting and the pause will lift." },
      { q: "Is The Hanged Man a bad card?", a: "No â€” it is a card of profound wisdom. It asks you to see your situation from a completely different perspective. The discomfort is temporary; the insight is permanent." },
      { q: "What sacrifice does The Hanged Man represent?", a: "It represents the sacrifice of ego, urgency, and control. You give up the need to act immediately in exchange for deeper understanding and a better outcome." }
    ]
  },
  {
    id: 13,
    name: "Death",
    number: "XIII",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    colors: ["Black", "White", "Yellow"],
    symbols: ["White horse (purity of transformation)", "Black armor (invincibility of change)", "White rose flag (purity/new life)", "Rising sun (rebirth)", "Bishop (spiritual authority bowing to change)", "Fallen king (no one escapes transformation)"],
    pictureDescription: "A skeleton in black armor rides a white horse. Before it, a king lies fallen, a bishop prays, a child offers flowers, and a woman looks away. In the background, the sun rises between two towers.",
    keywords: ["Transformation", "Endings", "Change", "Transition", "Letting go"],
    upright: "Endings, beginnings, change, transformation, transition, letting go",
    reversed: "Resistance to change, inability to move on, stagnation, fear of endings",
    aspects: {
      past: "Something significant ended in your past â€” a relationship, phase, or identity. That ending made space for who you are now.",
      present: "Something is ending. Don't cling to it. This ending is necessary for your evolution.",
      future: "A major transformation is coming. What dies will make room for something far better.",
      career: "A job, role, or career path is ending. This is not failure â€” it is evolution. Something better is being born.",
      health: "Old habits that harm your health must die. A significant health transformation is possible.",
      relationship: "A relationship or phase within one is ending. This may be painful but it is necessary for growth.",
      dailyGuidance: "Identify one thing you need to let die today â€” a habit, a belief, a grudge. Release it with gratitude."
    },
    practiceQuestions: [
      { q: "Does the Death card mean someone will die?", a: "Almost never literally. The Death card represents transformation, endings, and the death of old patterns. It is one of the most misunderstood cards in tarot." },
      { q: "Why is the horse white if Death is dark?", a: "The white horse represents the purity and inevitability of transformation. Change is not evil â€” it is natural and necessary. The white color shows that what comes after is clean and new." },
      { q: "I am afraid of change. What does Death say to me?", a: "Death says: your fear of endings is keeping you trapped in something that no longer serves you. The caterpillar must dissolve completely to become the butterfly. Trust the process." },
      { q: "Is Death a good card for new beginnings?", a: "Yes â€” Death is actually one of the best cards for new beginnings, because it guarantees that the old is truly cleared away. You cannot build something new on a foundation that hasn't been cleared." },
      { q: "Why does the sun rise in the Death card?", a: "The rising sun between the towers represents rebirth and hope. Even in the darkest ending, a new dawn is already beginning. Death is never the final word." }
    ]
  },
  {
    id: 14,
    name: "Temperance",
    number: "XIV",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    colors: ["White", "Blue", "Yellow"],
    symbols: ["Two cups (flow between opposites)", "One foot on land, one in water (balance of material and spiritual)", "Triangle in square (divine in earthly)", "Path to crown (spiritual journey)", "Iris flowers (rainbow/hope)", "Angel wings (divine guidance)"],
    pictureDescription: "A winged angel stands with one foot on land and one in water, pouring liquid between two golden cups. A triangle is inscribed in a square on their white robe. A golden crown glows on a path in the background.",
    keywords: ["Balance", "Moderation", "Patience", "Purpose", "Alchemy"],
    upright: "Balance, moderation, patience, purpose, meaning, alchemy of opposites",
    reversed: "Imbalance, excess, lack of long-term vision, discord",
    aspects: {
      past: "A period of balance and patient effort in the past created a foundation of quiet strength.",
      present: "Find the middle path. You are being called to blend opposites â€” logic and intuition, action and rest.",
      future: "Through patience and balance, something beautiful is being alchemized in your life.",
      career: "A balanced, patient approach to work will yield the best results. Avoid extremes and rushing.",
      health: "Moderation is the key to healing. Balance activity with rest, nutrition with enjoyment.",
      relationship: "A harmonious, balanced relationship is indicated. Blend your differences rather than fighting them.",
      dailyGuidance: "Find one area of your life that is extreme and bring it toward the middle today."
    },
    practiceQuestions: [
      { q: "Is Temperance a positive card?", a: "Yes â€” Temperance is deeply positive, indicating that you are on the right path and that patience and balance will bring beautiful results." },
      { q: "What does the angel pouring between two cups mean?", a: "It represents the alchemical blending of opposites â€” conscious and unconscious, masculine and feminine, spiritual and material. True wisdom flows between extremes." },
      { q: "Why does the angel have one foot in water and one on land?", a: "This represents the balance between the emotional/spiritual realm (water) and the physical/material world (land). Temperance asks you to honor both." },
      { q: "I keep going to extremes. What does Temperance say?", a: "Temperance is speaking directly to you. It says: the middle path is not boring â€” it is where true power lives. Extremes exhaust you; balance sustains you." },
      { q: "Does Temperance indicate a long wait?", a: "It can indicate that things are moving at the right pace, even if it feels slow. Temperance says: divine timing is at work. Trust the process and don't rush the alchemy." }
    ]
  },
  {
    id: 15,
    name: "The Devil",
    number: "XV",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    colors: ["Black", "Red", "Yellow"],
    symbols: ["Baphomet figure (shadow self)", "Loose chains (bondage is chosen)", "Inverted pentagram (materialism over spirit)", "Torch (destructive fire)", "Naked figures (vulnerability to shadow)", "Bat wings (darkness/night)"],
    pictureDescription: "A horned, bat-winged figure sits on a black pedestal. Two naked human figures are chained to it, but the chains are loose enough to remove. An inverted pentagram hangs above. The figures have small horns and tails.",
    keywords: ["Shadow self", "Addiction", "Materialism", "Bondage", "Illusion"],
    upright: "Shadow self, attachment, addiction, restriction, materialism, illusion of bondage",
    reversed: "Releasing limiting beliefs, exploring dark thoughts safely, detachment, freedom",
    aspects: {
      past: "A past addiction, toxic relationship, or limiting belief held you captive. Recognizing it was the first step to freedom.",
      present: "You may be in a situation that feels inescapable â€” but look closely. The chains are looser than they appear.",
      future: "You have the power to break free. The first step is recognizing that the bondage is partly self-imposed.",
      career: "A toxic work environment, unhealthy ambition, or financial obsession may be draining your soul. Examine what truly drives you.",
      health: "Addictive behaviors, unhealthy habits, or mental health shadows need honest attention. Seek help without shame.",
      relationship: "A relationship based on obsession, control, or unhealthy dependency is highlighted. Love should feel free, not trapped.",
      dailyGuidance: "Identify one thing that has power over you today. Name it honestly â€” that naming is the beginning of freedom."
    },
    practiceQuestions: [
      { q: "Does The Devil mean something evil is happening?", a: "No â€” The Devil represents our own shadow: addictions, obsessions, and the parts of ourselves we refuse to look at. It is a call to self-awareness, not a sign of evil." },
      { q: "Why are the chains loose in The Devil card?", a: "The loose chains are the most important detail in the card. They show that the bondage is largely self-imposed. You could remove the chains â€” but you haven't yet chosen to." },
      { q: "I feel trapped in my relationship. What does The Devil say?", a: "The Devil asks: what is keeping you there? Fear? Comfort? Habit? The chains are loose. The first step to freedom is honestly naming what holds you." },
      { q: "Is The Devil about literal evil or the devil?", a: "Neither â€” The Devil is a psychological archetype representing the shadow self, materialism, and the illusions we create that keep us small. It is about inner work, not external evil." },
      { q: "What is the positive message of The Devil?", a: "The positive message is radical self-honesty. By facing your shadows, addictions, and illusions without judgment, you reclaim enormous personal power. The Devil reversed is liberation." }
    ]
  }
];

const majorArcana4 = [
  {
    id: 16,
    name: "The Tower",
    number: "XVI",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    colors: ["Black", "Red", "Yellow"],
    symbols: ["Lightning bolt (sudden divine revelation)", "Crown blown off (ego destroyed)", "Falling figures (loss of false security)", "Flames (purification)", "Dark sky (chaos)"],
    pictureDescription: "A tall stone tower is struck by lightning. Its crown is blown off. Two figures fall headfirst from the tower into darkness below. Flames burst from the windows. The sky is black.",
    keywords: ["Sudden change", "Upheaval", "Revelation", "Chaos", "Awakening"],
    upright: "Sudden change, upheaval, chaos, revelation, awakening, destruction of false structures",
    reversed: "Fear of change, averting disaster, delaying the inevitable, personal transformation",
    aspects: {
      past: "A sudden upheaval in the past destroyed something you thought was permanent and ultimately freed you.",
      present: "Something is collapsing. Do not try to hold it together if it was built on a false foundation.",
      future: "A sudden disruption is coming. It will feel chaotic but it is clearing the way for something real.",
      career: "A sudden job loss or career disruption may occur. What falls was not built to last.",
      health: "A sudden health revelation demands immediate attention. Do not ignore warning signs.",
      relationship: "A sudden revelation or rupture in a relationship. What was hidden is now exposed.",
      dailyGuidance: "What false structure in your life needs to fall? Sometimes the most loving thing the universe does is knock down what is not real."
    },
    practiceQuestions: [
      { q: "Is The Tower the worst card in tarot?", a: "It is the most dramatic but not the worst. The Tower destroys what is false so that something real can be built. The pain is real but so is the liberation that follows." },
      { q: "Why is the crown blown off the tower?", a: "The crown represents ego and false authority. The lightning of divine truth destroys the ego's illusions. What you thought was your identity is revealed as a construct." },
      { q: "Does The Tower mean my relationship will end suddenly?", a: "It can indicate a sudden revelation or rupture. But ask: was the relationship built on truth? If yes it can survive. If it was built on illusion The Tower is clearing the way for something real." },
      { q: "I am terrified of The Tower appearing. What should I know?", a: "The Tower only destroys what was never truly solid. After The Tower comes The Star which brings hope healing and a fresh start." },
      { q: "What comes after The Tower?", a: "The Star (XVII) which is one of the most hopeful cards in tarot. After the Tower's destruction comes renewal hope and the chance to rebuild on a foundation of truth." }
    ]
  },
  {
    id: 17,
    name: "The Star",
    number: "XVII",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    colors: ["Blue", "Yellow", "White"],
    symbols: ["Eight-pointed star (Venus/hope)", "Seven smaller stars (chakras)", "Two jugs (conscious and unconscious)", "Naked figure (vulnerability/authenticity)", "Bird in tree (wisdom)", "Lush landscape (renewal)"],
    pictureDescription: "A naked woman kneels by a pool pouring water from two jugs. Above her shines one large eight-pointed star surrounded by seven smaller stars. A bird perches in a tree behind her.",
    keywords: ["Hope", "Renewal", "Inspiration", "Serenity", "Cosmic guidance"],
    upright: "Hope, faith, renewal, inspiration, serenity, cosmic guidance, healing after hardship",
    reversed: "Hopelessness, despair, lack of faith, disconnection from spirit",
    aspects: {
      past: "After a difficult period you found hope again. That renewal gave you a faith that cannot be easily shaken.",
      present: "You are in a period of healing and renewal. Allow yourself to receive the universe's gifts with open hands.",
      future: "Hope is justified. A beautiful period of healing inspiration and spiritual connection is coming.",
      career: "Inspiration and creative renewal in your work. A dream career path is becoming possible.",
      health: "Healing is happening even if slowly. Trust the process. Your body and spirit are being restored.",
      relationship: "A relationship filled with hope authenticity and spiritual connection. Vulnerability is safe here.",
      dailyGuidance: "Look up at the sky tonight. Remember you are part of something vast and beautiful. Let hope back in."
    },
    practiceQuestions: [
      { q: "Is The Star a yes card?", a: "Yes. The Star is one of the most positive yes cards in tarot especially for healing hope and long-term dreams." },
      { q: "Why is the woman naked in The Star?", a: "Nakedness represents complete authenticity and vulnerability. After the Tower's destruction of ego she stands before the universe with nothing to hide and that is her greatest strength." },
      { q: "What does the large eight-pointed star represent?", a: "The eight-pointed star is associated with Venus and represents hope beauty and divine guidance. Eight also represents infinity and cycles." },
      { q: "I have lost all hope. What does The Star say?", a: "The Star says: hope is not gone. It is waiting for you to look up. You have survived the Tower. The Star always follows. Your healing has already begun even if you cannot feel it yet." },
      { q: "What is the connection between The Tower and The Star?", a: "They are sequential for a reason. The Tower destroys false structures. The Star heals and rebuilds. You cannot have the Star's authentic hope without first having the Tower's honest destruction." }
    ]
  },
  {
    id: 18,
    name: "The Moon",
    number: "XVIII",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    colors: ["Blue", "Yellow", "Gray"],
    symbols: ["Full moon with face (illusion/subconscious)", "Dog and wolf (tame and wild nature)", "Crayfish emerging (subconscious rising)", "Two towers (threshold between worlds)", "Path (journey through the unknown)"],
    pictureDescription: "A full moon with a human face shines over a landscape. A dog and a wolf howl at it from either side of a path. A crayfish emerges from a pool. Two towers stand in the distance.",
    keywords: ["Illusion", "Fear", "Subconscious", "Confusion", "The unknown"],
    upright: "Illusion, fear, the subconscious, confusion, the unknown, hidden truths",
    reversed: "Release of fear, repressed emotions surfacing, clarity emerging from confusion",
    aspects: {
      past: "A period of confusion or illusion in the past taught you to trust your instincts over appearances.",
      present: "Things are not as they appear. Your fears and subconscious are projecting onto reality. Seek clarity before acting.",
      future: "A period of uncertainty is ahead. Navigate it by trusting your intuition not your fears.",
      career: "Deception or confusion in the workplace is possible. Do not make major decisions until the fog clears.",
      health: "Mental health anxiety and sleep issues are highlighted. The subconscious is speaking through the body.",
      relationship: "Something is hidden or unclear in this relationship. Trust your gut but do not let fear create illusions.",
      dailyGuidance: "Notice what fears are distorting your perception today. Ask: is this real or is this my mind creating monsters in the dark?"
    },
    practiceQuestions: [
      { q: "Does The Moon mean someone is lying to me?", a: "The Moon indicates that things are unclear and not fully revealed. It could be deception but it could also be your own fears creating illusions. Seek more information before concluding." },
      { q: "Why are there both a dog and a wolf in The Moon?", a: "The dog represents the tamed domesticated mind. The wolf represents the wild instinctual nature. Both howl at the moon showing that both our rational and primal selves are confused by illusion." },
      { q: "What does the crayfish emerging from the pool mean?", a: "The crayfish represents subconscious content rising to the surface. The Moon brings hidden fears memories and instincts up from the depths of the unconscious mind." },
      { q: "I am having vivid dreams and anxiety. Is The Moon relevant?", a: "Absolutely. The Moon governs dreams the subconscious and anxiety. It says: pay attention to your dreams. Your subconscious is trying to communicate something important." },
      { q: "How do I navigate The Moon's energy?", a: "Trust your intuition over your fears. Journal your dreams. Avoid major decisions until clarity returns. The Moon's confusion is temporary. The Sun always rises after the Moon." }
    ]
  }
];

const majorArcana5 = [
  {
    id: 19,
    name: "The Sun",
    number: "XIX",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    colors: ["Yellow", "Red", "White"],
    symbols: ["Radiant sun (consciousness/vitality)", "Child on horse (innocence/joy)", "Sunflowers (solar energy/abundance)", "Red banner (victory/passion)", "White horse (purity of spirit)"],
    pictureDescription: "A naked child rides a white horse beneath a blazing sun. Sunflowers grow behind a stone wall. The child holds a red banner and radiates pure joy. The sun has a human face and shines with both straight and wavy rays.",
    keywords: ["Joy", "Success", "Vitality", "Clarity", "Abundance"],
    upright: "Joy, success, positivity, vitality, clarity, abundance, confidence, truth",
    reversed: "Temporary depression, lack of success, sadness, pessimism",
    aspects: {
      past: "A golden period of joy success and clarity in your past showed you what life can feel like at its best.",
      present: "You are in or entering a period of genuine joy and success. Let yourself shine without apology.",
      future: "Success happiness and clarity are coming. This is one of the most positive futures tarot can show.",
      career: "Outstanding success recognition and achievement in your career. Your talents are shining brightly.",
      health: "Excellent vitality and health. If recovering full restoration is indicated. Energy and joy return.",
      relationship: "A joyful warm and loving relationship. Happiness playfulness and genuine connection.",
      dailyGuidance: "Do one thing today that brings you pure uncomplicated joy. Let yourself be happy without guilt."
    },
    practiceQuestions: [
      { q: "Is The Sun the best card in tarot?", a: "It is one of the most universally positive cards. The Sun brings joy success clarity and vitality. In almost any context it is a very welcome card." },
      { q: "Why is the child naked in The Sun?", a: "Nakedness represents pure unashamed joy and authenticity. The child has nothing to hide and nothing to fear. This is the energy of The Sun: radiant open and free." },
      { q: "Does The Sun guarantee success?", a: "The Sun is the strongest success indicator in tarot. While no card is an absolute guarantee The Sun says: conditions are excellent your energy is aligned and success is the natural outcome." },
      { q: "I have been depressed for a long time. What does The Sun say?", a: "The Sun says: this darkness is not permanent. The sun rises every single day without fail. Your joy is not gone. It is waiting. This card is a promise that light is returning to your life." },
      { q: "What is the difference between The Sun and The Star?", a: "The Star brings hope and healing after hardship. It is gentle and restorative. The Sun is full radiant achievement and joy. It is the full bloom after The Star's renewal." }
    ]
  },
  {
    id: 20,
    name: "Judgement",
    number: "XX",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    colors: ["Blue", "White", "Red"],
    symbols: ["Angel Gabriel (divine calling)", "Trumpet (awakening call)", "Rising figures (resurrection/rebirth)", "Red cross on banner (divine authority)", "Mountains (permanence/obstacles overcome)"],
    pictureDescription: "The angel Gabriel blows a trumpet from the clouds. Below naked figures rise from coffins with arms outstretched. Mountains rise in the background. A red cross adorns the angel's white banner.",
    keywords: ["Awakening", "Rebirth", "Calling", "Absolution", "Transformation"],
    upright: "Judgement, rebirth, inner calling, absolution, awakening, major life evaluation",
    reversed: "Self-doubt, refusal of the call, ignoring inner voice, fear of change",
    aspects: {
      past: "A major awakening or calling in your past changed the direction of your life permanently.",
      present: "You are being called to rise. Something within you is awakening that cannot be put back to sleep.",
      future: "A profound awakening and life evaluation is coming. You will be called to step into your highest purpose.",
      career: "A calling to your true vocation is sounding. Are you listening? This is not the time to ignore your purpose.",
      health: "A health awakening perhaps a diagnosis that changes everything or a breakthrough in healing.",
      relationship: "A relationship is being evaluated at the deepest level. Is this truly your person? The answer is becoming clear.",
      dailyGuidance: "Listen for the call today. What has been whispering to you that you have been ignoring? It is time to answer."
    },
    practiceQuestions: [
      { q: "Does Judgement mean I will be judged negatively?", a: "No. Judgement is about self-evaluation and divine calling not punishment. It asks: are you living in alignment with your highest self? It is an invitation to rise not a condemnation." },
      { q: "Why are people rising from coffins in Judgement?", a: "The coffins represent the death of the old self. Rising from them symbolizes rebirth: the awakening of a new more authentic version of yourself in response to a higher calling." },
      { q: "What is the trumpet calling me to do?", a: "The trumpet calls you to wake up to your true purpose to evaluate your life honestly and to rise above the limitations of your past self. It is the universe saying: it is time." },
      { q: "I feel like I am at a major crossroads. Is Judgement relevant?", a: "Absolutely. Judgement appears at major life crossroads where a deep evaluation is required. It says: look at your life honestly hear your calling clearly and make the choice that aligns with your soul." },
      { q: "What is the difference between Judgement and The World?", a: "Judgement is the awakening and the call: the moment of rising. The World is the completion: the moment of full integration and achievement. Judgement is the penultimate step before wholeness." }
    ]
  },
  {
    id: 21,
    name: "The World",
    number: "XXI",
    arcana: "Major",
    suit: null,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    colors: ["Purple", "Green", "Yellow"],
    symbols: ["Dancing figure (freedom/completion)", "Laurel wreath (victory)", "Two wands (mastery)", "Four creatures in corners (four elements/fixed signs)", "Purple sash (wisdom)"],
    pictureDescription: "A dancing figure wrapped in a purple sash is encircled by a laurel wreath. In each corner a winged creature watches: a man an eagle a lion and a bull. The figure holds two wands.",
    keywords: ["Completion", "Integration", "Wholeness", "Achievement", "The world"],
    upright: "Completion, integration, accomplishment, travel, wholeness, the end of a major cycle",
    reversed: "Incompletion, shortcuts, delays in completion, lack of closure",
    aspects: {
      past: "You have completed a major cycle. Everything you have been through has led to this moment of wholeness.",
      present: "You are at or near the completion of something significant. Celebrate. You have earned this.",
      future: "Total completion and success are coming. A major life chapter is reaching its perfect conclusion.",
      career: "The pinnacle of achievement in your career. A major project degree or goal is being completed successfully.",
      health: "Full health and vitality. A long healing journey reaches completion. Wholeness is restored.",
      relationship: "A relationship reaches a beautiful completion: perhaps marriage deep commitment or perfect harmony.",
      dailyGuidance: "Acknowledge how far you have come today. You are not where you started. Honor your journey."
    },
    practiceQuestions: [
      { q: "Is The World the best possible outcome?", a: "Yes. The World represents the highest possible completion and success. It is the final card of the Major Arcana and signifies total achievement integration and wholeness." },
      { q: "What do the four creatures in the corners of The World mean?", a: "They represent the four fixed zodiac signs (Taurus Leo Scorpio Aquarius) and the four elements. Together they represent the totality of existence: all of life witnessed and integrated." },
      { q: "Does The World indicate international travel?", a: "Yes. The World is one of the strongest travel cards in tarot often indicating international travel relocation or a global expansion of your world." },
      { q: "I feel like I have achieved nothing. What does The World say?", a: "The World says: look again. You have completed more than you realize. This card asks you to acknowledge your journey not just your destination. Every step was part of the completion." },
      { q: "What happens after The World?", a: "After The World the cycle begins again with The Fool (0). This is the beauty of tarot: completion is not an ending but a return to new beginnings at a higher level of wisdom." }
    ]
  }
];

const allCards = [...majorArcana, ...majorArcana2, ...majorArcana3, ...majorArcana4, ...majorArcana5];
module.exports = { tarotData, allCards };

// ── MINOR ARCANA: SUIT OF CUPS ──────────────────────────────────────────────
const cupsCards = [
  {
    id: 22,
    name: "Ace of Cups",
    number: "Ace",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    colors: ["White", "Blue", "Gold"],
    symbols: ["Overflowing cup (divine love)", "Dove with wafer (Holy Spirit/peace)", "Five streams (five senses)", "Lotus blossoms (spiritual awakening)", "Hand from cloud (divine gift)"],
    pictureDescription: "A hand emerges from a cloud holding a golden chalice overflowing with five streams of water. A dove descends carrying a wafer. Lotus blossoms float on the water below.",
    keywords: ["New love", "Emotional beginnings", "Intuition", "Spiritual gifts", "Compassion"],
    upright: "New love, emotional beginnings, intuition, spiritual gifts, compassion, creativity",
    reversed: "Emotional loss, blocked creativity, emptiness, repressed feelings",
    aspects: {
      past: "A profound emotional opening or spiritual gift was offered to you. Whether you received it fully shaped your emotional world.",
      present: "A new emotional beginning is being offered right now. Open your heart and receive it.",
      future: "A beautiful new emotional chapter is coming — love, creativity, or spiritual awakening.",
      career: "Creative inspiration and emotional fulfillment in work. A new project that truly moves you is beginning.",
      health: "Emotional healing is available. Open yourself to receiving care and nurturing.",
      relationship: "A new love or a profound deepening of an existing relationship. Pure, unconditional love is present.",
      dailyGuidance: "Open your heart today. Say yes to love, beauty, and emotional connection in whatever form it arrives."
    },
    practiceQuestions: [
      { q: "Is Ace of Cups a yes card?", a: "Yes — it is one of the most positive yes cards for love, relationships, and emotional matters." },
      { q: "What does the overflowing cup symbolize?", a: "The overflowing cup represents divine love that cannot be contained — it pours out freely and abundantly. It shows that emotional gifts are being given without limit." },
      { q: "Does Ace of Cups indicate a new relationship?", a: "Yes — it is the strongest card for new romantic beginnings. It can also indicate a new friendship, creative project, or spiritual opening." },
      { q: "What does the dove in Ace of Cups mean?", a: "The dove represents the Holy Spirit, peace, and divine blessing. It shows that this new emotional beginning is spiritually guided and blessed from above." },
      { q: "I feel emotionally numb. What does Ace of Cups say?", a: "Ace of Cups reversed speaks to this directly. It says: the cup is still there, but something is blocking the flow. Gently explore what is preventing you from receiving love and feeling." }
    ]
  },
  {
    id: 23,
    name: "Two of Cups",
    number: "2",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
    colors: ["Red", "Blue", "Gold"],
    symbols: ["Two figures exchanging cups (mutual love)", "Caduceus (healing/balance)", "Lion head (passion/strength)", "Wings (spiritual elevation)", "Laurel wreaths (victory/honor)"],
    pictureDescription: "A man and woman face each other, each holding a cup and exchanging them. Between them rises a caduceus topped with a winged lion head. Both wear laurel wreaths.",
    keywords: ["Partnership", "Mutual attraction", "Connection", "Harmony", "Union"],
    upright: "Unified love, partnership, mutual attraction, connection, harmony, soulmate energy",
    reversed: "Imbalance in relationship, broken communication, one-sided love, separation",
    aspects: {
      past: "A significant partnership or deep connection in your past showed you what true mutual love feels like.",
      present: "A beautiful mutual connection is present. Two people are coming together in harmony and equal exchange.",
      future: "A meaningful partnership or deepening of a bond is coming. Mutual love and respect will define it.",
      career: "A powerful business partnership or creative collaboration is forming. This alliance will be mutually beneficial.",
      health: "Emotional balance and harmonious relationships directly support your physical wellbeing.",
      relationship: "This is the soulmate card. Deep mutual love, attraction, and a relationship built on equal giving and receiving.",
      dailyGuidance: "Reach out to someone you care about today. True connection requires two people to show up equally."
    },
    practiceQuestions: [
      { q: "Is Two of Cups the soulmate card?", a: "Yes — Two of Cups is widely considered the soulmate or twin flame card in tarot. It represents the deepest form of mutual love and soul recognition." },
      { q: "What does the caduceus between the two figures mean?", a: "The caduceus (two serpents on a staff) represents healing, balance, and the harmonious union of opposites. It shows that this relationship has a healing and elevating effect on both people." },
      { q: "Does Two of Cups always mean romantic love?", a: "No — it can represent any deeply meaningful partnership: a best friendship, a business partnership, or a creative collaboration. The key is mutual respect and equal exchange." },
      { q: "My relationship feels one-sided. What does this card say?", a: "Two of Cups reversed speaks to this. It says: true partnership requires equal giving. If one person is giving more, the balance needs to be addressed through honest communication." },
      { q: "What is the difference between Two of Cups and The Lovers?", a: "Two of Cups is about a specific human-to-human bond — intimate, personal, and mutual. The Lovers is broader, covering choices, values alignment, and divine blessing of a union." }
    ]
  },
  {
    id: 24,
    name: "Three of Cups",
    number: "3",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Cups03.jpg",
    colors: ["Red", "Yellow", "White"],
    symbols: ["Three women dancing (community/celebration)", "Raised cups (toast/joy)", "Harvest fruits (abundance)", "Flower garlands (nature/festivity)", "Flowing robes (freedom/emotion)"],
    pictureDescription: "Three women dance in a circle, each raising a golden cup in celebration. They are surrounded by harvest fruits and flowers. Their robes flow freely as they celebrate together.",
    keywords: ["Celebration", "Friendship", "Community", "Joy", "Reunion"],
    upright: "Celebration, friendship, creativity, community, joy, reunion, abundance",
    reversed: "Overindulgence, gossip, isolation, cancelled celebrations, third-party interference",
    aspects: {
      past: "A joyful celebration, reunion, or period of deep friendship enriched your life and reminded you of the power of community.",
      present: "Celebrate! Something worth honoring is happening. Gather your people and share the joy.",
      future: "A celebration, reunion, or joyful gathering is coming. Good news will be shared with loved ones.",
      career: "Team success, office celebrations, or creative collaborations that bring genuine joy are highlighted.",
      health: "Social connection and laughter are medicine. Spend time with people who lift your spirit.",
      relationship: "Joyful social connections, celebrations with loved ones, or a relationship that brings happiness to your whole community.",
      dailyGuidance: "Celebrate something today — even something small. Call a friend. Share good news. Let joy be communal."
    },
    practiceQuestions: [
      { q: "Does Three of Cups indicate a party or celebration?", a: "Yes — Three of Cups is the celebration card. It often literally indicates a party, wedding, reunion, baby shower, or any joyful gathering." },
      { q: "What do the three women dancing represent?", a: "They represent the power of female friendship, community, and collective joy. Together they create something greater than any one of them could alone." },
      { q: "Does Three of Cups indicate a third person in a relationship?", a: "Reversed, yes — Three of Cups can indicate a third party interfering in a relationship. Upright it is purely celebratory and social." },
      { q: "I feel isolated. What does Three of Cups say?", a: "Three of Cups says: reach out. Your community is there — you just need to initiate. This card is a reminder that joy multiplies when it is shared." },
      { q: "Is Three of Cups a good card for creative projects?", a: "Yes — it represents creative collaboration and the joy of making something together. Group projects, creative teams, and artistic communities are all blessed by this card." }
    ]
  },
  {
    id: 25,
    name: "Four of Cups",
    number: "4",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg",
    colors: ["Green", "Blue", "Brown"],
    symbols: ["Figure under tree (contemplation/withdrawal)", "Three cups on ground (what is known)", "Cup from cloud (new offer being ignored)", "Crossed arms (closed off)", "Tree (stability/rootedness)"],
    pictureDescription: "A young man sits under a tree with arms crossed, staring at three cups on the ground before him. A hand emerges from a cloud offering a fourth cup, which he appears not to notice.",
    keywords: ["Contemplation", "Apathy", "Reevaluation", "Withdrawal", "Missed opportunity"],
    upright: "Meditation, contemplation, apathy, reevaluation, disconnection, missed opportunity",
    reversed: "Sudden awareness, choosing to engage, new motivation, end of apathy",
    aspects: {
      past: "A period of withdrawal or emotional disengagement in the past may have caused you to miss an opportunity that was right in front of you.",
      present: "You may be so focused on what you lack that you are missing what is being offered. Look up.",
      future: "A new opportunity will be presented. Make sure you are open enough to see and receive it.",
      career: "Boredom or dissatisfaction at work is present. But a new opportunity may be closer than you think — are you open to it?",
      health: "Emotional withdrawal and apathy can affect physical energy. Reconnect with what brings you joy.",
      relationship: "You or your partner may be emotionally withdrawn. The connection is there — but someone needs to re-engage.",
      dailyGuidance: "Look up from your current dissatisfaction today. Something new is being offered. Are you open enough to see it?"
    },
    practiceQuestions: [
      { q: "Is Four of Cups a negative card?", a: "Not entirely — it represents a necessary period of contemplation and reevaluation. The danger is staying in apathy so long that you miss real opportunities." },
      { q: "What does the cup from the cloud represent?", a: "The cup from the cloud is a divine offer or new opportunity being presented. The figure's crossed arms and downward gaze show he is too absorbed in his own thoughts to notice it." },
      { q: "Why does the figure ignore the offered cup?", a: "He is in a state of emotional withdrawal and self-absorption. He is so focused on what he already has (or lacks) that he cannot see the new gift being offered." },
      { q: "I feel bored and unmotivated. What does Four of Cups say?", a: "Four of Cups validates your feeling but also challenges you: is this boredom a sign you need to rest and reflect, or is it apathy keeping you from something wonderful? Look for the cup from the cloud." },
      { q: "What is the positive message of Four of Cups?", a: "The positive message is that contemplation and withdrawal can be valuable — they allow you to clarify what you truly want. The key is not to stay there so long that you miss what life is offering." }
    ]
  },
  {
    id: 26,
    name: "Five of Cups",
    number: "5",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg",
    colors: ["Black", "Blue", "Brown"],
    symbols: ["Cloaked figure (grief/mourning)", "Three spilled cups (loss/regret)", "Two standing cups (what remains)", "Bridge (path forward)", "Castle (security/home)", "River (emotion/time)"],
    pictureDescription: "A cloaked figure stands hunched over three spilled cups, staring at the loss. Behind them, two cups still stand upright. A bridge crosses a river in the background, leading to a distant castle.",
    keywords: ["Loss", "Grief", "Regret", "Disappointment", "Focusing on the negative"],
    upright: "Regret, failure, disappointment, pessimism, grief, focusing on loss",
    reversed: "Moving on, acceptance, finding peace, forgiveness, new perspective after grief",
    aspects: {
      past: "A significant loss or disappointment in the past left a mark. The grief was real — but so are the two cups still standing.",
      present: "You are grieving a loss. This is valid and necessary. But do not forget what still remains.",
      future: "The grief will pass. When you turn around, you will see what has survived and what new path awaits.",
      career: "A professional setback, failed project, or job loss is causing grief. But not everything is lost — reassess what remains.",
      health: "Grief and emotional pain need to be processed, not suppressed. Allow yourself to feel it fully so it can move through you.",
      relationship: "A relationship loss or disappointment is being mourned. Give yourself time to grieve, then look at what love still remains.",
      dailyGuidance: "Acknowledge your grief today — it is real. Then gently turn around and look at the two cups still standing. Not everything is lost."
    },
    practiceQuestions: [
      { q: "Does Five of Cups mean something bad will happen?", a: "It indicates a loss or disappointment has occurred or is being felt. But its most important message is the two standing cups — not everything is lost, and a path forward exists." },
      { q: "What do the two standing cups behind the figure mean?", a: "They represent what has survived the loss — the blessings, relationships, and resources that remain. The figure cannot see them because they are turned away, focused only on what was lost." },
      { q: "What does the bridge in Five of Cups represent?", a: "The bridge represents the path forward — the way to move from grief toward healing and a new beginning. It is there, waiting, whenever the figure is ready to turn around and walk toward it." },
      { q: "I cannot stop grieving a past relationship. What does this card say?", a: "Five of Cups honors your grief completely. But it also gently asks: are you so focused on what you lost that you cannot see what still remains? The bridge to healing is behind you." },
      { q: "Is Five of Cups about regret?", a: "Yes — regret is a core theme. It shows someone mourning what could have been. The lesson is to process the grief, learn from it, and then consciously choose to move forward rather than staying frozen in regret." }
    ]
  },
  {
    id: 27,
    name: "Six of Cups",
    number: "6",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg",
    colors: ["Yellow", "White", "Green"],
    symbols: ["Two children (innocence/nostalgia)", "Six cups with flowers (gifts/memories)", "Old village (the past/home)", "White flowers (purity/joy)", "Older figure walking away (moving on)"],
    pictureDescription: "Two children stand in a courtyard of an old village. One child offers the other a cup filled with white flowers. Five more flower-filled cups surround them. An older figure walks away in the background.",
    keywords: ["Nostalgia", "Childhood", "Innocence", "Happy memories", "Reunion"],
    upright: "Nostalgia, childhood memories, innocence, joy, reunion, gifts from the past",
    reversed: "Stuck in the past, naivety, unrealistic idealism, leaving the past behind",
    aspects: {
      past: "Happy childhood memories, innocent joy, and the gifts of the past are a source of comfort and wisdom.",
      present: "Something from your past is returning — a person, a memory, or a childlike joy. Receive it with an open heart.",
      future: "A reunion, a return to something familiar, or a gift from the past is coming.",
      career: "Returning to work you loved as a child, or a career that reconnects you with your original passion.",
      health: "Healing through reconnecting with childhood joy, play, and innocence. Inner child work is powerful now.",
      relationship: "A reunion with someone from the past, or a relationship that has the innocent, pure quality of first love.",
      dailyGuidance: "Do something today that your childhood self would have loved. Reconnect with innocent joy and playfulness."
    },
    practiceQuestions: [
      { q: "Does Six of Cups mean someone from my past will return?", a: "Yes — Six of Cups is one of the strongest indicators of someone from the past returning, whether a childhood friend, an old flame, or a family member." },
      { q: "What do the flowers in the cups represent?", a: "The flowers represent gifts, memories, and the beauty of the past. They are offered freely and joyfully, showing that the past holds genuine treasures worth revisiting." },
      { q: "Is Six of Cups always about the past?", a: "Primarily yes, but it also speaks to innocence, generosity, and childlike joy in the present. It can indicate a gift being given or received, or a return to something that once brought pure happiness." },
      { q: "I keep thinking about my childhood. What does Six of Cups say?", a: "Six of Cups says: your childhood memories are calling you for a reason. There is something there — a joy, a gift, or an unhealed wound — that wants your attention. Honor it." },
      { q: "What is the shadow side of Six of Cups?", a: "The shadow is living too much in the past — idealizing what was and refusing to engage with the present. Nostalgia is beautiful in small doses but can become a prison if it prevents you from moving forward." }
    ]
  },
  {
    id: 28,
    name: "Seven of Cups",
    number: "7",
    arcana: "Minor",
    suit: "Cups",
    element: "Water",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
    colors: ["Purple", "Yellow", "Black"],
    symbols: ["Seven cups in clouds (fantasies/illusions)", "Silhouetted figure (confusion/choice)", "Castle (ambition)", "Jewels (wealth)", "Wreath (victory)", "Dragon (danger)", "Snake (wisdom/temptation)", "Veiled figure (mystery)"],
    pictureDescription: "A silhouetted figure stands before seven cups floating in clouds, each containing a different vision: a castle, jewels, a wreath, a dragon, a snake, a veiled figure, and a human face.",
    keywords: ["Illusion", "Fantasy", "Wishful thinking", "Choices", "Temptation"],
    upright: "Illusion, fantasy, wishful thinking, multiple choices, temptation, confusion",
    reversed: "Clarity, focus, choosing wisely, cutting through illusion, decisive action",
    aspects: {
      past: "A period of confusion, fantasy, or too many choices in the past may have led to indecision or illusion.",
      present: "You are overwhelmed by options or lost in fantasy. Not everything that glitters is real. Choose carefully.",
      future: "Clarity will come. When the fog of illusion lifts, you will see which cup holds what is truly real.",
      career: "Too many career options or unrealistic fantasies about work. Focus on what is genuinely achievable.",
      health: "Escapism, addictive behaviors, or avoidance of reality may be affecting your health. Face what is real.",
      relationship: "You may be idealizing a person or relationship. See them clearly, not through the lens of fantasy.",
      dailyGuidance: "Choose one thing today and commit to it. Stop entertaining every possibility and take one real step forward."
    },
    practiceQuestions: [
      { q: "Is Seven of Cups a bad card?", a: "Not inherently — it warns against illusion and wishful thinking, but it also shows the richness of imagination. The challenge is to choose one real path from the many fantasies." },
      { q: "What do the seven cups in the clouds represent?", a: "Each cup represents a different fantasy, desire, or illusion: wealth, victory, love, danger, wisdom, mystery, and ambition. They float in clouds because none of them are yet real — they are all possibilities." },
      { q: "I cannot make a decision. What does Seven of Cups say?", a: "Seven of Cups says: you are overwhelmed by possibilities. The solution is not more thinking — it is grounding. Ask yourself: which of these is real and which is fantasy? Then choose the real one." },
      { q: "Does Seven of Cups indicate addiction?", a: "It can — the card's themes of escapism, illusion, and fantasy can relate to addictive behaviors. It asks: what are you using to avoid facing reality?" },
      { q: "What is the positive message of Seven of Cups?", a: "The positive message is that you have a rich imagination and many possibilities before you. The key is to use that imagination to envision what you truly want, then take one concrete step toward making it real." }
    ]
  }
];
