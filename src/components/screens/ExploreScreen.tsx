import React, { useState, useEffect } from 'react';
import { HeritageLandmark, DrawerState, HistoricalJourney } from '../../types';
import { HERITAGE_LANDMARKS } from '../../data/heritageLandmarks';
import { getJourneyByLandmarkId, hasHistoricalJourney } from '../../data/historicalJourneys';
import { CoordinateChip } from '../common/CoordinateChip';
import { EraBadge } from '../common/EraBadge';
import { InteractiveDossierDrawer } from '../dossier/InteractiveDossierDrawer';
import { DesktopDossierSidebar } from '../dossier/DesktopDossierSidebar';
import { IndiaMapCanvas } from '../map/IndiaMapCanvas';
import {
  Layers,
  Crosshair,
  MapPin,
  Sparkles,
  Navigation,
  Filter,
  Scroll,
  X,
  ArrowRight,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react';

interface ExploreScreenProps {
  onOpenSearch: () => void;
  onOpenArtifacts?: () => void;
  selectedLandmarkId?: string | null;
  onStartJourney?: (journey: HistoricalJourney) => void;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  onOpenSearch,
  selectedLandmarkId,
  onStartJourney,
}) => {
  const [selectedLandmark, setSelectedLandmark] = useState<HeritageLandmark | null>(
    HERITAGE_LANDMARKS[0]
  );
  const [drawerState, setDrawerState] = useState<DrawerState>('peek');
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [unavailableNotice, setUnavailableNotice] = useState<{ landmark: HeritageLandmark } | null>(null);

  const dynasticFilters = [
    { id: 'all', label: 'All Dynasties' },
    { id: 'chola', label: 'Chola & Dravidian', landmarkId: 'brihadisvara-thanjavur' },
    { id: 'vijayanagara', label: 'Vijayanagara', landmarkId: 'hampi-vijayanagara' },
    { id: 'rashtrakuta', label: 'Rashtrakuta & Deccan', landmarkId: 'kailasa-ellora' },
    { id: 'ganga', label: 'Eastern Ganga', landmarkId: 'konark-sun-temple' },
    { id: 'maurya', label: 'Maurya & Buddhist', landmarkId: 'sanchi-stupa' },
  ];

  // Sync with external selection from Search Archive
  useEffect(() => {
    if (selectedLandmarkId) {
      const found = HERITAGE_LANDMARKS.find((l) => l.id === selectedLandmarkId);
      if (found) {
        setSelectedLandmark(found);
        setIsDesktopSidebarOpen(true);
        // If site is filtered out by current activeFilter, reset filter to 'all'
        if (activeFilter !== 'all' && found.dynastyFilter !== activeFilter) {
          setActiveFilter('all');
        }
        setDrawerState('peek');
      }
    }
  }, [selectedLandmarkId]);

  const filteredLandmarks = HERITAGE_LANDMARKS.filter((l) => {
    if (activeFilter === 'all') return true;
    return (
      l.dynastyFilter === activeFilter ||
      l.dynasty.toLowerCase().includes(activeFilter) ||
      l.architecturalStyle.toLowerCase().includes(activeFilter)
    );
  });

  const handleFilterSelect = (filterId: string) => {
    setActiveFilter(filterId);
    if (filterId !== 'all') {
      const filterItem = dynasticFilters.find((f) => f.id === filterId);
      if (filterItem?.landmarkId) {
        const target = HERITAGE_LANDMARKS.find((l) => l.id === filterItem.landmarkId);
        if (target) {
          setSelectedLandmark(target);
          setIsDesktopSidebarOpen(true);
          return;
        }
      }
      const matching = HERITAGE_LANDMARKS.filter((l) => {
        return (
          l.dynastyFilter === filterId ||
          l.dynasty.toLowerCase().includes(filterId) ||
          l.architecturalStyle.toLowerCase().includes(filterId)
        );
      });
      if (matching.length > 0) {
        setSelectedLandmark(matching[0]);
        setIsDesktopSidebarOpen(true);
      }
    }
  };

  const handleSelectLandmark = (landmark: HeritageLandmark) => {
    setSelectedLandmark(landmark);
    setIsDesktopSidebarOpen(true);
    if (selectedLandmark?.id === landmark.id) {
      // Clicking the active marker toggles between peek and full view on mobile
      setDrawerState((prev) => (prev === 'peek' ? 'full' : 'peek'));
    } else {
      // Keep existing open view (or open peek if closed)
      setDrawerState((prev) => (prev === 'full' ? 'full' : 'peek'));
    }
  };

  const handleUnavailableJourney = (landmark: HeritageLandmark) => {
    setUnavailableNotice({ landmark });
  };

  return (
    <div className="relative w-full h-[calc(100vh-105px)] lg:h-[calc(100vh-53px)] overflow-hidden flex flex-col bg-[#FAF7F2]">
      {/* Top Filter Bar & Spatial Index */}
      <div className="z-20 bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#B8863B]/25 p-3 flex flex-col gap-2 shrink-0">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#B8863B]" /> CARTOGRAPHIC CANVASES
            </span>
            <span className="text-[#8A726C] text-xs font-mono">
              // {filteredLandmarks.length} MONUMENT{filteredLandmarks.length === 1 ? '' : 'S'}
              {activeFilter !== 'all' && ` FILTERED`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Dossier Sidebar Button (Laptop only) */}
            {selectedLandmark && (
              <button
                onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-xs border border-[#B8863B]/40 bg-[#F3ECE2] hover:bg-[#FAF7F2] text-[#882B16] transition-colors cursor-pointer"
                title={isDesktopSidebarOpen ? 'Collapse Dossier Sidebar' : 'Expand Dossier Sidebar'}
              >
                {isDesktopSidebarOpen ? (
                  <>
                    <PanelRightClose className="w-3.5 h-3.5 text-[#A8422B]" />
                    <span>Hide Dossier</span>
                  </>
                ) : (
                  <>
                    <PanelRightOpen className="w-3.5 h-3.5 text-[#A8422B]" />
                    <span>View Dossier</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={onOpenSearch}
              className="text-[11px] font-mono text-[#882B16] hover:underline flex items-center gap-1 bg-[#F3ECE2] px-2 py-0.5 rounded-xs border border-[#B8863B]/30 cursor-pointer"
              title="Search all heritage sites"
            >
              <Crosshair className="w-3.5 h-3.5 text-[#A8422B]" />
              <span>SEARCH ARCHIVE</span>
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="max-w-7xl mx-auto w-full flex items-center gap-1.5 overflow-x-auto pb-1 subtle-scroll">
          {dynasticFilters.map((f) => {
            const count =
              f.id === 'all'
                ? HERITAGE_LANDMARKS.length
                : HERITAGE_LANDMARKS.filter(
                    (l) =>
                      l.dynastyFilter === f.id ||
                      l.dynasty.toLowerCase().includes(f.id) ||
                      l.architecturalStyle.toLowerCase().includes(f.id)
                  ).length;

            return (
              <button
                key={f.id}
                onClick={() => handleFilterSelect(f.id)}
                className={`shrink-0 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase border transition-all rounded-xs flex items-center gap-1 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#A8422B] text-white border-[#882B16] shadow-xs'
                    : 'bg-[#F3ECE2] text-[#684300] border-[#B8863B]/30 hover:border-[#A8422B] hover:bg-[#FAF7F2]'
                }`}
              >
                {f.id === 'chola' && (
                  <Scroll className="w-3 h-3 text-[#B8863B]" />
                )}
                <span>{f.label}</span>
                <span
                  className={`text-[9px] font-mono px-1 rounded-xs ${
                    activeFilter === f.id ? 'bg-[#882B16] text-[#FFD9A9]' : 'bg-[#FAF7F2] text-[#8A726C]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Curation Notification: Shown when Journey Archive does not exist yet for the selected region */}
      {unavailableNotice && (
        <div className="z-30 absolute top-20 left-1/2 -translate-x-1/2 max-w-lg w-[92%] p-3.5 bg-[#FAF4EB] border-2 border-[#B8863B] rounded-xs shadow-xl flex items-start gap-3 animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-[#1A2744] text-[#FFD9A9] flex items-center justify-center shrink-0 mt-0.5 border border-[#B8863B]/50">
            <Scroll className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0 text-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-bold text-[#882B16] uppercase text-[10.5px] tracking-wider">
                ARCHIVAL CURATION NOTICE // {unavailableNotice.landmark.dynasty.toUpperCase()}
              </span>
              <button
                onClick={() => setUnavailableNotice(null)}
                className="text-[#8A726C] hover:text-[#191B21] transition-colors p-0.5 cursor-pointer"
                title="Dismiss notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[#191B21] mt-1.5 leading-relaxed">
              The Historical Journey Archive for <strong>{unavailableNotice.landmark.name}</strong> ({unavailableNotice.landmark.region}) will be added soon. Epigraphical records, architectural models, and sovereign decision trees are currently being cataloged.
            </p>
            <div className="mt-2.5 pt-2 border-t border-[#B8863B]/20 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] font-mono text-[#684300]">
                Available Journey: Rajaraja Chola I (Tamil Nadu)
              </span>
              <button
                onClick={() => {
                  setUnavailableNotice(null);
                  const chola = getJourneyByLandmarkId('brihadisvara-thanjavur');
                  if (chola && onStartJourney) onStartJourney(chola);
                }}
                className="px-2.5 py-1 bg-[#A8422B] hover:bg-[#C25438] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs border border-[#882B16] transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
              >
                <span>Launch Chola Journey</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Cartography Workspace: Map Canvas on Left + Dossier on Right on Laptop */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Vector Map Canvas */}
        <div className="flex-1 h-full relative overflow-hidden">
          <IndiaMapCanvas
            landmarks={filteredLandmarks}
            selectedLandmark={selectedLandmark}
            onSelectLandmark={handleSelectLandmark}
            onStartJourney={onStartJourney}
            onUnavailableJourney={handleUnavailableJourney}
          />
        </div>

        {/* Desktop / Laptop Landmark Dossier Sidebar (>= 1024px) */}
        {isDesktopSidebarOpen && selectedLandmark && (
          <div className="hidden lg:flex h-full">
            <DesktopDossierSidebar
              landmark={selectedLandmark}
              onClose={() => setIsDesktopSidebarOpen(false)}
              onStartJourney={onStartJourney}
              onUnavailableJourney={handleUnavailableJourney}
            />
          </div>
        )}
      </div>

      {/* Mobile & Tablet Interactive Dossier Drawer (< 1024px) */}
      <InteractiveDossierDrawer
        landmark={selectedLandmark}
        drawerState={drawerState}
        onStateChange={setDrawerState}
        onClose={() => setDrawerState('closed')}
        onStartJourney={onStartJourney}
        onUnavailableJourney={handleUnavailableJourney}
      />
    </div>
  );
};
