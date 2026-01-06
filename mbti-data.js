// MBTI Nature Perspectives Data Structure
// Defines all 16 MBTI types with their nature perspectives

const mbtiData = [
  // Analysts (NT)
  {
    id: "INTJ",
    type: "INTJ",
    name: "Architect",
    category: "Analysts",
    perspective: "Nature as Systems and Patterns",
    description: "INTJs perceive nature as a complex system of interconnected patterns and principles. They find meaning in understanding natural laws and the strategic efficiency of ecosystems.",
    emotionalTone: "analytical",
    colorTheme: "#2c3e50"
  },
  {
    id: "INTP",
    type: "INTP",
    name: "Logician",
    category: "Analysts",
    perspective: "Nature as Intellectual Playground",
    description: "INTPs see nature as a vast laboratory for understanding how things work. They enjoy observing natural phenomena and contemplating the mechanisms behind natural processes.",
    emotionalTone: "curious",
    colorTheme: "#34495e"
  },
  {
    id: "ENTJ",
    type: "ENTJ",
    name: "Commander",
    category: "Analysts",
    perspective: "Nature as Strategic Space",
    description: "ENTJs experience nature as a place for strategic thinking and leadership reflection. They appreciate the efficiency and organization found in natural systems.",
    emotionalTone: "strategic",
    colorTheme: "#2c3e50"
  },
  {
    id: "ENTP",
    type: "ENTP",
    name: "Debater",
    category: "Analysts",
    perspective: "Nature as Innovation Source",
    description: "ENTPs view nature as an endless source of inspiration for new ideas and possibilities. They enjoy exploring novel outdoor experiences and creative interpretations of natural elements.",
    emotionalTone: "innovative",
    colorTheme: "#34495e"
  },
  // Diplomats (NF)
  {
    id: "INFJ",
    type: "INFJ",
    name: "Advocate",
    category: "Diplomats",
    perspective: "Nature as Spiritual Metaphor",
    description: "INFJs find deep symbolic meaning in nature, seeing it as a source of personal insights and spiritual connections. Natural elements often reflect their inner emotional states.",
    emotionalTone: "spiritual",
    colorTheme: "#8e44ad"
  },
  {
    id: "INFP",
    type: "INFP",
    name: "Mediator",
    category: "Diplomats",
    perspective: "Nature as Emotional Sanctuary",
    description: "INFPs experience nature as a healing space for self-reflection and emotional restoration. They seek authenticity and personal meaning in their interactions with the natural world.",
    emotionalTone: "healing",
    colorTheme: "#9b59b6"
  },
  {
    id: "ENFJ",
    type: "ENFJ",
    name: "Protagonist",
    category: "Diplomats",
    perspective: "Nature as Community Space",
    description: "ENFJs view nature as an ideal setting for meaningful connections with others. They enjoy sharing outdoor experiences and find harmony in group nature activities.",
    emotionalTone: "harmonious",
    colorTheme: "#8e44ad"
  },
  {
    id: "ENFP",
    type: "ENFP",
    name: "Campaigner",
    category: "Diplomats",
    perspective: "Nature as Inspirational Adventure",
    description: "ENFPs see nature as a source of wonder and excitement, constantly discovering new and beautiful aspects of the natural world that fuel their enthusiasm.",
    emotionalTone: "inspiring",
    colorTheme: "#9b59b6"
  },
  // Sentinels (SJ)
  {
    id: "ISTJ",
    type: "ISTJ",
    name: "Logistician",
    category: "Sentinels",
    perspective: "Nature as Reliable Order",
    description: "ISTJs appreciate nature's predictable rhythms and reliable patterns. They find comfort in the consistent cycles and dependable aspects of the natural world.",
    emotionalTone: "reliable",
    colorTheme: "#27ae60"
  },
  {
    id: "ISFJ",
    type: "ISFJ",
    name: "Protector",
    category: "Sentinels",
    perspective: "Nature as Nurturing Haven",
    description: "ISFJs experience nature as a protective and caring environment. They feel drawn to preserve and care for natural spaces, finding peace in their nurturing role.",
    emotionalTone: "nurturing",
    colorTheme: "#2ecc71"
  },
  {
    id: "ESTJ",
    type: "ESTJ",
    name: "Executive",
    category: "Sentinels",
    perspective: "Nature as Practical Resource",
    description: "ESTJs see nature as a valuable resource requiring responsible stewardship. They appreciate its practical benefits and focus on sustainable management.",
    emotionalTone: "practical",
    colorTheme: "#27ae60"
  },
  {
    id: "ESFJ",
    type: "ESFJ",
    name: "Consul",
    category: "Sentinels",
    perspective: "Nature as Harmonious Gathering Place",
    description: "ESFJs view nature as an ideal setting for social harmony and shared experiences. They enjoy organizing outdoor events that bring people together.",
    emotionalTone: "social",
    colorTheme: "#2ecc71"
  },
  // Explorers (SP)
  {
    id: "ISTP",
    type: "ISTP",
    name: "Virtuoso",
    category: "Explorers",
    perspective: "Nature as Hands-On Experience",
    description: "ISTPs engage with nature through direct physical interaction. They enjoy understanding and working with natural tools, mechanisms, and outdoor equipment.",
    emotionalTone: "hands-on",
    colorTheme: "#e67e22"
  },
  {
    id: "ISFP",
    type: "ISFP",
    name: "Adventurer",
    category: "Explorers",
    perspective: "Nature as Aesthetic Inspiration",
    description: "ISFPs find beauty and emotional expression in nature's artistry. They are drawn to the visual and sensory aesthetics of natural environments.",
    emotionalTone: "aesthetic",
    colorTheme: "#e74c3c"
  },
  {
    id: "ESTP",
    type: "ESTP",
    name: "Entrepreneur",
    category: "Explorers",
    perspective: "Nature as Thrill Source",
    description: "ESTPs experience nature as an arena for exciting physical activities and adventures. They seek immediate, dynamic experiences in the outdoors.",
    emotionalTone: "thrilling",
    colorTheme: "#e67e22"
  },
  {
    id: "ESFP",
    type: "ESFP",
    name: "Entertainer",
    category: "Explorers",
    perspective: "Nature as Sensory Celebration",
    description: "ESFPs enjoy nature's vivid sensory experiences and social aspects. They celebrate the joy and liveliness found in natural settings with others.",
    emotionalTone: "joyful",
    colorTheme: "#e74c3c"
  }
];

// Group MBTI types by category
const mbtiByCategory = {
  "Analysts": mbtiData.filter(personality => personality.category === "Analysts"),
  "Diplomats": mbtiData.filter(personality => personality.category === "Diplomats"),
  "Sentinels": mbtiData.filter(personality => personality.category === "Sentinels"),
  "Explorers": mbtiData.filter(personality => personality.category === "Explorers")
};

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mbtiData, mbtiByCategory };
}