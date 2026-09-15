import { Artifact, HeritageStamp, ChronologyEra, FieldDossier } from '../types';
import { HERITAGE_LANDMARKS } from './heritageLandmarks';

export const MOCK_LANDMARKS = HERITAGE_LANDMARKS;

export const MOCK_ARTIFACTS: Artifact[] = [
  {
    id: 'chola-nataraja',
    accessionCode: 'REL-TN-1102 // LOST-WAX-BRONZE',
    title: 'Chola Bronze Nataraja',
    period: '11th Century CE (Chola Period)',
    dynasty: 'Imperial Chola',
    medium: 'Lost-wax cast bronze (Ashtadhatu alloy)',
    provenance: 'Thanjavur, Tamil Nadu',
    discoveryYear: '1904',
    dimensions: '112.5 cm × 98.0 cm',
    currentLocation: 'National Museum, New Delhi',
    curatorialNotes:
      'The cosmic dance of Shiva (Ananda Tandava) encapsulated within a flaming aureole (Prabhamandala), holding Agni in the left palm and the Damaru in the right.',
    imageUrl:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    category: 'sculpture',
  },
  {
    id: 'ashoka-lion-capital',
    accessionCode: 'REL-UP-0250 // CHUNAR-SANDSTONE',
    title: 'Lion Capital of Ashoka',
    period: 'c. 250 BCE (Mauryan Era)',
    dynasty: 'Maurya Empire',
    medium: 'Polished Chunar Sandstone with glass-like luster',
    provenance: 'Sarnath, Uttar Pradesh',
    discoveryYear: '1905 (F.O. Oertel)',
    dimensions: '215 cm height',
    currentLocation: 'Sarnath Archaeological Museum',
    curatorialNotes:
      'Four Asiatic lions standing back to back upon an abacus with high-relief carvings of an elephant, horse, bull, and lion separated by Ashoka Chakras.',
    imageUrl:
      'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=900&q=80',
    category: 'sculpture',
  },
  {
    id: 'dancing-girl-harappa',
    accessionCode: 'REL-SD-2300 // INDUS-VALLEY',
    title: 'Dancing Girl of Mohenjo-daro',
    period: 'c. 2300–1750 BCE',
    dynasty: 'Harappan Civilization',
    medium: 'Lost-wax cast bronze alloy',
    provenance: 'Mohenjo-daro, Indus Valley',
    discoveryYear: '1926 (Ernest Mackay)',
    dimensions: '10.5 cm × 5.0 cm',
    currentLocation: 'National Museum, New Delhi',
    curatorialNotes:
      'A masterwork of proto-historic metallurgy showing a poised young woman with bangles covering her left arm up to the shoulder.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    category: 'sculpture',
  },
  {
    id: 'padmapani-fresco',
    accessionCode: 'REL-MH-0500 // AJANTA-PIGMENT',
    title: 'Bodhisattva Padmapani Fresco',
    period: '5th Century CE (Vakataka Period)',
    dynasty: 'Vakataka Dynasty',
    medium: 'Mineral pigment tempera on mud-plaster rock wall',
    provenance: 'Cave 1, Ajanta, Maharashtra',
    discoveryYear: '1819 (John Smith)',
    dimensions: '168 cm × 130 cm',
    currentLocation: 'Ajanta Cave Complex, In Situ',
    curatorialNotes:
      'Renowned for its serene spiritual expression, graceful tribhanga stance, and the blue lotus held gently in the right hand.',
    imageUrl:
      'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=900&q=80',
    category: 'paintings',
  },
  {
    id: 'mughal-jade-dagger',
    accessionCode: 'REL-DL-1635 // SHAH-JAHAN-COURT',
    title: 'Hilt of the Emperor Shah Jahan Dagger',
    period: 'c. 1630–1640 CE',
    dynasty: 'Mughal Empire',
    medium: 'Carved white nephrite jade, watered steel blade',
    provenance: 'Agra / Delhi Court Workshops',
    discoveryYear: 'Royal Collection Archive',
    dimensions: '34 cm overall length',
    currentLocation: 'National Museum, New Delhi',
    curatorialNotes:
      'The hilt is sculpted as a lifelike nilgai antelope head with delicate acanthus floral foliage running down the guard.',
    imageUrl:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
    category: 'architecture',
  },
  {
    id: 'tanjore-painting-krishna',
    accessionCode: 'REL-TN-1800 // MARATHA-COURT',
    title: 'Classical Thanjavur Gold Leaf Icon',
    period: '18th Century CE (Maratha Thanjavur)',
    dynasty: 'Thanjavur Maratha Kingdom',
    medium: 'Teakwood board, 22K gold foil, semi-precious stones',
    provenance: 'Thanjavur Palace Guilds',
    discoveryYear: 'Private Archival Bequest',
    dimensions: '60 cm × 45 cm',
    currentLocation: 'Thanjavur Art Gallery',
    curatorialNotes:
      'Characterized by dense gesso work relief under gold leaf and glowing vegetable dye pigments depicting Navaneetha Krishna.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    category: 'paintings',
  },
];

