import React, { useState, useRef, useMemo } from 'react';
import IndiaMapData from '@svg-maps/india';
import { HeritageLandmark, HistoricalJourney } from '../../types';
import { hasHistoricalJourney, getJourneyByLandmarkId } from '../../data/historicalJourneys';
import { Scroll, Sparkles, ZoomIn, ZoomOut, RotateCcw, Compass, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Exact SVG viewBox coordinates (0 0 612 696) for each heritage monument in India
export const LANDMARK_SVG_COORDINATES: Record<string, { x: number; y: number; stateId: string }> = {
  'brihadisvara-thanjavur': { x: 215, y: 590, stateId: 'tn' }, // Thanjavur, Kaveri Delta, Tamil Nadu
  'hampi-vijayanagara': { x: 178, y: 495, stateId: 'ka' },     // Hampi / Bellary, Karnataka
  'kailasa-ellora': { x: 165, y: 405, stateId: 'mh' },         // Ellora / Aurangabad, Maharashtra
  'sanchi-stupa': { x: 228, y: 310, stateId: 'mp' },           // Sanchi / Vidisha, Madhya Pradesh
  'nalanda-mahavihara': { x: 350, y: 270, stateId: 'br' },     // Nalanda / Magadha, Bihar
  'konark-sun-temple': { x: 360, y: 390, stateId: 'or' },      // Konark, Puri coast, Odisha
};

interface IndiaMapCanvasProps {
  landmarks: HeritageLandmark[];
  selectedLandmark: HeritageLandmark | null;
  onSelectLandmark: (landmark: HeritageLandmark) => void;
  onStartJourney?: (journey: HistoricalJourney) => void;
  onUnavailableJourney?: (landmark: HeritageLandmark) => void;
}

export const IndiaMapCanvas: React.FC<IndiaMapCanvasProps> = ({
  landmarks,
  selectedLandmark,
  onSelectLandmark,
  onStartJourney,
  onUnavailableJourney,
}) => {
  const { language, t, getLandmarkTranslation } = useLanguage();

  // Generous default zoom level (1.22) so the map fills the empty space around the canvas
  const DEFAULT_ZOOM = 1.22;
  const [zoomLevel, setZoomLevel] = useState<number>(DEFAULT_ZOOM);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active state ID containing selected landmark
  const activeStateId = useMemo(() => {
    if (!selectedLandmark) return null;
    return LANDMARK_SVG_COORDINATES[selectedLandmark.id]?.stateId || null;
  }, [selectedLandmark]);

  // Handle zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(Number((prev + 0.25).toFixed(2)), 3.0));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(Number((prev - 0.25).toFixed(2)), 0.75));
  const handleResetView = () => {
    setZoomLevel(DEFAULT_ZOOM);
    setPanOffset({ x: 0, y: 0 });
  };
  const handleFitScreen = () => {
    setZoomLevel(1.35);
    setPanOffset({ x: 0, y: 0 });
  };

  // Wheel zoom handler
  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    setZoomLevel((prev) => Math.min(Math.max(Number((prev + delta).toFixed(2)), 0.75), 3.0));
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag if not clicking a landmark button
    if ((e.target as HTMLElement).closest('.landmark-pin')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch pan handlers for mobile screens
  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.landmark-pin')) return;
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPanOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const selectedLandmarkTranslation = selectedLandmark ? getLandmarkTranslation(selectedLandmark.id) : null;

  return (
    <div
      ref={containerRef}
      id="india-map-canvas-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      className="relative flex-1 w-full h-full bg-[#FAF7F2] overflow-hidden select-none cursor-grab active:cursor-grabbing pb-16 lg:pb-2"
    >
      {/* Archival Parchment Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(243,236,226,0.6) 100%),
            linear-gradient(to right, rgba(184, 134, 59, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 134, 59, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 32px 32px, 32px 32px',
        }}
      />

      {/* Cartographic Compass Rose & Coordinates Header */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 pointer-events-none">
        <div className="bg-[#FAF7F2]/95 border border-[#B8863B]/40 px-2.5 py-1 rounded-xs shadow-xs backdrop-blur-xs flex items-center gap-2 text-[#1A2744]">
          <Compass className="w-3.5 h-3.5 text-[#A8422B] animate-spin-slow" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#882B16]">
            {t('survey_title')}
          </span>
          <span className="text-[9px] font-mono text-[#8A726C] hidden sm:inline">
            {t('survey_coords')}
          </span>
        </div>
      </div>

      {/* Map Interactive Zoom & Pan Controls */}
      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1 bg-[#FAF7F2]/95 p-1 rounded-xs border border-[#B8863B]/40 shadow-xs backdrop-blur-xs">
        <button
          onClick={handleZoomIn}
          className="p-1.5 hover:bg-[#F3ECE2] text-[#684300] hover:text-[#A8422B] rounded-xs transition-colors cursor-pointer"
          title={t('zoom_in')}
          aria-label={t('zoom_in')}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-1.5 hover:bg-[#F3ECE2] text-[#684300] hover:text-[#A8422B] rounded-xs transition-colors cursor-pointer"
          title={t('zoom_out')}
          aria-label={t('zoom_out')}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetView}
          className="p-1.5 hover:bg-[#F3ECE2] text-[#684300] hover:text-[#A8422B] rounded-xs transition-colors cursor-pointer border-t border-[#B8863B]/20"
          title={t('reset_view')}
          aria-label={t('reset_view')}
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleFitScreen}
          className="p-1.5 hover:bg-[#F3ECE2] text-[#684300] hover:text-[#A8422B] rounded-xs transition-colors cursor-pointer border-t border-[#B8863B]/20"
          title={t('fit_map')}
          aria-label={t('fit_map')}
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* State Hover Badge (Bottom Left) */}
      {hoveredState && (
        <div className="absolute bottom-20 left-4 z-20 pointer-events-none">
          <div className="px-2.5 py-1 bg-[#1A2744]/90 text-[#FFD9A9] text-[10px] font-mono tracking-wider uppercase border border-[#B8863B]/60 rounded-xs shadow-md backdrop-blur-xs">
            {t('territory_prefix')} {hoveredState}
          </div>
        </div>
      )}

      {/* The Central Vector Map of India (Expanded to generously fill empty space) */}
      <div
        className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
          transformOrigin: 'center center',
        }}
      >
        <svg
          viewBox="0 0 612 696"
          className="w-full h-full max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1450px] max-h-[92vh] lg:max-h-[95vh] drop-shadow-sm select-none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Parchment gradient for landmass */}
            <linearGradient id="landmassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F4EC" />
              <stop offset="50%" stopColor="#F4ECE1" />
              <stop offset="100%" stopColor="#EDE3D5" />
            </linearGradient>

            {/* Active state highlight gradient */}
            <linearGradient id="activeStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBEBDC" />
              <stop offset="100%" stopColor="#F5D8BF" />
            </linearGradient>

            {/* Hover state highlight gradient */}
            <linearGradient id="hoverStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDF7EE" />
              <stop offset="100%" stopColor="#F7EEDB" />
            </linearGradient>

            {/* Drop shadow for subcontinent */}
            <filter id="subcontinentShadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#8A726C" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Oceanic Surrounds / Ancient Maritime Names */}
          <g id="ocean-elements" className="pointer-events-none">
            {/* Arabian Sea */}
            <text
              x="55"
              y="490"
              fill="#8A726C"
              fillOpacity="0.45"
              fontFamily="Cinzel, serif"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="3"
            >
              {t('arabian_sea')}
            </text>
            <text
              x="62"
              y="505"
              fill="#B8863B"
              fillOpacity="0.5"
              fontFamily="monospace"
              fontSize="8"
              letterSpacing="2"
            >
              {t('sindhu_sagara')}
            </text>

            {/* Bay of Bengal */}
            <text
              x="425"
              y="470"
              fill="#8A726C"
              fillOpacity="0.45"
              fontFamily="Cinzel, serif"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="3"
            >
              {t('bay_of_bengal')}
            </text>
            <text
              x="435"
              y="485"
              fill="#B8863B"
              fillOpacity="0.5"
              fontFamily="monospace"
              fontSize="8"
              letterSpacing="2"
            >
              {t('purva_samudra')}
            </text>

            {/* Indian Ocean */}
            <text
              x="200"
              y="680"
              fill="#8A726C"
              fillOpacity="0.4"
              fontFamily="Cinzel, serif"
              fontSize="11"
              fontWeight="bold"
              letterSpacing="4"
            >
              {t('indian_ocean')}
            </text>

            {/* Region labels on subcontinent */}
            <text
              x="240"
              y="220"
              fill="#B8863B"
              fillOpacity="0.45"
              fontFamily="monospace"
              fontSize="9"
              letterSpacing="3"
              fontWeight="bold"
            >
              {t('aryavarta')}
            </text>
            <text
              x="180"
              y="380"
              fill="#B8863B"
              fillOpacity="0.45"
              fontFamily="monospace"
              fontSize="9"
              letterSpacing="3"
              fontWeight="bold"
            >
              {t('dakshinapatha')}
            </text>
            <text
              x="185"
              y="565"
              fill="#A8422B"
              fillOpacity="0.5"
              fontFamily="monospace"
              fontSize="8.5"
              letterSpacing="2"
              fontWeight="bold"
            >
              {t('kaveri_mandala')}
            </text>
          </g>

          {/* Historical Sacred Rivers */}
          <g id="historical-rivers" className="pointer-events-none" fill="none" stroke="#7A93A6" strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round">
            {/* Ganga River: from Himalayas through UP, Bihar into Bengal */}
            <path d="M 215,155 Q 235,190 270,240 T 310,270 T 350,265 T 395,310 T 405,345" strokeDasharray="3 2" />
            {/* Yamuna River */}
            <path d="M 200,150 Q 192,195 205,235 T 285,270" strokeDasharray="2 2" />
            {/* Narmada River: from Central MP westward */}
            <path d="M 280,335 Q 220,345 150,355 T 95,375" strokeDasharray="3 2" />
            {/* Godavari River */}
            <path d="M 125,415 Q 180,430 230,450 T 285,475" strokeDasharray="3 2" />
            {/* Krishna & Tungabhadra River: passing near Hampi */}
            <path d="M 130,470 Q 165,490 200,490 T 265,505" strokeDasharray="3 2" />
            <path d="M 155,515 Q 178,495 200,490" strokeDasharray="2 2" />
            {/* Kaveri River: passing Thanjavur into Bay of Bengal */}
            <path d="M 150,560 Q 175,570 200,580 T 215,590 T 240,592" strokeDasharray="3 2" stroke="#688499" strokeWidth="1.2" />
          </g>

          {/* Subcontinent Landmass: All 36 States & Union Territories */}
          <g id="india-states" filter="url(#subcontinentShadow)">
            {IndiaMapData.locations.map((loc) => {
              const isActive = activeStateId === loc.id;
              const isHovered = hoveredState === loc.name;

              return (
                <path
                  key={loc.id}
                  id={`state-${loc.id}`}
                  d={loc.path}
                  fill={
                    isActive
                      ? 'url(#activeStateGradient)'
                      : isHovered
                      ? 'url(#hoverStateGradient)'
                      : 'url(#landmassGradient)'
                  }
                  stroke={isActive ? '#A8422B' : isHovered ? '#B8863B' : '#C7B195'}
                  strokeWidth={isActive ? 1.5 : isHovered ? 1.2 : 0.75}
                  className="transition-colors duration-150 cursor-pointer"
                  onMouseEnter={() => setHoveredState(loc.name)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <title>{loc.name}</title>
                </path>
              );
            })}
          </g>

          {/* Interactive Monument Markers directly anchored on India's Map */}
          <g id="landmark-pins">
            {[...landmarks]
              .sort((a, b) => {
                if (a.id === selectedLandmark?.id) return 1;
                if (b.id === selectedLandmark?.id) return -1;
                return 0;
              })
              .map((landmark) => {
                const coords = LANDMARK_SVG_COORDINATES[landmark.id] || {
                  x: (landmark.mapPosition.x / 100) * 612,
                  y: (landmark.mapPosition.y / 100) * 696,
                };

                const isSelected = selectedLandmark?.id === landmark.id;
                const hasJourney = hasHistoricalJourney(landmark.id);
                const journey = getJourneyByLandmarkId(landmark.id);
                const lTrans = getLandmarkTranslation(landmark.id);
                const displayName = lTrans ? lTrans.shortName : landmark.name.split(' ')[0];
                const tagBoxWidth = Math.max(displayName.length * (language === 'hi' ? 12 : 8.5) + 20, 52);

                return (
                  <g
                    key={landmark.id}
                    transform={`translate(${coords.x}, ${coords.y})`}
                    className="landmark-pin cursor-pointer group"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLandmark(landmark);
                    }}
                  >
                    {/* Selected Ripple Pulse */}
                    {isSelected && (
                      <>
                        <circle
                          r="18"
                          fill="none"
                          stroke="#A8422B"
                          strokeWidth="1.5"
                          strokeOpacity="0.5"
                          className="animate-ping"
                        />
                        <circle
                          r="24"
                          fill="none"
                          stroke="#B8863B"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                        />
                      </>
                    )}

                    {/* Pin Base Shadow */}
                    <ellipse cx="0" cy="2" rx="6" ry="2.5" fill="#191B21" opacity="0.2" />

                    {/* Pin Dot */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 6.5 : 4.5}
                      fill={isSelected ? '#A8422B' : '#882B16'}
                      stroke={isSelected ? '#FFD9A9' : '#FFFFFF'}
                      strokeWidth={isSelected ? 2 : 1.5}
                      className="transition-all duration-200"
                    />

                    {/* Location Name Tag Box (Clean and centered) */}
                    <g transform="translate(0, 8)">
                      {/* Background Tag Box */}
                      <rect
                        x={-(tagBoxWidth / 2)}
                        y="4"
                        width={tagBoxWidth}
                        height="19"
                        rx="3"
                        fill={isSelected ? '#A8422B' : '#FAF7F2'}
                        stroke={isSelected ? '#882B16' : '#B8863B'}
                        strokeWidth={isSelected ? 1.5 : 1}
                        filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.15))"
                      />

                      {/* Landmark Name */}
                      <text
                        x="0"
                        y="17"
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : '#191B21'}
                        fontFamily={language === 'hi' ? '"Anek Devanagari", sans-serif' : 'Cinzel, serif'}
                        fontSize={language === 'hi' ? '10' : '9.5'}
                        fontWeight="bold"
                      >
                        {displayName}
                      </text>
                    </g>

                    {/* Dedicated Expedition / Journey Archives Button:
                        Appears strictly for the clicked/selected dynasty (one button at a time),
                        positioned cleanly just below their name. */}
                    {isSelected && (
                      <g
                        transform="translate(0, 32)"
                        className="cursor-pointer group/journeybtn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (hasJourney && journey) {
                            if (onStartJourney) {
                              onStartJourney(journey);
                            }
                          } else {
                            if (onUnavailableJourney) {
                              onUnavailableJourney(landmark);
                            }
                          }
                        }}
                      >
                        {hasJourney && journey ? (
                          <>
                            <title>Click to open Historical Journey Archives for {landmark.name}</title>
                            {/* Button pill background for active journey */}
                            <rect
                              x={language === 'hi' ? -72 : -66}
                              y="0"
                              width={language === 'hi' ? 144 : 132}
                              height="20"
                              rx="3"
                              fill="#1A2744"
                              stroke="#B8863B"
                              strokeWidth="1.2"
                              filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.25))"
                              className="transition-colors group-hover/journeybtn:fill-[#882B16] group-hover/journeybtn:stroke-[#FFD9A9]"
                            />

                            {/* Small amber indicator dot */}
                            <circle cx={language === 'hi' ? -59 : -53} cy="10" r="2.5" fill="#FFD9A9" />

                            {/* Button Text */}
                            <text
                              x={language === 'hi' ? -50 : -44}
                              y="14"
                              fill="#FFD9A9"
                              fontFamily={language === 'hi' ? '"Anek Devanagari", sans-serif' : 'monospace'}
                              fontSize={language === 'hi' ? '9' : '8'}
                              fontWeight="bold"
                              letterSpacing={language === 'hi' ? '0.2' : '0.8'}
                            >
                              {t('journey_archives_btn')}
                            </text>
                          </>
                        ) : (
                          <>
                            <title>Historical Journey Archive for {landmark.dynasty} will be added soon</title>
                            {/* Button pill background for coming soon journey */}
                            <rect
                              x={language === 'hi' ? -75 : -80}
                              y="0"
                              width={language === 'hi' ? 150 : 160}
                              height="20"
                              rx="3"
                              fill="#FAF4EB"
                              stroke="#B8863B"
                              strokeWidth="1"
                              strokeDasharray="3 2"
                              filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.15))"
                              className="transition-colors group-hover/journeybtn:fill-[#FAF7F2] group-hover/journeybtn:stroke-[#A8422B]"
                            />

                            {/* Subtle terracotta indicator dot */}
                            <circle cx={language === 'hi' ? -62 : -67} cy="10" r="2" fill="#882B16" />

                            {/* Button Text */}
                            <text
                              x={language === 'hi' ? -54 : -58}
                              y="14"
                              fill="#882B16"
                              fontFamily={language === 'hi' ? '"Anek Devanagari", sans-serif' : 'monospace'}
                              fontSize={language === 'hi' ? '8.5' : '7.5'}
                              fontWeight="bold"
                              letterSpacing={language === 'hi' ? '0.2' : '0.5'}
                            >
                              {t('archive_soon_btn')}
                            </text>
                          </>
                        )}
                      </g>
                    )}
                  </g>
                );
              })}
          </g>
        </svg>
      </div>

      {/* Active Landmark Focus Card (Bottom-Left Float) */}
      {selectedLandmark && (
        <div className="absolute bottom-4 left-4 z-20 hidden md:flex items-center gap-3 bg-[#FAF7F2]/95 border border-[#B8863B]/40 px-3.5 py-2 rounded-xs shadow-md backdrop-blur-xs max-w-sm">
          <div className="w-9 h-9 rounded-xs overflow-hidden shrink-0 border border-[#B8863B]/50">
            <img
              src={selectedLandmark.imageUrl}
              alt={selectedLandmarkTranslation?.name || selectedLandmark.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] font-mono text-[#A8422B] uppercase tracking-wider font-bold">
              {selectedLandmarkTranslation?.dynasty || selectedLandmark.dynasty}
            </span>
            <span className="font-serif-display text-xs font-semibold text-[#191B21] truncate">
              {selectedLandmarkTranslation?.name || selectedLandmark.name}
            </span>
            <span className="text-[10px] font-sans-ui text-[#8A726C] truncate">
              {selectedLandmarkTranslation?.region || selectedLandmark.region}
            </span>
          </div>
          {hasHistoricalJourney(selectedLandmark.id) && onStartJourney ? (
            <button
              onClick={() => {
                const j = getJourneyByLandmarkId(selectedLandmark.id);
                if (j && onStartJourney) onStartJourney(j);
              }}
              className="ml-auto shrink-0 px-2.5 py-1 bg-[#A8422B] text-white text-[9.5px] font-mono font-bold tracking-wider uppercase rounded-xs hover:bg-[#C25438] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Scroll className="w-3 h-3 text-[#FFD9A9]" />
              <span>{t('journey_archives_short')}</span>
            </button>
          ) : (
            <button
              onClick={() => onUnavailableJourney && onUnavailableJourney(selectedLandmark)}
              className="ml-auto shrink-0 px-2 py-1 bg-[#F3ECE2] text-[#882B16] border border-[#B8863B]/40 text-[9px] font-mono font-bold tracking-wider uppercase rounded-xs hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <span>{t('archive_soon_short')}</span>
            </button>
          )}
        </div>
      )}

      {/* Empty State Banner if no landmarks match dynastic filter */}
      {landmarks.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-30">
          <div className="bg-[#FAF7F2]/95 border border-[#B8863B]/50 p-4 rounded-xs shadow-lg max-w-xs text-center space-y-2 pointer-events-auto">
            <span className="label-caps text-[#A8422B] text-[10px]">
              NO MONUMENTS INDEXED
            </span>
            <p className="text-xs text-[#57423D]">
              No monuments in the registry match this dynastic filter on the map of India.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
