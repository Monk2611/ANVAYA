import React, { useState, useEffect } from 'react';
import { ScreenType, HeritageLandmark, Artifact, ChronologyEra, HistoricalJourney, CulturalItem, FieldDossier } from './types';
import { Header } from './components/common/Header';
import { BottomNavController } from './components/common/BottomNavController';
import { ArchiveSearchModal } from './components/common/ArchiveSearchModal';
import { ExploreScreen } from './components/screens/ExploreScreen';
import { VitrineScreen } from './components/screens/VitrineScreen';
import { PassportScreen } from './components/screens/PassportScreen';
import { ChronologyScreen } from './components/screens/ChronologyScreen';
import { DossiersScreen } from './components/screens/DossiersScreen';
import { HistoricalJourneyArchivesScreen } from './components/screens/HistoricalJourneyArchivesScreen';
import { CulturalExplorerScreen } from './components/screens/CulturalExplorerScreen';
import { HISTORICAL_JOURNEYS } from './data/historicalJourneys';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('explore');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string | null>(null);
  const [activeJourney, setActiveJourney] = useState<HistoricalJourney | null>(null);
  const [userXp, setUserXp] = useState<number>(350);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [exploredCulturalIds, setExploredCulturalIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anvaya_explored_cultural_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('anvaya_explored_cultural_ids', JSON.stringify(exploredCulturalIds));
    } catch {
      // ignore
    }
  }, [exploredCulturalIds]);

  // Keyboard shortcut for ⌘K / Ctrl+K search bar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const screenTitles: Record<ScreenType, string> = {
    explore: 'Cartography & Landmarks',
    cultural: 'Living Cultural Heritage',
    vitrine: 'Museum Vitrine',
    passport: 'Heritage Passport',
    chronology: 'Dynastic Chronology',
    dossiers: 'Curatorial Dossiers & Archives',
    'journey-archives': 'Historical Journey Archives',
  };

  const handleSelectLandmarkFromSearch = (landmark: HeritageLandmark) => {
    setSelectedLandmarkId(landmark.id);
    setCurrentScreen('explore');
  };

  const handleSelectArtifactFromSearch = (_artifact: Artifact) => {
    setCurrentScreen('cultural');
  };

  const handleSelectEraFromSearch = (_era: ChronologyEra) => {
    setCurrentScreen('chronology');
  };

  const handleSelectCulturalItemFromSearch = (_cultural: CulturalItem) => {
    setCurrentScreen('cultural');
  };

  const handleSelectDossierFromSearch = (_dossier: FieldDossier) => {
    setCurrentScreen('dossiers');
  };

  const handleCompleteJourney = (awardedXp: number, badgeId: string) => {
    setUserXp((prev) => prev + awardedXp);
    setUnlockedBadges((prev) => (prev.includes(badgeId) ? prev : [...prev, badgeId]));
  };

  const handleAwardCulturalXp = (itemId: string, xpReward: number) => {
    if (!exploredCulturalIds.includes(itemId)) {
      setExploredCulturalIds((prev) => [...prev, itemId]);
      setUserXp((prev) => prev + xpReward);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#191B21] flex flex-col font-sans-ui selection:bg-[#FFD7CE] selection:text-[#882B16]">
      {/* Neo-Archival Spatial Header */}
      <Header
        activeScreenTitle={screenTitles[currentScreen]}
        onOpenSearch={() => setIsSearchOpen(true)}
        userXp={userXp}
        currentScreen={currentScreen}
        onScreenChange={(screen) => setCurrentScreen(screen)}
      />

      {/* Main View Container */}
      <main className="flex-1 flex flex-col relative overflow-x-hidden">
        {currentScreen === 'explore' && (
          <ExploreScreen
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenArtifacts={() => setCurrentScreen('cultural')}
            selectedLandmarkId={selectedLandmarkId}
            onStartJourney={(journey) => {
              setActiveJourney(journey);
              setCurrentScreen('journey-archives');
            }}
          />
        )}
        {currentScreen === 'cultural' && (
          <CulturalExplorerScreen
            exploredItemIds={exploredCulturalIds}
            onExploreItem={handleAwardCulturalXp}
            userXp={userXp}
          />
        )}
        {currentScreen === 'vitrine' && <VitrineScreen />}
        {currentScreen === 'passport' && <PassportScreen />}
        {currentScreen === 'chronology' && (
          <ChronologyScreen
            onSelectLandmark={(landmarkId) => {
              setSelectedLandmarkId(landmarkId);
              setCurrentScreen('explore');
            }}
            onStartJourney={(journeyId) => {
              const found = HISTORICAL_JOURNEYS.find((j) => j.id === journeyId);
              if (found) {
                setActiveJourney(found);
              }
              setCurrentScreen('journey-archives');
            }}
          />
        )}
        {currentScreen === 'dossiers' && (
          <DossiersScreen
            onSelectLandmark={(landmarkId) => {
              setSelectedLandmarkId(landmarkId);
              setCurrentScreen('explore');
            }}
          />
        )}
        {currentScreen === 'journey-archives' && (
          <HistoricalJourneyArchivesScreen
            journey={activeJourney || HISTORICAL_JOURNEYS[0]}
            userXp={userXp}
            unlockedBadges={unlockedBadges}
            onBackToMap={() => {
              setSelectedLandmarkId('brihadisvara-thanjavur');
              setCurrentScreen('explore');
            }}
            onCompleteJourney={handleCompleteJourney}
          />
        )}
      </main>

      {/* Spatial Bottom Navigation Controller */}
      <BottomNavController
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
      />

      {/* Spatial Archive Search Bar Modal */}
      <ArchiveSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLandmark={handleSelectLandmarkFromSearch}
        onSelectArtifact={handleSelectArtifactFromSearch}
        onSelectEra={handleSelectEraFromSearch}
        onSelectCulturalItem={handleSelectCulturalItemFromSearch}
        onSelectDossier={handleSelectDossierFromSearch}
      />
    </div>
  );
}

