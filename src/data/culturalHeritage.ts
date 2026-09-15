import { CulturalCategory, CulturalCategoryMeta, CulturalItem } from '../types';

export const CULTURAL_CATEGORIES: CulturalCategoryMeta[] = [
  {
    id: 'festivals',
    name: 'Festivals',
    tagline: 'Sacred calendars, seasonal pageants & collective memory',
  },
  {
    id: 'food-cuisine',
    name: 'Food & Cuisine',
    tagline: 'Ayurvedic flavor balancing, ancient grain hearths & regional feasts',
  },
  {
    id: 'music-instruments',
    name: 'Music & Instruments',
    tagline: 'Classical ragas, sacred acoustic resonance & master lutherie',
  },
  {
    id: 'arts-crafts',
    name: 'Arts & Crafts',
    tagline: 'Folk visual idioms, mineral pigments & guild craftsmanship',
  },
  {
    id: 'clothing-textiles',
    name: 'Clothing & Textiles',
    tagline: 'Hand-spun silks, gold zari brocades & natural plant dyes',
  },
  {
    id: 'architecture',
    name: 'Architecture',
    tagline: 'Vernacular timber framing, subterranean stepwells & courtyard dwellings',
  },
];

export const CULTURAL_ITEMS: CulturalItem[] = [
  // ==========================================
  // 1. FESTIVALS
  // ==========================================
  {
    id: 'durga-puja-bengal',
    name: 'Durga Puja of Kolkata',
    nativeName: 'দুর্গাপূজা (Durgapuja)',
    category: 'festivals',
    region: 'Eastern India',
    state: 'West Bengal',
    shortDescription:
      'A monumental five-day autumn celebration transforming public spaces into ephemerally sculpted temple pavilions (pandals) celebrating the triumph of Goddess Durga.',
    historicalSignificance:
      'Traced to medieval zamindari households and the 1606 CE celebration by Raja Kangsanarayan of Taherpur. During the Bengal Renaissance, it transitioned from private aristocratic courtyard barowari pujas to inclusive public democratic installations, celebrated by UNESCO as Intangible Cultural Heritage of Humanity.',
    culturalSignificance:
      'Blends sacred ritual invocations with community fine arts, music, lighting architecture, and the poignant immersion ceremony (Visarjan) at the sacred Hooghly River, symbolizing maternal homecoming and cyclical renewal.',
    relatedTradition:
      'Dhaak drumming rhythms, Dhunuchi Nritya ecstatic smoke dances, and Kumartuli clay sculpting guilds who model deities using holy river silt.',
    imageUrl:
      'https://images.unsplash.com/photo-1601614748897-4ff332ec907a?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '16th Century CE onward; UNESCO Inscribed',
    primaryElements: ['Clay Idol Sculpting', 'Dhaak Drumming', 'Dhunuchi Dance', 'Pandal Installation Art'],
    xpReward: 40,
  },
  {
    id: 'onam-kerala',
    name: 'Onam & Vallam Kali',
    nativeName: 'ഓണം (Ōṇaṁ)',
    category: 'festivals',
    region: 'South India',
    state: 'Kerala',
    shortDescription:
      'The ancient harvest festival of Kerala commemorating the golden egalitarian reign of mythical King Mahabali, marked by boat races, flower carpets, and grand vegetarian banquets.',
    historicalSignificance:
      'Documented in Sangam literature and 9th-century Chola-Chera temple inscriptions from Thrikkakara Temple near Kochi. The festival embodies an age of absolute harmony, truth, and agricultural abundance before hierarchical stratifications.',
    culturalSignificance:
      'Unites all Malayali communities regardless of caste or creed in celebrating nature’s bounty, ancestral homecoming, maternal solidarity, and rhythmic synchronized rowmanship on coastal backwaters.',
    relatedTradition:
      'Vallam Kali (Snake Boat Races) at Aranmula, Pulikali tiger body art, Kaikottikali ring folk dances, and the twenty-six dish Onasadya feast on banana leaves.',
    imageUrl:
      'https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Sangam Era / 9th Century CE Inscriptions',
    primaryElements: ['Pookkalam Floral Mandalas', 'Vallam Kali Boat Race', 'Onasadya Banquet', 'Pulikali Dance'],
    xpReward: 40,
  },
  {
    id: 'hornbill-festival-nagaland',
    name: 'Hornbill Festival',
    nativeName: 'Festival of Festivals',
    category: 'festivals',
    region: 'Northeast India',
    state: 'Nagaland',
    shortDescription:
      'A vibrant annual gathering of all seventeen recognized Naga tribes at Kisama Heritage Village, showcasing warrior chants, ancestral oral poetry, indigenous sports, and ceremonial textile attire.',
    historicalSignificance:
      'Named after the revered Great Indian Hornbill, whose feathers symbolize bravery and chieftain honor in Naga folklore. Established to bridge tribal histories, preserve indigenous oral traditions, and foster inter-tribal peace.',
    culturalSignificance:
      'Serves as an extraordinary living archive where elders transmit tribal genealogies, agrarian invocations, log drum music, and indigenous architectural heritage to younger generations.',
    relatedTradition:
      'Morung (bachelor dormitory) communal assemblies, log-drum resonant signaling, indigenous stone-lifting athletics, and bamboo dance rituals.',
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Oral Indigenous Antiquity; Formalized 2000 CE',
    primaryElements: ['Tribal Morungs', 'Log Drumming', 'Hornbill Headdresses', 'Spear Chants'],
    xpReward: 40,
  },

  // ==========================================
  // 2. FOOD & CUISINE
  // ==========================================
  {
    id: 'kashmiri-wazwan',
    name: 'Kashmiri Wazwan',
    nativeName: 'وازوان (Wāzwān)',
    category: 'food-cuisine',
    region: 'Northern Himalayas',
    state: 'Jammu & Kashmir',
    shortDescription:
      'A 36-course royal culinary banquet rooted in the Kashmir Valley, slow-simmered over fragrant applewood fires by generational master chefs known as Wazas.',
    historicalSignificance:
      'Influenced by the migration of Central Asian, Persian, and Samarkand master craftsmen and cooks during the 14th-century reign of Sultan Sikandar and Mir Sayyid Ali Hamadani, fusing Himalayan wild herbs with Persian culinary aesthetics.',
    culturalSignificance:
      'A deeply communal culinary ritual served four guests to a grand hammered-copper platter called a Traem. It represents the pinnacle of hospitality, guest reverence (Mehmaan Nawazi), and master culinary discipline.',
    relatedTradition:
      'Hand-carved copper Tash-t-Nari handwashing ritual before meals, Kahwa saffron tea ceremonies, and strict wooden-mallet meat pounding techniques.',
    imageUrl:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '14th Century CE Royal Courts',
    primaryElements: ['Rogan Josh', 'Gushtaba', 'Copper Traem Sharing', 'Saffron & Fennel Infusions'],
    xpReward: 40,
  },
  {
    id: 'chettinad-cuisine',
    name: 'Chettinad Spice Gastronomy',
    nativeName: 'செட்டிநாடு சமையல் (Ceṭṭināṭu Samayal)',
    category: 'food-cuisine',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'One of India’s most aromatic and complex culinary traditions, renowned for freshly dry-roasted sun-dried spices, stone-ground masalas, and black pepper infusions.',
    historicalSignificance:
      'Developed by the seafaring Nattukottai Chettiars, merchant traders whose maritime voyages across Burma, Ceylon, Malaya, and the Spice Islands incorporated star anise, marathi mokku (dried flower pods), and kalpasi (black stone flower) into Tamil hearths.',
    culturalSignificance:
      'Rooted in the dry agrarian landscape of Sivaganga, where sun-drying vegetables and meats (Vathal) preserved nourishment through arid months. Dishes are traditionally presented on plantain leaves with strict sequence and etiquette.',
    relatedTradition:
      'Ammikkal (flat granite grinding stone) spice blending, seasoned soapstone Kalchatti cooking vessels, and elaborate Chettiar wedding feast courses.',
    imageUrl:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '18th–19th Century Maritime Mercantile Era',
    primaryElements: ['Kalpasi (Stone Flower)', 'Sun-dried Vathals', 'Kalchatti Stone Pots', 'Fresh Ground Pepper'],
    xpReward: 40,
  },
  {
    id: 'dal-baati-churma',
    name: 'Dal Baati Churma & Desert Hearth',
    nativeName: 'दाल बाटी चूरमा (Dāl Bāṭī Chūrmā)',
    category: 'food-cuisine',
    region: 'Western Desert',
    state: 'Rajasthan',
    shortDescription:
      'The definitive rustic feast of the Thar Desert: unleavened whole wheat dough dumplings baked in cow-dung embers, drenched in pure desi ghee, paired with spiced lentils and sweet crushed churma.',
    historicalSignificance:
      'Originates in the kingdom of Mewar during the reign of Rawal Jait Singh. Rajput warriors carried durable dry dough spheres on military campaigns into the arid Aravallis, burying them under desert sand under morning sun to bake by sunset.',
    culturalSignificance:
      'Reflects the ingenious culinary adaptation to arid desert terrain with scarce water. High-energy ghee and pulses provided nutrition in drought climates, later refined into royal palace banquets across Udaipur, Jodhpur, and Jaipur.',
    relatedTradition:
      'Kanda (dried cow-dung cake) slow baking, crushing hot baatis with bare palms before ghee immersion, and accompaniment with fiery Lehsun (garlic) red chili chutney.',
    imageUrl:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'c. 8th Century CE Mewar Rajput Era',
    primaryElements: ['Clay Oven Baking', 'Pure Desi Ghee', 'Panchmel Dal (5 Lentils)', 'Sweetened Churma'],
    xpReward: 40,
  },

  // ==========================================
  // 3. MUSIC & INSTRUMENTS
  // ==========================================
  {
    id: 'rudra-veena',
    name: 'Rudra Veena',
    nativeName: 'रुद्र वीणा (Rudra Vīṇā)',
    category: 'music-instruments',
    region: 'North & Central India',
    state: 'Uttar Pradesh / Madhya Pradesh',
    shortDescription:
      'The supreme and most ancient chordophone of Indian classical music, featuring a long tubular body of teakwood supported by two enormous resonators made of dried gourds (tumbas).',
    historicalSignificance:
      'Revered in Vedic scriptures and ancient musical treatises like the Natya Shastra and Sangita Ratnakara. Associated with the austere Dhrupad tradition and court luminaries of the Mughal and Gwalior courts like Swami Haridas and Tansen.',
    culturalSignificance:
      'Considered the divine instrument of Lord Shiva (Rudra). Playing the Rudra Veena is regarded as Nada Yoga—a meditative spiritual discipline of breath control, slow melodic microtonal glides (meend), and cosmic acoustic communion.',
    relatedTradition:
      'Dhrupad vocal accompaniment, Dagarvani contemplative lineage, and strict generational lutherie shaping natural dried gourds over decades.',
    imageUrl:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Vedic Era Antiquity; Refined c. 11th–16th Century',
    primaryElements: ['Twin Dried Tumbas (Gourds)', 'Teakwood Danda', 'Raised Brass Frets', 'Dhrupad Meend Glides'],
    xpReward: 40,
  },
  {
    id: 'shehnai-varanasi',
    name: 'Shehnai & Mangal Vadya',
    nativeName: 'शहनाई (Shehnāī)',
    category: 'music-instruments',
    region: 'Northern Plains',
    state: 'Uttar Pradesh',
    shortDescription:
      'A quadruple-reed conical woodwind instrument that produces haunting, auspicious microtones, intrinsically linked to North Indian temple ceremonies and wedding processions.',
    historicalSignificance:
      'Evolved from ancient pungi folk horns and royal Persian court woodwinds. Ustad Bismillah Khan brought the Shehnai from temple courtyards and wedding gates to the highest global classical concert halls through decades of riyaz at the Vishwanath Temple in Varanasi.',
    culturalSignificance:
      'Classified as a Mangal Vadya (auspicious instrument). Its piercing yet sweet timbre is culturally inseparable from sacred milestones, dawn temple aartis, and bridal send-offs across Indian culture.',
    relatedTradition:
      'Subah-e-Banaras dawn concerts along the Varanasi ghats, Jugalbandi duets with sitar or violin, and reed-carving from wild marsh reeds.',
    imageUrl:
      'https://images.unsplash.com/photo-1520523839898-50712825e3a7?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Ancient Folk Roots; Classical Renaissance 20th Century',
    primaryElements: ['Double Reed Mouthpiece', 'Rosewood Conical Tube', 'Flared Brass Bell', 'Microtonal Embouchure'],
    xpReward: 40,
  },
  {
    id: 'ghatam-percussion',
    name: 'Ghatam Percussion',
    nativeName: 'கடம் (Ghaṭam)',
    category: 'music-instruments',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'One of the oldest percussion instruments of South India: a specialized spherical clay pot played with finger pads, thumbs, and palm slaps to create resonant bass tones and crisp acoustic rings.',
    historicalSignificance:
      'Described in the Ramayana and classical Tamil Sangam texts as an essential rhythm vessel. Master luthiers of Manamadurai craft these instruments from red clay mixed with brass filings to achieve unmatched acoustic bell-like resonance.',
    culturalSignificance:
      'A pillar of the Carnatic percussion ensemble (Laya Vinyasa) alongside the Mridangam. The artist utilizes the hollow stomach cavity of the player against the pot mouth to create low resonant sub-bass drops (Gumuki).',
    relatedTradition:
      'Manamadurai kiln firing using tamarind wood, spontaneous percussive duels (Konnakkol vocal rhythm duets), and temple festival sabhas.',
    imageUrl:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Sangam Era / 6th Century CE Inscriptions',
    primaryElements: ['Manamadurai Clay & Brass Filings', 'Gumuki Bass Techniques', 'Carnatic Tala Cycles', 'Tamarind Kiln Firing'],
    xpReward: 40,
  },

  // ==========================================
  // 4. ARTS & CRAFTS
  // ==========================================
  {
    id: 'madhubani-painting',
    name: 'Madhubani / Mithila Painting',
    nativeName: 'मधुबनी चित्रकला (Madhubanī Citrakalā)',
    category: 'arts-crafts',
    region: 'Eastern India',
    state: 'Bihar',
    shortDescription:
      'An ancient folk art practiced by women of Mithila using twig pens, matchsticks, and fingers with natural mineral and vegetable dyes on mud-plastered walls and handmade paper.',
    historicalSignificance:
      'Folk memory traces its origin to King Janaka commissioning local artisans to paint murals depicting the divine marriage of his daughter Sita to Lord Rama. Preserved unchanged across matrilineal households for millennia.',
    culturalSignificance:
      'Features distinct geometric patterns, double-line borders, almond eyes, and stylized flora and fauna symbolizing fertility, cosmic protection, and sacred communion during birth, coming-of-age, and matrimonial ceremonies (Kohbar).',
    relatedTradition:
      'Kohbar nuptial chamber wall painting, extraction of soot black and turmeric yellow pigments, and matrilineal transmission from mother to daughter.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Epic Era Origins; Documented 1934 post-earthquake',
    primaryElements: ['Double Line Contours', 'Natural Plant Pigments', 'Kohbar Nuptial Motifs', 'Fish & Lotus Symbols'],
    xpReward: 40,
  },
  {
    id: 'thanjavur-painting',
    name: 'Thanjavur Gold Leaf Painting',
    nativeName: 'தஞ்சாவூர் ஓவியம் (Tanjore Painting)',
    category: 'arts-crafts',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'A classical South Indian painting style characterized by rich, flat vivid colors, relief work sculpted with chalk and Arabic gum, and finished with shimmering 22-karat gold foil and semi-precious stones.',
    historicalSignificance:
      'Flourished under the royal patronage of the Thanjavur Maratha rulers in the 17th and 18th centuries, particularly under King Serfoji II, blending Nayaka court traditions, Vijayanagara grandeur, and European portrait influences.',
    culturalSignificance:
      'Created primarily as devotional icons (Murthis) of deities for home altars, designed to catch and reflect oil lamp flickers in dim temple sanctums, creating an ethereal spiritual presence.',
    relatedTradition:
      'Preparation of jackfruit wood planks with unbleached cotton, gesso paste relief carving (Sukku), and gold leaf adhesion with tamarind gum.',
    imageUrl:
      'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '17th–18th Century Maratha & Nayaka Dynasty',
    primaryElements: ['22-Karat Gold Foil', 'Gesso Relief Carving', 'Semi-Precious Gem Inlays', 'Jackfruit Wood Planks'],
    xpReward: 40,
  },
  {
    id: 'bidriware-craft',
    name: 'Bidriware Metal Inlay',
    nativeName: 'ಬಿದ್ರಿ ಕಲೆ (Bidri Craft)',
    category: 'arts-crafts',
    region: 'Deccan Plateau',
    state: 'Karnataka',
    shortDescription:
      'A 600-year-old metallurgical craft of encrusting pure silver wire and sheets into a blackened zinc and copper alloy that undergoes a miraculous soil-oxidation treatment.',
    historicalSignificance:
      'Developed during the Bahmani Sultanate in 14th-century Bidar under Sultan Ahmad Shah Wali Bahmani, synthesized from Persian metal inlay techniques introduced by master artisan Abdullah bin Kaiser.',
    culturalSignificance:
      'The dramatic pitch-black background juxtaposed against lustrous silver reflects Persian geometry and Deccan flora. The unique blackening agent is soil collected exclusively from the unlit foundations of the historic 15th-century Bidar Fort.',
    relatedTradition:
      'Kaftgari silver chasing, chiseling floral arabesques with steel burins, and the secretive fort-soil and ammonium chloride darkening paste.',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '14th Century CE Bahmani Sultanate',
    primaryElements: ['Pure Silver Wire Inlay', 'Zinc-Copper Alloy Base', 'Bidar Fort Soil Oxidation', 'Floral Arabesque Chasing'],
    xpReward: 40,
  },

  // ==========================================
  // 5. CLOTHING & TEXTILES
  // ==========================================
  {
    id: 'banarasi-silk',
    name: 'Banarasi Zari Silk Brocade',
    nativeName: 'बनारसी साड़ी (Banārasī Sāṛī)',
    category: 'clothing-textiles',
    region: 'Northern Plains',
    state: 'Uttar Pradesh',
    shortDescription:
      'Opulent handloom silk textiles woven in Varanasi featuring intricate gold and silver metallic threads (Zari), Mughal-inspired floral jaal motifs, and miniature kalga brocades.',
    historicalSignificance:
      'Mentioned in Buddhist Jataka tales and the Mahabharata as Kashi silk. Under the Mughal Empire, Persian weavers migrated to Varanasi, creating the sublime synthesis of Hindu sacred iconography and Persian floral brocading (Kinkhab).',
    culturalSignificance:
      'Regarded as the quintessential bridal heirloom of North India, traditionally handed down through generations as ancestral treasure representing familial prosperity, blessings, and master weaving heritage.',
    relatedTradition:
      'Naksha drawboy manual pattern cards, pit-loom jacquard weaving, pure silver electroplated gold thread spinning, and generational weaver guilds (Ansaris).',
    imageUrl:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Vedic Times; Mughal Renaissance 16th Century',
    primaryElements: ['Real Silver/Gold Zari', 'Kinkhab Heavy Brocade', 'Mughal Jaal Floral Weaves', 'Handloom Pit Weaving'],
    xpReward: 40,
  },
  {
    id: 'kashmiri-pashmina-kani',
    name: 'Kashmiri Pashmina & Kani Weaving',
    nativeName: 'کانی شال (Kānī Shāl)',
    category: 'clothing-textiles',
    region: 'Northern Himalayas',
    state: 'Jammu & Kashmir',
    shortDescription:
      'Ultra-fine shawls woven from the microscopic underfleece of Changthangi mountain goats, hand-loomed with microscopic wooden eyeless bobbins (Kani) like fine woven tapestry.',
    historicalSignificance:
      'Patronized by Sultan Zain-ul-Abidin (Badshah) in the 15th century and later popularized across Europe by Empress Joséphine Bonaparte after Napoleon brought a Kashmiri shawl back from his Egyptian campaign.',
    culturalSignificance:
      'A single Kani shawl can take up to two years of painstaking work, guided by a coded written pattern sheet called a Talim sung aloud like sheet music between master weaver and apprentice.',
    relatedTradition:
      'Talim code chanting, wooden Tujis (Kani needles), and the spinning of raw pashm on traditional Kashmiri wooden charkhas (Yender).',
    imageUrl:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '15th Century CE Kashmir Sultanate',
    primaryElements: ['Changthangi Pashm Fleece', 'Kani Wooden Bobbins', 'Talim Coded Song Weaving', 'Chinar Leaf Motifs'],
    xpReward: 40,
  },
  {
    id: 'kanchipuram-silk',
    name: 'Kanchipuram Temple Border Silk',
    nativeName: 'காஞ்சிபுரம் பட்டு (Kāñcipuram Paṭṭu)',
    category: 'clothing-textiles',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'Heavy mulberry silk sarees distinguished by contrasting solid borders and pallus joined via interlocking weave techniques (Korvai), woven with temple spire and mythical creature motifs.',
    historicalSignificance:
      'Woven by master Devanga and Saligar weavers who settled in the temple city of Kanchipuram under the patronage of the Pallava, Chola, and Vijayanagara monarchs to weave ceremonial silks for temple deities.',
    culturalSignificance:
      'Revered across South India as the sacred bridal garment. The border motifs directly mirror temple stone architecture—such as the Temple Gopuram (spire), Mayil (peacock), and Yali (mythical guardian beast).',
    relatedTradition:
      'Korvai interlocking border technique requiring two weavers working side by side, Petni pallu jointure, and pure mulberry silk with silver-dipped gold zari.',
    imageUrl:
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'c. 10th Century CE Chola / Vijayanagara Guilds',
    primaryElements: ['Korvai Interlocking Borders', 'Temple Spire (Gopuram) Motifs', 'Three-Ply Mulberry Silk', 'Heavy Gold Zari'],
    xpReward: 40,
  },

  // ==========================================
  // 6. ARCHITECTURE
  // ==========================================
  {
    id: 'stepwells-rani-ki-vav',
    name: 'Subterranean Stepwells (Vavs)',
    nativeName: 'વાવ (Vāv / Baoli)',
    category: 'architecture',
    region: 'Western India',
    state: 'Gujarat / Rajasthan',
    shortDescription:
      'Monumental multi-storey inverted subterranean temples descending deep into the earth to reach groundwater aquifers, lined with hundreds of carved stone pavilions and sacred sculptures.',
    historicalSignificance:
      'Evolved from simple step-trenches into sophisticated Maru-Gurjara hydrological sanctuaries. Masterpieces like Rani ki Vav in Patan were commissioned in 1063 CE by Queen Udayamati in memory of King Bhima I of the Chaulukya Dynasty.',
    culturalSignificance:
      'Transcended utilitarian water collection to become subterranean cool retreats for desert caravans and sacred shrines honoring water as the divine feminine source of cosmic life.',
    relatedTradition:
      'Maru-Gurjara architectural treatises, water blessing pujas, pillared pavilion cooling chambers, and underground sculptural friezes of Vishnu’s Dashavatara.',
    imageUrl:
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '11th Century CE Chaulukya / Solanki Dynasty; UNESCO Inscribed',
    primaryElements: ['Stepped Aquifer Corridors', 'Maru-Gurjara Stone Carving', 'Multi-Storey Pavilions', 'Vishnu Dashavatara Friezes'],
    xpReward: 40,
  },
  {
    id: 'kathkuni-architecture',
    name: 'Kathkuni Himalayan Timber Framing',
    nativeName: 'काष्ठ-कुणी (Kāṣṭha-Kuṇī)',
    category: 'architecture',
    region: 'Northern Himalayas',
    state: 'Himachal Pradesh',
    shortDescription:
      'An ingenious earthquake-resistant indigenous vernacular architecture combining alternate layers of cedar (deodar) timber logs and dry slate-stone interlocking without any mortar or iron nails.',
    historicalSignificance:
      'Engineered over centuries in the seismic zones of the Himalayas (such as Naggar Castle, Bhimakali Temple, and Hadimba Temple) to withstand tremors by allowing timber joints to flex and absorb lateral shockwaves.',
    culturalSignificance:
      'Harmoniously balances human shelter with high mountain ecology using sustainably felled fallen cedar. The towers serve as fortified grain granaries, community defensive sanctuaries, and homes for local Devtas (mountain guardian deities).',
    relatedTradition:
      'Sacred Deodar felling rituals, traditional Thathiar carpentry guilds, cantilevering carved wooden balconies, and natural slate roofing.',
    imageUrl:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '10th–16th Century CE Himalayan Kingdoms',
    primaryElements: ['Interlocking Deodar Wood Logs', 'Dry Slate Stone (No Mortar)', 'Seismic Flexing Joinery', 'Cantilevered Balconies'],
    xpReward: 40,
  },
  {
    id: 'chettinad-mansions',
    name: 'Chettinad Mansions (Nattukottai)',
    nativeName: 'நாட்டுக்கோட்டை (Nāṭṭukkōṭṭai)',
    category: 'architecture',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'Sprawling palatial merchant courtyard houses blending traditional Tamil spatial planning with global luxury materials—Burmese teak pillars, Italian marble, and Belgian crystal mirrors.',
    historicalSignificance:
      'Erected between 1850 and 1930 by wealthy Chettiar merchants in the 76 villages of the Chettinad region, serving as financial command centers and fortress-residences for joint families.',
    culturalSignificance:
      'Organized along a strict east-west axial grid designed for passive cooling, rainwater harvesting, and hosting community life rituals. Famous for Chettinad egg-white lime plaster (Madras Plaster) that remains cool to the touch and gleaming like marble.',
    relatedTradition:
      'Egg-white and seashell lime plastering (Chettinad Plaster), Vettukal central courtyards for wedding banquets, and heavy teak doors carved with Gajalakshmi iconography.',
    imageUrl:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '19th–Early 20th Century CE',
    primaryElements: ['Burmese Teak Pillars', 'Egg-White Lime Plaster', 'Open Sunlit Courtyards', 'Italian Marble Flooring'],
    xpReward: 40,
  },
];

export const getCulturalItemsByCategory = (
  category?: CulturalCategory | 'all'
): CulturalItem[] => {
  if (!category || category === 'all') {
    return CULTURAL_ITEMS;
  }
  return CULTURAL_ITEMS.filter((item) => item.category === category);
};

export const getCulturalItemById = (id: string): CulturalItem | undefined => {
  return CULTURAL_ITEMS.find((item) => item.id === id);
};

export const getCulturalCategories = (): CulturalCategoryMeta[] => {
  return CULTURAL_CATEGORIES.map((cat) => ({
    ...cat,
    itemCount: CULTURAL_ITEMS.filter((item) => item.category === cat.id).length,
  }));
};
