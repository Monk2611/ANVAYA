import React, { useState, useMemo, useEffect } from 'react';
import {
  RESEARCH_DOSSIERS,
  DOSSIER_EVIDENCE_TYPES,
} from '../../data/dossierData';
import { FieldDossier, DossierEvidenceType } from '../../types';
import {
  ScrollText,
  Bookmark,
  Clock,
  Tag,
  Compass,
  FileText,
  Search,
  BookOpen,
  MapPin,
  Calendar,
  ExternalLink,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  X,
} from 'lucide-react';
import { CoordinateChip } from '../common/CoordinateChip';

interface DossiersScreenProps {
  onSelectLandmark?: (landmarkId: string) => void;
}

export const DossiersScreen: React.FC<DossiersScreenProps> = ({
  onSelectLandmark,
}) => {
  const [selectedType, setSelectedType] = useState<'all' | DossierEvidenceType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDossierId, setActiveDossierId] = useState<string>(RESEARCH_DOSSIERS[0].id);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anvaya_bookmarked_dossiers');
      return saved ? JSON.parse(saved) : ['dos-thanjavur-epigraph'];
    } catch {
      return ['dos-thanjavur-epigraph'];
    }
  });
  const [isMobileReaderOpen, setIsMobileReaderOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('anvaya_bookmarked_dossiers', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredDossiers = useMemo(() => {
    return RESEARCH_DOSSIERS.filter((dossier) => {
      const matchesType =
        selectedType === 'all' || dossier.evidenceType === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        dossier.title.toLowerCase().includes(q) ||
        dossier.accessionId.toLowerCase().includes(q) ||
        (dossier.associatedSite && dossier.associatedSite.toLowerCase().includes(q)) ||
        (dossier.associatedRegion && dossier.associatedRegion.toLowerCase().includes(q)) ||
        dossier.tags.some((t) => t.toLowerCase().includes(q)) ||
        dossier.excerpt.toLowerCase().includes(q);

      return matchesType && matchesQuery;
    });
  }, [selectedType, searchQuery]);

  const activeDossier: FieldDossier =
    RESEARCH_DOSSIERS.find((d) => d.id === activeDossierId) || RESEARCH_DOSSIERS[0];

  const handleSelectDossier = (dossier: FieldDossier) => {
    setActiveDossierId(dossier.id);
    setIsMobileReaderOpen(true);
  };

  const getEvidenceTypeBadge = (type?: DossierEvidenceType) => {
    switch (type) {
      case 'inscription':
        return { label: 'EPIGRAPHICAL INSCRIPTION', bg: 'bg-[#FFD7CE]/40 text-[#882B16] border-[#A8422B]/30' };
      case 'archaeological-finding':
        return { label: 'ARCHAEOLOGICAL FINDING', bg: 'bg-[#CDD9FF]/40 text-[#1A2744] border-[#1A2744]/25' };
      case 'historical-document':
        return { label: 'HISTORICAL DOCUMENT', bg: 'bg-[#FFD9A9]/40 text-[#684300] border-[#B8863B]/30' };
      case 'oral-history':
        return { label: 'ORAL-HISTORY RECORD', bg: 'bg-[#E3DCFF]/40 text-[#4D2B88] border-[#7048A8]/30' };
      case 'curatorial-field-note':
        return { label: 'CURATORIAL FIELD NOTE', bg: 'bg-[#D3F3E8]/40 text-[#13614B] border-[#1B8064]/30' };
      default:
        return { label: 'RESEARCH MONOGRAPH', bg: 'bg-[#F3ECE2] text-[#57423D] border-[#B8863B]/30' };
    }
  };

  return (
    <div className="w-full pb-28 lg:pb-12 min-h-screen bg-[#FAF7F2] p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto font-sans-ui">
      {/* Dossiers Header */}
      <div className="mb-6 border-b border-[#B8863B]/25 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1 font-bold">
              <ScrollText className="w-3.5 h-3.5 text-[#B8863B]" /> SCHOLARLY ARCHIVE
            </span>
            <span className="text-[#8A726C] text-xs font-mono">// WHAT IS THE DEEPER EVIDENCE?</span>
          </div>
          <span className="label-mono-spatial text-[10px] text-[#1A2744] bg-[#CDD9FF]/40 px-2 py-0.5 border border-[#1A2744]/20 rounded-xs">
            DIGITAL RESEARCH REPOSITORY
          </span>
        </div>

        <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21] mt-2">
          Curatorial Field Research Logs & Inscriptions
        </h2>
        <p className="text-xs sm:text-sm text-[#57423D] mt-1 max-w-3xl leading-relaxed">
          Primary historical documents, stone-chiselled royal epigraphs, archaeo-metallurgy spectroscopy reports, living oral sthapati guild slokas, and peer-reviewed excavation surveys.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-6 space-y-3">
        {/* Search Input */}
        <div className="relative max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A726C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search inscriptions, accession codes, epigraphists, or sites..."
            className="w-full pl-9 pr-4 py-2 bg-[#FAF7F2] border border-[#B8863B]/40 focus:border-[#A8422B] focus:ring-1 focus:ring-[#A8422B] text-xs text-[#191B21] placeholder-[#8A726C] rounded-xs font-sans-ui transition-colors outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A726C] hover:text-[#191B21]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Evidence Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
          {DOSSIER_EVIDENCE_TYPES.map((cat) => {
            const isSelected = selectedType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`px-3 py-1.5 rounded-xs border text-[11px] font-semibold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#1A2744] text-[#FAF7F2] border-[#1A2744] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#B8863B] hover:bg-[#F3ECE2]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Archival Workbench: Left Catalog, Right Research Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Research Catalog Index (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-1 border-b border-[#B8863B]/20 text-[11px] font-mono text-[#8A726C]">
            <span>INDEXED ARCHIVES ({filteredDossiers.length})</span>
            <span>BOOKMARKED ({bookmarkedIds.length})</span>
          </div>

          {filteredDossiers.length === 0 ? (
            <div className="p-8 text-center bg-[#F3ECE2]/40 border border-[#B8863B]/30 rounded-xs">
              <p className="font-serif-display text-sm text-[#57423D]">
                No archival records match your filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSearchQuery('');
                }}
                className="mt-2 text-xs text-[#A8422B] font-semibold underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredDossiers.map((dossier) => {
              const isSaved = bookmarkedIds.includes(dossier.id);
              const isSelected = activeDossier.id === dossier.id;
              const badge = getEvidenceTypeBadge(dossier.evidenceType);

              return (
                <div
                  key={dossier.id}
                  onClick={() => handleSelectDossier(dossier)}
                  className={`p-4 rounded-xs border transition-all cursor-pointer relative group ${
                    isSelected
                      ? 'bg-[#F3ECE2] border-[#A8422B] shadow-sm ring-1 ring-[#A8422B]/30'
                      : 'bg-[#FAF7F2] border-[#B8863B]/30 hover:bg-[#F3ECE2]/60 hover:border-[#B8863B]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="label-mono-spatial text-[#A8422B] text-[9.5px] font-bold">
                      {dossier.accessionId}
                    </span>
                    <button
                      onClick={(e) => toggleBookmark(dossier.id, e)}
                      className={`p-1 rounded transition-colors ${
                        isSaved
                          ? 'text-[#A8422B]'
                          : 'text-[#8A726C] hover:text-[#191B21]'
                      }`}
                      title={isSaved ? 'Bookmarked' : 'Add to research bookmarks'}
                    >
                      <Bookmark
                        className="w-3.5 h-3.5"
                        fill={isSaved ? '#A8422B' : 'none'}
                      />
                    </button>
                  </div>

                  <span className={`inline-block px-2 py-0.5 rounded-xs text-[9px] font-mono font-semibold border mb-1.5 ${badge.bg}`}>
                    {badge.label}
                  </span>

                  <h3 className="font-serif-display font-bold text-sm sm:text-base text-[#191B21] leading-snug group-hover:text-[#882B16] transition-colors">
                    {dossier.title}
                  </h3>

                  <div className="text-[11px] text-[#684300] font-mono mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B8863B]" />
                    {dossier.associatedSite || dossier.associatedRegion}
                  </div>

                  <p className="text-xs text-[#57423D] mt-2 line-clamp-2 leading-relaxed">
                    {dossier.excerpt}
                  </p>

                  <div className="mt-3 pt-2 border-t border-[#B8863B]/20 flex items-center justify-between text-[10px] font-mono text-[#8A726C]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {dossier.readTime}
                    </span>
                    <span className="text-[#A8422B] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Open Monograph →
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Deep Archival Dossier Reader (lg:col-span-7) */}
        <div className="hidden lg:block lg:col-span-7 sticky top-20">
          <DossierReaderContent
            dossier={activeDossier}
            isBookmarked={bookmarkedIds.includes(activeDossier.id)}
            onToggleBookmark={(e) => toggleBookmark(activeDossier.id, e)}
            onSelectLandmark={onSelectLandmark}
            badge={getEvidenceTypeBadge(activeDossier.evidenceType)}
          />
        </div>
      </div>

      {/* Mobile Modal Reader */}
      {isMobileReaderOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#191B21]/70 backdrop-blur-xs flex flex-col justify-end p-2 sm:p-4">
          <div className="bg-[#FAF7F2] rounded-t-sm border border-[#B8863B]/40 max-h-[88vh] overflow-y-auto p-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#B8863B]/25 mb-4 sticky top-0 bg-[#FAF7F2] z-10">
              <span className="label-mono-spatial text-[10px] text-[#A8422B] font-bold">
                {activeDossier.accessionId}
              </span>
              <button
                onClick={() => setIsMobileReaderOpen(false)}
                className="p-1 rounded bg-[#F3ECE2] border border-[#B8863B]/30 text-[#191B21]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <DossierReaderContent
              dossier={activeDossier}
              isBookmarked={bookmarkedIds.includes(activeDossier.id)}
              onToggleBookmark={(e) => toggleBookmark(activeDossier.id, e)}
              onSelectLandmark={(id) => {
                setIsMobileReaderOpen(false);
                if (onSelectLandmark) onSelectLandmark(id);
              }}
              badge={getEvidenceTypeBadge(activeDossier.evidenceType)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface DossierReaderContentProps {
  dossier: FieldDossier;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent) => void;
  onSelectLandmark?: (landmarkId: string) => void;
  badge: { label: string; bg: string };
}

const DossierReaderContent: React.FC<DossierReaderContentProps> = ({
  dossier,
  isBookmarked,
  onToggleBookmark,
  onSelectLandmark,
  badge,
}) => {
  return (
    <div className="bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs p-5 sm:p-6 shadow-xs space-y-6">
      {/* Top Meta Bar */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded-xs text-[9.5px] font-mono font-bold border ${badge.bg}`}>
            {badge.label}
          </span>
          <div className="flex items-center gap-2">
            <CoordinateChip coordinates={dossier.coordinates} />
            <button
              onClick={onToggleBookmark}
              className={`p-1.5 rounded border transition-colors ${
                isBookmarked
                  ? 'border-[#A8422B] bg-[#FFD7CE]/30 text-[#A8422B]'
                  : 'border-[#B8863B]/30 bg-[#FAF7F2] text-[#8A726C] hover:text-[#191B21]'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Add to research bookmarks'}
            >
              <Bookmark className="w-4 h-4" fill={isBookmarked ? '#A8422B' : 'none'} />
            </button>
          </div>
        </div>

        <span className="label-mono-spatial text-[#8A726C] text-[10px] block">
          ACCESSION: {dossier.accessionId}
        </span>
        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#191B21] mt-1 leading-snug">
          {dossier.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#57423D] mt-2 leading-relaxed font-sans-ui">
          {dossier.excerpt}
        </p>
      </div>

      {/* Provenance & Epigraphical Spec Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#F3ECE2]/70 border border-[#B8863B]/30 rounded-xs text-xs">
        <div>
          <span className="text-[10px] font-mono text-[#8A726C] uppercase block">
            Associated Monument / Site
          </span>
          <span className="font-medium text-[#191B21]">
            {dossier.associatedSite || 'Subcontinental Region'}
          </span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#8A726C] uppercase block">
            Historical Epoch / Dynasty
          </span>
          <span className="font-medium text-[#684300]">
            {dossier.associatedEra || 'Classical Antiquity'}
          </span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#8A726C] uppercase block">
            Physical Medium & Script
          </span>
          <span className="font-medium text-[#191B21]">
            {dossier.physicalMedium || 'Epigraphical Inscription'}
          </span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#8A726C] uppercase block">
            Discovery Survey / Provenance
          </span>
          <span className="font-medium text-[#191B21]">
            {dossier.discoveryDate || 'Archaeological Survey of India'}
          </span>
        </div>
      </div>

      {/* Primary Archival Excerpt / Decipherment */}
      {dossier.transcriptionOrExcerpt && (
        <div className="p-4 bg-[#FAF2EB] border border-[#A8422B]/30 rounded-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="label-caps text-[#A8422B] text-[10px] font-bold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#B8863B]" />
              PRIMARY TRANSCRIPTION & DECIPHERMENT
            </span>
            {dossier.transcriptionLanguage && (
              <span className="text-[10px] font-mono text-[#8A726C]">
                {dossier.transcriptionLanguage}
              </span>
            )}
          </div>

          <div className="p-3 bg-[#FAF7F2] border-l-2 border-[#A8422B] rounded-r-xs font-serif italic text-xs text-[#191B21] leading-relaxed">
            {dossier.transcriptionOrExcerpt}
          </div>

          {dossier.englishTranslation && (
            <div>
              <span className="text-[10px] font-mono text-[#684300] uppercase block mb-1">
                Scholarly English Translation:
              </span>
              <p className="text-xs text-[#57423D] leading-relaxed">
                {dossier.englishTranslation}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Epigraphical & Curatorial Significance */}
      {dossier.epigraphicalSignificance && (
        <div className="space-y-1.5">
          <span className="label-caps text-[#1A2744] text-[10px] font-bold block">
            CURATORIAL & HISTORICAL SIGNIFICANCE
          </span>
          <p className="text-xs sm:text-sm text-[#57423D] leading-relaxed">
            {dossier.epigraphicalSignificance}
          </p>
        </div>
      )}

      {/* Scientific Research Methodology */}
      {dossier.researchMethodology && (
        <div className="p-3 bg-[#F3ECE2]/50 border border-[#B8863B]/25 rounded-xs space-y-1">
          <span className="label-caps text-[#684300] text-[9.5px] font-bold block">
            RESEARCH METHODOLOGY & INVESTIGATION TOOLS
          </span>
          <p className="text-xs text-[#191B21]">
            {dossier.researchMethodology}
          </p>
        </div>
      )}

      {/* Scholarly Sources & Citations */}
      {dossier.scholarlySources && dossier.scholarlySources.length > 0 && (
        <div className="pt-4 border-t border-[#B8863B]/25 space-y-2">
          <span className="label-caps text-[#A8422B] text-[10px] font-bold block">
            PRIMARY SCHOLARLY SOURCES & REFERENCES ({dossier.scholarlySources.length})
          </span>
          <div className="space-y-2">
            {dossier.scholarlySources.map((source, sIdx) => (
              <div
                key={sIdx}
                className="p-2.5 bg-[#FAF7F2] border border-[#B8863B]/20 rounded-xs text-xs space-y-0.5"
              >
                <div className="font-serif-display font-semibold text-[#191B21]">
                  {source.citation}
                </div>
                <div className="text-[11px] text-[#57423D] font-mono">
                  {source.authorOrPublication} ({source.year})
                  {source.archiveReference && ` • ${source.archiveReference}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags & Actions */}
      <div className="pt-3 border-t border-[#B8863B]/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Tag className="w-3.5 h-3.5 text-[#B8863B]" />
          {dossier.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-[#F3ECE2] border border-[#B8863B]/25 rounded text-[10px] font-mono text-[#57423D]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {dossier.landmarkId && onSelectLandmark && (
          <button
            onClick={() => onSelectLandmark(dossier.landmarkId!)}
            className="px-3 py-1.5 bg-[#A8422B] hover:bg-[#882B16] text-[#FAF7F2] font-serif-display font-bold text-xs rounded-xs flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Locate Monument on Cartography</span>
          </button>
        )}
      </div>
    </div>
  );
};
