import React, { useState, useEffect } from 'react';
import { CulturalItem } from '../../types';
import {
  X,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  BookOpen,
  HeartHandshake,
  Layers,
  Scroll,
} from 'lucide-react';

interface CulturalItemDetailModalProps {
  item: CulturalItem;
  isExplored: boolean;
  onClose: () => void;
  onMarkExplored: (itemId: string, xp: number) => void;
}

export const CulturalItemDetailModal: React.FC<CulturalItemDetailModalProps> = ({
  item,
  isExplored,
  onClose,
  onMarkExplored,
}) => {
  const [justExplored, setJustExplored] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleExploreClick = () => {
    if (!isExplored) {
      setJustExplored(true);
      onMarkExplored(item.id, item.xpReward);
    }
  };

  const fallbackImages: Record<string, string> = {
    festivals: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    'food-cuisine': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    'music-instruments': 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    'arts-crafts': 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    'clothing-textiles': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    architecture: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#12151B]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl lg:max-w-4xl bg-[#FAF7F2] border-2 border-[#B8863B]/60 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-3.5 bg-[#F3ECE2] border-b border-[#B8863B]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="label-mono-spatial text-[#A8422B] text-[10px] uppercase font-bold tracking-wider">
              CULTURE // {item.category.toUpperCase()}
            </span>
            <span className="text-[#8A726C] text-xs">/</span>
            <span className="label-caps text-[#684300] text-[10px] truncate">
              {item.state}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-xs hover:bg-[#FAF7F2] text-[#8A726C] hover:text-[#191B21] transition-colors cursor-pointer"
            title="Close cultural record (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5 text-[#191B21]">
          {/* Hero Visual Banner */}
          <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-xs overflow-hidden border border-[#B8863B]/40 bg-[#EADCC9] shadow-inner">
            <img
              src={imageError ? fallbackImages[item.category] || fallbackImages.architecture : item.imageUrl}
              alt={item.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Floating Metadata */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 pointer-events-none text-white">
              <div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[#FFD9A9] text-[10px] font-mono rounded-xs border border-white/20">
                  <MapPin className="w-3 h-3 text-[#FFD9A9]" />
                  {item.state} • {item.region}
                </span>
                <h2 className="font-serif-display font-bold text-xl sm:text-2xl lg:text-3xl text-white mt-1 drop-shadow-md">
                  {item.name}
                </h2>
              </div>

              {isExplored ? (
                <span className="px-2.5 py-1 bg-[#2A5235]/90 backdrop-blur-xs text-[#D1FAE5] border border-[#34D399]/40 rounded-xs text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>EXPLORED</span>
                </span>
              ) : (
                <span className="px-2.5 py-1 bg-[#A8422B]/90 backdrop-blur-xs text-[#FFF8ED] border border-[#882B16] rounded-xs text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD9A9]" />
                  <span>+{item.xpReward} XP REWARD</span>
                </span>
              )}
            </div>
          </div>

          {/* Native Name & Origin Meta */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#B8863B]/25">
            {item.nativeName && (
              <div className="font-mono text-sm text-[#882B16] font-semibold">
                {item.nativeName}
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#684300] bg-[#F3ECE2] px-2.5 py-1 rounded-xs border border-[#B8863B]/30">
              <Clock className="w-3.5 h-3.5 text-[#A8422B]" />
              <span>{item.timePeriodOrOrigin}</span>
            </div>
          </div>

          {/* Short Lead Overview */}
          <p className="text-sm sm:text-base text-[#191B21] leading-relaxed font-sans-ui italic border-l-2 border-[#A8422B] pl-3 py-0.5">
            {item.shortDescription}
          </p>

          {/* Significance Callout Grid (Side-by-side on laptop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Historical Significance Callout */}
            <div className="p-4 bg-[#F3ECE2] border border-[#B8863B]/40 rounded-xs space-y-2 shadow-xs">
              <div className="flex items-center gap-2">
                <Scroll className="w-4 h-4 text-[#A8422B]" />
                <h4 className="font-serif-display font-bold text-sm text-[#191B21] uppercase tracking-wider">
                  Historical Significance & Lineage
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#57423D] leading-relaxed font-sans-ui">
                {item.historicalSignificance}
              </p>
            </div>

            {/* Cultural Significance & Philosophy */}
            <div className="p-4 bg-[#F3ECE2]/50 border border-[#B8863B]/30 rounded-xs space-y-2 shadow-xs">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#B8863B]" />
                <h4 className="font-serif-display font-bold text-sm text-[#191B21] uppercase tracking-wider">
                  Cultural Significance & Sacred Philosophy
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#57423D] leading-relaxed font-sans-ui">
                {item.culturalSignificance}
              </p>
            </div>
          </div>

          {/* Related Living Tradition & Rituals */}
          <div className="space-y-2 p-3.5 bg-[#FAF2EB] border border-[#A8422B]/30 rounded-xs">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#A8422B]" />
              <h4 className="font-serif-display font-bold text-xs text-[#882B16] uppercase tracking-wider">
                Related Living Tradition & Communal Practices
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#57423D] leading-relaxed font-sans-ui">
              {item.relatedTradition}
            </p>
          </div>

          {/* Primary Elements & Material Hallmarks */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#B8863B]" />
              <h5 className="font-mono text-xs text-[#8A726C] uppercase tracking-wider font-bold">
                Key Elements & Hallmarks
              </h5>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.primaryElements.map((elem, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#F3ECE2] text-[#684300] border border-[#B8863B]/40 rounded-xs"
                >
                  {elem}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Exploration & XP Award Action Bar */}
        <div className="p-3.5 sm:p-4 bg-[#F3ECE2] border-t border-[#B8863B]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-[#57423D] w-full sm:w-auto">
            {isExplored ? (
              <span className="flex items-center gap-1.5 text-[#2A5235] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                Cataloged in Living Heritage Archives
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[#882B16]">
                <Sparkles className="w-4 h-4 text-[#A8422B]" />
                Explore to record entry & receive +{item.xpReward} XP
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-mono text-[#8A726C] hover:text-[#191B21] transition-colors rounded-xs cursor-pointer border border-transparent hover:border-[#B8863B]/30"
            >
              Close
            </button>

            {isExplored ? (
              <div className="px-3.5 py-1.5 bg-[#2A5235] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xs border border-[#1E3B26] flex items-center gap-1.5 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Explored (+{item.xpReward} XP Acquired)</span>
              </div>
            ) : (
              <button
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-4 py-2 bg-[#A8422B] hover:bg-[#882B16] active:scale-98 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xs border border-[#882B16] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#FFD9A9] group-hover:rotate-12 transition-transform" />
                <span>Mark as Explored (+{item.xpReward} XP)</span>
              </button>
            )}
          </div>
        </div>

        {/* Just Explored Toast Banner */}
        {justExplored && (
          <div className="bg-[#2A5235] text-[#D1FAE5] text-xs font-mono py-2 px-4 text-center border-t border-[#34D399]/40 flex items-center justify-center gap-2 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Success! +{item.xpReward} Heritage XP awarded to your passport.</span>
          </div>
        )}
      </div>
    </div>
  );
};
