export type ScreenType =
  | 'explore'
  | 'cultural'
  | 'vitrine'
  | 'passport'
  | 'chronology'
  | 'dossiers'
  | 'journey-archives';

export type DrawerState = 'peek' | 'full' | 'closed' | 'preview';

export type CulturalCategory =
  | 'festivals'
  | 'food-cuisine'
  | 'music-instruments'
  | 'arts-crafts'
  | 'clothing-textiles'
  | 'architecture';

export interface CulturalItem {
  id: string;
  name: string;
  nativeName?: string;
  category: CulturalCategory;
  region: string;
  state: string;
  shortDescription: string;
  historicalSignificance: string;
  culturalSignificance: string;
  relatedTradition: string;
  imageUrl: string;
  timePeriodOrOrigin: string;
  primaryElements: string[];
  xpReward: number;
}

export interface CulturalCategoryMeta {
  id: CulturalCategory;
  name: string;
  tagline: string;
  itemCount?: number;
}

export interface HeritageLandmark {
  id: string;
  accessionCode: string;
  name: string;
  nativeScript?: string;
  era: string;
  dynasty: string;
  dynastyFilter: string;
  region: string;
  state?: string;
  coordinates: {
    lat: string;
    long: string;
    geoPrecision: string;
  };
  mapPosition: {
    x: number; // percentage (0-100) on cartographic canvas
    y: number; // percentage (0-100) on cartographic canvas
  };
  description: string;
  architecturalStyle: string;
  builtCentury: string;
  patronRuler: string;
  imageUrl: string;
  audioNarrativeTitle: string;
  audioDuration: string;
  audioNarrativeExcerpt: string;
  architecturalFeatures: string[];
  historicalMilestones: {
    year: string;
    event: string;
  }[];
  unescoStatus: boolean;
}

export interface Artifact {
  id: string;
  accessionCode: string;
  title: string;
  period: string;
  dynasty: string;
  medium: string;
  provenance: string;
  discoveryYear: string;
  dimensions: string;
  currentLocation: string;
  curatorialNotes: string;
  imageUrl: string;
  category: 'architecture' | 'sculpture' | 'manuscripts' | 'textiles' | 'paintings';
}

export interface HeritageStamp {
  id: string;
  siteName: string;
  state: string;
  coordinates: string;
  accessionTag: string;
  sealShape: 'octagonal' | 'circular';
  isUnlocked: boolean;
  unlockedDate?: string;
  stampColor: string; // hex
  rotationDeg: number;
  historicalMilestone: string;
  trailName: string;
}

export interface ChronologyRuler {
  name: string;
  title: string;
  reign: string;
  significance: string;
}

export interface ChronologyEvent {
  year: string;
  title: string;
  description: string;
}

export interface ChronologySite {
  id: string;
  name: string;
  location: string;
  architecturalStyle: string;
  significance: string;
  landmarkId?: string;
  journeyId?: string;
}

export interface ChronologyDynasty {
  id: string;
  name: string;
  period: string;
  region: string;
  capital: string;
  emblem: string;
  description: string;
  keyRulers: ChronologyRuler[];
  majorEvents: ChronologyEvent[];
  associatedSites: ChronologySite[];
}

export interface ChronologyEra {
  id: string;
  eraName: string;
  spanYears: string;
  periodCode: string;
  summary: string;
  highlightDynasty: string;
  architecturalHallmark: string;
  keyMonuments: string[];
  tagline?: string;
  dynasties?: ChronologyDynasty[];
}

export type DossierEvidenceType =
  | 'inscription'
  | 'archaeological-finding'
  | 'historical-document'
  | 'oral-history'
  | 'curatorial-field-note';

export interface ScholarlySource {
  citation: string;
  authorOrPublication: string;
  year: string;
  archiveReference?: string;
}

export interface FieldDossier {
  id: string;
  title: string;
  accessionId: string;
  category: string;
  lastUpdated: string;
  coordinates: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  evidenceType?: DossierEvidenceType;
  associatedSite?: string;
  associatedRegion?: string;
  associatedEra?: string;
  landmarkId?: string;
  physicalMedium?: string;
  currentRepository?: string;
  discoveryDate?: string;
  transcriptionOrExcerpt?: string;
  transcriptionLanguage?: string;
  englishTranslation?: string;
  epigraphicalSignificance?: string;
  researchMethodology?: string;
  scholarlySources?: ScholarlySource[];
}

export interface ScenarioOption {
  id: string;
  label: string;
  description: string;
  hypotheticalOutcome: {
    title: string;
    consequence: string;
    strategicAnalysis: string;
  };
}

export interface JourneyScenario {
  id: string;
  order: number;
  year: string;
  title: string;
  subtitle: string;
  context: string;
  dilemmaPrompt: string;
  options: ScenarioOption[];
  historicalReality: {
    title: string;
    actualDecision: string;
    historicalOutcome: string;
    inscriptionalSource: string;
  };
}

export interface JourneyCharacter {
  id: string;
  name: string;
  regnalTitle: string;
  nativeScript?: string;
  lifespan: string;
  reignYears: string;
  dynasty: string;
  region: string;
  state: string;
  portraitUrl: string;
  biography: string;
  historicalImperative: string;
  pedagogicalDisclaimer: string;
}

export interface JourneyBadge {
  id: string;
  name: string;
  title: string;
  sealShape: 'octagonal' | 'circular';
  accentColor: string;
  description: string;
  xpValue: number;
}

export interface HistoricalJourney {
  id: string;
  landmarkId: string; // e.g. 'brihadisvara-thanjavur'
  region: string;
  state: string;
  dynasty: string;
  title: string;
  subtitle: string;
  character: JourneyCharacter;
  scenarios: JourneyScenario[];
  awardedBadge: JourneyBadge;
  totalXp: number;
}
