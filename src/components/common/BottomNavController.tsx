import React from 'react';
import { ScreenType } from '../../types';
import { Map, Sparkles, Hourglass, ScrollText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface BottomNavControllerProps {
  currentScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
}

export const BottomNavController: React.FC<BottomNavControllerProps> = ({
  currentScreen,
  onSelectScreen,
}) => {
  const { t } = useLanguage();

  const navItems: { id: ScreenType; labelKey: string; defaultLabel: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'explore', labelKey: 'nav_cartography', defaultLabel: 'Cartography', icon: Map },
    { id: 'cultural', labelKey: 'nav_culture', defaultLabel: 'Culture', icon: Sparkles },
    { id: 'chronology', labelKey: 'nav_chronology', defaultLabel: 'Chronology', icon: Hourglass },
    { id: 'dossiers', labelKey: 'nav_dossiers', defaultLabel: 'Dossier', icon: ScrollText },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#B8863B]/25 safe-area-bottom shadow-lg lg:hidden">
      <div className="max-w-md mx-auto px-4 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectScreen(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xs transition-all relative cursor-pointer ${
                isActive
                  ? 'text-[#A8422B] font-bold'
                  : 'text-[#8A726C] hover:text-[#1A2744]'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-[2px] bg-[#A8422B] rounded-full" />
              )}
              <div
                className={`p-1 rounded-xs transition-colors ${
                  isActive ? 'bg-[#FFD7CE]/40 text-[#882B16]' : 'bg-transparent'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-wider uppercase mt-0.5 font-mono">
                {t(item.labelKey, item.defaultLabel)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
