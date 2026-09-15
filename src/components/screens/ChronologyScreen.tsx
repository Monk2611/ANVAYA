import React, { useState } from 'react';
import { CHRONOLOGY_EPOCHS } from '../../data/chronologyData';
import { ChronologyEra, ChronologyDynasty } from '../../types';
import {
  Hourglass,
  Landmark,
  Calendar,
  Crown,
  ChevronRight,
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  Shield,
  History,
} from 'lucide-react';
import { EraBadge } from '../common/EraBadge';

interface ChronologyScreenProps {
  onSelectLandmark?: (landmarkId: string) => void;
  onStartJourney?: (journeyId: string) => void;
}

export const ChronologyScreen: React.FC<ChronologyScreenProps> = ({
  onSelectLandmark,
  onStartJourney,
}) => {
  const [selectedEpochId, setSelectedEpochId] = useState<string>(
    'epoch-medieval-renaissance'
  );

  const activeEpoch: ChronologyEra =
    CHRONOLOGY_EPOCHS.find((e) => e.id === selectedEpochId) || CHRONOLOGY_EPOCHS[0];

  const dynasties: ChronologyDynasty[] = activeEpoch.dynasties || [];

  const [selectedDynastyId, setSelectedDynastyId] = useState<string>(
    dynasties[0]?.id || ''
  );

  // Keep selected dynasty in sync when epoch changes
  const activeDynasty: ChronologyDynasty | undefined =
    dynasties.find((d) => d.id === selectedDynastyId) || dynasties[0];

  const handleSelectEpoch = (epoch: ChronologyEra) => {
    setSelectedEpochId(epoch.id);
    if (epoch.dynasties && epoch.dynasties.length > 0) {
      setSelectedDynastyId(epoch.dynasties[0].id);
    }
  };

  return (
    <div className="w-full pb-28 lg:pb-12 min-h-screen bg-[#FAF7F2] p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto font-sans-ui">
      {/* Chronology Header */}
      <div className="mb-6 border-b border-[#B8863B]/25 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1 font-bold">
              <Hourglass className="w-3.5 h-3.5 text-[#B8863B]" /> DYNASTIC CHRONOLOGY
            </span>
            <span className="text-[#8A726C] text-xs font-mono">// EXPLORE THROUGH TIME</span>
          </div>
          <span className="label-mono-spatial text-[10px] text-[#684300] bg-[#FFD9A9]/40 px-2 py-0.5 border border-[#B8863B]/30 rounded-xs">
            2600 BCE — 1750 CE
          </span>
        </div>

        <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21] mt-2">
          Chronological Epochs & Civilizations
        </h2>
        <p className="text-xs sm:text-sm text-[#57423D] mt-1 max-w-3xl leading-relaxed">
          Navigate India's living civilizational timeline. Select an epoch to unpack its leading dynasties, historical personalities, watershed events, and monumental sanctuaries.
        </p>
      </div>

      {/* Epochs Continuum Rail */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="label-caps text-[#1A2744] text-[11px] font-bold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#B8863B]" />
            Select Historical Epoch (Temporal Timeline)
          </span>
          <span className="text-[11px] font-mono text-[#8A726C]">
            {CHRONOLOGY_EPOCHS.length} Epochs Documented
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CHRONOLOGY_EPOCHS.map((epoch, idx) => {
            const isSelected = activeEpoch.id === epoch.id;
            return (
              <button
                key={epoch.id}
                onClick={() => handleSelectEpoch(epoch)}
                className={`text-left p-3.5 rounded-xs border transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#F3ECE2] border-[#A8422B] shadow-sm ring-1 ring-[#A8422B]/40'
                    : 'bg-[#FAF7F2] border-[#B8863B]/30 hover:bg-[#F3ECE2]/50 hover:border-[#B8863B]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="label-mono-spatial text-[9px] text-[#A8422B] font-bold">
                      {epoch.periodCode.split('//')[0]}
                    </span>
                    <EraBadge label={`EPOCH 0${idx + 1}`} variant={isSelected ? 'terracotta' : 'sandstone'} />
                  </div>
                  <h3 className={`font-serif-display font-bold text-sm leading-snug ${isSelected ? 'text-[#882B16]' : 'text-[#191B21]'}`}>
                    {epoch.eraName}
                  </h3>
                  <div className="font-mono text-[11px] text-[#684300] font-semibold mt-1">
                    {epoch.spanYears}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#B8863B]/20 text-[10px] text-[#57423D] flex items-center justify-between">
                  <span>{epoch.dynasties?.length || 0} Civilizations</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#A8422B] translate-x-0.5' : 'text-[#8A726C]'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Epoch Banner Card */}
      <div className="mb-6 p-4 sm:p-5 bg-[#F3ECE2]/70 border border-[#B8863B]/40 rounded-xs shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="label-mono-spatial text-[#A8422B] text-[10px] font-bold">
              {activeEpoch.periodCode}
            </span>
            <span className="text-[#8A726C] text-xs">•</span>
            <span className="font-mono text-xs font-bold text-[#684300]">
              {activeEpoch.spanYears}
            </span>
          </div>
          <span className="text-xs font-mono text-[#57423D] bg-[#FAF7F2] px-2.5 py-0.5 border border-[#B8863B]/25 rounded-xs">
            Dynastic Lineage: {activeEpoch.highlightDynasty}
          </span>
        </div>

        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#191B21]">
          {activeEpoch.eraName}
        </h3>
        {activeEpoch.tagline && (
          <p className="text-xs sm:text-sm font-serif italic text-[#882B16] mt-0.5">
            "{activeEpoch.tagline}"
          </p>
        )}
        <p className="text-xs sm:text-sm text-[#57423D] mt-2 leading-relaxed">
          {activeEpoch.summary}
        </p>

        <div className="mt-3.5 p-3 bg-[#FAF7F2] border border-[#B8863B]/25 rounded-xs flex items-start gap-2.5">
          <Landmark className="w-4 h-4 text-[#A8422B] shrink-0 mt-0.5" />
          <div>
            <span className="label-caps text-[#684300] text-[9.5px] block font-bold">
              ARCHITECTURAL & MATERIAL HALLMARK OF THIS EPOCH
            </span>
            <p className="text-xs text-[#191B21] mt-0.5 font-medium">
              {activeEpoch.architecturalHallmark}
            </p>
          </div>
        </div>
      </div>

      {/* Dynasties & Civilizations Breakdown */}
      {dynasties.length > 0 && (
        <div className="space-y-6">
          <div className="border-b border-[#B8863B]/25 pb-2">
            <span className="label-caps text-[#A8422B] text-[10px] font-bold block mb-1">
              STEP 2: EXPLORE DYNASTIES & CIVILIZATIONS
            </span>
            <h4 className="font-serif-display text-lg font-bold text-[#191B21]">
              Empires of {activeEpoch.eraName}
            </h4>
          </div>

          {/* Dynasty Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {dynasties.map((dyn) => {
              const isSelected = activeDynasty?.id === dyn.id;
              return (
                <button
                  key={dyn.id}
                  onClick={() => setSelectedDynastyId(dyn.id)}
                  className={`px-3.5 py-2 rounded-xs border text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A2744] text-[#FAF7F2] border-[#1A2744] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#1A2744]/40 hover:bg-[#F3ECE2]'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5 text-[#B8863B]" />
                  <span>{dyn.name}</span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-[#FAF7F2]/70' : 'text-[#8A726C]'}`}>
                    ({dyn.period})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Dynasty Dossier Block (Side-by-side bento layout on laptop lg:grid) */}
          {activeDynasty && (
            <div className="bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs p-5 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column (lg:col-span-7): Dynasty Overview, Personalities & Watershed Events */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Dynasty Overview */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="label-mono-spatial text-[#A8422B] text-[10px] font-bold">
                          {activeDynasty.period}
                        </span>
                        <span className="text-[#8A726C] text-xs">•</span>
                        <span className="text-xs font-mono text-[#57423D]">
                          Capital: {activeDynasty.capital}
                        </span>
                      </div>
                      <span className="label-caps text-[#684300] bg-[#FFD9A9]/40 border border-[#B8863B]/30 px-2 py-0.5 rounded-xs text-[10px]">
                        Emblem: {activeDynasty.emblem}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#191B21]">
                      {activeDynasty.name}
                    </h4>
                    <div className="text-xs text-[#8A726C] font-mono mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B8863B]" />
                      Domain: {activeDynasty.region}
                    </div>
                    <p className="text-xs sm:text-sm text-[#57423D] mt-2.5 leading-relaxed">
                      {activeDynasty.description}
                    </p>
                  </div>

                  {/* Personalities & Historical Figures */}
                  {activeDynasty.keyRulers && activeDynasty.keyRulers.length > 0 && (
                    <div className="pt-4 border-t border-[#B8863B]/25">
                      <div className="flex items-center gap-1.5 mb-3">
                        <Crown className="w-4 h-4 text-[#B8863B]" />
                        <span className="label-caps text-[#A8422B] text-[10px] font-bold">
                          KEY PERSONALITIES & HISTORICAL RULERS
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeDynasty.keyRulers.map((ruler, rIdx) => (
                          <div
                            key={rIdx}
                            className="p-3.5 bg-[#F3ECE2]/60 border border-[#B8863B]/30 rounded-xs hover:border-[#B8863B] transition-colors"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <h5 className="font-serif-display font-bold text-sm text-[#191B21]">
                                {ruler.name}
                              </h5>
                              <span className="text-[10px] font-mono text-[#882B16] font-semibold">
                                {ruler.reign}
                              </span>
                            </div>
                            <div className="text-[11px] font-medium text-[#684300] mt-0.5">
                              {ruler.title}
                            </div>
                            <p className="text-xs text-[#57423D] mt-2 leading-relaxed">
                              {ruler.significance}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Major Events Timeline */}
                  {activeDynasty.majorEvents && activeDynasty.majorEvents.length > 0 && (
                    <div className="pt-4 border-t border-[#B8863B]/25">
                      <div className="flex items-center gap-1.5 mb-3">
                        <History className="w-4 h-4 text-[#B8863B]" />
                        <span className="label-caps text-[#1A2744] text-[10px] font-bold">
                          WATERSHED HISTORICAL EVENTS
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {activeDynasty.majorEvents.map((evt, eIdx) => (
                          <div
                            key={eIdx}
                            className="p-3 bg-[#FAF7F2] border border-[#B8863B]/20 rounded-xs flex items-start gap-3"
                          >
                            <span className="shrink-0 px-2 py-0.5 bg-[#FFD7CE]/40 border border-[#A8422B]/30 text-[#882B16] font-mono text-xs font-bold rounded-xs">
                              {evt.year}
                            </span>
                            <div>
                              <div className="font-serif-display font-bold text-sm text-[#191B21]">
                                {evt.title}
                              </div>
                              <p className="text-xs text-[#57423D] mt-1 leading-relaxed">
                                {evt.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column (lg:col-span-5): Associated Monuments & Heritage Sites */}
                <div className="lg:col-span-5 lg:border-l lg:border-[#B8863B]/25 lg:pl-6 space-y-4">
                  {activeDynasty.associatedSites && activeDynasty.associatedSites.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5">
                          <Landmark className="w-4 h-4 text-[#A8422B]" />
                          <span className="label-caps text-[#A8422B] text-[10px] font-bold">
                            ASSOCIATED HERITAGE MONUMENTS
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8A726C]">
                          Spatial Links
                        </span>
                      </div>

                      <div className="space-y-3">
                        {activeDynasty.associatedSites.map((site) => (
                          <div
                            key={site.id}
                            className="p-3.5 bg-[#F3ECE2]/80 border border-[#B8863B]/40 rounded-xs hover:border-[#A8422B] transition-all flex flex-col justify-between gap-3 group"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-2">
                                <h5 className="font-serif-display font-bold text-sm sm:text-base text-[#191B21] group-hover:text-[#882B16] transition-colors">
                                  {site.name}
                                </h5>
                                <span className="text-[9.5px] font-mono text-[#684300] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#B8863B]/30 rounded">
                                  {site.architecturalStyle}
                                </span>
                              </div>
                              <div className="text-[11px] text-[#8A726C] font-mono flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#B8863B]" />
                                {site.location}
                              </div>
                              <p className="text-xs text-[#57423D] leading-relaxed pt-1">
                                {site.significance}
                              </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#B8863B]/20">
                              {site.landmarkId && onSelectLandmark && (
                                <button
                                  onClick={() => onSelectLandmark(site.landmarkId!)}
                                  className="px-2.5 py-1 bg-[#A8422B] hover:bg-[#882B16] text-[#FAF7F2] font-serif-display font-bold text-xs rounded-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                                >
                                  <Compass className="w-3.5 h-3.5" />
                                  <span>View on Cartography</span>
                                </button>
                              )}
                              {site.journeyId && onStartJourney && (
                                <button
                                  onClick={() => onStartJourney(site.journeyId!)}
                                  className="px-2.5 py-1 bg-[#1A2744] hover:bg-[#25375C] text-[#FAF7F2] font-serif-display font-bold text-xs rounded-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                                >
                                  <Sparkles className="w-3.5 h-3.5 text-[#B8863B]" />
                                  <span>Historical Journey</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynastic Cultural Summary Card */}
                  <div className="p-3.5 bg-[#FAF2EB] border border-[#A8422B]/30 rounded-xs text-xs space-y-1.5">
                    <span className="label-caps text-[#882B16] text-[10px] font-bold block">
                      ARCHIVAL PROVENANCE RECORD
                    </span>
                    <p className="text-[#57423D] leading-relaxed text-[11.5px]">
                      Historical timelines, epigraphical inscriptions, and dynastic domains are curated from official Archaeological Survey of India (ASI) reports and classical epigraphical corpus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
