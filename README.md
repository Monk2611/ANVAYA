# Anvaya (अन्वय) // Indian Cultural & Civilizational Heritage Explorer

> *Anvaya* (Sanskrit: अन्वय — *lineage, connection, continuity*) is an interactive, pedagogical web application dedicated to exploring India's cultural heritage, civilizational chronology, regional diversity, and monumental architecture through interactive cartography, living cultural archives, and gamified historical journeys.

---

## 🏛️ Core Pillars of Anvaya

Anvaya synthesizes historical documentation and spatial exploration across four interconnected dimensions:

### 1. 🗺️ Cartography (*Where?*)
- **Interactive Vector Map of India**: Precise territorial cartography highlighting prominent UNESCO World Heritage monuments, royal sanctuaries, and rock-cut shrines.
- **Dynastic & Regional Filters**: Filter sites by imperial patronage (Imperial Cholas, Mauryas, Mughals, Marathas, Vijayanagara, Guptas, and more).
- **Interactive Spatial Dossiers**:
  - **Mobile & Tablet**: Slide-up interactive dossier drawer with peek, half, and full archival inspection states.
  - **Laptop & Desktop**: Integrated split-view research workbench with a collapsible side dossier panel.
  - Audio guides, architectural specifications, spatial coordinates, and chronological provenance milestones for each landmark.

### 2. 🪔 Living Cultural Heritage (*What?*)
- **Intangible & Tangible Traditions**: Curated registry of regional craft traditions, hand-spun textiles (Kanjeevaram, Pashmina), sacred performance arts (Kathakali, Bharatanatyam), classical lutherie (Saraswati Veena), culinary arts, and folk celebrations.
- **Deep Historical & Philosophical Lineage**: Detailed analytical breakdowns of community lineages, religious philosophy, geographical indications (GI), and living preservation statuses.
- **Gamified Cultural Exploration**: Earn Cultural XP and discover related architectural monuments as you engage with living traditions.

### 3. 📜 Dynastic Chronology (*When?*)
- **Civilizational Epochs**: Journey through 5,000+ years of continuous historical epochs—from the Bronze Age Harappan urban centers and Vedic age through the Classical Golden Age, Medieval Regional Sovereignty, and Early Modern Empires.
- **Sovereigns & Key Personalities**: In-depth records of historic rulers (e.g., Rajaraja Chola I, Ashoka Maurya, Chandragupta II, Chhatrapati Shivaji Maharaj, Krishnadevaraya).
- **Watershed Historical Events & Inscriptions**: Chronological timelines of major political treaties, artistic movements, and naval expeditions with direct linkages back to cartographic sites.

### 4. 📂 Curatorial Field Dossiers (*What is the Deeper Evidence?*)
- **Epigraphical Archives & Research Papers**: Primary inscriptional records (e.g., Brihadisvara temple plinth Tamil inscriptions, Ashokan rock edicts, Heliodorus pillar).
- **Dual-Pane Scholarly Desk**: Filter evidence by inscription, archaeological finding, oral history, or archival documentation. Includes original transcriptions, English translations, discovery metadata, and scholarly citations grounded in Archaeological Survey of India (ASI) reports.

### 5. ⚔️ Pedagogical Historical Journeys (*Decisions & Archival Truth*)
- **Interactive Historical Dilemmas**: Step into the sandals of pivotal historical rulers (e.g., *Rajaraja Chola I: The Granite Sovereign of Kaveri*).
- **Counterfactual Exploration**: Make governing choices on resource logistics, architectural engineering, and naval defense—testing hypothetical outcomes against documented historical reality.
- **XP & Archival Seals**: Earn journey experience points (XP) and unlock collectible archival seals (e.g., *Imperial Chola Architect & Sovereign*).

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/) + [ESBuild](https://esbuild.github.io/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Cartography**: [@svg-maps/india](https://www.npmjs.com/package/@svg-maps/india) with custom interactive SVG coordinate overlays
- **Design System**: Neo-Archival parchment aesthetics inspired by classical Indian epigraphy:
  - Terracotta Red (`#A8422B`)
  - Burnished Brass (`#B8863B`)
  - Deep Kaveri Indigo (`#1A2744`)
  - Antique Parchment (`#FAF7F2` / `#F3ECE2`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended) and `npm` or `bun` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/anvaya.git
   cd anvaya
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📋 Available Scripts

- `npm run dev` — Starts the Vite development server on port 3000.
- `npm run build` — Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run preview` — Locally preview the production build.
- `npm run lint` — Runs TypeScript type-checking (`tsc --noEmit`).

---

## 📁 Project Structure

```
├── index.html                   # Entry HTML document with typography & meta tags
├── package.json                 # Project dependencies and npm scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── tsconfig.json                # TypeScript compiler configuration
├── metadata.json                # Application metadata
│
├── public/                      # Static public assets (images, icons)
│
└── src/
    ├── main.tsx                 # React DOM mount entry
    ├── App.tsx                  # Root state coordinator (XP, badges, screen routing, search)
    ├── types.ts                 # TypeScript data contracts (Landmarks, Dossiers, Journeys, etc.)
    ├── index.css                # Global styling & Tailwind v4 CSS configuration
    │
    ├── components/
    │   ├── common/              # Universal UI components (Header, BottomNav, Stamp, Badges, Search)
    │   ├── cultural/            # Cultural Explorer grid, category chips, and detail modal
    │   ├── dossier/             # Interactive drawer (mobile) and sidebar (desktop)
    │   ├── journey/             # Historical journey scenario cards, options, and completion modals
    │   ├── map/                 # Interactive India vector cartography canvas & marker projection
    │   └── screens/             # Primary top-level screens:
    │       ├── ExploreScreen.tsx
    │       ├── CulturalExplorerScreen.tsx
    │       ├── ChronologyScreen.tsx
    │       ├── DossiersScreen.tsx
    │       └── HistoricalJourneyArchivesScreen.tsx
    │
    └── data/                    # Curated archival datasets:
        ├── heritageLandmarks.ts # Monuments, UNESCO status, architecture, coordinates
        ├── culturalData.ts      # Living heritage, craftsmanship, rituals, performance arts
        ├── chronologyData.ts    # Civilizational epochs, royal dynasties, timeline events
        ├── fieldDossiers.ts     # Inscriptions, scholarly notes, and epigraphical sources
        └── historicalJourneys.ts# Pedagogy scenarios, choices, dilemmas, and badge definitions
```

---

## ⌨️ Shortcuts & Navigation

- **⌘K / Ctrl+K**: Open the universal Archival Search modal to instantly query across monuments, dynasties, field notes, and cultural traditions.
- **Escape**: Close search or any active full-screen modal.

---

## 📜 Curatorial Sources & Methodology

All historical dates, epigraphical transcriptions, and architectural nomenclature are grounded in published documentation from:
- Archaeological Survey of India (ASI) reports and memoirs
- Epigraphia Indica & South Indian Inscriptions corpus
- UNESCO World Heritage Centre designations

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
