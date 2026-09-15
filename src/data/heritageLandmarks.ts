import { HeritageLandmark } from '../types';

/**
 * Anvaya Heritage Site Registry
 *
 * To add a new heritage site:
 * 1. Add a new HeritageLandmark object to this array.
 * 2. Assign `dynastyFilter` corresponding to one of the dynastic categories
 *    ('ganga', 'vijayanagara', 'chola', 'rashtrakuta', 'maurya') or a new category.
 * 3. Specify `mapPosition`: { x: percentageFromLeft (0-100), y: percentageFromTop (0-100) }
 *    to position the interactive marker pin on the cartographic canvas.
 * 4. Fill in the History, Architecture, and Audio Guide fields.
 *
 * The Cartography screen, map markers, dossier drawer, search, and dynasty filters
 * dynamically render from this array without needing any UI code changes.
 */
export const HERITAGE_LANDMARKS: HeritageLandmark[] = [
  {
    id: 'konark-sun-temple',
    accessionCode: 'ARC-OD-1250 // EAST-COROMANDEL',
    name: 'Konark Sun Temple',
    nativeScript: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର',
    era: '13th Century CE',
    dynasty: 'Eastern Ganga Dynasty',
    dynastyFilter: 'ganga',
    region: 'Eastern Coromandel, Odisha',
    state: 'Odisha',
    coordinates: {
      lat: "19°53'15\"N",
      long: "86°05'41\"E",
      geoPrecision: '19.8876° N, 86.0945° E',
    },
    mapPosition: { x: 67, y: 44 },
    description:
      'Conceived as a colossal processional chariot of Surya, the solar deity, equipped with 24 intricately carved stone wheels and drawn by seven galloping steeds carved from khondalite stone.',
    architecturalStyle: 'Kalinga Architecture (Rekha Deula)',
    builtCentury: 'c. 1250 CE',
    patronRuler: 'King Narasimhadeva I',
    imageUrl:
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    audioNarrativeTitle: 'The Celestial Sundials of the Kalinga Coast',
    audioDuration: '04:12',
    audioNarrativeExcerpt:
      'Listen to the maritime stonemasons calibrate the 24 astronomical wheels to calculate solar minutes with miniature shadow dials...',
    architecturalFeatures: [
      '24 Carved Sundial Chariot Wheels with spokes casting precise solar shadows',
      'Khondalite masonry bonded with iron dowels and lead clamps',
      'Jagamohana (Assembly Hall) rising 39 meters above coastal dunes',
      'Intricate Natya Mandapa depicting 108 classical dance postures',
    ],
    historicalMilestones: [
      { year: '1250 CE', event: 'Sanctum consecrated by King Narasimhadeva I of Eastern Ganga' },
      { year: '1568 CE', event: 'Structural disruptions and coastal shifting reported in chronicles' },
      { year: '1984 CE', event: 'Inscribed into the UNESCO World Heritage list' },
    ],
    unescoStatus: true,
  },
  {
    id: 'hampi-vijayanagara',
    accessionCode: 'ARC-KT-1336 // DECCAN-VALLEY',
    name: 'Hampi Vijayanagara',
    nativeScript: 'ಹಂಪಿ ವಿಜಯನಗರ',
    era: '14th–16th Century CE',
    dynasty: 'Vijayanagara Empire (Sangama & Tuluva)',
    dynastyFilter: 'vijayanagara',
    region: 'Tungabhadra Basin, Karnataka',
    state: 'Karnataka',
    coordinates: {
      lat: "15°20'06\"N",
      long: "76°27'43\"E",
      geoPrecision: '15.3350° N, 76.4620° E',
    },
    mapPosition: { x: 44, y: 56 },
    description:
      'The monumental capital of the Vijayanagara Empire, sprawling across 4,100 hectares of rugged granite boulder valleys along the Tungabhadra River, featuring monolithic stone chariots, musical pillared mandapas, and royal aqueducts.',
    architecturalStyle: 'Vijayanagara Dravidian Granite Style',
    builtCentury: 'c. 1336–1565 CE',
    patronRuler: 'Emperor Krishna Deva Raya',
    imageUrl:
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    audioNarrativeTitle: 'Resonances of the Stone Chariot',
    audioDuration: '05:40',
    audioNarrativeExcerpt:
      'Tungabhadra whispers echo through the 56 monolithic sa-re-ga-ma musical pillars of the Vittala Temple complex...',
    architecturalFeatures: [
      'Monolithic Vittala Garuda Stone Chariot on carved granite axles',
      '56 Musical Pillars resonant to percussive acoustic tapping',
      'Virupaksha stepped gopuram towering over Hampi bazaar',
      'Subterranean water channels and royal lotus pavilion',
    ],
    historicalMilestones: [
      { year: '1336 CE', event: 'Empire founded by brothers Harihara I and Bukka Raya I' },
      { year: '1509 CE', event: 'Accession of Krishnadevaraya; peak of Mediterranean and Arabian trade' },
      { year: '1986 CE', event: 'Recognized as UNESCO World Heritage Site' },
    ],
    unescoStatus: true,
  },
  {
    id: 'brihadisvara-thanjavur',
    accessionCode: 'ARC-TN-1010 // KAVERI-DELTA',
    name: 'Brihadisvara Temple',
    nativeScript: 'தஞ்சாவூர் பெருவுடையார் கோயில்',
    era: '11th Century CE',
    dynasty: 'Imperial Chola Dynasty',
    dynastyFilter: 'chola',
    region: 'Kaveri Delta, Tamil Nadu',
    state: 'Tamil Nadu',
    coordinates: {
      lat: "10°46'58\"N",
      long: "79°07'54\"E",
      geoPrecision: '10.7828° N, 79.1318° E',
    },
    mapPosition: { x: 50, y: 66 },
    description:
      'Known as the "Big Temple" of Thanjavur, this granite marvel crowned by an 80-tonne monolithic cupola was engineered by Raja Raja Chola I without using any binding mortar.',
    architecturalStyle: 'High Chola Dravidian Architecture',
    builtCentury: 'Completed 1010 CE',
    patronRuler: 'Rajaraja Chola I',
    imageUrl:
      'https://www.britannica.com/place/Brihadishvara-temple',
    audioNarrativeTitle: 'The Granite Monoliths of Kaveri',
    audioDuration: '03:45',
    audioNarrativeExcerpt:
      'Learn how a 6-kilometer earthen ramp was constructed to elevate the 80-tonne granite dome atop the vimana...',
    architecturalFeatures: [
      '66-meter high granite Vimana (pyramidal tower) in interlocking stone',
      'Single-block 80-tonne granite Kumbam apex capstone',
      'Monolithic Nandi pavilion carved from a single 20-tonne stone',
      'Rare Chola frescos preserved beneath Nayak layer overpaintings',
    ],
    historicalMilestones: [
      { year: '1010 CE', event: 'Consecration of Peruvudaiyar Koyil in 25th regnal year of Rajaraja I' },
      { year: '1987 CE', event: 'Inscribed as Great Living Chola Temples by UNESCO' },
    ],
    unescoStatus: true,
  },
  {
    id: 'kailasa-ellora',
    accessionCode: 'ARC-MH-0760 // DECCAN-BASALT',
    name: 'Kailasa Temple, Ellora',
    nativeScript: 'कैलास लेणे, वेरुळ',
    era: '8th Century CE',
    dynasty: 'Rashtrakuta Dynasty',
    dynastyFilter: 'rashtrakuta',
    region: 'Charanandri Hills, Maharashtra',
    state: 'Maharashtra',
    coordinates: {
      lat: "20°01'26\"N",
      long: "75°10'45\"E",
      geoPrecision: '20.0239° N, 75.1792° E',
    },
    mapPosition: { x: 38, y: 46 },
    description:
      'Cave 16 at Ellora is the world’s largest monolithic rock-cut monument, excavated vertically from top to bottom through solid basalt cliffs without scaffolding, quarrying over 200,000 tonnes of volcanic rock.',
    architecturalStyle: 'Rock-Cut Dravidian / Rashtrakuta',
    builtCentury: 'c. 756–773 CE',
    patronRuler: 'King Krishna I',
    imageUrl:
      'https://images.unsplash.com/photo-1599818814761-46087d1c68f1?auto=format&fit=crop&w=1200&q=80',
    audioNarrativeTitle: 'Vertical Quarrying of Cave 16',
    audioDuration: '06:15',
    audioNarrativeExcerpt:
      'Walk alongside Rashtrakuta stonecutters chiseling downward from cliff summits to sculpt multi-tiered shrines...',
    architecturalFeatures: [
      'Top-down vertical excavation through 32-meter volcanic basalt',
      'Life-size carved elephants supporting the central mandapa',
      'High-relief panel depicting Ravana shaking Mount Kailasa',
      'Interconnected aerial rock-cut bridges and cloistered galleries',
    ],
    historicalMilestones: [
      { year: '757 CE', event: 'Excavation initiated by Rashtrakuta King Krishna I' },
      { year: '1983 CE', event: 'Designated UNESCO World Heritage Site' },
    ],
    unescoStatus: true,
  },
  {
    id: 'nalanda-mahavihara',
    accessionCode: 'ARC-BR-0427 // GANGETIC-VALLEY',
    name: 'Nalanda Mahavihara',
    nativeScript: 'नालन्दा महाविहार',
    era: '5th–12th Century CE',
    dynasty: 'Gupta & Pala Dynasties',
    dynastyFilter: 'maurya',
    region: 'Magadha, Bihar',
    state: 'Bihar',
    coordinates: {
      lat: "25°08'12\"N",
      long: "85°26'38\"E",
      geoPrecision: '25.1367° N, 85.4439° E',
    },
    mapPosition: { x: 63, y: 28 },
    description:
      'One of antiquity’s greatest residential universities, housing 10,000 scholars and 2,000 teachers from across Asia, with an illustrious nine-story library known as Dharmaganja.',
    architecturalStyle: 'Red-brick Buddhist Vihara Architecture',
    builtCentury: 'Founded 427 CE',
    patronRuler: 'Kumaragupta I & Harsha',
    imageUrl:
      'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=1200&q=80',
    audioNarrativeTitle: 'The Nine Storeys of Dharmaganja',
    audioDuration: '04:55',
    audioNarrativeExcerpt:
      'Xuanzang recounts studying logic, Sanskrit grammar, and astronomy amidst the cloistered red-brick courtyards...',
    architecturalFeatures: [
      'Monolithic Sariputra votive stupa layered across six architectural stages',
      'Modular residential monk cells with built-in stone book recesses',
      'Subterranean drainage and water management network',
      'Stucco Buddhist iconography on terracotta lintels',
    ],
    historicalMilestones: [
      { year: '427 CE', event: 'Gupta Emperor Kumaragupta I establishes monastery' },
      { year: '637 CE', event: 'Chinese pilgrim Xuanzang resides and studies at Nalanda' },
      { year: '2016 CE', event: 'UNESCO World Heritage recognition' },
    ],
    unescoStatus: true,
  },
  {
    id: 'sanchi-stupa',
    accessionCode: 'ARC-MP-0250 // MALWA-PLATEAU',
    name: 'Great Stupa at Sanchi',
    nativeScript: 'सांची का स्तूप',
    era: '3rd Century BCE–1st Century CE',
    dynasty: 'Maurya & Satavahana',
    dynastyFilter: 'maurya',
    region: 'Vidisha, Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: {
      lat: "23°28'46\"N",
      long: "77°44'23\"E",
      geoPrecision: '23.4794° N, 77.7397° E',
    },
    mapPosition: { x: 48, y: 34 },
    description:
      'Commissioned by Emperor Ashoka over relics of the Buddha, featuring four celebrated Torana gateways with bas-reliefs detailing Jataka allegories and Mauryan heraldry.',
    architecturalStyle: 'Mauryan Stupa & Satavahana Torana Sculpting',
    builtCentury: 'c. 250 BCE',
    patronRuler: 'Emperor Ashoka the Great',
    imageUrl:
      'https://images.unsplash.com/photo-1600100397608-f010e42e4e84?auto=format&fit=crop&w=1200&q=80',
    audioNarrativeTitle: 'The Four Toranas of Dharma',
    audioDuration: '04:18',
    audioNarrativeExcerpt:
      'Listen to the symbolism of the Dharmachakra and the aniconic representations of the Buddha carved in sandstone...',
    architecturalFeatures: [
      'Hemispherical Anda dome representing cosmic dome of heaven',
      'Four sculpted Torana gateways oriented to cardinal directions',
      'Harmika and triple-tiered Chattra umbrellas atop summit',
      'Stone circumambulatory balustrades (Vedika)',
    ],
    historicalMilestones: [
      { year: '250 BCE', event: 'Original core stupa commissioned by Emperor Ashoka' },
      { year: '1st C. CE', event: 'Intricately carved Toranas added by Satavahana guilds' },
      { year: '1989 CE', event: 'Inscribed on the UNESCO World Heritage List' },
    ],
    unescoStatus: true,
  },
];
