import React from 'react';
import { Crown, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { sounds } from '../utils/audio';

export interface VipBadgeProps {
  vipLevel?: number;
  size?: 'xs' | 'sm' | 'compact' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  showText?: boolean;
}

// Mythical beast names and colors for VIP 1 - 8
export const VIP_BEAST_METADATA: Record<
  number,
  {
    name: string;
    beast: string;
    label: string;
    gradient: string;
    border: string;
    glow: string;
    textColor: string;
    innerBg: string;
  }
> = {
  1: {
    name: 'VIP 1',
    beast: 'الذئب الجليدي 🐺',
    label: 'VLP 1',
    gradient: 'from-[#0284C7] via-[#06B6D4] to-[#0E7490]',
    border: 'border-cyan-300/80',
    glow: 'shadow-[0_2px_8px_rgba(6,182,212,0.5)]',
    textColor: 'text-cyan-50',
    innerBg: 'from-[#082f49] to-[#0c4a6e]',
  },
  2: {
    name: 'VIP 2',
    beast: 'الفرس الزمردي 🐎',
    label: 'VLP 2',
    gradient: 'from-[#059669] via-[#10B981] to-[#047857]',
    border: 'border-emerald-300/80',
    glow: 'shadow-[0_2px_8px_rgba(16,185,129,0.5)]',
    textColor: 'text-emerald-50',
    innerBg: 'from-[#022c22] to-[#064e3b]',
  },
  3: {
    name: 'VIP 3',
    beast: 'النمر البنفسجي 🐅',
    label: 'VLP 3',
    gradient: 'from-[#7E22CE] via-[#A855F7] to-[#6B21A8]',
    border: 'border-purple-300/80',
    glow: 'shadow-[0_2px_10px_rgba(168,85,247,0.55)]',
    textColor: 'text-purple-50',
    innerBg: 'from-[#3b0764] to-[#581c87]',
  },
  4: {
    name: 'VIP 4',
    beast: 'الفيل الياقوتي 🐘',
    label: 'VLP 4',
    gradient: 'from-[#DC2626] via-[#EF4444] to-[#B91C1C]',
    border: 'border-rose-300/80',
    glow: 'shadow-[0_2px_10px_rgba(239,68,68,0.55)]',
    textColor: 'text-rose-50',
    innerBg: 'from-[#450a0a] to-[#7f1d1d]',
  },
  5: {
    name: 'VIP 5',
    beast: 'الأسد الشمسي 🦁',
    label: 'VLP 5',
    gradient: 'from-[#CA8A04] via-[#EAB308] to-[#9A3412]',
    border: 'border-amber-200/90',
    glow: 'shadow-[0_2px_12px_rgba(234,179,8,0.65)]',
    textColor: 'text-amber-50',
    innerBg: 'from-[#451a03] to-[#78350f]',
  },
  6: {
    name: 'VIP 6',
    beast: 'التنين الأسطوري 🐉',
    label: 'VLP 6',
    gradient: 'from-[#4F46E5] via-[#7C3AED] to-[#DB2777]',
    border: 'border-pink-300/90',
    glow: 'shadow-[0_2px_12px_rgba(219,39,119,0.65)]',
    textColor: 'text-pink-50',
    innerBg: 'from-[#312e81] to-[#581c87]',
  },
  7: {
    name: 'VIP 7',
    beast: 'العنقاء السماوية 🦅',
    label: 'VLP 7',
    gradient: 'from-[#F59E0B] via-[#EC4899] to-[#8B5CF6]',
    border: 'border-yellow-200',
    glow: 'shadow-[0_2px_14px_rgba(236,72,153,0.7)]',
    textColor: 'text-white',
    innerBg: 'from-[#701a75] to-[#4a044e]',
  },
  8: {
    name: 'VIP 8',
    beast: 'العرش الإمبراطوري 👑',
    label: 'VLP 8',
    gradient: 'from-[#FFD700] via-[#F59E0B] to-[#7C2D12]',
    border: 'border-yellow-100 ring-1 ring-amber-400',
    glow: 'shadow-[0_2px_16px_rgba(255,215,0,0.85)]',
    textColor: 'text-amber-100 font-black',
    innerBg: 'from-[#451a03] to-[#292524]',
  },
  9: {
    name: 'VIP 9',
    beast: 'سيد الكون والخلود 🌌',
    label: 'VLP 9',
    gradient: 'from-[#E0E7FF] via-[#A855F7] to-[#F59E0B]',
    border: 'border-white ring-2 ring-amber-300',
    glow: 'shadow-[0_2px_20px_rgba(245,158,11,0.95)]',
    textColor: 'text-amber-100 font-black',
    innerBg: 'from-[#1e1b4b] to-[#451a03]',
  },
};

export const VipBadge: React.FC<VipBadgeProps> = ({
  vipLevel = 0,
  size = 'md',
  className = '',
  onClick,
  showText = true,
}) => {
  const { setOpenVipModal } = useApp();

  // If no VIP active, don't render (or render null)
  if (!vipLevel || vipLevel <= 0) return null;

  const meta = VIP_BEAST_METADATA[vipLevel] || VIP_BEAST_METADATA[1];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    if (onClick) {
      onClick();
    } else {
      setOpenVipModal(true);
    }
  };

  const isXs = size === 'xs';
  const isCompact = size === 'compact' || size === 'sm';
  const isLg = size === 'lg';

  const hClass = isXs
    ? 'h-5 min-w-[50px] px-1.5'
    : isCompact
    ? 'h-5.5 min-w-[56px] px-2'
    : isLg
    ? 'h-8 min-w-[85px] px-3'
    : 'h-6.5 min-w-[66px] px-2.5';

  const textClass = isXs
    ? 'text-[10px] font-black'
    : isCompact
    ? 'text-[11px] font-black'
    : isLg
    ? 'text-sm font-black'
    : 'text-xs font-black';

  const iconSize = isXs
    ? 'w-3 h-3'
    : isCompact
    ? 'w-3.5 h-3.5'
    : isLg
    ? 'w-4.5 h-4.5'
    : 'w-3.5 h-3.5';

  return (
    <div
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r ${meta.gradient} border ${meta.border} ${meta.glow} cursor-pointer active:scale-95 transition-all select-none ${hClass} ${className}`}
      dir="ltr"
      title={`${meta.name} - ${meta.beast} (انقر للعرض)`}
    >
      <Crown className={`${iconSize} text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] shrink-0`} />
      {showText && (
        <span
          className={`font-sans tracking-wide italic ${meta.textColor} drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${textClass}`}
        >
          {meta.label}
        </span>
      )}
      <Sparkles className="w-2.5 h-2.5 text-white/80 shrink-0 hidden sm:inline-block animate-pulse" />
    </div>
  );
};
