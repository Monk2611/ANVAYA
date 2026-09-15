import React, { useState, useMemo } from 'react';
import { CulturalCategory, CulturalItem } from '../../types';
import {
  CULTURAL_CATEGORIES,
  CULTURAL_ITEMS,
  getCulturalCategories,
} from '../../data/culturalHeritage';
import { CulturalCategorySelector } from '../cultural/CulturalCategorySelector';
import { CulturalItemCard } from '../cultural/CulturalItemCard';
import { CulturalItemDetailModal } from '../cultural/CulturalItemDetailModal';
import {
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Compass,
  X,
  RotateCcw,
} from 'lucide-react';

interface CulturalExplorerScreenProps {
  exploredItemIds: string[];
  onExploreItem: (itemId: string, xpReward: number) => void;
  userXp: number;
}

export const CulturalExplorerScreen: React.FC<CulturalExplorerScreenProps> = ({
  exploredItemIds,
  onExploreItem,
  userXp: _userXp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<CulturalItem | null>(null);

  const categoriesWithCounts = useMemo(() => getCulturalCategories(), []);

  // Distinct regions from the curated items for regional filtering
  const availableRegions = useMemo(() => {
    const set = new Set<string>();
    CULTURAL_ITEMS.forEach((item) => set.add(item.region));
    return Array.from(set);
  }, []);

  // Filtered items based on Category, Region, and Search Query
  const filteredItems = useMemo(() => {
    return CULTURAL_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Region filter
      if (selectedRegion !== 'all' && item.region !== selectedRegion) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesNative = item.nativeName?.toLowerCase().includes(q) ?? false;
        const matchesState = item.state.toLowerCase().includes(q);
        const matchesRegion = item.region.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesTradition = item.relatedTradition.toLowerCase().includes(q);
        const matchesElements = item.primaryElements.some((el) =>
          el.toLowerCase().includes(q)
        );
        return (
          matchesName ||
          matchesNative ||
          matchesState ||
          matchesRegion ||
          matchesDesc ||
          matchesTradition ||
          matchesElements
        );
      }
      return true;
    });
  }, [selectedCategory, selectedRegion, searchQuery]);

  // Statistics for user progress
  const totalItemsCount = CULTURAL_ITEMS.length;
  const exploredCount = useMemo(() => {
    return CULTURAL_ITEMS.filter((item) => exploredItemIds.includes(item.id)).length;
  }, [exploredItemIds]);

  const culturalXpEarned = useMemo(() => {
    return CULTURAL_ITEMS.filter((item) => exploredItemIds.includes(item.id)).reduce(
      (sum, item) => sum + item.xpReward,
      0
    );
  }, [exploredItemIds]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSearchQuery('');
  };

  return (
    <div className="w-full pb-28 lg:pb-12 min-h-screen bg-[#FAF7F2] text-[#191B21]">
      {/* Editorial Header & Archive Title */}
      <div className="bg-[#FAF7F2] border-b border-[#B8863B]/25 pt-5 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="label-caps text-[#A8422B] text-[10.5px] flex items-center gap-1.5 font-bold tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#B8863B]" />
                  LIVING TRADITIONS // INTANGIBLE ARCHIVES
                </span>
                <span className="text-[#8A726C] text-xs font-mono">// 6 CURATED DOMAINS</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21] mt-1 tracking-tight">
                Cultural Explorer
              </h2>
              <p className="text-xs sm:text-sm text-[#57423D] mt-1 max-w-3xl font-sans-ui leading-relaxed">
                Discover the living fabric of the subcontinent—enduring seasonal pageants, heirloom culinary arts, master lutherie, hand-spun textiles, and vernacular architecture.
              </p>
            </div>

            {/* Curatorial Progress Metrics */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F3ECE2] border border-[#B8863B]/35 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                <div className="text-left">
                  <div className="text-[9px] font-mono uppercase text-[#8A726C] tracking-wider">
                    EXPLORED
                  </div>
                  <div className="text-xs font-mono font-bold text-[#191B21]">
                    {exploredCount} / {totalItemsCount}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF2EB] border border-[#A8422B]/40 rounded-xs">
                <Sparkles className="w-4 h-4 text-[#A8422B]" />
                <div className="text-left">
                  <div className="text-[9px] font-mono uppercase text-[#882B16] tracking-wider">
                    CULTURAL XP
                  </div>
                  <div className="text-xs font-mono font-bold text-[#882B16]">
                    +{culturalXpEarned} XP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <CulturalCategorySelector
        categories={categoriesWithCounts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        totalCount={totalItemsCount}
      />

      {/* Controls Bar: Search & Region Filter */}
      <div className="bg-[#F3ECE2]/60 border-b border-[#B8863B]/20 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-[#B8863B] absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search traditions, states, crafts..."
              className="w-full bg-[#FAF7F2] border border-[#B8863B]/35 rounded-xs pl-8 pr-7 py-1 text-xs text-[#191B21] placeholder-[#8A726C] focus:outline-none focus:border-[#A8422B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8A726C] hover:text-[#191B21]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Region Quick Select Filter */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-mono uppercase text-[#8A726C] flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3 text-[#B8863B]" /> Region:
            </span>
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-2 py-0.5 text-[11px] font-mono rounded-xs border shrink-0 transition-colors cursor-pointer ${
                selectedRegion === 'all'
                  ? 'bg-[#1A2744] text-[#FFD9A9] border-[#B8863B] font-bold'
                  : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#A8422B]'
              }`}
            >
              All
            </button>
            {availableRegions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-2 py-0.5 text-[11px] font-mono rounded-xs border shrink-0 transition-colors cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#1A2744] text-[#FFD9A9] border-[#B8863B] font-bold'
                    : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#A8422B]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Cultural Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item) => (
              <CulturalItemCard
                key={item.id}
                item={item}
                isExplored={exploredItemIds.includes(item.id)}
                onSelect={(selected) => setActiveItem(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#F3ECE2]/40 border border-[#B8863B]/25 rounded-xs p-6 max-w-md mx-auto space-y-3">
            <Compass className="w-8 h-8 text-[#B8863B] mx-auto opacity-70" />
            <h3 className="font-serif-display font-bold text-lg text-[#191B21]">
              No Cultural Records Found
            </h3>
            <p className="text-xs text-[#57423D]">
              No items match your active filter criteria. Clear your search or change the active domain to inspect more heritage archives.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-3 py-1.5 bg-[#A8422B] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xs border border-[#882B16] inline-flex items-center gap-1.5 hover:bg-[#882B16] transition-colors cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Archive Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {activeItem && (
        <CulturalItemDetailModal
          item={activeItem}
          isExplored={exploredItemIds.includes(activeItem.id)}
          onClose={() => setActiveItem(null)}
          onMarkExplored={(itemId, xp) => {
            onExploreItem(itemId, xp);
          }}
        />
      )}
    </div>
  );
};