export const MOCK_STAMPS: HeritageStamp[] = [
  {
    id: 'stamp-hampi',
    siteName: 'Hampi Vijayanagara',
    state: 'Karnataka',
    coordinates: "15°20'N 76°27'E",
    accessionTag: 'P-KT-01',
    sealShape: 'octagonal',
    isUnlocked: true,
    unlockedDate: '12 OCT 2024',
    stampColor: '#A8422B', // Terracotta Rust
    rotationDeg: -2.5,
    historicalMilestone: 'Imperial Tungabhadra Citadel',
    trailName: 'Deccan Boulder Trail',
  },
  {
    id: 'stamp-konark',
    siteName: 'Konark Surya Deula',
    state: 'Odisha',
    coordinates: "19°53'N 86°05'E",
    accessionTag: 'P-OD-02',
    sealShape: 'circular',
    isUnlocked: true,
    unlockedDate: '18 NOV 2024',
    stampColor: '#1A2744', // Royal Lapis
    rotationDeg: 1.8,
    historicalMilestone: 'Solar Chariot of Kalinga',
    trailName: 'Eastern Coromandel Circuit',
  },
  {
    id: 'stamp-sanchi',
    siteName: 'Sanchi Great Stupa',
    state: 'Madhya Pradesh',
    coordinates: "23°28'N 77°44'E",
    accessionTag: 'P-MP-03',
    sealShape: 'octagonal',
    isUnlocked: true,
    unlockedDate: '04 JAN 2025',
    stampColor: '#855A10', // Burnished Brass
    rotationDeg: -1.2,
    historicalMilestone: 'Ashokan Dharma Torana',
    trailName: 'Central Mauryan Odyssey',
  },
  {
    id: 'stamp-thanjavur',
    siteName: 'Brihadisvara Temple',
    state: 'Tamil Nadu',
    coordinates: "10°46'N 79°07'E",
    accessionTag: 'P-TN-04',
    sealShape: 'circular',
    isUnlocked: true,
    unlockedDate: '22 FEB 2025',
    stampColor: '#A8422B',
    rotationDeg: 2.1,
    historicalMilestone: 'Great Living Chola Granite Apex',
    trailName: 'Kaveri Delta Heritage Line',
  },
  {
    id: 'stamp-ellora',
    siteName: 'Kailasa Ellora Cave 16',
    state: 'Maharashtra',
    coordinates: "20°01'N 75°10'E",
    accessionTag: 'P-MH-05',
    sealShape: 'octagonal',
    isUnlocked: false,
    stampColor: '#515E7E',
    rotationDeg: 0,
    historicalMilestone: 'Top-Down Monolithic Wonder',
    trailName: 'Western Basalt Trail',
  },
  {
    id: 'stamp-nalanda',
    siteName: 'Nalanda Mahavihara',
    state: 'Bihar',
    coordinates: "25°08'N 85°26'E",
    accessionTag: 'P-BR-06',
    sealShape: 'circular',
    isUnlocked: false,
    stampColor: '#882B16',
    rotationDeg: 0,
    historicalMilestone: 'Ancient Seat of Asian Learning',
    trailName: 'Indo-Gangetic Scholastic Route',
  },
];

