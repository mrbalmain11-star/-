import React from 'react';

export interface BadgeProps {
  level: number;
  variant?: 'wealth' | 'charm' | 'games';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'compact';
  className?: string;
  onClick?: () => void;
  overrideDisplayNumber?: number | string;
}

export type TierLevel =
  | 1
  | 20
  | 40
  | 60
  | 80
  | 100
  | 120
  | 140
  | 160
  | 180
  | 200
  | 220
  | 240;

export const getTierIndex = (level: number): TierLevel => {
  const lvl = Math.max(1, Math.floor(level || 1));
  if (lvl >= 240) return 240;
  if (lvl >= 220) return 220;
  if (lvl >= 200) return 200;
  if (lvl >= 180) return 180;
  if (lvl >= 160) return 160;
  if (lvl >= 140) return 140;
  if (lvl >= 120) return 120;
  if (lvl >= 100) return 100;
  if (lvl >= 80) return 80;
  if (lvl >= 60) return 60;
  if (lvl >= 40) return 40;
  if (lvl >= 20) return 20;
  return 1;
};

/* =========================================================================
   Distinct Color & Shape Architecture for Wealth vs Magic/Charm
   
   1. Wealth Level (مستوى الثروة):
      - Shape: Royal Heraldic Shield / Crest (rounded-l-full rounded-r-md with gold bevels)
      - Emblem: 3D Royal Crown / Imperial Lion / Sun Gold Seal
      - Colors: 24K Gold, Amber, Fiery Sunflare, Imperial Topaz, Crimson Molten Gold
   
   2. Magic Level (مستوى السحر / الجاذبية):
      - Shape: Faceted Hexagonal Crystal / Arcane Diamond Capsule (beveled crystal facets)
      - Emblem: 8-Point Arcane Star / Sparkling Magic Diamond
      - Colors: Cosmic Amethyst, Mystic Violet, Enchanted Magenta, Fairy Neon Purple
   ========================================================================= */

