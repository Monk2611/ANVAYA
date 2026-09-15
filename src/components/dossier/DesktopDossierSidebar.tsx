import React, { useState } from 'react';
import { HeritageLandmark, HistoricalJourney } from '../../types';
import { getJourneyByLandmarkId } from '../../data/historicalJourneys';
import {
  Volume2,
  Columns,
  History,
  X,
  Award,
  Scroll,
  Sparkles,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react';
import { CoordinateChip } from '../common/CoordinateChip';
import { EraBadge } from '../common/EraBadge';

interface DesktopDossierSidebarProps {
  landmark: HeritageLandmark | null;
  onClose: () => void;
  onStartJourney?: (journey: HistoricalJourney) => void;
  onUnavailableJourney?: (landmark: HeritageLandmark) => void;
}

export const DesktopDossierSidebar: React.FC<DesktopDossierSidebarProps> = ({
  landmark,
  onClose,
  onStartJourney,
  onUnavailableJourney,
}) => {
  const [activeTab, setActiveTab] = useState<'history' | 'architecture' | 'audio'>('history');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!landmark) return null;

  const availableJourney = getJourneyByLandmarkId(landmark.id);

  return (
    <aside className="w-[410px] xl:w-[470px] h-full flex flex-col bg-[#FAF7F2] border-l border-[#B8863B]/30 shadow-xl shrink-0 overflow-hidden z-20 animate-fade-in">
      {/* Top Archival Header Bar */}
      <div className="p-3 bg-[#F3ECE2] border-b border-[#B8863B]/25 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="label-mono-spatial text-[#A8422B] text-[10px] font-bold">
            DOSSIER // {landmark.accessionCode.split('//')[0].trim()}
          </span>
          {landmark.unescoStatus && (
            <span className="inline-flex items-center gap-1 text-[9px] text-[#684300] font-bold tracking-wider uppercase bg-[#FFD9A9]/50 border border-[#B8863B]/30 px-1.5 py-0.5 rounded-xs">
              <Award className="w-3 h-3 text-[#B8863B]" /> UNESCO
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-xs hover:bg-[#FAF7F2] text-[#8A726C] hover:text-[#191B21] transition-colors cursor-pointer"
          title="Close dossier panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Monument Identification Header */}
      <div className="px-4 py-3 bg-[#FAF7F2] border-b border-[#B8863B]/15 shrink-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#8A726C] uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B8863B]" />
              {landmark.region} • {landmark.dynasty}
            </span>
            <h2 className="font-serif-display text-xl font-bold text-[#191B21] leading-tight mt-0.5">
              {landmark.name}
            </h2>
          </div>
          <CoordinateChip coordinates={landmark.coordinates.lat} />
        </div>

        {/* Primary Action Button */}
        <div className="mt-3">
          {availableJourney && onStartJourney ? (
            <button
              onClick={() => onStartJourney(availableJourney)}
              className="w-full py-2 px-3 bg-[#A8422B] hover:bg-[#882B16] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] flex items-center justify-between transition-all cursor-pointer shadow-xs"
            >
              <span className="flex items-center gap-1.5">
                <Scroll className="w-4 h-4 text-[#FFD9A9]" />
                <span>Begin Historical Journey</span>
              </span>
              <span className="text-[10px] font-mono bg-[#882B16] text-[#FFD9A9] px-2 py-0.5 rounded-xs">
                +{availableJourney.totalXp} XP
              </span>
            </button>
          ) : (
            <div className="flex items-center justify-between p-2 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs">
              <span className="text-[11px] text-[#684300] font-mono flex items-center gap-1">
                <Scroll className="w-3.5 h-3.5 text-[#B8863B]" /> Journey Archive in Curation
              </span>
              <button
                onClick={() => onUnavailableJourney && onUnavailableJourney(landmark)}
                className="text-[10px] font-mono font-bold text-[#A8422B] hover:underline"
              >
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center border-b border-[#B8863B]/20 bg-[#F3ECE2]/60 px-3 shrink-0">
        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
            activeTab === 'history'
              ? 'border-[#A8422B] text-[#882B16] bg-[#FAF7F2]'
              : 'border-transparent text-[#8A726C] hover:text-[#191B21]'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>History</span>
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
            activeTab === 'architecture'
              ? 'border-[#A8422B] text-[#882B16] bg-[#FAF7F2]'
              : 'border-transparent text-[#8A726C] hover:text-[#191B21]'
          }`}
        >
          <Columns className="w-3.5 h-3.5" />
          <span>Architecture</span>
        </button>
        <button
          onClick={() => setActiveTab('audio')}
          className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
            activeTab === 'audio'
              ? 'border-[#A8422B] text-[#882B16] bg-[#FAF7F2]'
              : 'border-transparent text-[#8A726C] hover:text-[#191B21]'
          }`}
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Audio Guide</span>
        </button>
      </div>

      {/* Scrollable Tab Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 subtle-scroll">
        {/* TAB: HISTORY */}
        {activeTab === 'history' && (
          <div className="space-y-4 animate-fade-in">
            {/* Monument Image with constructed tag */}
            <div className="relative aspect-16/10 rounded-xs overflow-hidden border border-[#B8863B]/30 shadow-inner bg-[#1A2744]">
              <img
                src={landmark.imageUrl}
                alt={landmark.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-mono">
                <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs rounded-xs border border-white/20">
                  CONSTRUCTED: {landmark.builtCentury}
                </span>
                <span className="px-2 py-0.5 bg-[#A8422B]/90 rounded-xs">
                  {landmark.patronRuler}
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <EraBadge label={landmark.era} variant="terracotta" />
              <EraBadge label={landmark.architecturalStyle} variant="brass" />
            </div>

            {/* Description */}
            <p className="text-xs text-[#191B21] leading-relaxed font-sans-ui">
              {landmark.description}
            </p>

            {/* Chronological Provenance Milestones */}
            <div className="pt-3 border-t border-[#B8863B]/20">
              <h4 className="label-caps text-[#A8422B] text-[10px] mb-3 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#B8863B]" />
                CHRONOLOGICAL PROVENANCE
              </h4>
              <div className="space-y-2.5 relative border-l-2 border-[#B8863B]/30 ml-2 pl-3">
                {landmark.historicalMilestones.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-[#A8422B]" />
                    <span className="font-mono text-xs font-bold text-[#684300]">
                      {milestone.year}
                    </span>
                    <p className="text-xs text-[#57423D] leading-snug mt-0.5">
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
              <h4 className="label-caps text-[#A8422B] text-[10px] mb-2 flex items-center gap-1.5">
                <Columns className="w-3 h-3 text-[#B8863B]" />
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
                  className="px-4 py-1.5 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 border border-[#882B16] cursor-pointer"
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
    </aside>
  );
};
