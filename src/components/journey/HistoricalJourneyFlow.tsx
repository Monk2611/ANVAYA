import React, { useState } from 'react';
import {
  X,
  Scroll,
  BookOpen,
  Award,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Shield,
  Layers,
  Landmark,
  Compass,
  ArrowRight,
  User,
} from 'lucide-react';
import { HistoricalJourney, JourneyScenario, ScenarioOption } from '../../types';

interface HistoricalJourneyFlowProps {
  journey: HistoricalJourney;
  onClose: () => void;
  onCompleteJourney: (awardedXp: number, badgeId: string) => void;
}

type FlowStep = 'intro' | 'scenario' | 'completed';

export const HistoricalJourneyFlow: React.FC<HistoricalJourneyFlowProps> = ({
  journey,
  onClose,
  onCompleteJourney,
}) => {
  const [step, setStep] = useState<FlowStep>('intro');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<ScenarioOption | null>(null);
  const [hasSubmittedChoice, setHasSubmittedChoice] = useState<boolean>(false);
  const [scenarioHistory, setScenarioHistory] = useState<{
    scenarioId: string;
    chosenOptionId: string;
  }[]>([]);

  const currentScenario: JourneyScenario = journey.scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === journey.scenarios.length - 1;

  const handleSelectOption = (option: ScenarioOption) => {
    setSelectedOption(option);
    setHasSubmittedChoice(true);
  };

  const handleNextScenario = () => {
    if (!selectedOption) return;

    // Record decision in history
    setScenarioHistory((prev) => [
      ...prev,
      { scenarioId: currentScenario.id, chosenOptionId: selectedOption.id },
    ]);

    if (isLastScenario) {
      setStep('completed');
      onCompleteJourney(journey.totalXp, journey.awardedBadge.id);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasSubmittedChoice(false);
      // Scroll to top of scenario view
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestartJourney = () => {
    setStep('intro');
    setCurrentScenarioIndex(0);
    setSelectedOption(null);
    setHasSubmittedChoice(false);
    setScenarioHistory([]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#12151B]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] border-2 border-[#B8863B]/50 rounded-xs shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        {/* Archival Modal Header */}
        <div className="px-4 py-3 bg-[#F3ECE2] border-b border-[#B8863B]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="p-1 bg-[#A8422B] text-white rounded-xs shrink-0">
              <Scroll className="w-3.5 h-3.5" />
            </span>
            <div className="min-w-0">
              <span className="label-caps text-[#A8422B] text-[10px] block truncate">
                HISTORICAL JOURNEY ARCHIVE // {journey.state.toUpperCase()}
              </span>
              <h2 className="font-serif-display text-sm sm:text-base font-bold text-[#191B21] truncate">
                {journey.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {step === 'scenario' && (
              <span className="text-[11px] font-mono font-bold text-[#684300] bg-[#FAF7F2] px-2 py-0.5 border border-[#B8863B]/30 rounded-xs">
                SCENARIO {currentScenarioIndex + 1} OF {journey.scenarios.length}
              </span>
            )}
            <button
              onClick={onClose}
              title="Return to Cartography"
              className="p-1 text-[#8A726C] hover:text-[#A8422B] hover:bg-[#FAF7F2] rounded-xs transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Flow Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 subtle-scroll space-y-6">
          {/* ========================================================================= */}
          {/* 1. CHARACTER INTRODUCTION STEP */}
          {/* ========================================================================= */}
          {step === 'intro' && (
            <div className="space-y-6 animate-fade-in">
              {/* Character Banner Card */}
              <div className="p-4 sm:p-5 bg-[#F3ECE2] border border-[#B8863B]/40 rounded-xs flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-xs overflow-hidden border-2 border-[#B8863B] shadow-md bg-[#1A2744]">
                  <img
                    src={journey.character.portraitUrl}
                    alt={journey.character.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-1 left-1 right-1 text-center">
                    <span className="text-[9px] font-mono text-[#FAF7F2] uppercase tracking-wider bg-[#882B16]/80 px-1 py-0.5 rounded-xs">
                      {journey.character.reignYears}
                    </span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1.5">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="label-caps text-[#A8422B] text-[10px]">
                      HISTORICAL FIGURE PROFILE
                    </span>
                    <span className="text-xs text-[#8A726C] font-mono">•</span>
                    <span className="text-xs font-mono text-[#684300] font-bold">
                      {journey.dynasty}
                    </span>
                  </div>

                  <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21]">
                    {journey.character.name}
                  </h1>

                  {journey.character.nativeScript && (
                    <p className="font-serif-display text-base text-[#882B16] font-medium">
                      {journey.character.nativeScript}
                    </p>
                  )}

                  <p className="text-xs font-mono text-[#57423D] italic">
                    Regnal Title: {journey.character.regnalTitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[11px] font-mono bg-[#FAF7F2] border border-[#B8863B]/30 px-2 py-0.5 rounded-xs text-[#57423D]">
                      📍 {journey.character.region}
                    </span>
                    <span className="text-[11px] font-mono bg-[#FAF7F2] border border-[#B8863B]/30 px-2 py-0.5 rounded-xs text-[#57423D]">
                      ⏳ Lifespan: {journey.character.lifespan}
                    </span>
                  </div>
                </div>
              </div>

              {/* Historical Context & Imperative */}
              <div className="space-y-4">
                <div className="p-4 bg-[#FAF7F2] border-l-3 border-[#A8422B] shadow-xs">
                  <h3 className="label-caps text-[#A8422B] text-[10px] mb-1">
                    HISTORICAL CONTEXT & BIOGRAPHY
                  </h3>
                  <p className="text-sm text-[#191B21] leading-relaxed font-sans-ui">
                    {journey.character.biography}
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7F2] border-l-3 border-[#B8863B] shadow-xs">
                  <h3 className="label-caps text-[#684300] text-[10px] mb-1">
                    STRATEGIC IMPERATIVE
                  </h3>
                  <p className="text-sm text-[#191B21] leading-relaxed font-sans-ui">
                    {journey.character.historicalImperative}
                  </p>
                </div>

                {/* Clear Pedagogical Notice */}
                <div className="p-3 bg-[#EAF0FC] border border-[#1A2744]/20 rounded-xs flex items-start gap-2.5 text-xs text-[#1A2744]">
                  <Info className="w-4 h-4 text-[#1A2744] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold uppercase tracking-wider text-[10px] block">
                      ARCHIVAL PEDAGOGICAL METHODOLOGY
                    </span>
                    <p className="leading-relaxed text-[#2C3852]">
                      {journey.character.pedagogicalDisclaimer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Start Journey CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-[#B8863B]/20">
                <div className="text-xs text-[#8A726C] font-mono">
                  Total Scenarios: {journey.scenarios.length} • Completion XP: +{journey.totalXp}
                </div>
                <button
                  onClick={() => setStep('scenario')}
                  className="px-5 py-2.5 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Begin Historical Journey</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 2. SCENARIO & COUNTERFACTUAL EXPLORATION STEP */}
          {/* ========================================================================= */}
          {step === 'scenario' && (
            <div className="space-y-6 animate-fade-in">
              {/* Scenario Tracker Progress */}
              <div className="flex items-center justify-between pb-2 border-b border-[#B8863B]/20">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#A8422B] text-white font-mono text-[10px] font-bold rounded-xs">
                    {currentScenario.year}
                  </span>
                  <span className="label-caps text-[#882B16] text-[10px]">
                    STAGE {currentScenarioIndex + 1} OF {journey.scenarios.length}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {journey.scenarios.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`w-5 h-1.5 rounded-full transition-colors ${
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
              <div className="p-3 bg-[#1A2744] text-[#FAF7F2] rounded-xs border border-[#B8863B]/40 shadow-xs">
                <span className="label-mono-spatial text-[#FFD9A9] text-[10px] block mb-1">
                  HISTORICAL GOVERNANCE DILEMMA
                </span>
                <p className="text-sm font-serif-display font-medium leading-snug">
                  "{currentScenario.dilemmaPrompt}"
                </p>
              </div>

              {/* Choice Options List (2–4 Options) */}
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
                        className={`w-full text-left p-3.5 rounded-xs border transition-all cursor-pointer ${
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
              {/* HYPOTHETICAL CONSEQUENCE & WHAT ACTUALLY HAPPENED (ON CHOICE) */}
              {/* ========================================================================= */}
              {hasSubmittedChoice && selectedOption && (
                <div className="space-y-4 pt-3 border-t border-[#B8863B]/25 animate-fade-in">
                  {/* Part A: Hypothetical Consequence */}
                  <div className="p-4 bg-[#FAF2EB] border border-[#A8422B]/40 rounded-xs shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="label-caps text-[#882B16] text-[10px] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#A8422B]" />
                        HYPOTHETICAL OUTCOME (YOUR EXPLORATORY PATH)
                      </span>
                      <span className="text-[10px] font-mono text-[#8A726C] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#B8863B]/20 rounded-xs">
                        Counterfactual Model
                      </span>
                    </div>

                    <h4 className="font-serif-display text-base font-bold text-[#191B21]">
                      {selectedOption.hypotheticalOutcome.title}
                    </h4>

                    <p className="text-xs text-[#191B21] leading-relaxed font-sans-ui">
                      {selectedOption.hypotheticalOutcome.consequence}
                    </p>

                    <div className="p-2.5 bg-[#FAF7F2] border-l-2 border-[#A8422B] text-xs text-[#57423D]">
                      <span className="font-bold text-[#882B16] block text-[10px] uppercase tracking-wider mb-0.5">
                        Strategic Trade-off Analysis:
                      </span>
                      <p>{selectedOption.hypotheticalOutcome.strategicAnalysis}</p>
                    </div>
                  </div>

                  {/* Part B: What Actually Happened (Historical Reality) */}
                  <div className="p-4 bg-[#1A2744] text-[#FAF7F2] rounded-xs border-2 border-[#B8863B] shadow-md space-y-2.5">
                    <div className="flex items-center justify-between border-b border-white/15 pb-2">
                      <span className="label-mono-spatial text-[#FFD9A9] text-[10px] flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-[#FFD9A9]" />
                        WHAT ACTUALLY HAPPENED? (HISTORICAL REALITY)
                      </span>
                      <span className="text-[9px] font-mono text-[#FAF7F2] bg-[#A8422B] px-2 py-0.5 rounded-xs font-bold">
                        VERIFIED HISTORY
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-serif-display text-base font-bold text-[#FAF7F2]">
                        {currentScenario.historicalReality.actualDecision}
                      </h4>
                      <p className="text-xs text-[#D9D9E2] leading-relaxed">
                        {currentScenario.historicalReality.historicalOutcome}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-start gap-1.5 text-[11px] text-[#FFD9A9]/90 font-mono">
                      <Scroll className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#B8863B]" />
                      <div>
                        <span className="font-bold text-white">Epigraphical Provenance: </span>
                        <span>{currentScenario.historicalReality.inscriptionalSource}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advance to Next Scenario / Finish */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#8A726C] font-mono">
                      {isLastScenario
                        ? 'All scenarios completed'
                        : `Next: Scenario ${currentScenarioIndex + 2}`}
                    </span>
                    <button
                      onClick={handleNextScenario}
                      className="px-5 py-2.5 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] shadow-md flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>
                        {isLastScenario ? 'Complete Historical Journey' : 'Proceed to Next Scenario'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* 3. COMPLETION STEP: REWARDS & BADGE */}
          {/* ========================================================================= */}
          {step === 'completed' && (
            <div className="space-y-6 animate-fade-in py-2">
              {/* Celebration Hero Card */}
              <div className="p-6 bg-[#F3ECE2] border-2 border-[#B8863B] rounded-xs text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#A8422B] text-white flex items-center justify-center border-2 border-[#882B16] shadow-lg">
                  <Award className="w-8 h-8" />
                </div>

                <div>
                  <span className="label-caps text-[#A8422B] text-[10px]">
                    JOURNEY COMPLETE // ARCHIVE VALIDATED
                  </span>
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21] mt-1">
                    The Legacy of Rajaraja Chola I
                  </h2>
                  <p className="text-xs text-[#57423D] max-w-lg mx-auto mt-1">
                    You have navigated the engineering, naval, and administrative governance dilemmas of the 11th-century Chola Empire.
                  </p>
                </div>

                {/* XP & Rewards Bar */}
                <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#A8422B]" />
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-[#8A726C] block uppercase">
                        Expedition Reward
                      </span>
                      <span className="font-serif-display font-bold text-base text-[#A8422B]">
                        +{journey.totalXp} XP Awarded
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-2 bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#1A2744]" />
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

              {/* Awarded Archival Badge */}
              <div className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs flex flex-col sm:flex-row items-center gap-4">
                {/* Octagonal Archival Badge */}
                <div className="shrink-0 w-20 h-20 rounded-xs octagonal-seal bg-[#A8422B] border-2 border-[#882B16] text-[#FAF7F2] flex flex-col items-center justify-center p-2 shadow-md">
                  <Landmark className="w-6 h-6 text-[#FFD9A9]" />
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#FFD9A9] mt-1">
                    SEAL
                  </span>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="label-caps text-[#A8422B] text-[10px]">
                      NEW ARCHIVAL BADGE UNLOCKED
                    </span>
                    <span className="text-xs font-mono bg-[#FFD7CE]/50 text-[#882B16] px-1.5 py-0.5 rounded-xs font-bold">
                      OFFICIAL
                    </span>
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-[#191B21]">
                    {journey.awardedBadge.name}
                  </h3>
                  <p className="text-xs text-[#684300] font-mono">
                    {journey.awardedBadge.title}
                  </p>
                  <p className="text-xs text-[#57423D] leading-relaxed">
                    {journey.awardedBadge.description}
                  </p>
                </div>
              </div>

              {/* Historical Insights Recap */}
              <div className="p-4 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs space-y-2">
                <span className="label-caps text-[#684300] text-[10px]">
                  KEY HISTORICAL TAKEAWAYS FROM THIS JOURNEY
                </span>
                <ul className="space-y-1.5 text-xs text-[#191B21]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A8422B] font-mono font-bold">•</span>
                    <span>
                      <strong>The Sarapallam Earthwork:</strong> The 80-tonne granite capstone was elevated using a 6.4 km inclined earthen ramp, verified by local geography today.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A8422B] font-mono font-bold">•</span>
                    <span>
                      <strong>Navalthalassocracy:</strong> Chola blue-water armada guarded merchant guilds and established maritime influence across the Indian Ocean.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A8422B] font-mono font-bold">•</span>
                    <span>
                      <strong>Stone Transparency:</strong> Rajaraja transformed Brihadisvara Temple into an open-access public audit archive, engraving budgets, taxes, and personnel records onto its granite foundation.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Actions Footer */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#B8863B]/20">
                <button
                  onClick={handleRestartJourney}
                  className="w-full sm:w-auto px-4 py-2 border border-[#B8863B]/40 text-[#684300] hover:bg-[#F3ECE2] text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Review Journey Again</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#A8422B] hover:bg-[#C25438] text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-[#882B16] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Return to Cartography</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
