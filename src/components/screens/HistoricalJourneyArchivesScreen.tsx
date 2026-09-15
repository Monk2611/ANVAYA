import React, { useState } from 'react';
import {
  ArrowLeft,
  Scroll,
  Landmark,
  Award,
  Sparkles,
  Shield,
  CheckCircle2,
  Compass,
  BookOpen,
  Info,
  MapPin,
  Calendar,
  ChevronRight,
  ArrowRight,
  RotateCcw,
  Check,
} from 'lucide-react';
import { HistoricalJourney, JourneyScenario, ScenarioOption } from '../../types';
import { CoordinateChip } from '../common/CoordinateChip';

interface HistoricalJourneyArchivesScreenProps {
  journey: HistoricalJourney;
  userXp: number;
  unlockedBadges: string[];
  onBackToMap: () => void;
  onCompleteJourney: (awardedXp: number, badgeId: string) => void;
}

type ViewMode = 'archive-overview' | 'interactive-journey' | 'completed';

export const HistoricalJourneyArchivesScreen: React.FC<
  HistoricalJourneyArchivesScreenProps
> = ({
  journey,
  userXp,
  unlockedBadges,
  onBackToMap,
  onCompleteJourney,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('archive-overview');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<ScenarioOption | null>(null);
  const [hasSubmittedChoice, setHasSubmittedChoice] = useState<boolean>(false);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const [scenarioHistory, setScenarioHistory] = useState<
    { scenarioId: string; chosenOptionId: string }[]
  >([]);

  const isBadgeAlreadyUnlocked = unlockedBadges.includes(journey.awardedBadge.id);
  const currentScenario: JourneyScenario = journey.scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === journey.scenarios.length - 1;

  // Handle starting journey from beginning or resuming
  const handleStartOrResumeJourney = (targetIndex?: number) => {
    const idx = targetIndex !== undefined ? targetIndex : currentScenarioIndex;
    setCurrentScenarioIndex(idx);
    setSelectedOption(null);
    setHasSubmittedChoice(false);
    setViewMode('interactive-journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (option: ScenarioOption) => {
    setSelectedOption(option);
    setHasSubmittedChoice(true);
  };

  const handleNextScenario = () => {
    if (!selectedOption) return;

    // Record decision
    setScenarioHistory((prev) => [
      ...prev,
      { scenarioId: currentScenario.id, chosenOptionId: selectedOption.id },
    ]);

    // Mark current scenario as completed
    if (!completedScenarios.includes(currentScenario.id)) {
      setCompletedScenarios((prev) => [...prev, currentScenario.id]);
    }

    if (isLastScenario) {
      setViewMode('completed');
      onCompleteJourney(journey.totalXp, journey.awardedBadge.id);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasSubmittedChoice(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestartJourney = () => {
    setCurrentScenarioIndex(0);
    setSelectedOption(null);
    setHasSubmittedChoice(false);
    setScenarioHistory([]);
    setCompletedScenarios([]);
    setViewMode('interactive-journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progressPercentage = Math.round(
    ((completedScenarios.length || (isBadgeAlreadyUnlocked ? journey.scenarios.length : 0)) /
      journey.scenarios.length) *
      100
  );

  return (
    <div className="w-full pb-28 lg:pb-12 min-h-screen bg-[#FAF7F2] text-[#191B21]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6">
        {/* ========================================================================= */}
        {/* TOP BREADCRUMB & BACK NAVIGATION BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#B8863B]/25">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToMap}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F3ECE2] hover:bg-[#EAE0D3] text-[#882B16] text-xs font-mono font-bold uppercase rounded-xs border border-[#B8863B]/40 transition-colors cursor-pointer shadow-xs"
              title="Return to Cartography Map"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to India Map</span>
            </button>

            <span className="text-[#B8863B] hidden sm:inline">•</span>

            <span className="label-caps text-[#A8422B] text-[10px] hidden sm:inline">
              ARCHIVE // {journey.state.toUpperCase()} // CHOLA MANDALA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono bg-[#1A2744] text-[#FFD9A9] px-2 py-0.5 rounded-xs border border-[#B8863B]/40 font-bold">
              HISTORICAL ARCHIVE DOSSIER
            </span>
            <CoordinateChip coordinates="10°46'58&quot;N 79°07'54&quot;E" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: DEDICATED ARCHIVE OVERVIEW SCREEN */}
        {/* ========================================================================= */}
        {viewMode === 'archive-overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Historical Personality Hero Dossier Card */}
            <div className="p-5 sm:p-6 bg-[#F3ECE2] border-2 border-[#B8863B]/50 rounded-xs shadow-md space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Character Portrait */}
                <div className="relative shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-xs overflow-hidden border-2 border-[#B8863B] shadow-lg bg-[#1A2744]">
                  <img
                    src={journey.character.portraitUrl}
                    alt={journey.character.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151B]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                    <span className="text-[9px] font-mono text-[#FAF7F2] uppercase tracking-wider bg-[#882B16]/90 px-1.5 py-0.5 rounded-xs font-bold">
                      REIGN: {journey.character.reignYears}
                    </span>
                  </div>
                </div>

                {/* Character Titles & Identifiers */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="label-caps text-[#A8422B] text-[10px] bg-[#FFD7CE]/50 px-2 py-0.5 rounded-xs border border-[#A8422B]/30">
                      HISTORICAL FIGURE DOSSIER
                    </span>
                    <span className="text-xs font-mono text-[#684300] font-bold">
                      {journey.dynasty}
                    </span>
                  </div>

                  <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21]">
                    {journey.character.name}
                  </h1>

                  {journey.character.nativeScript && (
                    <p className="font-serif-display text-base text-[#882B16] font-semibold">
                      {journey.character.nativeScript}
                    </p>
                  )}

                  <p className="text-xs font-mono text-[#57423D] italic">
                    Regnal Title: {journey.character.regnalTitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[11px] font-mono bg-[#FAF7F2] border border-[#B8863B]/40 px-2.5 py-1 rounded-xs text-[#57423D] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#A8422B]" />
                      <span>{journey.region}</span>
                    </span>
                    <span className="text-[11px] font-mono bg-[#FAF7F2] border border-[#B8863B]/40 px-2.5 py-1 rounded-xs text-[#57423D] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B8863B]" />
                      <span>Lifespan: {journey.character.lifespan}</span>
                    </span>
                    <span className="text-[11px] font-mono bg-[#FAF7F2] border border-[#B8863B]/40 px-2.5 py-1 rounded-xs text-[#57423D] flex items-center gap-1">
                      <Landmark className="w-3 h-3 text-[#1A2744]" />
                      <span>Brihadisvara Temple, Thanjavur</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Short Historical Introduction & Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAF7F2] border-l-3 border-[#A8422B] rounded-xs shadow-xs space-y-1.5">
                  <h3 className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-[#A8422B]" />
                    HISTORICAL BIOGRAPHY
                  </h3>
                  <p className="text-xs text-[#191B21] leading-relaxed font-sans-ui">
                    {journey.character.biography}
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7F2] border-l-3 border-[#B8863B] rounded-xs shadow-xs space-y-1.5">
                  <h3 className="label-caps text-[#684300] text-[10px] flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#B8863B]" />
                    STRATEGIC SOVEREIGN IMPERATIVE
                  </h3>
                  <p className="text-xs text-[#191B21] leading-relaxed font-sans-ui">
                    {journey.character.historicalImperative}
                  </p>
                </div>
              </div>

              {/* Archival Pedagogical Principle */}
              <div className="p-3.5 bg-[#EAF0FC] border border-[#1A2744]/25 rounded-xs flex items-start gap-2.5 text-xs text-[#1A2744]">
                <Info className="w-4 h-4 text-[#1A2744] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold uppercase tracking-wider text-[10px] block">
                    ARCHIVAL LEARNING PRINCIPLE // COUNTERFACTUAL METHODOLOGY
                  </span>
                  <p className="leading-relaxed text-[#2C3852] text-[11.5px]">
                    {journey.character.pedagogicalDisclaimer}
                  </p>
                </div>
              </div>
            </div>

            {/* Journey Progress & Rewards Summary Card */}
            <div className="p-5 bg-[#FAF7F2] border-2 border-[#B8863B]/40 rounded-xs shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex-1 w-full space-y-2">
                <div className="flex items-center justify-between">
                  <span className="label-caps text-[#A8422B] text-[10px]">
                    JOURNEY STATUS & PROGRESS
                  </span>
                  <span className="text-xs font-mono font-bold text-[#684300]">
                    {isBadgeAlreadyUnlocked || completedScenarios.length === journey.scenarios.length
                      ? 'Completed (3 of 3 Scenarios Analyzed)'
                      : completedScenarios.length > 0
                      ? `In Progress (${completedScenarios.length} of ${journey.scenarios.length} Scenarios Completed)`
                      : 'Not Started (0 of 3 Scenarios Explored)'}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 bg-[#EAE0D3] rounded-full overflow-hidden border border-[#B8863B]/30">
                  <div
                    className="h-full bg-gradient-to-r from-[#A8422B] to-[#B8863B] transition-all duration-500 rounded-full"
                    style={{
                      width: `${
                        isBadgeAlreadyUnlocked ? 100 : Math.max(progressPercentage, 5)
                      }%`,
                    }}
                  />
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#8A726C] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A8422B]" />
                    <span>Reward: <strong className="text-[#A8422B]">+{journey.totalXp} XP</strong></span>
                  </div>
                  <span className="text-[#B8863B]">•</span>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#B8863B]" />
                    <span>Badge: <strong className="text-[#191B21]">{journey.awardedBadge.name}</strong></span>
                  </div>
                </div>
              </div>

              {/* Start / Continue Button */}
              <div className="shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => handleStartOrResumeJourney()}
                  className="w-full sm:w-auto px-6 py-3 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Scroll className="w-4 h-4 text-[#FFD9A9]" />
                  <span>
                    {isBadgeAlreadyUnlocked || completedScenarios.length === journey.scenarios.length
                      ? 'Review / Replay Journey'
                      : completedScenarios.length > 0
                      ? `Continue Journey (Scenario ${currentScenarioIndex + 1})`
                      : 'Start Historical Journey'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Available Historical Scenarios Roster */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-[#B8863B]/25">
                <div>
                  <h2 className="font-serif-display text-lg font-bold text-[#191B21]">
                    Available Scenarios & Governance Dilemmas
                  </h2>
                  <p className="text-xs text-[#8A726C] font-mono">
                    Explore 3 critical strategic turning points faced by Rajaraja Chola I
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#A8422B] bg-[#FFD7CE]/40 px-2 py-0.5 rounded-xs border border-[#A8422B]/30">
                  {journey.scenarios.length} SCENARIOS
                </span>
              </div>

              <div className="space-y-3">
                {journey.scenarios.map((scenario, index) => {
                  const isCompleted =
                    completedScenarios.includes(scenario.id) || isBadgeAlreadyUnlocked;
                  const isCurrent =
                    index === currentScenarioIndex && !isBadgeAlreadyUnlocked;

                  return (
                    <div
                      key={scenario.id}
                      className={`p-4 rounded-xs border transition-all ${
                        isCompleted
                          ? 'bg-[#FAF7F2] border-[#B8863B]/40'
                          : isCurrent
                          ? 'bg-[#FAF4EB] border-[#A8422B] ring-1 ring-[#A8422B]/40'
                          : 'bg-[#FAF7F2] border-[#B8863B]/25'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-[#1A2744] text-[#FFD9A9] font-mono text-[10px] font-bold rounded-xs">
                              {scenario.year}
                            </span>
                            <span className="label-caps text-[#882B16] text-[10px]">
                              STAGE {scenario.order} OF {journey.scenarios.length}
                            </span>
                            {isCompleted && (
                              <span className="flex items-center gap-1 text-[10px] font-mono text-[#2E7D32] bg-[#E8F5E9] px-1.5 py-0.5 rounded-xs font-bold">
                                <Check className="w-3 h-3" /> ANALYZED
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif-display text-base font-bold text-[#191B21]">
                            {scenario.title}
                          </h3>
                          <p className="text-xs font-mono text-[#684300]">
                            {scenario.subtitle}
                          </p>
                          <p className="text-xs text-[#57423D] line-clamp-2 max-w-2xl mt-1">
                            {scenario.context}
                          </p>
                        </div>

                        <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2">
                          <span className="text-[10px] font-mono text-[#8A726C]">
                            {scenario.options.length} Strategic Options
                          </span>
                          <button
                            onClick={() => handleStartOrResumeJourney(index)}
                            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                              isCurrent
                                ? 'bg-[#A8422B] text-white hover:bg-[#C25438]'
                                : 'bg-[#F3ECE2] text-[#882B16] hover:bg-[#EAE0D3] border border-[#B8863B]/40'
                            }`}
                          >
                            <span>
                              {isCompleted ? 'Review Scenario' : 'Launch Scenario'}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Archival Badge Preview Section */}
            <div className="p-4 bg-[#F3ECE2] border border-[#B8863B]/40 rounded-xs flex flex-col sm:flex-row items-center gap-4">
              <div className="shrink-0 w-16 h-16 rounded-xs octagonal-seal bg-[#A8422B] border-2 border-[#882B16] text-[#FAF7F2] flex flex-col items-center justify-center p-2 shadow-md">
                <Landmark className="w-6 h-6 text-[#FFD9A9]" />
                <span className="text-[7px] font-mono uppercase tracking-widest text-[#FFD9A9] mt-0.5">
                  SEAL
                </span>
              </div>

              <div className="flex-1 text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="label-caps text-[#A8422B] text-[10px]">
                    ARCHIVAL RECOGNITION BADGE
                  </span>
                  {isBadgeAlreadyUnlocked && (
                    <span className="text-[10px] font-mono bg-[#E8F5E9] text-[#2E7D32] px-1.5 py-0.2 rounded-xs font-bold">
                      ACQUIRED
                    </span>
                  )}
                </div>
                <h3 className="font-serif-display text-base font-bold text-[#191B21]">
                  {journey.awardedBadge.name}
                </h3>
                <p className="text-xs text-[#684300] font-mono">
                  {journey.awardedBadge.title}
                </p>
                <p className="text-xs text-[#57423D] leading-relaxed">
                  {journey.awardedBadge.description}
                </p>
              </div>

              <div className="shrink-0 text-center sm:text-right">
                <span className="text-[10px] font-mono text-[#8A726C] block">Completion Value</span>
                <span className="font-serif-display text-lg font-bold text-[#A8422B]">
                  +{journey.totalXp} XP
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: INTERACTIVE SCENARIO & COUNTERFACTUAL WALKTHROUGH */}
        {/* ========================================================================= */}
        {viewMode === 'interactive-journey' && (
          <div className="space-y-6 animate-fade-in">
            {/* Scenario Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#B8863B]/30">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('archive-overview')}
                  className="px-2.5 py-1 text-xs font-mono font-bold text-[#882B16] bg-[#F3ECE2] hover:bg-[#EAE0D3] rounded-xs border border-[#B8863B]/30 flex items-center gap-1 cursor-pointer"
                  title="Return to Journey Overview"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Archive Overview</span>
                </button>
                <span className="text-[#B8863B]">•</span>
                <span className="px-2 py-0.5 bg-[#A8422B] text-white font-mono text-[10px] font-bold rounded-xs">
                  {currentScenario.year}
                </span>
                <span className="label-caps text-[#882B16] text-[10px]">
                  SCENARIO {currentScenarioIndex + 1} OF {journey.scenarios.length}
                </span>
              </div>

              {/* Stage dots */}
              <div className="flex items-center gap-1.5">
                {journey.scenarios.map((s, idx) => (
                  <div
                    key={s.id}
                    className={`w-6 h-1.5 rounded-full transition-colors ${
                      idx === currentScenarioIndex
                        ? 'bg-[#A8422B]'
                        : idx < currentScenarioIndex
                        ? 'bg-[#B8863B]'
                        : 'bg-[#E2E2EA]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Scenario Context Block */}
            <div className="space-y-2">
              <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#191B21]">
                {currentScenario.title}
              </h2>
              <p className="text-xs font-mono text-[#882B16] font-medium">
                {currentScenario.subtitle}
              </p>
              <div className="p-4 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs">
                <p className="text-sm text-[#191B21] leading-relaxed font-sans-ui">
                  {currentScenario.context}
                </p>
              </div>
            </div>

            {/* Dilemma Prompt */}
            <div className="p-4 bg-[#1A2744] text-[#FAF7F2] rounded-xs border border-[#B8863B]/40 shadow-xs">
              <span className="label-mono-spatial text-[#FFD9A9] text-[10px] block mb-1">
                HISTORICAL GOVERNANCE DILEMMA
              </span>
              <p className="text-sm sm:text-base font-serif-display font-medium leading-snug text-[#FFF8ED]">
                "{currentScenario.dilemmaPrompt}"
              </p>
            </div>

            {/* Choice Options List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="label-caps text-[#684300] text-[10px]">
                  SELECT YOUR STRATEGIC APPROACH
                </span>
                {!hasSubmittedChoice && (
                  <span className="text-[11px] text-[#8A726C] font-mono italic">
                    (Click an option to explore the hypothetical consequence)
                  </span>
                )}
              </div>

              <div className="space-y-2.5">
                {currentScenario.options.map((option) => {
                  const isSelected = selectedOption?.id === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      className={`w-full text-left p-4 rounded-xs border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFD7CE]/40 border-[#A8422B] ring-1 ring-[#A8422B] shadow-xs'
                          : 'bg-[#FAF7F2] border-[#B8863B]/30 hover:border-[#A8422B] hover:bg-[#F3ECE2]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 border ${
                            isSelected
                              ? 'bg-[#A8422B] text-white border-[#882B16]'
                              : 'bg-[#F3ECE2] text-[#684300] border-[#B8863B]/40'
                          }`}
                        >
                          {option.label.split(':')[0].replace('Option ', '')}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="font-serif-display text-sm font-bold text-[#191B21]">
                            {option.label}
                          </div>
                          <p className="text-xs text-[#57423D] mt-1 leading-relaxed">
                            {option.description}
                          </p>
                        </div>

                        {isSelected && (
                          <span className="shrink-0 text-[#A8422B] text-xs font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ========================================================================= */}
            {/* HYPOTHETICAL CONSEQUENCE & HISTORICAL REALITY (ON CHOICE) */}
            {/* ========================================================================= */}
            {hasSubmittedChoice && selectedOption && (
              <div className="space-y-5 pt-3 border-t border-[#B8863B]/25 animate-fade-in">
                {/* Part A: Hypothetical Consequence */}
                <div className="p-4 sm:p-5 bg-[#FAF2EB] border border-[#A8422B]/40 rounded-xs shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="label-caps text-[#882B16] text-[10px] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#A8422B]" />
                      HYPOTHETICAL OUTCOME (YOUR EXPLORATORY PATH)
                    </span>
                    <span className="text-[10px] font-mono text-[#8A726C] bg-[#FAF7F2] px-2 py-0.5 border border-[#B8863B]/20 rounded-xs">
                      Counterfactual Model
                    </span>
                  </div>

                  <h4 className="font-serif-display text-base sm:text-lg font-bold text-[#191B21]">
                    {selectedOption.hypotheticalOutcome.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#191B21] leading-relaxed font-sans-ui">
                    {selectedOption.hypotheticalOutcome.consequence}
                  </p>

                  <div className="p-3 bg-[#FAF7F2] border-l-3 border-[#A8422B] text-xs text-[#57423D] rounded-r-xs">
                    <span className="font-bold text-[#882B16] block text-[10px] uppercase tracking-wider mb-0.5">
                      Strategic Trade-off Analysis:
                    </span>
                    <p>{selectedOption.hypotheticalOutcome.strategicAnalysis}</p>
                  </div>
                </div>

                {/* Part B: What Actually Happened? (Historical Reality) */}
                <div className="p-4 sm:p-5 bg-[#1A2744] text-[#FAF7F2] rounded-xs border-2 border-[#B8863B] shadow-md space-y-3">
                  <div className="flex items-center justify-between border-b border-white/15 pb-2">
                    <span className="label-mono-spatial text-[#FFD9A9] text-[10px] flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-[#FFD9A9]" />
                      WHAT ACTUALLY HAPPENED? (HISTORICAL REALITY)
                    </span>
                    <span className="text-[9px] font-mono text-[#FAF7F2] bg-[#A8422B] px-2.5 py-0.5 rounded-xs font-bold">
                      VERIFIED HISTORY
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-serif-display text-base sm:text-lg font-bold text-[#FAF7F2]">
                      {currentScenario.historicalReality.actualDecision}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D9D9E2] leading-relaxed font-sans-ui">
                      {currentScenario.historicalReality.historicalOutcome}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-start gap-2 text-[11px] text-[#FFD9A9]/90 font-mono">
                    <Scroll className="w-4 h-4 shrink-0 mt-0.5 text-[#B8863B]" />
                    <div>
                      <span className="font-bold text-white">Epigraphical Provenance: </span>
                      <span>{currentScenario.historicalReality.inscriptionalSource}</span>
                    </div>
                  </div>
                </div>

                {/* Advance to Next Scenario / Complete Journey CTA */}
                <div className="pt-3 flex items-center justify-between border-t border-[#B8863B]/20">
                  <button
                    onClick={() => setViewMode('archive-overview')}
                    className="text-xs font-mono text-[#8A726C] hover:text-[#A8422B] transition-colors cursor-pointer"
                  >
                    ← Save & Exit to Overview
                  </button>

                  <button
                    onClick={handleNextScenario}
                    className="px-6 py-2.5 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] shadow-md flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>
                      {isLastScenario
                        ? 'Complete Historical Journey'
                        : `Proceed to Scenario ${currentScenarioIndex + 2}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: JOURNEY COMPLETION & REWARDS */}
        {/* ========================================================================= */}
        {viewMode === 'completed' && (
          <div className="space-y-6 animate-fade-in py-2">
            {/* Celebration Hero Card */}
            <div className="p-6 sm:p-8 bg-[#F3ECE2] border-2 border-[#B8863B] rounded-xs text-center space-y-4 shadow-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#A8422B] text-white flex items-center justify-center border-2 border-[#882B16] shadow-lg">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD9A9]" />
              </div>

              <div>
                <span className="label-caps text-[#A8422B] text-[10px]">
                  JOURNEY COMPLETE // ARCHIVE RECORD VALIDATED
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21] mt-1">
                  The Sovereign Legacy of Rajaraja Chola I
                </h2>
                <p className="text-xs sm:text-sm text-[#57423D] max-w-lg mx-auto mt-1">
                  You have analyzed the monumental granite engineering, oceanic naval expeditions, and cadastral survey records of 11th-century Tamilakam.
                </p>
              </div>

              {/* XP & Rewards Bar */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <div className="px-4 py-2.5 bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs flex items-center gap-2.5 shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#A8422B]" />
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-[#8A726C] block uppercase">
                      Expedition XP Awarded
                    </span>
                    <span className="font-serif-display font-bold text-base text-[#A8422B]">
                      +{journey.totalXp} XP Added to Passport
                    </span>
                  </div>
                </div>

                <div className="px-4 py-2.5 bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs flex items-center gap-2.5 shadow-xs">
                  <Shield className="w-5 h-5 text-[#1A2744]" />
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-[#8A726C] block uppercase">
                      Scenarios Explored
                    </span>
                    <span className="font-serif-display font-bold text-base text-[#1A2744]">
                      {journey.scenarios.length} of {journey.scenarios.length} Analyzed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Awarded Official Archival Badge */}
            <div className="p-5 bg-[#FAF7F2] border-2 border-[#B8863B] rounded-xs flex flex-col sm:flex-row items-center gap-5 shadow-sm">
              <div className="shrink-0 w-20 h-20 rounded-xs octagonal-seal bg-[#A8422B] border-2 border-[#882B16] text-[#FAF7F2] flex flex-col items-center justify-center p-2 shadow-md">
                <Landmark className="w-7 h-7 text-[#FFD9A9]" />
                <span className="text-[8px] font-mono uppercase tracking-widest text-[#FFD9A9] mt-1 font-bold">
                  UNLOCKED
                </span>
              </div>

              <div className="flex-1 text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="label-caps text-[#A8422B] text-[10px]">
                    OFFICIAL ARCHIVAL BADGE ACQUIRED
                  </span>
                  <span className="text-xs font-mono bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded-xs font-bold">
                    VERIFIED
                  </span>
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#191B21]">
                  {journey.awardedBadge.name}
                </h3>
                <p className="text-xs text-[#684300] font-mono font-bold">
                  {journey.awardedBadge.title}
                </p>
                <p className="text-xs text-[#57423D] leading-relaxed">
                  {journey.awardedBadge.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleRestartJourney}
                className="px-4 py-2 bg-[#F3ECE2] hover:bg-[#EAE0D3] text-[#882B16] text-xs font-mono font-bold uppercase rounded-xs border border-[#B8863B]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Scenarios</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('archive-overview')}
                  className="px-4 py-2 bg-[#F3ECE2] hover:bg-[#EAE0D3] text-[#191B21] text-xs font-mono font-bold uppercase rounded-xs border border-[#B8863B]/40 transition-colors cursor-pointer"
                >
                  Return to Archive Overview
                </button>
                <button
                  onClick={onBackToMap}
                  className="px-5 py-2 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Return to India Map</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
