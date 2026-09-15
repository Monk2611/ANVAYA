import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';

export type Language = 'en' | 'hi';

export interface LandmarkTranslation {
  name: string;
  shortName: string;
  dynasty: string;
  region: string;
  state: string;
  era: string;
  architecturalStyle: string;
  patronRuler: string;
  builtCentury: string;
  description: string;
  audioNarrativeTitle: string;
  audioNarrativeExcerpt: string;
  architecturalFeatures: string[];
  historicalMilestones: { year: string; event: string }[];
}

export const LANDMARK_HINDI_TRANSLATIONS: Record<string, LandmarkTranslation> = {
  'konark-sun-temple': {
    name: 'कोणार्क सूर्य मन्दिर',
    shortName: 'कोणार्क',
    dynasty: 'पूर्वी गंग राजवंश',
    region: 'पूर्वी कोरोमंडल, ओडिशा',
    state: 'ओडिशा',
    era: '१३वीं शताब्दी ईस्वी',
    architecturalStyle: 'कलिंग वास्तुकला (रेखा देउल)',
    patronRuler: 'राजा नरसिंहदेव प्रथम',
    builtCentury: 'लगभग १२५० ईस्वी',
    description:
      'भगवान सूर्य के एक विशाल रथ के रूप में परिकल्पित, जिसमें २४ नक्काशीदार प्रस्तर पहिये हैं और खोंडालाइट पत्थर से तराशे गए सात अश्व इसे खींचते हुए दर्शाए गए हैं।',
    audioNarrativeTitle: 'कलिंग तट की खगोलीय धूपघड़ियाँ',
    audioNarrativeExcerpt:
      'सुनें कि कैसे समुद्री शिल्पकारों ने सूक्ष्म छाया-डायल के माध्यम से सौर मिनटों की सटीक गणना के लिए २४ खगोलीय पहियों का निर्माण किया...',
    architecturalFeatures: [
      '२४ नक्काशीदार धूपघड़ी रथ के पहिये जो सौर समय की सटीक छाया दर्शाते हैं',
      'लोहे की कीलों और सीसे के क्लैंप से बंधी खोंडालाइट चिनाई',
      'जगमोहन (सभा मण्डप) जो तटीय टीलों से ३९ मीटर ऊपर उठता है',
      '१०८ शास्त्रीय नृत्य मुद्राओं को प्रदर्शित करता भव्य नाट्य मण्डप',
    ],
    historicalMilestones: [
      { year: '१२५० ई.', event: 'पूर्वी गंग के राजा नरसिंहदेव प्रथम द्वारा गर्भगृह की प्रतिष्ठा' },
      { year: '१५६८ ई.', event: 'ऐतिहासिक वृत्तांतों में संरचनात्मक क्षति और तटीय बदलाव दर्ज' },
      { year: '१९८४ ई.', event: 'यूनेस्को की विश्व धरोहर सूची में सम्मिलित' },
    ],
  },
  'hampi-vijayanagara': {
    name: 'हम्पी विजयनगर',
    shortName: 'हम्पी',
    dynasty: 'विजयनगर साम्राज्य (संगम एवं तुलुव)',
    region: 'तुंगभद्रा घाटी, कर्नाटक',
    state: 'कर्नाटक',
    era: '१४वीं–१६वीं शताब्दी ईस्वी',
    architecturalStyle: 'विजयनगर द्रविड़ ग्रेनाइट शैली',
    patronRuler: 'सम्राट कृष्णदेवराय',
    builtCentury: 'लगभग १३३६–१५६५ ईस्वी',
    description:
      'विजयनगर साम्राज्य की विशाल राजधानी, जो तुंगभद्रा नदी के किनारे ४,१०० हेक्टेयर में फैली है, जिसमें अखंड पत्थर का रथ, संगीतमय स्तंभ और शाही जलमार्ग शामिल हैं।',
    audioNarrativeTitle: 'प्रस्तर रथ की दिव्य प्रतिध्वनि',
    audioNarrativeExcerpt:
      'विट्ठल मंदिर परिसर के ५६ संगीतमय स्तंभों से गूंजती सा-रे-गा-मा की पावन तरंगों को महसूस करें...',
    architecturalFeatures: [
      'अखंड विट्ठल गरुड़ पत्थर का रथ जो नक्काशीदार ग्रेनाइट धुरियों पर स्थित है',
      'ध्वनि आघात पर सुर निकालने वाले ५६ संगीतमय प्रस्तर स्तंभ',
      'हम्पी बाज़ार पर राज करता विरुपाक्ष मंदिर का गगनचुम्बी गोपुरम',
      'भूमिगत जल प्रणालियाँ और शाही कमल महल मंडप',
    ],
    historicalMilestones: [
      { year: '१३३६ ई.', event: 'हरिहर प्रथम और बुक्का राय प्रथम भाइयों द्वारा साम्राज्य की स्थापना' },
      { year: '१५०९ ई.', event: 'कृष्णदेवराय का राज्याभिषेक; भूमध्यसागरीय और अरब व्यापार का स्वर्ण युग' },
      { year: '१९८६ ई.', event: 'यूनेस्को विश्व धरोहर स्थल के रूप में मान्यता' },
    ],
  },
  'brihadisvara-thanjavur': {
    name: 'बृहदीश्वर मन्दिर',
    shortName: 'बृहदीश्वर',
    dynasty: 'शाही चोल राजवंश',
    region: 'कावेरी डेल्टा, तमिलनाडु',
    state: 'तमिलनाडु',
    era: '११वीं शताब्दी ईस्वी',
    architecturalStyle: 'उच्च चोल द्रविड़ वास्तुकला',
    patronRuler: 'राजराजा चोल प्रथम',
    builtCentury: '१०१० ईस्वी में पूर्ण',
    description:
      'तंजावुर का "बड़ा मन्दिर", जिसे राजराजा चोल प्रथम द्वारा बिना किसी गारे-चूने के ८० टन के अखंड ग्रेनाइट शिखर (कुम्भम) के साथ निर्मित किया गया था।',
    audioNarrativeTitle: 'कावेरी के अखंड ग्रेनाइट महाशिल्प',
    audioNarrativeExcerpt:
      'जानें कि कैसे विमान के शिखर पर ८० टन के ग्रेनाइट गुंबद को चढ़ाने के लिए ६ किलोमीटर लंबा मिट्टी का रैंप बनाया गया था...',
    architecturalFeatures: [
      '६६ मीटर ऊँचा ग्रेनाइट विमान (पिरामिडनुमा शिखर) जो आपस में जुड़ी शिलाओं से बना है',
      'एकल शिलाखंड से निर्मित ८० टन का ग्रेनाइट कुम्भम शीर्ष',
      '२० टन के एकल पत्थर से तराशा गया अखंड नंदी मंडप',
      'नायक कालीन चित्रों के नीचे संरक्षित दुर्लभ चोल भित्तिचित्र',
    ],
    historicalMilestones: [
      { year: '१०१० ई.', event: 'राजराजा प्रथम के २५वें शासन वर्ष में पेरुवुदैयार कोविल की प्रतिष्ठा' },
      { year: '१९८७ ई.', event: 'यूनेस्को द्वारा महान जीवंत चोल मंदिरों में सम्मिलित' },
    ],
  },
  'kailasa-ellora': {
    name: 'कैलास मन्दिर, एलोरा',
    shortName: 'कैलास',
    dynasty: 'राष्ट्रकूट राजवंश',
    region: 'चरणंद्री पहाड़ियाँ, महाराष्ट्र',
    state: 'महाराष्ट्र',
    era: '८वीं शताब्दी ईस्वी',
    architecturalStyle: 'शैल-कर्तित द्रविड़ / राष्ट्रकूट',
    patronRuler: 'राजा कृष्ण प्रथम',
    builtCentury: 'लगभग ७५६–७७३ ईस्वी',
    description:
      'एलोरा की गुफा १६ विश्व का सबसे विशाल अखंड शैल-कर्तित स्मारक है, जिसे बिना किसी मचान के ऊपर से नीचे की ओर ठोस बेसाल्ट चट्टान से २,००,००० टन पत्थर तराशकर बनाया गया।',
    audioNarrativeTitle: 'गुफा १६ का लंबवत उत्खनन',
    audioNarrativeExcerpt:
      'शिखर से नीचे की ओर छैनी चलाकर बहुमंजिला मंदिरों को तराशने वाले राष्ट्रकूट शिल्पकारों के कौशल का अनुभव करें...',
    architecturalFeatures: [
      '३२ मीटर गहरी ज्वालामुखी बेसाल्ट चट्टान में ऊपर से नीचे लंबवत उत्खनन',
      'केंद्रीय मंडप को सहारा देते आदमकद तराशे गए हाथी',
      'कैलास पर्वत को हिलाते हुए रावण का भव्य उच्च-राहत पैनल',
      'आपस में जुड़े शैल-कर्तित पुल और स्तंभयुक्त दीर्घाएं',
    ],
    historicalMilestones: [
      { year: '७५७ ई.', event: 'राष्ट्रकूट राजा कृष्ण प्रथम द्वारा उत्खनन का शुभारंभ' },
      { year: '१९८३ ई.', event: 'यूनेस्को विश्व धरोहर स्थल घोषित' },
    ],
  },
  'nalanda-mahavihara': {
    name: 'नालंदा महाविहार',
    shortName: 'नालंदा',
    dynasty: 'गुप्त एवं पाल राजवंश',
    region: 'मगध, बिहार',
    state: 'बिहार',
    era: '५वीं–१२वीं शताब्दी ईस्वी',
    architecturalStyle: 'लाल ईंटों की बौद्ध विहार वास्तुकला',
    patronRuler: 'कुमारगुप्त प्रथम एवं हर्ष',
    builtCentury: 'स्थापना ४२७ ईस्वी',
    description:
      'प्राचीन काल का महानतम आवासीय विश्वविद्यालय, जहाँ संपूर्ण एशिया से १०,००० विद्यार्थी और २,००० शिक्षक धर्मगंज नामक नौ-मंजिला पुस्तकालय में अध्ययन करते थे।',
    audioNarrativeTitle: 'धर्मगंज की नौ मंजिलें',
    audioNarrativeExcerpt:
      'चीनी यात्री ह्वेनसांग द्वारा लाल ईंटों के आंगनों में तर्कशास्त्र, संस्कृत व्याकरण और खगोलशास्त्र के अध्ययन का वृत्तांत...',
    architecturalFeatures: [
      'छह वास्तुशिल्प चरणों में निर्मित अखंड सारिपुत्र स्तूप',
      'भिक्षुओं के लिए कक्ष जिनमें पत्थर की अंतर्निहित पुस्तकें रखने की व्यवस्था थी',
      'भूमिगत जल निकासी और वर्षा जल संचयन का सुव्यवस्थित नेटवर्क',
      'टेराकोटा लिंटल्स पर प्लास्टर से बनी बौद्ध प्रतिमाएं',
    ],
    historicalMilestones: [
      { year: '४२७ ई.', event: 'गुप्त सम्राट कुमारगुप्त प्रथम द्वारा मठ की स्थापना' },
      { year: '६३७ ई.', event: 'चीनी तीर्थयात्री ह्वेनसांग का नालंदा में अध्ययन एवं निवास' },
      { year: '२०१६ ई.', event: 'यूनेस्को विश्व धरोहर स्थल के रूप में मान्यता' },
    ],
  },
  'sanchi-stupa': {
    name: 'साँची का महान स्तूप',
    shortName: 'साँची',
    dynasty: 'मौर्य एवं सातवाहन',
    region: 'विदिशा, मध्य प्रदेश',
    state: 'मध्य प्रदेश',
    era: '३री शताब्दी ईसा पूर्व–१ली शताब्दी ईस्वी',
    architecturalStyle: 'मौर्य स्तूप एवं सातवाहन तोरण नक्काशी',
    patronRuler: 'सम्राट अशोक महान',
    builtCentury: 'लगभग २५० ईसा पूर्व',
    description:
      'भगवान बुद्ध के पावन अवशेषों पर सम्राट अशोक द्वारा निर्मित, जिसमें जातक कथाओं और मौर्य प्रतीकों को दर्शाने वाले चार प्रसिद्ध तोरण द्वार हैं।',
    audioNarrativeTitle: 'धर्म के चार तोरण',
    audioNarrativeExcerpt:
      'बलुआ पत्थर में उत्कीर्ण धर्मचक्र और भगवान बुद्ध के प्रतीकात्मक निरूपण के आध्यात्मिक अर्थ को समझें...',
    architecturalFeatures: [
      'ब्रह्मांडीय आकाश का प्रतिनिधित्व करता अर्धगोलाकार अंड गुंबद',
      'चारों प्रमुख दिशाओं में उन्मुख चार नक्काशीदार तोरण द्वार',
      'शिखर पर स्थित हर्मिका और तीन स्तरीय छत्र',
      'प्रदक्षिणा पथ को घेरती पत्थर की जंगलादार वेदिका',
    ],
    historicalMilestones: [
      { year: '२५० ई.पू.', event: 'सम्राट अशोक द्वारा मूल स्तूप का निर्माण' },
      { year: '१ली श. ई.', event: 'सातवाहन शिल्पकार संघों द्वारा नक्काशीदार तोरणों का संयोजन' },
      { year: '१९८९ ई.', event: 'यूनेस्को विश्व धरोहर सूची में सम्मिलित' },
    ],
  },
};

