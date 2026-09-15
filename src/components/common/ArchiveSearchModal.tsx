import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, Landmark, Hourglass, ArrowRight, Sparkles, ScrollText } from 'lucide-react';
import { HERITAGE_LANDMARKS } from '../../data/heritageLandmarks';
import { MOCK_ARTIFACTS } from '../../data/mockHeritageData';
import { CULTURAL_ITEMS } from '../../data/culturalHeritage';
import { CHRONOLOGY_EPOCHS } from '../../data/chronologyData';
import { RESEARCH_DOSSIERS } from '../../data/dossierData';
import { HeritageLandmark, Artifact, ChronologyEra, CulturalItem, FieldDossier } from '../../types';

interface ArchiveSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLandmark: (landmark: HeritageLandmark) => void;
  onSelectArtifact: (artifact: Artifact) => void;
  onSelectEra: (era: ChronologyEra) => void;
  onSelectCulturalItem?: (item: CulturalItem) => void;
  onSelectDossier?: (dossier: FieldDossier) => void;
}

export const ArchiveSearchModal: React.FC<ArchiveSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLandmark,
  onSelectArtifact,
  onSelectEra,
  onSelectCulturalItem,
  onSelectDossier,
}) => {
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return {
        landmarks: HERITAGE_LANDMARKS,
        cultural: CULTURAL_ITEMS.slice(0, 2),
        dossiers: RESEARCH_DOSSIERS.slice(0, 2),
        eras: CHRONOLOGY_EPOCHS.slice(0, 2),
        artifacts: MOCK_ARTIFACTS.slice(0, 2),
      };
    }
    const q = query.toLowerCase().trim();
    return {
      landmarks: HERITAGE_LANDMARKS.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          (l.nativeScript && l.nativeScript.toLowerCase().includes(q)) ||
          l.dynasty.toLowerCase().includes(q) ||
          l.region.toLowerCase().includes(q) ||
          (l.state && l.state.toLowerCase().includes(q)) ||
          l.accessionCode.toLowerCase().includes(q) ||
          l.architecturalStyle.toLowerCase().includes(q) ||
          l.builtCentury.toLowerCase().includes(q) ||
          l.patronRuler.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q)
      ),
      cultural: CULTURAL_ITEMS.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.nativeName && c.nativeName.toLowerCase().includes(q)) ||
          c.state.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.shortDescription.toLowerCase().includes(q) ||
          c.relatedTradition.toLowerCase().includes(q) ||
          c.primaryElements.some((e) => e.toLowerCase().includes(q))
      ),
      dossiers: RESEARCH_DOSSIERS.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.accessionId.toLowerCase().includes(q) ||
          (d.associatedSite && d.associatedSite.toLowerCase().includes(q)) ||
          (d.associatedRegion && d.associatedRegion.toLowerCase().includes(q)) ||
          (d.transcriptionLanguage && d.transcriptionLanguage.toLowerCase().includes(q)) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      ),
      eras: CHRONOLOGY_EPOCHS.filter(
        (e) =>
          e.eraName.toLowerCase().includes(q) ||
          e.summary.toLowerCase().includes(q) ||
          e.highlightDynasty.toLowerCase().includes(q) ||
          (e.dynasties && e.dynasties.some((d) => d.name.toLowerCase().includes(q)))
      ),
      artifacts: MOCK_ARTIFACTS.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.dynasty.toLowerCase().includes(q) ||
          a.medium.toLowerCase().includes(q) ||
          a.accessionCode.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#12151B]/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl lg:max-w-2xl bg-[#FAF7F2] border border-[#B8863B]/50 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-3 border-b border-[#B8863B]/30 flex items-center gap-3 bg-[#F3ECE2]">
          <Search className="w-5 h-5 text-[#B8863B]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search monuments, dynasties, coordinates, accession IDs..."
            autoFocus
            className="flex-1 bg-transparent border-0 text-[#191B21] placeholder-[#8A726C] text-sm focus:outline-none font-sans-ui"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-[#8A726C] hover:text-[#191B21] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="text-[10px] font-mono text-[#8A726C] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#B8863B]/30 rounded">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="text-[#8A726C] hover:text-[#A8422B] p-1 ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-4 subtle-scroll">
          {/* Landmarks */}
          {filteredResults.landmarks.length > 0 && (
            <div>
              <div className="label-caps text-[#A8422B] text-[10px] mb-2 flex items-center justify-between">
                <span>Landmarks & Architectural Wonders</span>
                <span className="text-[#8A726C] font-mono">{filteredResults.landmarks.length} indexed</span>
              </div>
              <div className="space-y-1.5">
                {filteredResults.landmarks.map((landmark) => (
                  <div
                    key={landmark.id}
                    onClick={() => {
                      onSelectLandmark(landmark);
                      onClose();
                    }}
                    className="p-2.5 bg-[#F3ECE2]/60 hover:bg-[#F3ECE2] border border-[#B8863B]/20 hover:border-[#A8422B]/40 rounded-xs cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs bg-[#FAF7F2] border border-[#B8863B]/30 flex items-center justify-center text-[#A8422B]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif-display font-semibold text-sm text-[#191B21] group-hover:text-[#882B16]">
                          {landmark.name}
                        </div>
                        <div className="text-[11px] text-[#57423D] font-mono">
                          {landmark.dynasty} • {landmark.region}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A726C] group-hover:text-[#A8422B] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Living Cultural Heritage */}
          {filteredResults.cultural.length > 0 && (
            <div>
              <div className="label-caps text-[#A8422B] text-[10px] mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8863B]" />
                  Living Cultural Heritage & Traditions
                </span>
                <span className="text-[#8A726C] font-mono">{filteredResults.cultural.length} indexed</span>
              </div>
              <div className="space-y-1.5">
                {filteredResults.cultural.map((cult) => (
                  <div
                    key={cult.id}
                    onClick={() => {
                      if (onSelectCulturalItem) {
                        onSelectCulturalItem(cult);
                      }
                      onClose();
                    }}
                    className="p-2.5 bg-[#FAF2EB]/60 hover:bg-[#FAF2EB] border border-[#A8422B]/20 hover:border-[#A8422B] rounded-xs cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs overflow-hidden border border-[#B8863B]/30 bg-[#EADCC9]">
                        <img
                          src={cult.imageUrl}
                          alt={cult.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-serif-display font-semibold text-sm text-[#191B21] group-hover:text-[#A8422B]">
                          {cult.name}
                        </div>
                        <div className="text-[11px] text-[#57423D] font-mono">
                          {cult.state} • {cult.category} • +{cult.xpReward} XP
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A726C] group-hover:text-[#A8422B] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Artifacts */}
          {filteredResults.artifacts.length > 0 && (
            <div>
              <div className="label-caps text-[#1A2744] text-[10px] mb-2 flex items-center justify-between">
                <span>Relics & Museum Vitrine</span>
                <span className="text-[#8A726C] font-mono">{filteredResults.artifacts.length} indexed</span>
              </div>
              <div className="space-y-1.5">
                {filteredResults.artifacts.map((artifact) => (
                  <div
                    key={artifact.id}
                    onClick={() => {
                      onSelectArtifact(artifact);
                      onClose();
                    }}
                    className="p-2.5 bg-[#F3ECE2]/60 hover:bg-[#F3ECE2] border border-[#B8863B]/20 hover:border-[#1A2744]/40 rounded-xs cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs overflow-hidden border border-[#B8863B]/30">
                        <img
                          src={artifact.imageUrl}
                          alt={artifact.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-serif-display font-semibold text-sm text-[#191B21] group-hover:text-[#1A2744]">
                          {artifact.title}
                        </div>
                        <div className="text-[11px] text-[#57423D]">
                          {artifact.period} • {artifact.medium}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A726C] group-hover:text-[#1A2744] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curatorial Dossiers & Inscriptions */}
          {filteredResults.dossiers.length > 0 && (
            <div>
              <div className="label-caps text-[#882B16] text-[10px] mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ScrollText className="w-3.5 h-3.5 text-[#B8863B]" />
                  Curatorial Research Dossiers & Inscriptions
                </span>
                <span className="text-[#8A726C] font-mono">{filteredResults.dossiers.length} indexed</span>
              </div>
              <div className="space-y-1.5">
                {filteredResults.dossiers.map((dos) => (
                  <div
                    key={dos.id}
                    onClick={() => {
                      if (onSelectDossier) {
                        onSelectDossier(dos);
                      }
                      onClose();
                    }}
                    className="p-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#B8863B]/20 hover:border-[#A8422B] rounded-xs cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs bg-[#F3ECE2] border border-[#B8863B]/30 flex items-center justify-center text-[#A8422B]">
                        <ScrollText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif-display font-semibold text-sm text-[#191B21] group-hover:text-[#A8422B]">
                          {dos.title}
                        </div>
                        <div className="text-[11px] text-[#57423D] font-mono">
                          {dos.accessionId} • {dos.associatedSite || dos.category}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A726C] group-hover:text-[#A8422B] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chronology Eras */}
          {filteredResults.eras.length > 0 && (
            <div>
              <div className="label-caps text-[#684300] text-[10px] mb-2 flex items-center justify-between">
                <span>Dynastic Eras & Chronology</span>
                <span className="text-[#8A726C] font-mono">{filteredResults.eras.length} indexed</span>
              </div>
              <div className="space-y-1.5">
                {filteredResults.eras.map((era) => (
                  <div
                    key={era.id}
                    onClick={() => {
                      onSelectEra(era);
                      onClose();
                    }}
                    className="p-2.5 bg-[#F3ECE2]/60 hover:bg-[#F3ECE2] border border-[#B8863B]/20 hover:border-[#B8863B] rounded-xs cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs bg-[#FAF7F2] border border-[#B8863B]/30 flex items-center justify-center text-[#684300]">
                        <Hourglass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif-display font-semibold text-sm text-[#191B21]">
                          {era.eraName}
                        </div>
                        <div className="text-[11px] text-[#57423D] font-mono">
                          {era.spanYears} • {era.highlightDynasty}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8A726C] group-hover:text-[#684300] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-2.5 bg-[#FAF7F2] border-t border-[#B8863B]/20 flex items-center justify-between text-[11px] font-mono text-[#8A726C]">
          <span>Index: ANVAYA-CORPUS-2025</span>
          <button
            onClick={onClose}
            className="text-[#A8422B] hover:underline font-semibold"
          >
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  );
};