export const MOCK_CHRONOLOGY: ChronologyEra[] = [
  {
    id: 'era-indus',
    eraName: 'Indus Valley & Vedic Period',
    spanYears: 'c. 2600 BCE – 600 BCE',
    periodCode: 'ERA-IVC-01',
    summary:
      'Urban civil engineering with orthogonal street grids, public bath sanitation systems, standardized bronze weights, and Vedic hymns composed along the Saraswati and Indus rivers.',
    highlightDynasty: 'Harappan Guilds & Early Vedic Tribes',
    architecturalHallmark: 'Burnt brick citadels, granaries, and hydraulic cisterns',
    keyMonuments: ['Mohenjo-daro Citadel', 'Dholavira Water Reservoirs', 'Lothal Dockyard'],
  },
  {
    id: 'era-maurya',
    eraName: 'Mauryan & Buddhist Dawn',
    spanYears: 'c. 322 BCE – 185 BCE',
    periodCode: 'ERA-MAU-02',
    summary:
      'Unified empire under Chandragupta and Ashoka the Great. Edits carved upon monolithic rock pillars, spreading Dhamma across Asia and pioneering polished stone artistry.',
    highlightDynasty: 'Maurya Empire',
    architecturalHallmark: 'Monolithic Ashokan Pillars, Toranas, and Rock-cut Caves',
    keyMonuments: ['Sanchi Great Stupa', 'Sarnath Lion Capital', 'Barabar Caves'],
  },
  {
    id: 'era-gupta',
    eraName: 'Classical Gupta Golden Age',
    spanYears: 'c. 320 CE – 550 CE',
    periodCode: 'ERA-GUP-03',
    summary:
      'Culmination of classical Indian mathematics, astronomy by Aryabhata, Sanskrit drama by Kalidasa, and the crystallization of temple Nagara structural principles.',
    highlightDynasty: 'Imperial Gupta Dynasty',
    architecturalHallmark: 'Stone Nagara Shikhara shrines and fresco murals',
    keyMonuments: ['Nalanda University', 'Ajanta Cave Frescoes', 'Dashavatara Deogarh'],
  },
  {
    id: 'era-chola',
    eraName: 'Chola & Dravidian Maritime Age',
    spanYears: 'c. 850 CE – 1279 CE',
    periodCode: 'ERA-CHO-04',
    summary:
      'Global maritime empire projecting trade routes across the Bay of Bengal to the Srivijaya Kingdom, creating colossal granite temples and lost-wax bronze sculptures.',
    highlightDynasty: 'Imperial Cholas & Pallavas',
    architecturalHallmark: 'Multi-tiered granite Vimanas and Nataraja bronze casting',
    keyMonuments: ['Brihadisvara Temple', 'Gangaikonda Cholapuram', 'Mahabalipuram Rathas'],
  },
  {
    id: 'era-vijayanagara',
    eraName: 'Vijayanagara & Regional Renaissance',
    spanYears: 'c. 1336 CE – 1646 CE',
    periodCode: 'ERA-VIJ-05',
    summary:
      'Vast synthesis of southern cultural preservation, monumental granite chariot shrines, bustling international gem bazaars, and opulent Indo-Islamic court architecture.',
    highlightDynasty: 'Vijayanagara Empire & Nayakas',
    architecturalHallmark: 'Musical pillared mandapas and monolithic stone chariots',
    keyMonuments: ['Hampi Vittala Complex', 'Madurai Meenakshi Nayak Hall', 'Lepakshi Temple'],
  },
];

export const MOCK_DOSSIERS: FieldDossier[] = [
  {
    id: 'dos-01',
    title: 'Acoustic Engineering of 14th Century Granite Mandapas',
    accessionId: 'FIELD-NOTE // ACU-771',
    category: 'Acoustic Architecture',
    lastUpdated: '02 MAR 2025',
    coordinates: "15°20'06\"N 76°27'43\"E",
    tags: ['Granite Physics', 'Hampi', 'Vijayanagara'],
    excerpt:
      'Spectrographic analysis of the 56 monolith columns at the Vittala complex demonstrates deliberate stone density variations to tune individual frequency harmonics to melodic notes.',
    readTime: '4 min read',
  },
  {
    id: 'dos-02',
    title: 'Solar Meridian Alignment of Konark Chariot Wheels',
    accessionId: 'FIELD-NOTE // ASTR-118',
    category: 'Archaeo-Astronomy',
    lastUpdated: '28 FEB 2025',
    coordinates: "19°53'15\"N 86°05'41\"E",
    tags: ['Solar Dial', 'Kalinga', 'Odisha'],
    excerpt:
      'The 24 wheels are not merely decorative carvings; each wheel rim features 8 major spokes representing praharas (3-hour intervals), with bead carvings indicating minutes.',
    readTime: '6 min read',
  },
  {
    id: 'dos-03',
    title: 'Metallurgical Purity in Early Medieval Chola Bronzes',
    accessionId: 'FIELD-NOTE // MET-409',
    category: 'Material Science',
    lastUpdated: '14 JAN 2025',
    coordinates: "10°46'58\"N 79°07'54\"E",
    tags: ['Lost-Wax', 'Ashtadhatu', 'Chola'],
    excerpt:
      'X-ray fluorescence examination of 11th-century casting techniques reveals precisely balanced copper-tin-zinc ratios engineered to optimize acoustic resonance and tensile ductility.',
    readTime: '5 min read',
  },
  {
    id: 'dos-04',
    title: 'Water Engineering & Hydraulic Cisterns of Dholavira',
    accessionId: 'FIELD-NOTE // HYD-202',
    category: 'Civil Engineering',
    lastUpdated: '09 DEC 2024',
    coordinates: "23°53'10\"N 70°13'08\"E",
    tags: ['Harappan', 'Cisterns', 'Gujarat'],
    excerpt:
      'In the arid Rann of Kutch, ancient engineers built 16 interconnected reservoirs carved into bedrock with sediment traps that sustained an urban population across seasons.',
    readTime: '7 min read',
  },
];
