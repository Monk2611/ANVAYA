import React, { useState } from 'react';
import { MOCK_STAMPS } from '../../data/mockHeritageData';
import { HeritageStamp } from '../../types';
import { CollectibleStamp } from '../common/CollectibleStamp';
import { Stamp, Award, CheckCircle2, Lock, Compass, Sparkles, X } from 'lucide-react';
import { CoordinateChip } from '../common/CoordinateChip';

export const PassportScreen: React.FC = () => {
  const [selectedStamp, setSelectedStamp] = useState<HeritageStamp | null>(null);

  const unlockedCount = MOCK_STAMPS.filter((s) => s.isUnlocked).length;
  const totalCount = MOCK_STAMPS.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="w-full pb-28 min-h-screen bg-[#FAF7F2] p-4 max-w-4xl mx-auto">
      {/* Passport Header Dossier */}
      <div className="mb-6 p-4 bg-[#F3ECE2] border border-[#B8863B]/40 rounded-xs shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1">
              <Stamp className="w-3.5 h-3.5 text-[#B8863B]" /> HERITAGE PASSPORT BOOK
            </span>
            <span className="text-[#8A726C] text-xs font-mono">// ARCHIVAL EDITION</span>
          </div>
          <span className="label-mono-spatial text-[10px] text-[#1A2744] bg-[#CDD9FF]/40 px-2 py-0.5 border border-[#1A2744]/20 rounded-xs">
            BEARER: FELLOW RESEARCHER
          </span>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif-display text-2xl font-bold text-[#191B21]">
              Sanctuary Stamps & Field Perforations
            </h2>
            <p className="text-xs text-[#57423D] mt-0.5">
              Official verification seals acquired upon exploring India's monumental architectural complexes.
            </p>
          </div>

          {/* Progress Pill */}
          <div className="shrink-0 p-2.5 bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs flex items-center gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#8A726C] uppercase">
                Acquired Seals
              </div>
              <div className="font-serif-display font-bold text-lg text-[#A8422B]">
                {unlockedCount} of {totalCount} Sites
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#A8422B] flex items-center justify-center font-mono text-xs font-bold text-[#1A2744] bg-[#FFD7CE]/30">
              {completionPercentage}%
            </div>
          </div>
        </div>

        {/* Trail Progress Meter */}
        <div className="mt-3 pt-3 border-t border-[#B8863B]/20 flex items-center gap-2">
          <div className="flex-1 h-2 bg-[#E2E2EA] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#A8422B] to-[#B8863B] transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#57423D] font-bold">
            {unlockedCount}/{totalCount} Seals Active
          </span>
        </div>
      </div>

      {/* Stamp Album Grid */}
      <div className="p-4 bg-[#FAF7F2] border-2 border-dashed border-[#B8863B]/30 rounded-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#B8863B]/20">
          <span className="label-caps text-[#684300] text-[10px]">
            ALBUM FOLIO 01: MONUMENTAL CIRCUITS
          </span>
          <span className="text-[10px] font-mono text-[#8A726C]">
            TAP STAMP TO EXAMINE ACCESSION LOG
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 justify-items-center py-4">
          {MOCK_STAMPS.map((stamp) => (
            <div key={stamp.id} className="flex flex-col items-center">
              <CollectibleStamp
                stamp={stamp}
                size="md"
                onClick={() => setSelectedStamp(stamp)}
              />
              <div className="mt-2 text-center">
                <span className="text-[11px] font-medium text-[#191B21] block line-clamp-1">
                  {stamp.siteName}
                </span>
                <span className="text-[10px] text-[#8A726C] font-mono">
                  {stamp.trailName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stamp Inspection Modal */}
      {selectedStamp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12151B]/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[#FAF7F2] border border-[#B8863B]/60 shadow-2xl rounded-sm overflow-hidden flex flex-col">
            <div className="p-3 bg-[#F3ECE2] border-b border-[#B8863B]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="label-mono-spatial text-[#A8422B] text-[10px]">
                  SEAL RECORD // {selectedStamp.accessionTag}
                </span>
              </div>
              <button
                onClick={() => setSelectedStamp(null)}
                className="text-[#8A726C] hover:text-[#A8422B] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <CollectibleStamp stamp={selectedStamp} size="lg" />

              <div className="mt-2">
                <h3 className="font-serif-display text-xl font-bold text-[#191B21]">
                  {selectedStamp.siteName}
                </h3>
                <p className="text-xs text-[#684300] font-mono mt-0.5">
                  State of {selectedStamp.state} • {selectedStamp.trailName}
                </p>
              </div>

              <div className="w-full p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#8A726C]">Historical Milestone:</span>
                  <span className="font-medium text-[#191B21]">
                    {selectedStamp.historicalMilestone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A726C]">Geographical Fix:</span>
                  <span className="font-mono text-[#A8422B]">
                    {selectedStamp.coordinates}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A726C]">Field Status:</span>
                  <span
                    className={`font-bold uppercase text-[10px] ${
                      selectedStamp.isUnlocked ? 'text-[#882B16]' : 'text-[#8A726C]'
                    }`}
                  >
                    {selectedStamp.isUnlocked
                      ? `Stamped on ${selectedStamp.unlockedDate}`
                      : 'Pending Site Expedition'}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#8A726C] italic">
                {selectedStamp.isUnlocked
                  ? 'Authenticated in accordance with the National Heritage Field Preservation protocol.'
                  : 'Travel to this site or complete its architectural blueprint study to stamp your passport.'}
              </p>
            </div>

            <div className="p-3 bg-[#F3ECE2] border-t border-[#B8863B]/30 flex justify-end">
              <button
                onClick={() => setSelectedStamp(null)}
                className="px-4 py-1.5 bg-[#A8422B] text-white hover:bg-[#C25438] text-xs font-bold uppercase rounded-xs border border-[#882B16]"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
