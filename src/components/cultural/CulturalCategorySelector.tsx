import React from 'react';
import { CulturalCategory, CulturalCategoryMeta } from '../../types';
import {
  Sparkles,
  Utensils,
  Music,
  Palette,
  Shirt,
  Building2,
  Grid,
} from 'lucide-react';

interface CulturalCategorySelectorProps {
  categories: CulturalCategoryMeta[];
  selectedCategory: CulturalCategory | 'all';
  onSelectCategory: (category: CulturalCategory | 'all') => void;
  totalCount: number;
}

export const CulturalCategorySelector: React.FC<CulturalCategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  totalCount,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'festivals':
        return Sparkles;
      case 'food-cuisine':
        return Utensils;
      case 'music-instruments':
        return Music;
      case 'arts-crafts':
        return Palette;
      case 'clothing-textiles':
        return Shirt;
      case 'architecture':
        return Building2;
      default:
        return Grid;
    }
  };

  return (
    <div className="w-full bg-[#FAF7F2] border-b border-[#B8863B]/25 py-2.5 px-3">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {/* All Categories Option */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono tracking-wider uppercase shrink-0 transition-all cursor-pointer border ${
            selectedCategory === 'all'
              ? 'bg-[#A8422B] text-white border-[#882B16] font-bold shadow-xs'
              : 'bg-[#F3ECE2] text-[#57423D] border-[#B8863B]/30 hover:bg-[#FAF2EB] hover:border-[#A8422B]'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>All Heritage</span>
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded-xs font-bold ${
              selectedCategory === 'all'
                ? 'bg-[#882B16] text-[#FFD9A9]'
                : 'bg-[#FAF7F2] text-[#8A726C]'
            }`}
          >
            {totalCount}
          </span>
        </button>

        {/* Categories List */}
        {categories.map((category) => {
          const Icon = getCategoryIcon(category.id);
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono tracking-wider uppercase shrink-0 transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#1A2744] text-[#FFD9A9] border-[#B8863B] font-bold shadow-xs'
                  : 'bg-[#F3ECE2] text-[#57423D] border-[#B8863B]/30 hover:bg-[#FAF2EB] hover:border-[#A8422B]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FFD9A9]' : 'text-[#B8863B]'}`} />
              <span>{category.name}</span>
              {typeof category.itemCount === 'number' && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-xs font-bold ${
                    isSelected
                      ? 'bg-[#0F172A] text-[#FFD9A9]'
                      : 'bg-[#FAF7F2] text-[#8A726C]'
                  }`}
                >
                  {category.itemCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
