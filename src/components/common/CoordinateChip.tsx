import React from 'react';

interface CoordinateChipProps {
  coordinates: string;
  accessionTag?: string;
  className?: string;
}

export const CoordinateChip: React.FC<CoordinateChipProps> = ({
  coordinates,
  accessionTag,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#B8863B]/40 bg-[#FAF7F2]/90 text-[#57423D] text-[11px] font-mono tracking-wider ${className}`}
    >
      <span className="text-[#A8422B] text-[10px]">⌖</span>
      <span>{coordinates}</span>
      {accessionTag && (
        <>
          <span className="text-[#B8863B]/40">|</span>
          <span className="text-[10px] text-[#8A726C]">{accessionTag}</span>
        </>
      )}
    </div>
  );
};
