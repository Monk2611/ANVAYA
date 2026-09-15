import React from 'react';
import { Search, Compass, BookOpen, Sparkles, Map, Hourglass, ScrollText, Languages } from 'lucide-react';
import { ScreenType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  onOpenSearch: () => void;
  activeScreenTitle: string;
  userXp?: number;
  currentScreen?: ScreenType;
  onScreenChange?: (screen: ScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  activeScreenTitle,
  userXp,
  currentScreen,
  onScreenChange,
}) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems: { id: ScreenType; labelKey: string; defaultLabel: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'explore', labelKey: 'nav_cartography', defaultLabel: 'Cartography', icon: Map },
    { id: 'cultural', labelKey: 'nav_culture', defaultLabel: 'Culture', icon: Sparkles },
    { id: 'chronology', labelKey: 'nav_chronology', defaultLabel: 'Chronology', icon: Hourglass },
    { id: 'dossiers', labelKey: 'nav_dossiers', defaultLabel: 'Dossier', icon: ScrollText },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#B8863B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Accession Tag */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            onClick={() => onScreenChange && onScreenChange('explore')}
            className="w-8 h-8 rounded-xs bg-[#A8422B] text-white flex items-center justify-center border border-[#882B16] shadow-xs cursor-pointer hover:bg-[#882B16] transition-colors"
            title="Anvaya Heritage Home"
          >
            <Compass className="w-4 h-4 text-[#FFD9A9]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span
                onClick={() => onScreenChange && onScreenChange('explore')}
                className="font-serif-display font-bold text-xl tracking-tight text-[#191B21] leading-none cursor-pointer"
              >
                {t('app_name')}
              </span>
              <span className="hidden sm:inline-block label-caps px-1.5 py-0.5 bg-[#FFD7CE]/50 text-[#882B16] text-[9px] border border-[#A8422B]/30 rounded-xs">
                {t('app_tagline')}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8A726C] mt-0.5">
              <span className="hidden sm:inline">28°36'48"N 77°14'24"E</span>
              <span className="text-[#B8863B] hidden sm:inline">/</span>
              <span className="uppercase text-[#A8422B] font-semibold">
                {activeScreenTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop / Laptop Central Navigation Bar (Hidden on Mobile/Tablet, visible on lg:) */}
        {onScreenChange && (
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#F3ECE2]/80 border border-[#B8863B]/30 p-1 rounded-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onScreenChange(item.id)}
                  className={`px-3 py-1.5 rounded-xs text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1A2744] text-[#FAF7F2] shadow-xs border border-[#1A2744]'
                      : 'text-[#57423D] hover:text-[#191B21] hover:bg-[#FAF7F2]/80 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#B8863B]' : 'text-[#8A726C]'}`} />
                  <span className="font-serif-display">{t(item.labelKey, item.defaultLabel)}</span>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#A8422B] shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Switch Button (English / Hindi) */}
          <button
            id="language-switch-button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#B8863B]/40 hover:border-[#A8422B] transition-all rounded-xs text-xs shadow-xs cursor-pointer group"
            title={t('lang_toggle_tooltip')}
            aria-label="Switch language to Hindi / English"
          >
            <Languages className="w-3.5 h-3.5 text-[#A8422B] group-hover:rotate-12 transition-transform" />
            <div className="flex items-center gap-1 font-mono text-[11px]">
              <span className={`transition-colors ${language === 'en' ? 'text-[#882B16] font-bold' : 'text-[#8A726C]'}`}>
                EN
              </span>
              <span className="text-[#B8863B]/40">/</span>
              <span className={`transition-colors font-medium ${language === 'hi' ? 'text-[#882B16] font-bold' : 'text-[#8A726C]'}`}>
                हिन्दी
              </span>
            </div>
          </button>

          {/* Spatial Search Bar Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F2] border border-[#D4A359]/60 hover:border-[#A8422B] transition-colors rounded-xs text-[#57423D] text-xs shadow-xs cursor-pointer"
            title="Search Archive (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#B8863B]" />
            <span className="hidden sm:inline font-medium">{t('search_archive')}</span>
            <kbd className="hidden sm:inline font-mono text-[9px] px-1 bg-[#F3ECE2] border border-[#B8863B]/30 text-[#8A726C] rounded-xs">
              {t('search_k')}
            </kbd>
          </button>

          {/* Quick Collection Metric & XP */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#A8422B]" />
              <span className="font-mono text-[11px] font-medium text-[#1A2744]">
                {t('sites_artifacts_count')}
              </span>
            </div>

            {typeof userXp === 'number' && (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-[#FAF2EB] border border-[#A8422B]/40 rounded-xs text-xs">
                <Sparkles className="w-3 h-3 text-[#A8422B]" />
                <span className="font-mono text-[11px] font-bold text-[#882B16]">
                  {userXp} XP
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
