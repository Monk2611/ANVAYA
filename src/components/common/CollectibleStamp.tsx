import React from 'react';
import { HeritageStamp } from '../../types';

interface CollectibleStampProps {
  stamp: HeritageStamp;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const CollectibleStamp: React.FC<CollectibleStampProps> = ({
  stamp,
  onClick,
  size = 'md',
}) => {
  const isUnlocked = stamp.isUnlocked;

  const sizeClasses = {
    sm: 'w-24 h-24 text-[9px]',
    md: 'w-32 h-32 text-[10px]',
    lg: 'w-40 h-40 text-[11px]',
  };

  const isOctagonal = stamp.sealShape === 'octagonal';

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`relative flex flex-col items-center justify-center p-3 transition-transform duration-300 cursor-pointer select-none group hover:scale-105 ${sizeClasses[size]}`}
      style={{
        transform: isUnlocked ? `rotate(${stamp.rotationDeg}deg)` : 'rotate(0deg)',
      }}
    >
      {/* Outer border shape */}
      <div
        className={`absolute inset-0 transition-all ${
          isOctagonal ? 'octagonal-seal' : 'rounded-full'
        } ${
          isUnlocked
            ? 'border-2 border-dashed shadow-sm'
            : 'border border-dashed border-[#8A726C]/40 bg-[#FAF7F2]/40'
        }`}
        style={{
          borderColor: isUnlocked ? stamp.stampColor : undefined,
          backgroundColor: isUnlocked ? `${stamp.stampColor}0C` : undefined,
        }}
      />

      {/* Inner concentric ring */}
      <div
        className={`absolute inset-1.5 transition-all ${
          isOctagonal ? 'octagonal-seal' : 'rounded-full'
        } ${
          isUnlocked
            ? 'border'
            : 'border border-dashed border-[#8A726C]/25'
        }`}
        style={{
          borderColor: isUnlocked ? `${stamp.stampColor}80` : undefined,
        }}
      />

      {/* Stamp Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-1">
        {isUnlocked ? (
          <>
            <span
              className="font-bold tracking-[0.16em] uppercase text-[9px] mb-0.5 line-clamp-1"
              style={{ color: stamp.stampColor }}
            >
              BHARAT • ARCHIVE
            </span>
            <div
              className="w-5 h-[1px] my-0.5 opacity-60"
              style={{ backgroundColor: stamp.stampColor }}
            />
            <span
              className="font-serif-display font-bold leading-tight line-clamp-2 px-1 text-center"
              style={{ color: stamp.stampColor }}
            >
              {stamp.siteName}
            </span>
            <span className="text-[8px] font-mono tracking-wider mt-0.5 text-[#57423D]">
              {stamp.coordinates}
            </span>
            {stamp.unlockedDate && (
              <span
                className="text-[8px] font-bold tracking-widest uppercase mt-1 px-1 py-0.2 border rounded"
                style={{
                  borderColor: `${stamp.stampColor}60`,
                  color: stamp.stampColor,
                }}
              >
                {stamp.unlockedDate}
              </span>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center text-[#8A726C]">
            <span className="text-xl mb-1 opacity-50">✦</span>
            <span className="font-serif-display text-[11px] font-semibold text-center leading-tight">
              {stamp.siteName}
            </span>
            <span className="text-[9px] tracking-wider uppercase font-mono mt-1 opacity-70">
              DISCOVER SITE
            </span>
          </div>
        )}
      </div>

      {/* Accession tag tick */}
      <div className="absolute bottom-1 text-[7px] font-mono text-[#8A726C] opacity-75">
        {stamp.accessionTag}
      </div>
    </div>
  );
};
