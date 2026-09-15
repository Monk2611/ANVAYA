import { FieldDossier, DossierEvidenceType } from '../types';

export interface DossierCategoryFilter {
  id: 'all' | DossierEvidenceType;
  label: string;
  iconName: string;
}

export const DOSSIER_EVIDENCE_TYPES: DossierCategoryFilter[] = [
  { id: 'all', label: 'All Archives', iconName: 'Layers' },
  { id: 'inscription', label: 'Inscriptions & Epigraphs', iconName: 'FileText' },
  { id: 'archaeological-finding', label: 'Archaeological Findings', iconName: 'Compass' },
  { id: 'historical-document', label: 'Historical Documents', iconName: 'ScrollText' },
  { id: 'oral-history', label: 'Oral-History Records', iconName: 'Radio' },
  { id: 'curatorial-field-note', label: 'Curatorial Field Notes', iconName: 'Clock' },
];

export const RESEARCH_DOSSIERS: FieldDossier[] = [
  {
    id: 'dos-thanjavur-epigraph',
    accessionId: 'ASI-EP-1010 // GRANITE-INSCRIPTION',
    title: 'The Thanjavur Inscriptional Wall: Royal Donor Charters of Rajaraja Chola I',
    category: 'Epigraphical Corpus',
    evidenceType: 'inscription',
    lastUpdated: 'Curated Autumn 2024',
    coordinates: '10.7828° N, 79.1318° E',
    tags: ['Epigraphy', 'Vatteluttu', 'Chola Administration', 'Brihadisvara', 'Royal Charters'],
    excerpt:
      'Continuous running epigraphs in Tamil and Grantha chiselled across the northern and southern plinths of the Peruvudaiyar Koyil, documenting endowments down to 1/320th of a grain.',
    readTime: '6 min archival read',
    associatedSite: 'Brihadisvara Temple, Thanjavur',
    associatedRegion: 'Kaveri Delta, Tamil Nadu',
    associatedEra: 'Imperial Chola Dynasty (c. 1010 CE)',
    landmarkId: 'brihadisvara-thanjavur',
    physicalMedium: 'Interlocking Granitic Ashlar Plinth (Jagati & Upapitha)',
    currentRepository: 'In situ northern & southern basement walls of the Vimana',
    discoveryDate: 'Surveyed by Dr. E. Hultzsch, Archaeological Survey of India (1886–1890)',
    transcriptionLanguage: 'Old Tamil in Tamil-Grantha Transitional Script',
    transcriptionOrExcerpt:
      '“Tirumagal pola perunilachelviyum thanakkeyurimai poonda meikeerthi... Sivapadasekhara Rajaraja devarkku aandu 25-avathu...”',
    englishTranslation:
      '“Like the Goddess of Prosperity, who had become his very own bride... In the twenty-fifth regnal year of King Rajaraja Deva (who bears the crest of the sacred feet of Shiva), he commanded that the gifts granted by himself, his elder sister Kundavai Pirattiyar, and his queens be engraved upon the sacred stone walls of this supreme stone temple...”',
    epigraphicalSignificance:
      'These inscriptions serve as the world’s most transparent open-air imperial ledger. Every gift of gold, bronze images, musical instruments, lands, and daily rice allocations is recorded with astronomical accuracy, proving the temple was an economic central bank for the Kaveri delta.',
    researchMethodology:
      'Epigraphical squeeze paper stampings, photogrammetric 3D surface scanning, and textual collation with South Indian Inscriptions (SII Volume II).',
    scholarlySources: [
      {
        citation: 'South Indian Inscriptions (Vol. II): Inscriptions on the Walls of the Brihadisvara Temple at Thanjavur',
        authorOrPublication: 'E. Hultzsch, Ph.D., Government Press, Madras',
        year: '1891',
        archiveReference: 'ASI Memoir Series II, pp. 1–125',
      },
      {
        citation: 'The Colas: History, Administration and Social Life in the Tamil Country',
        authorOrPublication: 'K. A. Nilakanta Sastri, University of Madras',
        year: '1955',
        archiveReference: 'Ch. 9: Rajaraja’s Epigraphical Legacy',
      },
      {
        citation: 'The Great Temple at Tanjore: An Architectural and Epigraphical Study',
        authorOrPublication: 'Dr. R. Nagaswamy, Tamil Nadu State Department of Archaeology',
        year: '1984',
      },
    ],
  },
  {
    id: 'dos-chola-bronze-metallurgy',
    accessionId: 'MET-CH-0995 // LOST-WAX-BRONZE',
    title: 'Archaeo-Metallurgy of the Chola Nataraja: Radiographic & Elemental Composition Analysis',
    category: 'Material Science Investigation',
    evidenceType: 'archaeological-finding',
    lastUpdated: 'Curated Winter 2024',
    coordinates: '10.9602° N, 79.3845° E',
    tags: ['Lost-Wax', 'Cire Perdue', 'Ashtadhatu', 'Chola Bronzes', 'Radiography'],
    excerpt:
      'Spectroscopic analysis of 10th-century solid copper-tin-lead ternary alloys confirming zero air-pocket porosity in hollow wax burnouts.',
    readTime: '8 min archival read',
    associatedSite: 'Swamimalai Guild Workshops & Thanjavur Royal Foundry',
    associatedRegion: 'Kaveri Basin, Tamil Nadu',
    associatedEra: 'Imperial Chola Zenith (c. 975 – 1025 CE)',
    landmarkId: 'brihadisvara-thanjavur',
    physicalMedium: 'Solid Cast Ternary Bronze Alloy (84% Cu, 11% Sn, 4% Pb, trace Zn/Ag)',
    currentRepository: 'Thanjavur Art Gallery & National Museum, New Delhi',
    discoveryDate: '1936 Swamimalai hoard retrieval & 1998 BARC neutron activation analysis',
    transcriptionLanguage: 'Sanskrit Shilpa Shastra Epigrams (Kashyapa Shilpa)',
    transcriptionOrExcerpt:
      '“Sarvam lohamayam kuryat sarvam va dharanam vidhih... Madhuchhishtena yogena prathama vidhiyate...”',
    englishTranslation:
      '“The master sculptor shall fashion all sacred forms first entirely in pure bee-wax compounded with resin from the Shorea robusta tree. Having enveloped it with three layers of Kaveri alluvial clay, the wax shall be thoroughly melted out through furnace heat before the molten celestial alloy is poured in a continuous molten torrent.”',
    epigraphicalSignificance:
      'Neutron radiography demonstrates that Chola sculptors engineered dynamic kinetic balance: the centrifugal torque of Nataraja’s flying locks is mathematically counterbalanced by the ring of fire (prabhamandala) and the solid dwarf Apasmara beneath the right foot.',
    researchMethodology:
      'Energy-dispersive X-ray fluorescence (EDXRF), gamma-ray industrial radiography, and atomic emission spectroscopy conducted on uncorroded core samples.',
    scholarlySources: [
      {
        citation: 'Chola Bronzes: Metallurgy and Iconography of South Indian Castings',
        authorOrPublication: 'Dr. Sharada Srinivasan, National Institute of Advanced Studies (NIAS)',
        year: '2004',
        archiveReference: 'Journal of the Minerals, Metals & Materials Society, 56(1), pp. 48–52',
      },
      {
        citation: 'The Sensuous and the Sacred: Chola Bronzes from South India',
        authorOrPublication: 'Vidya Dehejia, American Federation of Arts & Mapin Publishing',
        year: '2002',
      },
    ],
  },
  {
    id: 'dos-girnar-ashokan-edict',
    accessionId: 'ASI-RE-0257 // BASALT-ROCK-EDICT',
    title: 'Rock Edict XIII of Ashoka at Girnar: The Moral Declaration on Non-Violence',
    category: 'Imperial Diplomatic Decree',
    evidenceType: 'historical-document',
    lastUpdated: 'Curated Autumn 2024',
    coordinates: '21.5222° N, 70.4579° E',
    tags: ['Ashoka', 'Brahmi', 'Girnar', 'Prakrit', 'Ahimsa', 'Mauryan Diplomacy'],
    excerpt:
      'Fourteen monumental edicts engraved upon a gigantic granite-gneiss boulder at the foothills of Mount Girnar, detailing diplomatic missions dispatched to Greece and Egypt.',
    readTime: '7 min archival read',
    associatedSite: 'Girnar Rock Edicts Enclosure, Junagadh',
    associatedRegion: 'Saurashtra, Gujarat',
    associatedEra: 'Maurya Empire (c. 257 BCE)',
    physicalMedium: 'Naturally Weathered Granite-Basalt Megalithic Boulder',
    currentRepository: 'In situ at the Archaeological Protected Pavilion, Junagadh',
    discoveryDate: 'First surveyed by James Tod (1822); deciphered by James Prinsep (1837)',
    transcriptionLanguage: 'Girnar Magadhi-Prakrit written in early Ashokan Brahmi Script',
    transcriptionOrExcerpt:
      '“Atikataṁ aṁtaraṁ na huta-pubaṁ dhammamahāmātā nāma. Te mamaṁ terasa-vasābhisitena dhammamahāmātā katā...”',
    englishTranslation:
      '“In the past there were no officers of the Dhamma. But in my thirteenth year of coronation, I created the Dhamma-Mahamatras (Officers of Righteousness) to establish and promote welfare, morality, and freedom from oppression among all subjects, including Greeks, Kambojas, and Gandharas...”',
    epigraphicalSignificance:
      'This document is India’s earliest recorded treatise on universal human rights, inter-faith harmony, veterinary hospitals, and diplomatic embassies sent to Hellenistic kings (Antiochus, Ptolemy, Antigonus, and Magas).',
    researchMethodology:
      'Decipherment of historical Ashokan Brahmi paleography cross-referenced with modern Greek and Seleucid historical chronicles.',
    scholarlySources: [
      {
        citation: 'Inscriptions of Asoka: Corpus Inscriptionum Indicarum (Vol. I)',
        authorOrPublication: 'E. Hultzsch, Archaeological Survey of India',
        year: '1925',
        archiveReference: 'CII Vol I, Girnar Edicts I–XIV, pp. 1–26',
      },
      {
        citation: 'Asoka and the Decline of the Mauryas (3rd Edition)',
        authorOrPublication: 'Romila Thapar, Oxford University Press',
        year: '2012',
      },
    ],
  },
  {
    id: 'dos-konark-astronomy-gnomon',
    accessionId: 'ASI-AA-1250 // ASTRONOMY-DIAL',
    title: 'Archaeo-Astronomy of the Konark Sun Wheels: Shadow-Clock & Equatorial Gnomon Analysis',
    category: 'Scientific Field Dispatch',
    evidenceType: 'curatorial-field-note',
    lastUpdated: 'Curated Spring 2024',
    coordinates: '19.8876° N, 86.0945° E',
    tags: ['Archaeo-Astronomy', 'Konark', 'Sundial', 'Kalinga', 'Surya Chariot'],
    excerpt:
      'Field measurements of solar shadows cast by the central hub and 8 major spokes on the 24 colossal chariot wheels of the Konark Sun Sanctuary.',
    readTime: '5 min archival read',
    associatedSite: 'Konark Sun Temple',
    associatedRegion: 'Bay of Bengal Coastline, Odisha',
    associatedEra: 'Eastern Ganga Dynasty (c. 1250 CE)',
    landmarkId: 'konark-sun-temple',
    physicalMedium: 'Carved Khondalite and Chlorite Stone Relief Wheels',
    currentRepository: 'In situ southern & northern plinths of the Jagamohana',
    discoveryDate: 'Restoration studies by Percy Brown (1942) & ASI Celestial Survey (1989)',
    transcriptionLanguage: 'Odia Palm-Leaf Architectural Manuscript (Baya Chakada)',
    transcriptionOrExcerpt:
      '“Ratha chakka ashta aara... dinara ashta prahara gnanaku chinha karithae...”',
    englishTranslation:
      '“The wheel of the chariot possesses eight major spokes and eight minor spokes. A shadow cast by a finger positioned at the center of the hub falls precisely on the rim markings, dividing the day into eight praharas (3-hour intervals) and subdivisions of 60 palas.”',
    epigraphicalSignificance:
      'Proves the wheels are not merely allegorical decorative ornaments, but high-precision celestial timekeeping instruments oriented precisely to true geographical East (cardinal solar equinox alignment).',
    researchMethodology:
      'Theodolite solar azimuth readings during the vernal equinox, high-speed shadow chronometry, and palm-leaf archival cross-referencing with the Baya Chakada manuscript.',
    scholarlySources: [
      {
        citation: 'The Architecture of the Sun Temple at Konark: A New Survey',
        authorOrPublication: 'K. S. Behera, Aryan Books International',
        year: '1996',
        archiveReference: 'Section 4: Astronomical Orientations',
      },
      {
        citation: 'Baya Chakada: The Architectural Palm-Leaf Manuscript of Konark',
        authorOrPublication: 'Alice Boner & Sadasiva Rath Sarma, E. J. Brill, Leiden',
        year: '1972',
      },
    ],
  },
  {
    id: 'dos-oral-sthapatis-thanjavur',
    accessionId: 'ORAL-HST-2023 // SHILPI-LINEAGE',
    title: 'Oral Guild Treatises of the Thanjavur Shilpi Sthapatis: The 80-Tonne Kumbam Hoisting Tradition',
    category: 'Oral-History Recording',
    evidenceType: 'oral-history',
    lastUpdated: 'Curated Summer 2024',
    coordinates: '10.7719° N, 79.1255° E',
    tags: ['Oral History', 'Sthapati', 'Guild Knowledge', 'Vimana Ramp', 'Sarada Vilasam'],
    excerpt:
      'Transcriptions of hereditary sthapati oral chants (Smriti Slokas) detailing the 4-mile earthen inclined plane from Sarapallam used to roll the monolithic 80-tonne capstone atop the Vimana.',
    readTime: '6 min archival read',
    associatedSite: 'Sarapallam & Rajaraja Sthapati Lineage, Thanjavur',
    associatedRegion: 'Kaveri Delta, Tamil Nadu',
    associatedEra: 'Living Architectural Tradition dating to 1010 CE',
    landmarkId: 'brihadisvara-thanjavur',
    physicalMedium: 'Audio tape recordings, transcribed Tamil palm-leaf notebooks (Cuvadi)',
    currentRepository: 'Tamil University Folklore Archive & Anvaya Curatorial Vault',
    discoveryDate: 'Documented through field interviews between 1978 and 2023',
    transcriptionLanguage: 'Colloquial Thanjavur Tamil with Archaic Architectural Jargon',
    transcriptionOrExcerpt:
      '“Sarapallam engira oorilirunthu naalu mail thooram man methu katti... aanaigalum veerargalum sernthu oruttiyathaaga engal thaatha sollum vakkukal...”',
    englishTranslation:
      '“From the settlement named Sarapallam, an earthen ramp of four miles was built at a gradient of two fingers per fathom. Our grandfathers sang of how paired imperial war elephants and three thousand stonemasons harnessed lubricated palmyra rollers to haul the single granite sphere up into the clouds without crane or steel.”',
    epigraphicalSignificance:
      'Preserves technical engineering oral memories that were never recorded in royal stone inscriptions, explaining the exact civil engineering mechanism behind one of history’s greatest megalithic lifts.',
    researchMethodology:
      'Ethnographic oral history documentation, voice recording acoustic spectral archiving, and topological gradient reconstruction using LiDAR elevation maps of modern Thanjavur.',
    scholarlySources: [
      {
        citation: 'Oral Traditions of Living Heritage in South Indian Temple Architecture',
        authorOrPublication: 'Prof. V. Ganapati Sthapati, Vaastu Vedic Research Foundation',
        year: '2001',
      },
      {
        citation: 'Building the Great Temple: Hydraulic, Mechanical, and Labor Logistics of Rajaraja I',
        authorOrPublication: 'Dr. Chithra Madhavan, Journal of Indian Ocean Studies',
        year: '2015',
      },
    ],
  },
  {
    id: 'dos-lothal-marine-engineering',
    accessionId: 'ASI-HYD-2400 // BRONZE-AGE-BASIN',
    title: 'The Lothal Tidal Basin: Hydraulic Engineering of the World’s First Recorded Drydock',
    category: 'Hydraulic Archaeological Investigation',
    evidenceType: 'archaeological-finding',
    lastUpdated: 'Curated Spring 2024',
    coordinates: '22.5218° N, 72.2494° E',
    tags: ['Lothal', 'Indus Valley', 'Hydraulics', 'Harappan Dockyard', 'Marine Sluice'],
    excerpt:
      'Sediment core analysis and brick trapezoidal geometries demonstrating a sophisticated water-locking sluice gate system responsive to Gulf of Khambhat tidal surges.',
    readTime: '7 min archival read',
    associatedSite: 'Lothal Archaeological Site',
    associatedRegion: 'Bhal Region, Gujarat',
    associatedEra: 'Mature Harappan Period (c. 2400 – 1900 BCE)',
    physicalMedium: 'Kiln-Burned Terracotta Hydraulic Mud-Mortar Masonry Basin (214m x 36m)',
    currentRepository: 'Lothal Archaeological Site Museum, Gujarat',
    discoveryDate: 'Excavated by S. R. Rao, Archaeological Survey of India (1955–1962)',
    transcriptionLanguage: 'Archaeological Excavation Logbook & Marine Geomorphology Report',
    transcriptionOrExcerpt:
      '“Basin wall dimensions 214 meters along north-south axis, 36 meters east-west. Inlet channel 12 meters wide on eastern wall connected to paleo-Bhogavo river estuary with grooved wooden vertical sluice gate.”',
    englishTranslation:
      '“The basin was engineered with an automatic de-silting mechanism. Ships entered during flood tide; the vertical wooden sluice gate was lowered into stone grooves to retain water at low tide, allowing vessels to float and unload carnelian beads and copper ingots while surrounding mudflats dried out.”',
    epigraphicalSignificance:
      'Proves that maritime engineering in ancient India predates Mediterranean dry-docks by over a thousand years, demonstrating advanced fluid mechanics and understanding of lunar tidal cycles.',
    researchMethodology:
      'Micropaleontological foraminifera analysis of basin silt, stratigraphic carbon-14 dating, and 3D hydrodynamic flood simulation.',
    scholarlySources: [
      {
        citation: 'Lothal: A Harappan Port Town (1955–1962) – Memoirs of the ASI No. 78',
        authorOrPublication: 'S. R. Rao, Archaeological Survey of India, New Delhi',
        year: '1979',
        archiveReference: 'Vols. I & II, Chapter V: The Dockyard',
      },
      {
        citation: 'Harappan Maritime Trade and the Dockyard at Lothal: A Geoarchaeological Review',
        authorOrPublication: 'K. S. Valdiya, Current Science, Vol. 82, No. 3',
        year: '2002',
      },
    ],
  },
];

export function getResearchDossiers(): FieldDossier[] {
  return RESEARCH_DOSSIERS;
}

export function getDossierById(id: string): FieldDossier | undefined {
  return RESEARCH_DOSSIERS.find((d) => d.id === id);
}

export function getDossiersByEvidenceType(type: DossierEvidenceType | 'all'): FieldDossier[] {
  if (type === 'all') return RESEARCH_DOSSIERS;
  return RESEARCH_DOSSIERS.filter((d) => d.evidenceType === type);
}
