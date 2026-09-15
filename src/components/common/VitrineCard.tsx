import React from 'react';
import { Artifact } from '../../types';

interface VitrineCardProps {
  artifact: Artifact;
  onSelect: (artifact: Artifact) => void;
}

export const VitrineCard: React.FC<VitrineCardProps> = ({ artifact, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(artifact)}
      className="group relative cursor-pointer flex flex-col bg-[#F3ECE2] border border-[#B8863B]/25 overflow-hidden transition-all duration-300 hover:border-[#A8422B] hover:shadow-md"
      style={{ borderRadius: '0.375rem' }}
    >
      {/* Inset perimeter hairline micro-border */}
      <div
        className="absolute inset-[4px] border border-[#B8863B]/20 pointer-events-none z-10 transition-colors group-hover:border-[#A8422B]/40"
        style={{ borderRadius: '0.25rem' }}
      />

      {/* Artifact Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E2E2EA]">
        <img
          src={artifact.imageUrl}
          alt={artifact.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 z-20">
          <span className="label-caps px-2 py-0.5 bg-[#FAF7F2]/90 backdrop-blur-sm text-[#1A2744] border border-[#B8863B]/40 text-[9px] rounded-xs">
            {artifact.period}
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-2 z-10">
        <div>
          <div className="label-mono-spatial text-[#A8422B] text-[10px] mb-1">
            {artifact.accessionCode}
          </div>
          <h3 className="font-serif-display text-lg font-bold text-[#191B21] leading-snug group-hover:text-[#882B16] transition-colors line-clamp-1">
            {artifact.title}
          </h3>
          <p className="text-xs text-[#57423D] font-medium mt-0.5">
            {artifact.dynasty} • {artifact.medium}
          </p>
        </div>

        <div className="pt-2 border-t border-[#B8863B]/20 flex items-center justify-between text-[11px] text-[#8A726C]">
          <span className="truncate max-w-[170px]">{artifact.provenance}</span>
          <span className="text-[#A8422B] font-bold group-hover:translate-x-0.5 transition-transform">
            View Loupe →
          </span>
        </div>
      </div>
    </div>
  );
};
