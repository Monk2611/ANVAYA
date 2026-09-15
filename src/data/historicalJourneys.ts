import { HistoricalJourney } from '../types';

/**
 * Anvaya Historical Journey Repository
 *
 * To add a new historical character or journey:
 * 1. Define a new `HistoricalJourney` object in `HISTORICAL_JOURNEYS`.
 * 2. Link it to an existing or new `landmarkId` (from `heritageLandmarks.ts`).
 * 3. Provide character bio, historical context, and 2-4 sequential scenarios.
 * 4. For every scenario option, supply:
 *    - `hypotheticalOutcome`: A pedagogical counterfactual exploration (never presented as true history).
 *    - `historicalReality`: A verified, source-grounded account of what actually occurred in history.
 * 5. Define an awarded badge and XP reward.
 */
export const HISTORICAL_JOURNEYS: HistoricalJourney[] = [
  {
    id: 'rajaraja-chola-journey',
    landmarkId: 'brihadisvara-thanjavur',
    region: 'Chola Mandala, Kaveri Delta',
    state: 'Tamil Nadu',
    dynasty: 'Imperial Chola Dynasty',
    title: 'Rajaraja Chola I: The Granite Sovereign of Kaveri',
    subtitle: 'Navigating Statecraft, Engineering & Maritime Power in 11th Century Tamilakam',
    totalXp: 250,
    character: {
      id: 'rajaraja-chola-i',
      name: 'Rajaraja Chola I',
      regnalTitle: 'Rajaraja Kesari Varman // Shivapadasekhara',
      nativeScript: 'முதலாம் இராஜராஜ சோழன்',
      lifespan: 'c. 947 – 1014 CE',
      reignYears: '985 – 1014 CE',
      dynasty: 'Imperial Chola Dynasty',
      region: 'Kaveri Basin & Thanjavur',
      state: 'Tamil Nadu',
      portraitUrl:
        'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
      biography:
        'Born as Arulmozhivarman in 947 CE, Rajaraja I ascended the throne in 985 CE amidst shifting dynastic rivalries in Southern India. Over three decades of rule, he consolidated a fragmented kingdom into an administratively centralized maritime superpower. He commissioned the Peruvudaiyar Koyil (Brihadisvara Temple)—an engineering marvel erected entirely from granite in an alluvial delta with zero native stone.',
      historicalImperative:
        'Consolidate state sovereignty, engineer an enduring cultural monument in Thanjavur without debt, and secure Indian Ocean merchant sea routes against piracy.',
      pedagogicalDisclaimer:
        'Archival Learning Principle: The scenarios that follow illustrate real governing dilemmas faced in the 11th century. Any choices you select explore hypothetical consequences for historical reflection and analysis; documented historical reality is presented alongside each scenario.',
    },
    awardedBadge: {
      id: 'badge-chola-granite-sovereign',
      name: 'Imperial Chola Architect & Sovereign',
      title: 'Honorary Keeper of the Kaveri Archives',
      sealShape: 'octagonal',
      accentColor: '#A8422B',
      description:
        'Analyzed the governance, engineering, and maritime decisions of Rajaraja Chola I during the construction of Brihadisvara Temple.',
      xpValue: 250,
    },
    scenarios: [
      {
        id: 'scenario-granite-conundrum',
        order: 1,
        year: '1004 CE',
        title: 'The Granite Transportation Dilemma',
        subtitle: 'Engineering Monumentality in an Alluvial Delta',
        context:
          'You have resolved to construct the Peruvudaiyar Koyil in your royal capital of Thanjavur. However, the Kaveri river delta consists solely of soft clay and alluvial silt—there are no rocky outcrops or granite quarries within a 50-kilometer perimeter. Your master architects (Sthapatis) insist the 66-meter high Vimana must be built entirely of interlocking hard granite to withstand seismic movement, culminating in an 80-tonne single-stone capstone (Kumbam).',
        dilemmaPrompt:
          'How will you transport over 130,000 tonnes of dense granite across rivers and elevate the 80-tonne apex monolith to a height of 66 meters?',
        options: [
          {
            id: 'opt-earthen-ramp',
            label: 'Option A: The 6-Kilometer Inclined Earthen Ramp',
            description:
              'Quarry granite from Mammallapuram and Pudukkottai, float blocks on wooden barges down the river, and construct a continuous 6.4-kilometer inclined earthen embankment from the village of Sarapallam to roll the 80-tonne capstone atop the tower using elephant teams.',
            hypotheticalOutcome: {
              title: 'Hypothetical Engineering Assessment',
              consequence:
                'Distributing the massive load over a gentle 6-kilometer slope allows elephants, rollers, and human haulers to steadily advance the megalith without relying on fragile timber scaffolding.',
              strategicAnalysis:
                'Requires immense workforce coordination and months of soil earthwork, but provides unmatched mechanical safety for an unprecedented 80-tonne deadweight lift.',
            },
          },
          {
            id: 'opt-timber-pulley',
            label: 'Option B: Vertical Timber Scaffolding & Pulley Arrays',
            description:
              'Erect multi-story teak timber scaffolds directly around the rising temple walls and hoist the blocks vertically using complex rope-and-pulley tackles.',
            hypotheticalOutcome: {
              title: 'Hypothetical Engineering Assessment',
              consequence:
                'Severe structural shear stress: 11th-century hemp cables and timber gantry joints would experience catastrophic tensile failure under concentrated loads over 20 tonnes.',
              strategicAnalysis:
                'While saving landscape earthwork, the risk of a disastrous structural collapse crashing into the sanctum sanctorum would be critically high.',
            },
          },
          {
            id: 'opt-brick-substitution',
            label: 'Option C: Downscale and Substitute with Fired Clay Bricks',
            description:
              'Reduce the tower height to 30 meters and construct the upper tiers from locally fired Kaveri silt bricks with lime mortar to eliminate the quarrying challenge.',
            hypotheticalOutcome: {
              title: 'Hypothetical Engineering Assessment',
              consequence:
                'The temple would be completed in half the time and cost, but would resemble ordinary regional shrines rather than a monumental declaration of imperial authority.',
              strategicAnalysis:
                'Fired bricks in tropical monsoon climates deteriorate within centuries; the temple would likely have lost its superstructure, lacking the thousand-year permanence of dry-jointed granite.',
            },
          },
        ],
        historicalReality: {
          title: 'What Actually Happened? (Historical Reality)',
          actualDecision:
            'Rajaraja Chola I chose the earthen ramp engineering strategy. Granite blocks were quarried near Pudukkottai and Tiruchirappalli and rafted across the Kaveri tributaries.',
          historicalOutcome:
            'To place the 80-tonne monolithic cupola (Kumbam) atop the 66-meter Vimana, Chola engineers built an inclined earthen ramp approximately 4 miles (6.4 km) in length, beginning at the hamlet of Sarapallam (literally "Mound of Scaffolding"). Guilds of war elephants and artisans hauled the stone block on wooden log rollers up the steady incline. After seating the monolith, the ramp was systematically cleared away. The village still bears the name Sarapallam today.',
          inscriptionalSource:
            'Epigraphia Indica & Thanjavur Brihadisvara South Wall Epigraphs; Tamil Nadu State Archaeological Department Monographs.',
        },
      },
      {
        id: 'scenario-maritime-fleet',
        order: 2,
        year: '993 CE',
        title: 'Maritime Sea Lanes & The Blue-Water Fleet',
        subtitle: 'Protecting Trade Guilds Across the Palk Strait',
        context:
          'Arabian dhows, Persian traders, and Chinese junk merchant fleets cross the Indian Ocean to reach the Kaveri delta ports at Nagapattinam. However, rival confederacies and pirates in the Palk Strait, bolstered by the hostile Sinhala monarch in northern Sri Lanka (Anuradhapura), repeatedly intercept merchant guilds (Ayyavole 500 and Manigramam). Guild leaders petition your court for protection.',
        dilemmaPrompt:
          'How will you secure Indian Ocean commerce and respond to maritime aggression along the southern trade corridors?',
        options: [
          {
            id: 'opt-blue-water-navy',
            label: 'Option A: Commission an Imperial Blue-Water Naval Armada',
            description:
              'Construct an oceanic war fleet, deploy amphibious forces across the Palk Strait, and annex northern Sri Lanka to establish permanent naval bases guarding international sealanes.',
            hypotheticalOutcome: {
              title: 'Hypothetical Strategic Assessment',
              consequence:
                'Transforms the Chola realm into an undisputed thalassocracy (maritime empire), ensuring uninterrupted toll revenues and opening direct diplomatic conduits to the Song Dynasty of China.',
              strategicAnalysis:
                'Requires substantial upfront naval timber reserves and sustained troop provisioning overseas, but shifts the balance of Indian Ocean trade permanently.',
            },
          },
          {
            id: 'opt-defensive-forts',
            label: 'Option B: Fortify Mainland Ports & Levy Heavy Escort Taxes',
            description:
              'Refuse overseas naval expedition; instead, reinforce coastal watchtowers at Nagapattinam and impose a steep maritime defense tariff on foreign merchant vessels.',
            hypotheticalOutcome: {
              title: 'Hypothetical Strategic Assessment',
              consequence:
                'Merchant guilds would divert their vessels to rival Malabar or Kalinga ports to avoid exorbitant tariffs, diminishing Chola customs income and international prestige.',
              strategicAnalysis:
                'A passive defensive posture leaves deep-water piracy unaddressed, forfeiting control over the strategic Malacca and Palk trade arteries.',
            },
          },
          {
            id: 'opt-treaty-appeasement',
            label: 'Option C: Negotiate Tribute Pacts with Hostile Coastal Rulers',
            description:
              'Send peace envoys with gifts of gold and silks to Anuradhapura, offering annual trade concessions in exchange for guarantees against piratical raids.',
            hypotheticalOutcome: {
              title: 'Hypothetical Strategic Assessment',
              consequence:
                'Appeasement would signal military vulnerability, encouraging regional rivals to demand progressively steeper tributes while continuing clandestine coastal raids.',
              strategicAnalysis:
                'Subsidizing adversaries undermines royal authority and fails to resolve the structural insecurity of Indian Ocean merchant fleets.',
            },
          },
        ],
        historicalReality: {
          title: 'What Actually Happened? (Historical Reality)',
          actualDecision:
            'Rajaraja Chola I built the most powerful navy in medieval Asia and launched an amphibious expedition across the Palk Strait in 993 CE.',
          historicalOutcome:
            'His armada captured Anuradhapura, establishing a Chola administrative province named "Mummudi Chola Mandalam" in northern Sri Lanka. He erected a granite Siva temple at Polonnaruwa and safeguarded the maritime lanes of the Ayyavole merchant guild. Chola fleets secured sea passages extending to the Maldives ("the twelve thousand ancient islands of the sea"), cementing Indian Ocean commercial dominance that lasted for generations.',
          inscriptionalSource:
            'Thanjavur Temple Inscription lines citing the conquest of "Kandalur Salai" and "Ila-mandalam" (Sri Lanka); Tiruvalangadu Copper Plates.',
        },
      },
      {
        id: 'scenario-epigraphical-audit',
        order: 3,
        year: '1001 CE',
        title: 'The Inscriptional Cadastral Survey',
        subtitle: 'Sustaining State Finances Through Permanent Transparency',
        context:
          'Constructing Brihadisvara Temple, funding monastic colleges, and maintaining naval fleets demands immense economic resources. Village revenues across Tamilakam are currently estimated haphazardly, causing disputes over land boundaries and arbitrary extortions by corrupt local revenue collectors. You need a system that ensures fair taxation without burdening farmers or relying on corrupt intermediaries.',
        dilemmaPrompt:
          'How will you organize and record the fiscal endowments, land rights, and temple expenditures of the Chola realm?',
        options: [
          {
            id: 'opt-stone-inscriptions',
            label: 'Option A: Nationwide Land Survey & Granite Epigraphs',
            description:
              'Conduct a meticulous empire-wide survey (Tittamu) measuring every parcel down to 1/52,428,800,000 of a veli. Inscribe every land grant, tax rate, and even the names of 400 temple staff permanently into the stone walls of Brihadisvara.',
            hypotheticalOutcome: {
              title: 'Hypothetical Administrative Assessment',
              consequence:
                'Public, tamper-proof transparency: carving tax obligations directly into granite prevents corrupt local chiefs from forging deeds or over-taxing agrarian villages.',
              strategicAnalysis:
                'Demands colossal scribal and stonemason labor, but creates a resilient open-access legal archive that endures across dynasties.',
            },
          },
          {
            id: 'opt-palm-leaf-archives',
            label: 'Option B: Palace Treasury Palm-Leaf Archives',
            description:
              'Record all cadastral surveys and tax schedules on dried palm leaves (Ola chuvadi) stored securely under armed guard in the royal palace vaults at Thanjavur.',
            hypotheticalOutcome: {
              title: 'Hypothetical Administrative Assessment',
              consequence:
                'Convenient for palace clerks, but palm leaves in humid Southern India decay, suffer termite damage, and are vulnerable to palace fires during political turnover.',
              strategicAnalysis:
                'Because the records remain locked away from the public, regional tax collectors can easily extort cultivators with fictitious assessments.',
            },
          },
          {
            id: 'opt-tax-farming',
            label: 'Option C: Privatized Tax Farming to Feudal Landlords',
            description:
              'Delegate tax collection to wealthy regional chieftains (Naduvazhis) in return for a fixed annual sum, letting them govern revenue collection autonomously.',
            hypotheticalOutcome: {
              title: 'Hypothetical Administrative Assessment',
              consequence:
                'Guarantees immediate upfront revenue for the royal treasury, but incentivizes landlords to relentlessly bleed peasant cultivators, sparking agrarian revolts.',
              strategicAnalysis:
                'Severely weakens central imperial authority, allowing regional feudal lords to amass private armies and challenge the throne.',
            },
          },
        ],
        historicalReality: {
          title: 'What Actually Happened? (Historical Reality)',
          actualDecision:
            'Rajaraja Chola I instituted the most sophisticated land survey and public epigraphical archiving program of antiquity.',
          historicalOutcome:
            'In 1001 CE, under imperial revenue minister Kuravan Ulagalandan, the Chola administration completed a precision cadastral survey measuring every patch of agricultural land. Rajaraja took the unprecedented step of commanding that every royal grant, grain donation, village boundary, and temple staff stipend—down to the exact daily measures of paddy allotted to each of the 400 devadasis, musicians, cooks, and bronze artisans—be inscribed into the granite plinth of Brihadisvara Temple. These inscriptions remain fully legible today, preserving the world’s most comprehensive medieval public ledger.',
          inscriptionalSource:
            'Brihadisvara Temple Base Inscriptions (South and North Walls); Archaeological Survey of India Volume II: Inscriptions of the Great Temple at Tanjore.',
        },
      },
    ],
  },
];

/**
 * Retrieve a historical journey for a specific heritage landmark ID.
 */
export function getJourneyByLandmarkId(landmarkId: string): HistoricalJourney | undefined {
  return HISTORICAL_JOURNEYS.find((j) => j.landmarkId === landmarkId);
}

/**
 * Retrieve a historical journey by its unique journey ID.
 */
export function getJourneyById(journeyId: string): HistoricalJourney | undefined {
  return HISTORICAL_JOURNEYS.find((j) => j.id === journeyId);
}

/**
 * Check if a landmark has an active Historical Journey configured.
 */
export function hasHistoricalJourney(landmarkId: string): boolean {
  return HISTORICAL_JOURNEYS.some((j) => j.landmarkId === landmarkId);
}