export const OfficialScreenshotBadge: React.FC<BadgeProps> = ({
  level,
  variant = 'wealth',
  size = 'md',
  className = '',
  onClick,
  overrideDisplayNumber,
}) => {
  const tier = getTierIndex(level);
  const displayNum = overrideDisplayNumber ?? Math.max(1, Math.floor(level || 1));
  const isWealth = variant === 'wealth';

  // Size variations
  const isCompact = size === 'compact' || size === 'sm';
  const isXs = size === 'xs';
  const isLg = size === 'lg';

  // Sizing definitions: neat, compact, and perfectly proportioned
  const hClass = isXs
    ? 'h-3.5 px-1'
    : isCompact
    ? 'h-4 px-1.5'
    : isLg
    ? 'h-6 px-2.5'
    : 'h-4.5 px-1.5';

  const textClass = isXs
    ? 'text-[8.5px] font-black font-sans leading-none'
    : isCompact
    ? 'text-[9.5px] font-black font-sans leading-none'
    : isLg
    ? 'text-xs font-black font-sans leading-none'
    : 'text-[10px] font-black font-sans leading-none';

  const emblemSize = isXs
    ? 'w-2.5 h-2.5'
    : isCompact
    ? 'w-3 h-3'
    : isLg
    ? 'w-4.5 h-4.5'
    : 'w-3.5 h-3.5';

  // =========================================================================
  // 1. WEALTH LEVEL (مستوى الثروة) - Distinct Royal Golden Shield / Crest Shape
  // =========================================================================
  if (isWealth) {
    // Wealth Tier Specific Theme Configs (Radiant Amber, Gold, Flame, Crimson)
    let wealthBg = 'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309]';
    let wealthBorder = 'border-amber-300/80';
    let wealthGlow = 'shadow-[0_2px_8px_rgba(245,158,11,0.45)]';
    let emblemBg = 'from-[#FEF08A] to-[#B45309]';
    let crownColor = '#FEF08A';
    let gemColor = '#F59E0B';

    if (tier === 1) {
      // Tier 1: Warm Amber Gold
      wealthBg = 'bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706]';
      wealthBorder = 'border-amber-200/90';
      wealthGlow = 'shadow-[0_2px_8px_rgba(245,158,11,0.45)]';
      emblemBg = 'from-[#FEF9C3] to-[#D97706]';
      crownColor = '#FFFBEB';
      gemColor = '#D97706';
    } else if (tier === 20) {
      // Tier 2: Bronze Citrine Gold
      wealthBg = 'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#92400E]';
      wealthBorder = 'border-amber-300/90';
      wealthGlow = 'shadow-[0_2px_10px_rgba(217,119,6,0.5)]';
      emblemBg = 'from-[#FEF08A] to-[#92400E]';
      crownColor = '#FEF08A';
      gemColor = '#B45309';
    } else if (tier === 40) {
      // Tier 3: 24K Mirrored Royal Gold
      wealthBg = 'bg-gradient-to-r from-[#FDE047] via-[#EAB308] to-[#CA8A04]';
      wealthBorder = 'border-yellow-200 ring-1 ring-amber-400/50';
      wealthGlow = 'shadow-[0_2px_12px_rgba(234,179,8,0.6)]';
      emblemBg = 'from-[#FEF9C3] to-[#A16207]';
      crownColor = '#FFFFFF';
      gemColor = '#CA8A04';
    } else if (tier === 60) {
      // Tier 4: Fiery Sunflare Amber
      wealthBg = 'bg-gradient-to-r from-[#FB923C] via-[#F97316] to-[#EA580C]';
      wealthBorder = 'border-orange-200/90 ring-1 ring-amber-400';
      wealthGlow = 'shadow-[0_2px_12px_rgba(249,115,22,0.6)]';
      emblemBg = 'from-[#FFEDD5] to-[#C2410C]';
      crownColor = '#FEF08A';
      gemColor = '#EA580C';
    } else if (tier >= 80 && tier < 140) {
      // Tier 5-7: Imperial Crimson & Sovereign Gold
      wealthBg = 'bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-[#DC2626]';
      wealthBorder = 'border-amber-100 ring-1 ring-red-400';
      wealthGlow = 'shadow-[0_2px_14px_rgba(239,68,68,0.65)]';
      emblemBg = 'from-[#FEF08A] to-[#991B1B]';
      crownColor = '#FFF';
      gemColor = '#DC2626';
    } else if (tier >= 140) {
      // Tier 8+: Celestial Emperor Radiant Gold & Dragon Fire
      wealthBg = 'bg-gradient-to-r from-[#FDE047] via-[#EA580C] to-[#7F1D1D]';
      wealthBorder = 'border-2 border-yellow-200 ring-1 ring-yellow-400';
      wealthGlow = 'shadow-[0_2px_16px_rgba(234,179,8,0.85)]';
      emblemBg = 'from-[#FFFFFF] to-[#7F1D1D]';
      crownColor = '#FFFFFF';
      gemColor = '#EF4444';
    }

    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-1 shrink-0 rounded-l-full rounded-r-[5px] ${wealthBg} border ${wealthBorder} ${wealthGlow} select-none cursor-pointer transition active:scale-95 ${hClass} ${className}`}
        dir="ltr"
        title={`مستوى الثروة: Lv. ${displayNum}`}
      >
        {/* Heraldic Shield / Crown Emblem on left in LTR */}
        <div className={`relative flex items-center justify-center shrink-0 ${emblemSize}`}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-b ${emblemBg} p-[1px] shadow-xs`}>
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#78350F] to-[#451A03] flex items-center justify-center">
              {/* Royal Crown Emblem */}
              <svg viewBox="0 0 24 24" className="w-[74%] h-[74%]" fill="none">
                <path
                  d="M4 17L2 7L7.5 11.5L12 3.5L16.5 11.5L22 7L20 17H4Z"
                  fill={crownColor}
                  stroke="#FFFFFF"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="13" r="1.6" fill={gemColor} stroke="#FFF" strokeWidth="0.4" />
                <circle cx="6" cy="10" r="1.1" fill={gemColor} />
                <circle cx="18" cy="10" r="1.1" fill={gemColor} />
                <path d="M5 17H19V19H5V17Z" fill="#FEF08A" />
              </svg>
            </div>
          </div>
        </div>

        {/* Level Number in 24K Gold Text */}
        <span
          className={`text-white italic tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${textClass}`}
        >
          {displayNum}
        </span>
      </div>
    );
  }

  // =========================================================================
  // 2. GAMES LEVEL (مستوى الألعاب) - Distinct Cyber Gamepad Capsule Shape
  // =========================================================================
  if (variant === 'games') {
    let gameBg = 'bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7]';
    let gameBorder = 'border-cyan-300/80';
    let gameGlow = 'shadow-[0_2px_8px_rgba(37,99,235,0.45)]';
    let gameEmblemBg = 'from-[#DBEAFE] to-[#1E40AF]';

    if (tier === 1) {
      gameBg = 'bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]';
      gameBorder = 'border-blue-200/90';
      gameGlow = 'shadow-[0_2px_8px_rgba(37,99,235,0.45)]';
      gameEmblemBg = 'from-[#EFF6FF] to-[#1D4ED8]';
    } else if (tier === 20) {
      gameBg = 'bg-gradient-to-r from-[#06B6D4] via-[#0284C7] to-[#1E40AF]';
      gameBorder = 'border-cyan-200/90';
      gameGlow = 'shadow-[0_2px_10px_rgba(6,182,212,0.5)]';
      gameEmblemBg = 'from-[#ECFEFF] to-[#0E7490]';
    } else if (tier === 40) {
      gameBg = 'bg-gradient-to-r from-[#0EA5E9] via-[#6366F1] to-[#4338CA]';
      gameBorder = 'border-indigo-200 ring-1 ring-sky-300/50';
      gameGlow = 'shadow-[0_2px_12px_rgba(14,165,233,0.55)]';
      gameEmblemBg = 'from-[#F0F9FF] to-[#3730A3]';
    } else if (tier >= 60) {
      gameBg = 'bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#000851]';
      gameBorder = 'border-cyan-100 ring-1 ring-blue-400';
      gameGlow = 'shadow-[0_2px_14px_rgba(0,242,254,0.65)]';
      gameEmblemBg = 'from-[#FFFFFF] to-[#000851]';
    }

    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-1 shrink-0 rounded-full ${gameBg} border ${gameBorder} ${gameGlow} select-none cursor-pointer transition active:scale-95 ${hClass} ${className}`}
        dir="ltr"
        title={`مستوى الألعاب: Lv. ${displayNum}`}
      >
        <div className={`relative flex items-center justify-center shrink-0 ${emblemSize}`}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-b ${gameEmblemBg} p-[1px] shadow-xs`}>
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-[80%] h-[80%]" fill="none" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="12" x2="10" y2="12"></line>
                <line x1="8" y1="10" x2="8" y2="14"></line>
                <line x1="15" y1="13" x2="15.01" y2="13"></line>
                <line x1="18" y1="11" x2="18.01" y2="11"></line>
                <rect x="2" y="6" width="20" height="12" rx="4"></rect>
              </svg>
            </div>
          </div>
        </div>
        <span className={`text-white italic tracking-wide font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${textClass}`}>
          {displayNum}
        </span>
      </div>
    );
  }

  // =========================================================================
  // 3. MAGIC / CHARM LEVEL (مستوى السحر) - Distinct Mystical Crystal / Faceted Shape
  // =========================================================================
  let charmBg = 'bg-gradient-to-r from-[#A855F7] via-[#9333EA] to-[#6B21A8]';
  let charmBorder = 'border-purple-300/80';
  let charmGlow = 'shadow-[0_2px_8px_rgba(168,85,247,0.5)]';
  let charmEmblemBg = 'from-[#F3E8FF] to-[#6B21A8]';
  let starColor = '#FAF5FF';
  let crystalCenter = '#C084FC';

  if (tier === 1) {
    // Tier 1: Orchid Lavender & Amethyst
    charmBg = 'bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7C3AED]';
    charmBorder = 'border-purple-200/90';
    charmGlow = 'shadow-[0_2px_8px_rgba(168,85,247,0.45)]';
    charmEmblemBg = 'from-[#FAF5FF] to-[#7C3AED]';
    starColor = '#FFFFFF';
    crystalCenter = '#A855F7';
  } else if (tier === 20) {
    // Tier 2: Deep Enchanted Magenta & Fuchsia
    charmBg = 'bg-gradient-to-r from-[#E879F9] via-[#C026D3] to-[#86198F]';
    charmBorder = 'border-fuchsia-300/90';
    charmGlow = 'shadow-[0_2px_10px_rgba(217,70,239,0.5)]';
    charmEmblemBg = 'from-[#FDF4FF] to-[#86198F]';
    starColor = '#FDF4FF';
    crystalCenter = '#E879F9';
  } else if (tier === 40) {
    // Tier 3: Cosmic Neon Violet & Starlight Pink
    charmBg = 'bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#8B5CF6]';
    charmBorder = 'border-pink-200 ring-1 ring-purple-400/50';
    charmGlow = 'shadow-[0_2px_12px_rgba(236,72,153,0.55)]';
    charmEmblemBg = 'from-[#FCE7F3] to-[#6B21A8]';
    starColor = '#FFFFFF';
    crystalCenter = '#EC4899';
  } else if (tier === 60) {
    // Tier 4: Royal Sorcery Tanzanite
    charmBg = 'bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#4F46E5]';
    charmBorder = 'border-indigo-300 ring-1 ring-purple-300';
    charmGlow = 'shadow-[0_2px_12px_rgba(99,102,241,0.6)]';
    charmEmblemBg = 'from-[#EEF2FF] to-[#3730A3]';
    starColor = '#EEF2FF';
    crystalCenter = '#818CF8';
  } else if (tier >= 80 && tier < 140) {
    // Tier 5-7: Radiant Neon Arcane Aurora & Cyan Star
    charmBg = 'bg-gradient-to-r from-[#22D3EE] via-[#A855F7] to-[#EC4899]';
    charmBorder = 'border-cyan-200 ring-1 ring-fuchsia-400';
    charmGlow = 'shadow-[0_2px_14px_rgba(168,85,247,0.65)]';
    charmEmblemBg = 'from-[#E0F2FE] to-[#701A75]';
    starColor = '#FFFFFF';
    crystalCenter = '#22D3EE';
  } else if (tier >= 140) {
    // Tier 8+: Supreme Celestial Star Diamond Flare
    charmBg = 'bg-gradient-to-r from-[#F43F5E] via-[#A855F7] to-[#38BDF8]';
    charmBorder = 'border-2 border-white ring-1 ring-purple-400';
    charmGlow = 'shadow-[0_2px_16px_rgba(168,85,247,0.85)]';
    charmEmblemBg = 'from-[#FFFFFF] to-[#3B0764]';
    starColor = '#FFFFFF';
    crystalCenter = '#F43F5E';
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1 shrink-0 rounded-r-full rounded-l-[5px] ${charmBg} border ${charmBorder} ${charmGlow} select-none cursor-pointer transition active:scale-95 ${hClass} ${className}`}
      dir="ltr"
      title={`مستوى السحر: Lv. ${displayNum}`}
    >
      {/* 8-Point Arcane Crystal Star Emblem on left in LTR */}
      <div className={`relative flex items-center justify-center shrink-0 ${emblemSize}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-to-b ${charmEmblemBg} p-[1px] shadow-xs`}>
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3B0764] to-[#1E1B4B] flex items-center justify-center">
            {/* 8-Point Starlight Diamond / Crystal */}
            <svg viewBox="0 0 24 24" className="w-[78%] h-[78%]" fill="none">
              <path
                d="M12 2L14.5 8L20.5 7L16.5 12L20.5 17L14.5 16L12 22L9.5 16L3.5 17L7.5 12L3.5 7L9.5 8L12 2Z"
                fill={starColor}
                stroke="#FFFFFF"
                strokeWidth="0.8"
              />
              <circle cx="12" cy="12" r="2.2" fill={crystalCenter} stroke="#FFF" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Level Number in Sparkling Starlight Text */}
      <span
        className={`text-white italic tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${textClass}`}
      >
        {displayNum}
      </span>
    </div>
  );
};

/* Dedicated Helpers for Wealth and Charm/Experience */
export const WealthBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <OfficialScreenshotBadge variant="wealth" {...props} />
);

export const CharmBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <OfficialScreenshotBadge variant="charm" {...props} />
);

export const GameBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <OfficialScreenshotBadge variant="games" {...props} />
);

export const DamaskBackground: React.FC<{ variant: 'wealth' | 'charm' }> = ({ variant }) => {
  const isWealth = variant === 'wealth';
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className={`absolute inset-0 ${
          isWealth
            ? 'bg-gradient-to-b from-[#1C0D02] via-[#110701] to-[#080300]'
            : 'bg-gradient-to-b from-[#170423] via-[#0E0217] to-[#06000A]'
        }`}
      />
    </div>
  );
};