export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // App header & brand
    app_name: 'ANVAYA',
    app_tagline: 'ARCHIVE // 2025',
    screen_explore: 'Cartography & Landmarks',
    screen_cultural: 'Living Cultural Heritage',
    screen_vitrine: 'Museum Vitrine',
    screen_passport: 'Heritage Passport',
    screen_chronology: 'Dynastic Chronology',
    screen_dossiers: 'Curatorial Dossiers & Archives',
    screen_journey_archives: 'Historical Journey Archives',

    // Header nav buttons
    nav_cartography: 'Cartography',
    nav_culture: 'Culture',
    nav_chronology: 'Chronology',
    nav_dossiers: 'Dossier',
    search_archive: 'Search Archive',
    search_k: '⌘K',
    sites_artifacts_count: '6 SITES // 6 ARTIFACTS',

    // Cartography Bar
    cartographic_canvases: 'CARTOGRAPHIC CANVASES',
    monuments_count: 'MONUMENTS',
    monument_singular: 'MONUMENT',
    filtered: 'FILTERED',
    hide_dossier: 'Hide Dossier',
    view_dossier: 'View Dossier',
    search_cta: 'SEARCH ARCHIVE',

    // Dynasty Filters
    filter_all: 'All Dynasties',
    filter_chola: 'Chola & Dravidian',
    filter_vijayanagara: 'Vijayanagara',
    filter_rashtrakuta: 'Rashtrakuta & Deccan',
    filter_ganga: 'Eastern Ganga',
    filter_maurya: 'Maurya & Buddhist',

    // Map Inscriptions & HUD
    survey_title: 'BHARAT // CARTOGRAPHIC SURVEY',
    survey_coords: "8°04'N – 37°06'N | 68°07'E – 97°25'E",
    arabian_sea: 'ARABIAN SEA',
    sindhu_sagara: 'SINDHU SAGARA',
    bay_of_bengal: 'BAY OF BENGAL',
    purva_samudra: 'PURVA SAMUDRA',
    indian_ocean: 'INDIAN OCEAN // RATNAKARA',
    aryavarta: 'ARYAVARTA // INDO-GANGETIC',
    dakshinapatha: 'DAKSHINAPATHA',
    kaveri_mandala: 'KAVERI MANDALA',
    territory_prefix: 'TERRITORY //',
    journey_archives_btn: 'JOURNEY ARCHIVES ➔',
    archive_soon_btn: 'ARCHIVE WILL BE ADDED SOON',
    journey_archives_short: 'Journey Archives',
    archive_soon_short: 'Archive Soon',

    // Map Controls
    zoom_in: 'Zoom In',
    zoom_out: 'Zoom Out',
    reset_view: 'Reset View',
    fit_map: 'Fit View',

    // Dossier Panels
    tab_history: 'History & Epigraphy',
    tab_architecture: 'Architecture & Structural',
    tab_audio: 'Acoustic / Audio Guide',
    historical_context: 'HISTORICAL CONTEXT',
    architectural_hallmarks: 'ARCHITECTURAL HALLMARKS',
    era_dynasty: 'ERA & DYNASTY',
    patron_ruler: 'PATRON RULER',
    century_consecration: 'CENTURY & CONSECRATION',
    structural_style: 'STRUCTURAL STYLE',
    coordinates_tag: 'COORDINATES',
    unesco_badge: 'UNESCO World Heritage Site',
    launch_journey: 'Launch Historical Journey',
    historical_milestones: 'HISTORICAL MILESTONES',
    listen_audio: 'Listen to Narrative Excerpt',
    pause_audio: 'Pause Narrative',

    // Archival curation notice
    curation_notice_title: 'ARCHIVAL CURATION NOTICE',
    curation_notice_desc: 'The Historical Journey Archive for {name} ({region}) will be added soon. Epigraphical records, architectural models, and sovereign decision trees are currently being cataloged.',
    available_journey_note: 'Available Journey: Rajaraja Chola I (Tamil Nadu)',
    launch_chola_journey: 'Launch Chola Journey',

    // Language Toggle Tooltip
    lang_toggle_tooltip: 'Switch language to Hindi (हिन्दी में बदलें)',
    lang_label: 'हिन्दी',
    lang_badge: 'HI',
  },
  hi: {
    // App header & brand
    app_name: 'अन्वय',
    app_tagline: 'अभिलेखागार // २०२५',
    screen_explore: 'मानचित्र एवं ऐतिहासिक स्थल',
    screen_cultural: 'जीवंत सांस्कृतिक धरोहर',
    screen_vitrine: 'संग्रहालय दीर्घा',
    screen_passport: 'धरोहर पासपोर्ट',
    screen_chronology: 'राजवंशीय कालक्रम',
    screen_dossiers: 'ऐतिहासिक प्रलेख एवं अभिलेखागार',
    screen_journey_archives: 'ऐतिहासिक यात्रा अभिलेखागार',

    // Header nav buttons
    nav_cartography: 'मानचित्र',
    nav_culture: 'संस्कृति',
    nav_chronology: 'कालक्रम',
    nav_dossiers: 'प्रलेख',
    search_archive: 'अभिलेखागार खोजें',
    search_k: '⌘K',
    sites_artifacts_count: '६ स्थल // ६ कलाकृतियाँ',

    // Cartography Bar
    cartographic_canvases: 'मानचित्र फलक',
    monuments_count: 'स्मारक',
    monument_singular: 'स्मारक',
    filtered: 'फ़िल्टर किए गए',
    hide_dossier: 'प्रलेख छुपाएं',
    view_dossier: 'प्रलेख देखें',
    search_cta: 'अभिलेखागार खोजें',

    // Dynasty Filters
    filter_all: 'सभी राजवंश',
    filter_chola: 'चोल एवं द्रविड़',
    filter_vijayanagara: 'विजयनगर',
    filter_rashtrakuta: 'राष्ट्रकूट एवं दक्कन',
    filter_ganga: 'पूर्वी गंग',
    filter_maurya: 'मौर्य एवं बौद्ध',

    // Map Inscriptions & HUD
    survey_title: 'भारत // ऐतिहासिक मानचित्र सर्वेक्षण',
    survey_coords: "८°०४'उ – ३७°०६'उ | ६८°०७'पू – ९७°२५'पू",
    arabian_sea: 'अरब सागर',
    sindhu_sagara: 'सिन्धु सागर',
    bay_of_bengal: 'बंगाल की खाड़ी',
    purva_samudra: 'पूर्व समुद्र',
    indian_ocean: 'हिन्द महासागर // रत्नाकर',
    aryavarta: 'आर्यावर्त // सिन्धु-गंगा मैदान',
    dakshinapatha: 'दक्षिणापथ',
    kaveri_mandala: 'कावेरी मण्डल',
    territory_prefix: 'राज्य //',
    journey_archives_btn: 'यात्रा अभिलेखागार ➔',
    archive_soon_btn: 'शीघ्र उपलब्ध होगा',
    journey_archives_short: 'यात्रा अभिलेखागार',
    archive_soon_short: 'शीघ्र उपलब्ध',

    // Map Controls
    zoom_in: 'बड़ा करें (+)',
    zoom_out: 'छोटा करें (-)',
    reset_view: 'सामान्य दृश्य',
    fit_map: 'मानचित्र फ़िट करें',

    // Dossier Panels
    tab_history: 'इतिहास एवं अभिलेख',
    tab_architecture: 'वास्तुकला एवं संरचना',
    tab_audio: 'ध्वनि / ऑडियो गाइड',
    historical_context: 'ऐतिहासिक संदर्भ',
    architectural_hallmarks: 'वास्तुकला की विशेषताएं',
    era_dynasty: 'काल एवं राजवंश',
    patron_ruler: 'संरक्षक शासक',
    century_consecration: 'शताब्दी एवं निर्माण',
    structural_style: 'स्थापत्य शैली',
    coordinates_tag: 'भौगोलिक निर्देशांक',
    unesco_badge: 'यूनेस्को विश्व धरोहर स्थल',
    launch_journey: 'ऐतिहासिक यात्रा शुरू करें',
    historical_milestones: 'ऐतिहासिक पड़ाव',
    listen_audio: 'ऑडियो वृत्तांत सुनें',
    pause_audio: 'ऑडियो रोकें',

    // Archival curation notice
    curation_notice_title: 'अभिलेखागार सूचना',
    curation_notice_desc: '{name} ({region}) का ऐतिहासिक यात्रा अभिलेखागार शीघ्र जोड़ा जाएगा। अभिलेख, वास्तुकला मॉडल और शासक निर्णयों को संकलित किया जा रहा है।',
    available_journey_note: 'उपलब्ध यात्रा: राजराजा चोल प्रथम (तमिलनाडु)',
    launch_chola_journey: 'चोल यात्रा शुरू करें',

    // Language Toggle Tooltip
    lang_toggle_tooltip: 'Switch language to English (अंग्रेज़ी में देखें)',
    lang_label: 'English',
    lang_badge: 'EN',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  getLandmarkTranslation: (landmarkId: string) => LandmarkTranslation | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const existing = useContext(LanguageContext);
  if (existing) {
    return <>{children}</>;
  }

  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('anvaya_language');
      if (saved === 'hi' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('anvaya_language', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const langDict = UI_TRANSLATIONS[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    const fallbackDict = UI_TRANSLATIONS['en'];
    if (fallbackDict && fallbackDict[key]) {
      return fallbackDict[key];
    }
    return fallback || key;
  };

  const getLandmarkTranslation = (landmarkId: string): LandmarkTranslation | null => {
    if (language === 'hi' && LANDMARK_HINDI_TRANSLATIONS[landmarkId]) {
      return LANDMARK_HINDI_TRANSLATIONS[landmarkId];
    }
    return null;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      getLandmarkTranslation,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (key: string, fallback?: string) => {
        const fallbackDict = UI_TRANSLATIONS['en'];
        if (fallbackDict && fallbackDict[key]) return fallbackDict[key];
        return fallback || key;
      },
      getLandmarkTranslation: () => null,
    };
  }
  return context;
};
