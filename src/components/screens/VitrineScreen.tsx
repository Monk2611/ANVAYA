import React, { useState } from 'react';
import { MOCK_ARTIFACTS } from '../../data/mockHeritageData';
import { Artifact } from '../../types';
import { VitrineCard } from '../common/VitrineCard';
import { Landmark, Filter, Sparkles, X, Shield, BookOpen } from 'lucide-react';
import { EraBadge } from '../common/EraBadge';

export const VitrineScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArtifact, setActiveArtifact] = useState<Artifact | null>(null);

  const categories = [
    { id: 'all', label: 'Entire Collection' },
    { id: 'sculpture', label: 'Sculpture & Bronzes' },
    { id: 'paintings', label: 'Frescoes & Paintings' },
    { id: 'architecture', label: 'Arms & Regalia' },
  ];

  const filteredArtifacts = MOCK_ARTIFACTS.filter((art) => {
    if (selectedCategory === 'all') return true;
    return art.category === selectedCategory;
  });

  return (
    <div className="w-full pb-28 min-h-screen bg-[#FAF7F2] p-4 max-w-4xl mx-auto">
      {/* Vitrine Header Section */}
      <div className="mb-6 border-b border-[#B8863B]/25 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1">
              <Landmark className="w-3.5 h-3.5 text-[#B8863B]" /> NATIONAL REPOSITORY
            </span>
            <span className="text-[#8A726C] text-xs font-mono">// 6 RELICS CATALOGED</span>
          </div>
          <span className="label-mono-spatial text-[10px] text-[#684300] bg-[#FFD9A9]/30 px-2 py-0.5 border border-[#B8863B]/30 rounded-xs">
            VITRINE SPEC // NEO-ARCHIVAL
          </span>
        </div>

        <h2 className="font-serif-display text-2xl font-bold text-[#191B21] mt-2">
          Curated Museum Vitrine
        </h2>
        <p className="text-xs text-[#57423D] mt-1 max-w-xl font-sans-ui">
          High-precision archival records of masterworks across Indian metallurgical casting, Mauryan polished stone, classical fresco pigments, and imperial regalia.
        </p>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 subtle-scroll">
          <Filter className="w-3.5 h-3.5 text-[#8A726C] shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3 py-1 text-[11px] font-bold tracking-wider uppercase border transition-all rounded-xs ${
                selectedCategory === cat.id
                  ? 'bg-[#1A2744] text-white border-[#0D1B37]'
                  : 'bg-[#F3ECE2] text-[#57423D] border-[#B8863B]/30 hover:border-[#1A2744]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artifact Vitrine Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArtifacts.map((artifact) => (
          <VitrineCard
            key={artifact.id}
            artifact={artifact}
            onSelect={(art) => setActiveArtifact(art)}
          />
        ))}
      </div>

      {/* Artifact Inspection Loupe Modal */}
      {activeArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12151B]/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl bg-[#FAF7F2] border border-[#B8863B]/60 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Top Bar */}
            <div className="p-3 bg-[#F3ECE2] border-b border-[#B8863B]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="label-mono-spatial text-[#A8422B] text-[10px]">
                  {activeArtifact.accessionCode}
                </span>
                <span className="text-[#8A726C] text-xs">|</span>
                <span className="label-caps text-[#684300] text-[10px]">
                  {activeArtifact.dynasty}
                </span>
              </div>
              <button
                onClick={() => setActiveArtifact(null)}
                className="text-[#8A726C] hover:text-[#A8422B] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4 subtle-scroll">
              <div className="relative aspect-16/10 rounded-xs overflow-hidden border border-[#B8863B]/30 bg-[#12151B]">
                <img
                  src={activeArtifact.imageUrl}
                  alt={activeArtifact.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <EraBadge label={activeArtifact.period} variant="brass" />
                </div>
              </div>

              <div>
                <h3 className="font-serif-display text-2xl font-bold text-[#191B21]">
                  {activeArtifact.title}
                </h3>
                <p className="text-xs text-[#882B16] font-mono mt-0.5">
                  Provenance: {activeArtifact.provenance} • Discovered: {activeArtifact.discoveryYear}
                </p>
              </div>

              {/* Physical Spec Sheet */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-[#F3ECE2] border border-[#B8863B]/20 rounded-xs">
                  <span className="label-caps text-[#8A726C] text-[9px] block">
                    MATERIAL COMPOSITION
                  </span>
                  <span className="font-medium text-[#191B21]">
                    {activeArtifact.medium}
                  </span>
                </div>
                <div className="p-2.5 bg-[#F3ECE2] border border-[#B8863B]/20 rounded-xs">
                  <span className="label-caps text-[#8A726C] text-[9px] block">
                    PHYSICAL DIMENSIONS
                  </span>
                  <span className="font-mono text-[#191B21]">
                    {activeArtifact.dimensions}
                  </span>
                </div>
              </div>

              {/* Curatorial Provenance Notes */}
              <div className="p-3 bg-[#FAF7F2] border-l-2 border-[#A8422B] bg-[#FFD7CE]/10 text-xs text-[#191B21] leading-relaxed">
                <span className="label-caps text-[#A8422B] text-[10px] block mb-1">
                  CURATORIAL MONOGRAPH
                </span>
                <p>{activeArtifact.curatorialNotes}</p>
              </div>

              {/* Current Institutional Repository */}
              <div className="p-2.5 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs flex items-center justify-between text-xs text-[#57423D]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#A8422B]" />
                  <span>Repository: {activeArtifact.currentLocation}</span>
                </div>
                <span className="font-mono text-[10px] text-[#8A726C]">VERIFIED RECORD</span>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-3 bg-[#F3ECE2] border-t border-[#B8863B]/30 flex items-center justify-between">
              <button
                onClick={() => setActiveArtifact(null)}
                className="px-4 py-1.5 bg-[#FAF7F2] border border-[#B8863B]/40 text-[#57423D] hover:text-[#191B21] text-xs font-bold uppercase rounded-xs"
              >
                Close Vitrine
              </button>
              <div className="flex items-center gap-1.5 text-[#882B16] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ARCHIVAL INSPECTION ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
