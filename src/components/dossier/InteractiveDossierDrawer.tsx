import React, { useState } from 'react';
import { HeritageLandmark, DrawerState, HistoricalJourney } from '../../types';
import { getJourneyByLandmarkId } from '../../data/historicalJourneys';
import {
  Volume2,
  Columns,
  History,
  ChevronUp,
  ChevronDown,
  X,
  ExternalLink,
  Award,
  Scroll,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { CoordinateChip } from '../common/CoordinateChip';
import { EraBadge } from '../common/EraBadge';
import { useLanguage } from '../../context/LanguageContext';

interface InteractiveDossierDrawerProps {
  landmark: HeritageLandmark | null;
  drawerState: DrawerState;
  onStateChange: (state: DrawerState) => void;
  onClose: () => void;
  onStartJourney?: (journey: HistoricalJourney) => void;
  onUnavailableJourney?: (landmark: HeritageLandmark) => void;
}

export const InteractiveDossierDrawer: React.FC<InteractiveDossierDrawerProps> = ({
  landmark,
  drawerState,
  onStateChange,
  onClose,
  onStartJourney,
  onUnavailableJourney,
}) => {
  const { language, t, getLandmarkTranslation } = useLanguage();
  const [activeTab, setActiveTab] = useState<'history' | 'architecture' | 'audio'>('history');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!landmark || drawerState === 'closed') return null;

  const availableJourney = getJourneyByLandmarkId(landmark.id);
  const lTrans = getLandmarkTranslation(landmark.id);

  // Drawer height styles based on snap state
  const heightStyles = {
    peek: 'h-[135px]',
    preview: 'h-[88vh]',
    full: 'h-[88vh]',
    closed: 'h-0',
  };

  const togglePeekFull = () => {
    if (drawerState === 'peek') onStateChange('full');
    else onStateChange('peek');
  };

  return (
    <div
      className={`fixed bottom-14 left-0 right-0 z-30 transition-all duration-300 ease-in-out bg-[#FAF7F2]/95 backdrop-blur-md border-t-2 border-[#B8863B]/60 shadow-[0_-8px_32px_rgba(28,30,36,0.12)] flex flex-col max-w-xl mx-auto rounded-t-lg overflow-hidden lg:hidden ${heightStyles[drawerState]}`}
    >
      {/* Burnished Brass Drag Handle & Peek Bar */}
      <div
        onClick={togglePeekFull}
        className="w-full pt-2 pb-1.5 px-4 flex flex-col items-center justify-center cursor-pointer select-none bg-[#F3ECE2] border-b border-[#B8863B]/20"
      >
        <div className="w-12 h-1 bg-[#B8863B]/50 rounded-full mb-1 hover:bg-[#A8422B] transition-colors" />
        <div className="w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="label-mono-spatial text-[#A8422B] text-[10px]">
              DOSSIER // {landmark.accessionCode.split('//')[0].trim()}
            </span>
            {landmark.unescoStatus && (
              <span className="inline-flex items-center gap-1 text-[9px] text-[#684300] font-bold tracking-wider uppercase bg-[#FFD9A9]/40 px-1.5 py-0.5 rounded-xs">
                <Award className="w-3 h-3 text-[#B8863B]" /> UNESCO
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[#8A726C]">
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#882B16]">
              {drawerState === 'peek' ? t('peek_view') : t('full_view')}
            </span>
            {drawerState === 'full' ? (
              <ChevronDown className="w-4 h-4 text-[#A8422B]" />
            ) : (
              <ChevronUp className="w-4 h-4 text-[#A8422B]" />
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              title="Close dossier"
              className="p-1 hover:text-[#A8422B] text-[#8A726C] ml-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Peek View Header (Always Visible in Peek & Full) */}
      <div className="px-4 py-2 flex items-center justify-between gap-3 border-b border-[#B8863B]/15">
        <div className="flex-1 min-w-0 cursor-pointer" onClick={togglePeekFull}>
          <h2 className="font-serif-display text-lg font-bold text-[#191B21] truncate hover:text-[#882B16] transition-colors">
            {lTrans?.name || landmark.name}
          </h2>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-[#57423D]">
            <span className="font-medium truncate">{lTrans?.dynasty || landmark.dynasty}</span>
            <span>•</span>
            <span className="truncate">{lTrans?.region || landmark.region}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <CoordinateChip coordinates={landmark.coordinates.lat} />
          {availableJourney && onStartJourney ? (
            <button
              onClick={() => onStartJourney(availableJourney)}
              className="px-2.5 py-1 bg-[#1A2744] hover:bg-[#2C3852] text-[#FFD9A9] text-[11px] font-bold tracking-wider uppercase rounded-xs border border-[#B8863B]/50 flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              title="Begin Historical Journey with Rajaraja Chola I"
            >
              <Scroll className="w-3.5 h-3.5 text-[#FFD9A9]" />
              <span className="hidden xs:inline">{t('begin_journey')}</span>
              <span className="xs:hidden">{t('journey_archives_short')}</span>
            </button>
          ) : (
            <button
              onClick={() => onUnavailableJourney && onUnavailableJourney(landmark)}
              className="px-2 py-1 bg-[#F3ECE2] hover:bg-[#FAF7F2] text-[#882B16] border border-[#B8863B]/40 text-[10px] font-mono font-bold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              title="Journey archive will be added soon"
            >
              <span>{t('archive_soon_short')}</span>
            </button>
          )}
          {drawerState === 'peek' ? (
            <button
              onClick={() => onStateChange('full')}
              className="px-2.5 py-1 bg-[#A8422B] text-white text-[11px] font-bold tracking-wider uppercase rounded-xs border border-[#882B16] hover:bg-[#C25438] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>{t('full_view')}</span>
              <ChevronUp className="w-3 h-3" />
            </button>
          ) : (
            <button
              onClick={() => onStateChange('peek')}
              className="px-2.5 py-1 bg-[#F3ECE2] text-[#882B16] border border-[#B8863B]/40 text-[11px] font-bold tracking-wider uppercase rounded-xs hover:bg-[#FAF7F2] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>{t('peek_view')}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Preview & Full Body Content */}
      {drawerState !== 'peek' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex items-center border-b border-[#B8863B]/20 bg-[#F3ECE2]/60 px-4">
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors ${
                activeTab === 'history'
                  ? 'border-[#A8422B] text-[#882B16] bg-[#FAF7F2]'
                  : 'border-transparent text-[#8A726C] hover:text-[#191B21]'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>{t('tab_history')}</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors ${
                activeTab === 'architecture'
                  ? 'border-[#A8422B] text-[#882B16] bg-[#FAF7F2]'
                  : 'border-transparent text-[#8A726C] hover:text-[#191B21]'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>{t('tab_architecture')}</span>
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors ${
                activeTab === 'audio'
                  ? 'border-[#A8422B] text-[#882B16] bg-[#FAF7F2]'
                  : 'border-transparent text-[#8A726C] hover:text-[#191B21]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{t('tab_audio')}</span>
            </button>
          </div>

          {/* Tab Panes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 subtle-scroll">
            {/* TAB: HISTORY */}
            {activeTab === 'history' && (
              <div className="space-y-4 animate-fade-in">
                <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#B8863B]/30">
                  <img
                    src={landmark.imageUrl}
                    alt={landmark.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#12151B]/80 text-[#FAF7F2] text-[10px] font-mono rounded">
                    CONSTRUCTED: {landmark.builtCentury}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <EraBadge label={landmark.era} variant="terracotta" />
                  <EraBadge label={landmark.architecturalStyle} variant="brass" />
                </div>

                {/* Historical Journey Feature Card */}
                {availableJourney && onStartJourney ? (
                  <div className="p-3.5 bg-[#FAF2EB] border-2 border-[#B8863B]/60 rounded-xs shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1.5">
                        <Scroll className="w-3.5 h-3.5 text-[#B8863B]" />
                        HISTORICAL JOURNEY AVAILABLE
                      </span>
                      <span className="text-[10px] font-mono text-white bg-[#A8422B] px-1.5 py-0.5 rounded-xs font-bold">
                        +{availableJourney.totalXp} XP
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif-display text-sm font-bold text-[#191B21]">
                        {availableJourney.title}
                      </h4>
                      <p className="text-xs text-[#57423D] mt-1 leading-relaxed">
                        Assume the regnal responsibilities of {availableJourney.character.name} to navigate 11th-century architectural, naval, and administrative governance dilemmas.
                      </p>
                    </div>

                    <button
                      onClick={() => onStartJourney(availableJourney)}
                      className="w-full py-2 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    >
                      <Scroll className="w-3.5 h-3.5" />
                      <span>Begin Historical Journey</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/35 rounded-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="label-caps text-[#882B16] text-[10px] flex items-center gap-1.5">
                        <Scroll className="w-3.5 h-3.5 text-[#B8863B]" />
                        HISTORICAL JOURNEY ARCHIVE
                      </span>
                      <span className="text-[9px] font-mono text-[#684300] bg-[#FFD9A9]/60 px-1.5 py-0.5 rounded-xs font-bold">
                        ADDED SOON
                      </span>
                    </div>
                    <p className="text-xs text-[#57423D] leading-relaxed">
                      The interactive historical governance scenarios for {landmark.dynasty} ({landmark.region}) will be added soon. Epigraphical records and sovereign decision scenarios are currently in curation.
                    </p>
                    {onStartJourney && (
                      <button
                        onClick={() => {
                          const chola = getJourneyByLandmarkId('brihadisvara-thanjavur');
                          if (chola) onStartJourney(chola);
                        }}
                        className="text-xs font-mono text-[#A8422B] hover:underline flex items-center gap-1 pt-1 cursor-pointer font-bold"
                      >
                        <span>Explore active Rajaraja Chola I Archive ➔</span>
                      </button>
                    )}
                  </div>
                )}

                <p className="text-sm text-[#191B21] leading-relaxed font-sans-ui">
                  {landmark.description}
                </p>

                {/* Historical Timeline */}
                <div className="pt-3 border-t border-[#B8863B]/20">
                  <h4 className="label-caps text-[#A8422B] text-[10px] mb-2.5">
                    CHRONOLOGICAL PROVENANCE
                  </h4>
                  <div className="space-y-2 relative border-l-2 border-[#B8863B]/30 ml-2 pl-3">
                    {landmark.historicalMilestones.map((milestone, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-[#A8422B]" />
                        <span className="font-mono text-xs font-bold text-[#684300]">
                          {milestone.year}
                        </span>
                        <p className="text-xs text-[#57423D] leading-snug">
                          {milestone.event}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs">
                  <div className="label-caps text-[#684300] text-[10px] mb-1">
                    CANONICAL STYLE & PATRONAGE
                  </div>
                  <div className="font-serif-display text-base font-bold text-[#191B21]">
                    {landmark.architecturalStyle}
                  </div>
                  <div className="text-xs text-[#57423D] mt-1 font-mono">
                    Royal Patron: {landmark.patronRuler} ({landmark.builtCentury})
                  </div>
                </div>

                <div>
                  <h4 className="label-caps text-[#A8422B] text-[10px] mb-2">
                    ARCHITECTURAL BLUEPRINT SPECIFICATIONS
                  </h4>
                  <div className="space-y-2">
                    {landmark.architecturalFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 bg-[#F3ECE2]/50 border border-[#B8863B]/20 rounded-xs flex items-start gap-2 text-xs text-[#191B21]"
                      >
                        <span className="font-mono text-[#A8422B] font-bold">
                          [0{idx + 1}]
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 border border-dashed border-[#B8863B]/40 rounded-xs bg-[#FAF7F2] text-center">
                  <span className="label-caps text-[#8A726C] text-[10px] block mb-1">
                    SPATIAL GEOMETRY INDICES
                  </span>
                  <p className="font-mono text-xs text-[#1A2744]">
                    {landmark.coordinates.geoPrecision}
                  </p>
                  <p className="text-[11px] text-[#8A726C] mt-1">
                    Topographical Datum: Survey of India Heritage Archive
                  </p>
                </div>
              </div>
            )}

            {/* TAB: AUDIO GUIDE */}
            {activeTab === 'audio' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-4 bg-[#1A2744] text-[#FAF7F2] rounded-xs border border-[#B8863B]/40 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-[#FFD9A9] mb-1">
                    <span className="label-mono-spatial">ORAL HISTORY // ARCHIVE</span>
                    <span className="font-mono">{landmark.audioDuration}</span>
                  </div>
                  <h3 className="font-serif-display text-base font-bold mb-2">
                    {landmark.audioNarrativeTitle}
                  </h3>
                  <p className="text-xs text-[#D9D9E2] italic leading-relaxed mb-4">
                    "{landmark.audioNarrativeExcerpt}"
                  </p>

                  {/* Audio Player Controls */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/15">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="px-4 py-1.5 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 border border-[#882B16]"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlayingAudio ? 'Pause Guide' : 'Play Narration'}</span>
                    </button>
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-[#FFD9A9] transition-all duration-300 ${
                          isPlayingAudio ? 'w-2/5 animate-pulse' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/20 rounded-xs text-xs text-[#57423D] flex items-center justify-between">
                  <span>Curatorial Narration in English & Hindi</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A8422B]" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
