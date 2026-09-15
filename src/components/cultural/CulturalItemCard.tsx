import React, { useState } from 'react';
import { CulturalItem } from '../../types';
import { CheckCircle2, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface CulturalItemCardProps {
  item: CulturalItem;
  isExplored: boolean;
  onSelect: (item: CulturalItem) => void;
}

export const CulturalItemCard: React.FC<CulturalItemCardProps> = ({
  item,
  isExplored,
  onSelect,
}) => {
  const [imageError, setImageError] = useState(false);

  const fallbackImages: Record<string, string> = {
    festivals: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    'food-cuisine': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    'music-instruments': 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    'arts-crafts': 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    'clothing-textiles': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    architecture: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80',
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'festivals':
        return 'Festival';
      case 'food-cuisine':
        return 'Food & Cuisine';
      case 'music-instruments':
        return 'Music & Sound';
      case 'arts-crafts':
        return 'Art & Craft';
      case 'clothing-textiles':
        return 'Textile';
      case 'architecture':
        return 'Architecture';
      default:
        return cat;
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-[#FAF7F2] border border-[#B8863B]/30 hover:border-[#A8422B] rounded-xs overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col cursor-pointer"
    >
      {/* Visual Canvas Container */}
      <div className="relative h-48 w-full bg-[#EADCC9] overflow-hidden border-b border-[#B8863B]/20">
        <img
          src={imageError ? fallbackImages[item.category] || fallbackImages.architecture : item.imageUrl}
          alt={item.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
          <span className="px-2 py-0.5 bg-[#1A2744]/90 backdrop-blur-xs text-[#FFD9A9] border border-[#B8863B]/50 rounded-xs text-[9.5px] font-mono font-bold tracking-wider uppercase shadow-xs">
            {getCategoryLabel(item.category)}
          </span>

          {isExplored ? (
            <span className="px-2 py-0.5 bg-[#2A5235]/90 backdrop-blur-xs text-[#D1FAE5] border border-[#34D399]/40 rounded-xs text-[9.5px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-[#34D399]" />
              <span>EXPLORED (+{item.xpReward} XP)</span>
            </span>
          ) : (
            <span className="px-2 py-0.5 bg-[#A8422B]/90 backdrop-blur-xs text-[#FFF8ED] border border-[#882B16] rounded-xs text-[9.5px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#FFD9A9]" />
              <span>+{item.xpReward} XP</span>
            </span>
          )}
        </div>

        {/* Region Chip at bottom of image */}
        <div className="absolute bottom-2 left-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#191B21]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-mono rounded-xs border border-white/15">
            <MapPin className="w-3 h-3 text-[#FFD9A9]" />
            <span>
              {item.state}, {item.region}
            </span>
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-baseline justify-between gap-1">
            <h3 className="font-serif-display font-bold text-lg text-[#191B21] group-hover:text-[#A8422B] transition-colors line-clamp-1">
              {item.name}
            </h3>
          </div>

          {item.nativeName && (
            <p className="font-mono text-xs text-[#8A726C] mt-0.5 line-clamp-1">
              {item.nativeName}
            </p>
          )}

          <p className="text-xs text-[#57423D] mt-2 line-clamp-2 leading-relaxed font-sans-ui">
            {item.shortDescription}
          </p>
        </div>

        {/* Key Elements Tags */}
        <div className="pt-2 border-t border-[#B8863B]/20">
          <div className="flex flex-wrap gap-1 mb-3">
            {item.primaryElements.slice(0, 2).map((el, i) => (
              <span
                key={i}
                className="text-[9.5px] font-mono px-1.5 py-0.5 bg-[#F3ECE2] text-[#684300] border border-[#B8863B]/25 rounded-xs truncate max-w-[140px]"
              >
                {el}
              </span>
            ))}
            {item.primaryElements.length > 2 && (
              <span className="text-[9.5px] font-mono px-1 py-0.5 text-[#8A726C]">
                +{item.primaryElements.length - 2}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#A8422B] group-hover:text-[#882B16]">
            <span className="text-[11px] uppercase tracking-wider">
              {isExplored ? 'Inspect Dossier' : 'Explore Archive'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
