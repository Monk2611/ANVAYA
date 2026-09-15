import { ChronologyEra } from '../types';

export const CHRONOLOGY_EPOCHS: ChronologyEra[] = [
  {
    id: 'epoch-proto-historic',
    eraName: 'Proto-Historic & Vedic Antiquity',
    periodCode: 'EPOCH-01 // ANTIQUITY',
    spanYears: 'c. 2600 BCE – 600 BCE',
    tagline: 'Urban grid engineering, hydraulic innovations, and Vedic philosophical foundations.',
    summary:
      'The emergence of mature subterranean drainage systems, brick metrology, and standardized weight systems across the Indus-Saraswati basin, followed by Vedic oral compositions.',
    highlightDynasty: 'Indus-Saraswati & Early Vedic Settlements',
    architecturalHallmark:
      'Standardized kiln-baked terracotta brick masonry (1:2:4 ratio), subterranean storm-water drainage, and tidal dockyard basins.',
    keyMonuments: ['Lothal Dockyard', 'Dholavira Water Reservoirs', 'Mohenjo-daro Great Bath'],
    dynasties: [
      {
        id: 'harappan-civilization',
        name: 'Indus-Saraswati Civilization',
        period: 'c. 2600 BCE – 1900 BCE',
        region: 'Northwest Subcontinent & Gujarat Coastal Basin',
        capital: 'Mohenjo-daro & Harappa',
        emblem: 'Unicorn & Zebu Bull Seal',
        description:
          'One of the world’s earliest urban bronze-age civilizations, renowned for sophisticated municipal governance, standardized weights, and oceanic maritime commerce with Mesopotamia.',
        keyRulers: [
          {
            name: 'Priesthood & Guild Elders',
            title: 'Civic Magistrate Assembly',
            reign: 'Mature Urban Period (2600–1900 BCE)',
            significance:
              'Governed through standardized municipal codes, uniform brick sizing, and civic infrastructure without centralized autocratic palaces.',
          },
        ],
        majorEvents: [
          {
            year: 'c. 2400 BCE',
            title: 'Commissioning of the Lothal Tidal Basin',
            description:
              'Engineers constructed the world’s earliest engineered tidal dockyard on the Gulf of Khambhat to berth ocean vessels at high tide.',
          },
          {
            year: 'c. 2200 BCE',
            title: 'Dholavira Rock-Cut Hydro Reservoirs',
            description:
              'Sixteen monumental stepped reservoirs carved directly from sandstone bedrock were interconnected to harvest every drop of seasonal rainwater.',
          },
        ],
        associatedSites: [
          {
            id: 'lothal-dockyard',
            name: 'Lothal Tidal Dockyard & Bead Factory',
            location: 'Saurashtra, Gujarat',
            architecturalStyle: 'Kiln-Fired Terracotta Hydraulic Masonry',
            significance: 'First recorded tidal port engineered with sluice gates and inlet channels for international maritime trade.',
          },
          {
            id: 'dholavira-citadel',
            name: 'Dholavira Megalithic Reservoirs & Citadel',
            location: 'Khadir Bet, Rann of Kutch, Gujarat',
            architecturalStyle: 'Stone-Dressed Fortified Water Harvesting',
            significance: 'UNESCO World Heritage site displaying the most sophisticated urban water management system of the ancient world.',
          },
        ],
      },
    ],
  },
  {
    id: 'epoch-classical-empires',
    eraName: 'Classical Antiquity & Golden Age',
    periodCode: 'EPOCH-02 // CLASSICAL',
    spanYears: 'c. 322 BCE – 550 CE',
    tagline: 'Imperial consolidation, Ashokan moral edicts, and the flowering of classical sciences.',
    summary:
      'The zenith of continental unification under the Mauryas followed by the scientific, artistic, and philosophical renaissance of the Gupta Empire.',
    highlightDynasty: 'Maurya & Imperial Gupta Dynasties',
    architecturalHallmark:
      'Monolithic Chunar sandstone polished pillar edicts, stupa torana circumambulatory stone carving, and early structural rock-cut chaitya halls.',
    keyMonuments: ['Sarnath Lion Capital', 'Sanchi Great Stupa', 'Ajanta Cave Murals', 'Nalanda Mahavihara'],
    dynasties: [
      {
        id: 'maurya-empire',
        name: 'Maurya Empire',
        period: 'c. 322 BCE – 185 BCE',
        region: 'Pan-Subcontinental (Pataliputra to Gandhara & Deccan)',
        capital: 'Pataliputra (modern Patna, Bihar)',
        emblem: 'Ashoka Lion Capital (Simhamukha)',
        description:
          'First pan-Indian empire that established centralized administration, standardized coinage, trans-continental royal highways, and stone-cut state edicts.',
        keyRulers: [
          {
            name: 'Ashoka the Great (Devanampiya Piyadassi)',
            title: 'Chakravartin Samrat of the Mauryas',
            reign: '268 – 232 BCE',
            significance:
              'Renounced military conquest after the Kalinga war, adopted Buddhist Dhamma, and inscribed rock and pillar edicts across Afghanistan, India, and Nepal.',
          },
          {
            name: 'Chandragupta Maurya',
            title: 'Founder & Imperial Consolidator',
            reign: '322 – 298 BCE',
            significance:
              'United northern India with the mentorship of Chanakya (Kautilya) and secured diplomatic treaties with Seleucus I Nicator.',
          },
        ],
        majorEvents: [
          {
            year: '261 BCE',
            title: 'The Kalinga War & Renunciation',
            description:
              'Ashoka embraced Buddhism and non-violence (Ahimsa), decreeing that true victory is Dhamma-Vijaya (conquest by righteousness).',
          },
          {
            year: 'c. 250 BCE',
            title: 'Erection of the Sarnath Polished Pillar',
            description:
              'Carved from a single block of Chunar sandstone bearing the four-lion capital that now serves as the national emblem of modern India.',
          },
        ],
        associatedSites: [
          {
            id: 'sanchi-stupa',
            name: 'Great Stupa at Sanchi',
            location: 'Raisen District, Madhya Pradesh',
            architecturalStyle: 'Mauryan Hemispherical Stupa & Satavahana Toranas',
            significance: 'Contains relics of the Buddha, commissioned by Ashoka and later embellished with narrative relief toranas.',
          },
        ],
      },
      {
        id: 'gupta-empire',
        name: 'Imperial Gupta Dynasty',
        period: 'c. 320 CE – 550 CE',
        region: 'Gangetic Plains & Central India',
        capital: 'Pataliputra & Ujjain',
        emblem: 'Garuda Dhvaja (Golden Eagle)',
        description:
          'Considered the Golden Age of ancient India, witnessing landmark mathematical discoveries (zero and decimal system), Sanskrit drama (Kalidasa), and naturalistic rock-cut painting.',
        keyRulers: [
          {
            name: 'Chandragupta II (Vikramaditya)',
            title: 'Paramabhagavata & Patron of the Navaratnas',
            reign: '375 – 415 CE',
            significance:
              'Patronized the Nine Jewels of literature and science; consolidated Gupta dominion over western sea trade routes in Gujarat.',
          },
          {
            name: 'Samudragupta',
            title: 'Napoleon of Antiquity & Master of the Lute',
            reign: '335 – 375 CE',
            significance:
              'Inscribed his military campaigns on the Allahabad pillar and was an accomplished poet and veena musician.',
          },
        ],
        majorEvents: [
          {
            year: 'c. 499 CE',
            title: 'Publication of the Aryabhatiya',
            description:
              'Mathematician Aryabhata formulated trigonometry rules, approximated pi (π), and proved that the Earth rotates on its axis.',
          },
          {
            year: 'c. 475 CE',
            title: 'Ajanta Cave 1 Murals Finished',
            description:
              'Vakataka-Gupta court artists painted the iconic Bodhisattva Padmapani and Vajrapani frescoes with mineral pigments.',
          },
        ],
        associatedSites: [
          {
            id: 'ajanta-caves',
            name: 'Ajanta Rock-Cut Caves',
            location: 'Aurangabad District, Maharashtra',
            architecturalStyle: 'Classical Rock-Cut Monastic Chaityas & Viharas',
            significance: 'Masterpiece of Buddhist mural painting and sculpture nestled in a crescent-shaped basalt gorge.',
          },
          {
            id: 'nalanda-university',
            name: 'Nalanda Mahavihara',
            location: 'Nalanda, Bihar',
            architecturalStyle: 'Gupta Red Brick Monastic University Quadrangle',
            significance: 'Premier ancient Buddhist center of higher learning attracting scholars from across Asia.',
          },
        ],
      },
    ],
  },
  {
    id: 'epoch-medieval-renaissance',
    eraName: 'Medieval Dynasties & Sacred Architecture',
    periodCode: 'EPOCH-03 // MEDIEVAL',
    spanYears: 'c. 600 CE – 1300 CE',
    tagline: 'Granite megaliths, Dravida and Nagara temple summits, and trans-oceanic thalassocracies.',
    summary:
      'The supreme era of temple architecture in stone, where regional dynasties expressed philosophical cosmological mandalas through monumental granite and sandstone temples.',
    highlightDynasty: 'Imperial Cholas, Chandelas & Eastern Gangas',
    architecturalHallmark:
      'Soaring Vimanas, interlocking mortise-and-tenon dry-stone granitic construction, Pancharatha shikhara cascades, and cosmic Nataraja bronzes.',
    keyMonuments: ['Brihadisvara Temple (Thanjavur)', 'Kandariya Mahadeva (Khajuraho)', 'Konark Sun Temple', 'Ellora Kailashanatha'],
    dynasties: [
      {
        id: 'imperial-chola-dynasty',
        name: 'Imperial Chola Empire',
        period: '848 – 1279 CE',
        region: 'Coromandel Coast, Kaveri Delta & Maritime Southeast Asia',
        capital: 'Thanjavur & Gangaikonda Cholapuram',
        emblem: 'Pouncing Tiger (Vyaghra)',
        description:
          'A formidable thalassocratic empire whose monarchs governed through decentralized democratic village assemblies (Kudavolai) while maintaining an invincible blue-water fleet and supreme granite engineering.',
        keyRulers: [
          {
            name: 'Rajaraja Chola I (Arulmozhivarman)',
            title: 'Rajaraja The Great & Shivapadasekhara',
            reign: '985 – 1014 CE',
            significance:
              'Commissioned the 216-foot granitic Brihadisvara Temple, surveyed kingdom lands for equitable revenue, and standardized maritime trade corridors across the Indian Ocean.',
          },
          {
            name: 'Rajendra Chola I',
            title: 'Gangaikonda Cholan & Kadaram Kondan',
            reign: '1014 – 1044 CE',
            significance:
              'Marched north to the sacred river Ganges, founded Gangaikonda Cholapuram, and launched successful naval expeditions to Sumatra, Malaya, and the Srivijaya Empire.',
          },
        ],
        majorEvents: [
          {
            year: '1010 CE',
            title: 'Consecration of the Great Big Temple (Peruvudaiyar Koyil)',
            description:
              'Rajaraja Chola I hoisted the 80-tonne monolithic Kumbam atop the 216-ft vimana in the 25th regnal year, dedicating extensive endowments recorded in gold and grain.',
          },
          {
            year: '1025 CE',
            title: 'Chola Naval Raid on the Srivijaya Thalassocracy',
            description:
              'A trans-oceanic armada secured open sea lanes through the Strait of Malacca, preserving international trade between Song China and South Asia.',
          },
        ],
        associatedSites: [
          {
            id: 'brihadisvara-thanjavur',
            name: 'Brihadisvara Temple (The Big Temple)',
            location: 'Thanjavur, Tamil Nadu',
            architecturalStyle: 'Pure Dravidian Granite Vimana',
            significance:
              'World’s first complete granite temple, featuring an 80-ton single-stone capstone and exhaustive epigraphs of medieval administration.',
            landmarkId: 'brihadisvara-thanjavur',
            journeyId: 'journey-rajaraja-chola',
          },
        ],
      },
      {
        id: 'chandela-dynasty',
        name: 'Chandela Dynasty of Bundelkhand',
        period: 'c. 831 – 1315 CE',
        region: 'Jejakabhukti (modern Bundelkhand, Madhya Pradesh)',
        capital: 'Khajuraho & Kalinjar Fort',
        emblem: 'Moon God (Chandra) Lineage',
        description:
          'Renowned for creating the pinnacle of Nagara temple architecture at Khajuraho, celebrating both transcendent divinity and the joyous celebration of human life.',
        keyRulers: [
          {
            name: 'Yashovarman (Lakshavarman)',
            title: 'Architect of Bundelkhand Independence',
            reign: 'c. 925 – 950 CE',
            significance:
              'Broke Pratihara suzerainty and consecrated the monumental sandstone Lakshmana Temple at Khajuraho.',
          },
          {
            name: 'Dhanga Deva',
            title: 'Imperial Patron of Khajuraho',
            reign: 'c. 950 – 999 CE',
            significance:
              'Commissioned the magnificent Vishvanatha Temple and fostered an ecumenical center of Hindu, Jain, and tantric scholarship.',
          },
        ],
        majorEvents: [
          {
            year: '954 CE',
            title: 'Consecration of the Lakshmana Temple',
            description:
              'Dedication of the Vaikuntha Vishnu image brought from Kashmir, marking the maturity of the saptaratha Nagara shikhara.',
          },
          {
            year: 'c. 1030 CE',
            title: 'Completion of Kandariya Mahadeva',
            description:
              'The largest and most ornate temple at Khajuraho was raised with 84 miniature shikhara replicas clustered like the peaks of Mount Meru.',
          },
        ],
        associatedSites: [
          {
            id: 'khajuraho-kandariya',
            name: 'Kandariya Mahadeva Temple',
            location: 'Chhatarpur District, Madhya Pradesh',
            architecturalStyle: 'Nagara Latin/Sandhara Style',
            significance:
              'Celebrated for its rhythmic ascending mountain-silhouette profile and over 800 hand-carved friezes of celestial nymphs, warriors, and deities.',
            landmarkId: 'khajuraho-kandariya',
          },
        ],
      },
      {
        id: 'eastern-ganga-dynasty',
        name: 'Eastern Ganga Dynasty',
        period: 'c. 1078 – 1434 CE',
        region: 'Kalinga (modern Odisha & Northern Andhra)',
        capital: 'Kalinganagara & Cuttack',
        emblem: 'Bull (Nandi) & Conch Shell',
        description:
          'Defenders of eastern sacred traditions who built monumental Kalinga-style rekha and pidha deula temples along the coastline of the Bay of Bengal.',
        keyRulers: [
          {
            name: 'Langula Narasimhadeva I',
            title: 'King of Utkala & Royal Charioteer',
            reign: '1238 – 1264 CE',
            significance:
              'Commissioned the colossal Sun Temple chariot at Konark using 12 years of state revenues, celebrated as a monumental solar clock.',
          },
        ],
        majorEvents: [
          {
            year: '1250 CE',
            title: 'Erection of the Konark Solar Chariot',
            description:
              'Twelve hundred master sculptors under the chief architect Bisu Maharana hoisted the iron-interlocked lodestone crowning the Bay of Bengal sanctuary.',
          },
        ],
        associatedSites: [
          {
            id: 'konark-sun-temple',
            name: 'Konark Sun Temple (Black Pagoda)',
            location: 'Puri Coastline, Odisha',
            architecturalStyle: 'Kalinga Rekha Deula with Khondalite Stone',
            significance:
              'Engineered as a celestial chariot for Surya drawn by seven spirited horses with 24 carved stone wheels that function as astronomical sundials.',
            landmarkId: 'konark-sun-temple',
          },
        ],
      },
    ],
  },
  {
    id: 'epoch-late-medieval-empires',
    eraName: 'Late Medieval & Early Modern Empires',
    periodCode: 'EPOCH-04 // EMPIRES',
    spanYears: 'c. 1336 CE – 1750 CE',
    tagline: 'Imperial bastions, Indo-Islamic domes, and the grand stone chariots of the Deccan.',
    summary:
      'The era of grand cosmopolitan courts, monumental water pavilions, Indo-Saracenic vaulted archways, and the zenith of Vijayanagara and Mughal architectural synthesis.',
    highlightDynasty: 'Vijayanagara Empire & Mughal Empire',
    architecturalHallmark:
      'Double-domed white marble mausoleums, Pietra Dura floral inlay, musical granite pillared mandapas, and monumental stepped Pushkarani water tanks.',
    keyMonuments: ['Vitthala Temple & Stone Chariot (Hampi)', 'Taj Mahal (Agra)', 'Red Fort (Delhi)', 'Gol Gumbaz (Bijapur)'],
    dynasties: [
      {
        id: 'vijayanagara-empire',
        name: 'Vijayanagara Empire',
        period: '1336 – 1646 CE',
        region: 'Deccan Plateau & South India (Tungabhadra Basin)',
        capital: 'Vijayanagara (City of Victory, modern Hampi)',
        emblem: 'Boar (Varaha), Sword & Sun',
        description:
          'A prosperous empire that safeguarded classical South Indian arts, music, and architecture, constructing vast fortified city complexes and granite musical mandapas.',
        keyRulers: [
          {
            name: 'Krishnadevaraya',
            title: 'Abhinava Bhoja & Andhra Bhoja',
            reign: '1509 – 1529 CE',
            significance:
              'Reigned during the golden zenith of Vijayanagara; authored the Telugu epic Amuktamalyada and constructed the stone chariot at Vitthala temple.',
          },
        ],
        majorEvents: [
          {
            year: '1513 CE',
            title: 'Consecration of the Krishna Temple & Royal Gopuram',
            description:
              'Erected to celebrate victory over the Gajapatis of Odisha, setting new benchmarks for rayagopuram gateway heights.',
          },
        ],
        associatedSites: [
          {
            id: 'hampi-vitthala',
            name: 'Vitthala Temple Complex & Stone Chariot',
            location: 'Vijayanagara District, Karnataka',
            architecturalStyle: 'Vijayanagara Dravida with Musical Granite Pillars',
            significance:
              'Features monolithic musical pillars tuned to distinct swaras and the world-famous Garuda stone chariot.',
            landmarkId: 'hampi-vijayanagara',
          },
        ],
      },
      {
        id: 'mughal-empire',
        name: 'Imperial Mughal Dynasty',
        period: '1526 – 1707 CE (Zenith)',
        region: 'Northern & Central India',
        capital: 'Agra, Fatehpur Sikri & Shahjahanabad (Delhi)',
        emblem: 'Lion and Rising Sun (Alam)',
        description:
          'Synthesized Persian, Central Asian, and indigenous Indian traditions, creating symmetrical charbagh garden paradises and white marble domed mausoleums.',
        keyRulers: [
          {
            name: 'Shah Jahan',
            title: 'Shahanshah & Prince of Builders',
            reign: '1628 – 1658 CE',
            significance:
              'Commissioned the Taj Mahal, Jama Masjid, and the Red Fort; revolutionized architecture through translucent Makrana marble and semi-precious pietra dura.',
          },
        ],
        majorEvents: [
          {
            year: '1648 CE',
            title: 'Completion of the Taj Mahal Central Mausoleum',
            description:
              'Over twenty thousand master artisans, calligraphers, and lapidaries finished the white marble monument on the banks of the Yamuna River.',
          },
        ],
        associatedSites: [
          {
            id: 'taj-mahal',
            name: 'Taj Mahal Mausoleum Complex',
            location: 'Agra, Uttar Pradesh',
            architecturalStyle: 'Indo-Islamic Mughal with Charbagh Layout',
            significance: 'UNESCO World Heritage jewel in white marble showcasing absolute bilateral symmetry and calligraphy.',
            landmarkId: 'taj-mahal',
          },
        ],
      },
    ],
  },
];

export function getChronologyEpochs(): ChronologyEra[] {
  return CHRONOLOGY_EPOCHS;
}

export function getEpochById(id: string): ChronologyEra | undefined {
  return CHRONOLOGY_EPOCHS.find((e) => e.id === id);
}
