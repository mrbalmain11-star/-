import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { sounds } from '../utils/audio';
import { OfficialScreenshotBadge } from './LevelBadgeIcons';
import { getLevelProgress, calculateCumulativeExpForLevel } from '../utils/levelUtils';

export const LevelsModal: React.FC = () => {
  const {
    openLevelsModal,
    setOpenLevelsModal,
    levelsModalTab,
    setLevelsModalTab,
    currentUser,
  } = useApp();

  // Local switch to show Arabic translation or Urdu text from the screenshot
  const [showUrduText, setShowUrduText] = useState(false);

  if (!openLevelsModal) return null;

  const isWealth = levelsModalTab === 'wealth';
  const isGames = levelsModalTab === 'games';
  const isCharm = levelsModalTab === 'charm';

  const currentExp = isGames
    ? (currentUser.gameExp ?? calculateCumulativeExpForLevel(currentUser.gameLevel || 1))
    : isWealth
    ? (currentUser.wealthExp ?? calculateCumulativeExpForLevel(currentUser.wealthLevel || 1))
    : (currentUser.charmExp ?? calculateCumulativeExpForLevel(currentUser.charmLevel || 1));

  const progress = getLevelProgress(currentExp);
  const currentLevel = progress.level || 1;
  const nextLevel = progress.nextLevel || 2;
  const expNeeded = progress.neededForNextLevel || 1300;

  // The complete suite of tiers up to 250 in exact rhythm
  const charmTiers = [
    { range: '1-19', badgeLevel: 1, displayNumber: '1' },
    { range: '20-39', badgeLevel: 20, displayNumber: '20' },
    { range: '40-59', badgeLevel: 40, displayNumber: '40' },
    { range: '60-79', badgeLevel: 60, displayNumber: '60' },
    { range: '80-99', badgeLevel: 80, displayNumber: '80' },
    { range: '100-119', badgeLevel: 100, displayNumber: '100' },
    { range: '120-139', badgeLevel: 120, displayNumber: '120' },
    { range: '140-159', badgeLevel: 140, displayNumber: '140' },
    { range: '160-179', badgeLevel: 160, displayNumber: '160' },
    { range: '180-199', badgeLevel: 180, displayNumber: '180' },
    { range: '200-219', badgeLevel: 200, displayNumber: '200' },
    { range: '220-239', badgeLevel: 220, displayNumber: '220' },
    { range: '240-250', badgeLevel: 240, displayNumber: '240' },
  ];

  const wealthTiers = [
    { range: '1-19', badgeLevel: 1, displayNumber: '1' },
    { range: '20-39', badgeLevel: 20, displayNumber: '20' },
    { range: '40-59', badgeLevel: 40, displayNumber: '40' },
    { range: '60-79', badgeLevel: 60, displayNumber: '60' },
    { range: '80-99', badgeLevel: 80, displayNumber: '80' },
    { range: '100-119', badgeLevel: 100, displayNumber: '100' },
    { range: '120-139', badgeLevel: 120, displayNumber: '120' },
    { range: '140-159', badgeLevel: 140, displayNumber: '140' },
    { range: '160-179', badgeLevel: 160, displayNumber: '160' },
    { range: '180-199', badgeLevel: 180, displayNumber: '180' },
    { range: '200-219', badgeLevel: 200, displayNumber: '200' },
    { range: '220-239', badgeLevel: 220, displayNumber: '220' },
    { range: '240-250', badgeLevel: 240, displayNumber: '240' },
  ];

  const gameTiers = [
    { range: '1-19', badgeLevel: 1, displayNumber: '1' },
    { range: '20-39', badgeLevel: 20, displayNumber: '20' },
    { range: '40-59', badgeLevel: 40, displayNumber: '40' },
    { range: '60-79', badgeLevel: 60, displayNumber: '60' },
    { range: '80-99', badgeLevel: 80, displayNumber: '80' },
    { range: '100-119', badgeLevel: 100, displayNumber: '100' },
    { range: '120-139', badgeLevel: 120, displayNumber: '120' },
    { range: '140-159', badgeLevel: 140, displayNumber: '140' },
    { range: '160-179', badgeLevel: 160, displayNumber: '160' },
    { range: '180-199', badgeLevel: 180, displayNumber: '180' },
    { range: '200-219', badgeLevel: 200, displayNumber: '200' },
    { range: '220-239', badgeLevel: 220, displayNumber: '220' },
    { range: '240-250', badgeLevel: 240, displayNumber: '240' },
  ];

  const tiers = isGames ? gameTiers : isWealth ? wealthTiers : charmTiers;
  const currentVariant = isGames ? 'games' : isWealth ? 'wealth' : 'charm';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm font-['Cairo',sans-serif] select-none p-0 overflow-hidden animate-in fade-in duration-200">
      {/* Mobile Frame Container matching Screenshots */}
      <div
        className="w-full max-w-md h-full flex flex-col relative text-white overflow-y-auto no-scrollbar shadow-2xl"
        dir="rtl"
      >
        {/* =========================================================================
            Atmospheric Cosmic Starfield Background
            ========================================================================= */}
        <div className="fixed inset-0 max-w-md mx-auto pointer-events-none overflow-hidden z-0">
          {/* Base Cosmic Gradient */}
          <div
            className={`absolute inset-0 transition-colors duration-500 ${
              isGames
                ? 'bg-gradient-to-b from-[#061838] via-[#020B1C] to-[#01040D]'
                : isWealth
                ? 'bg-gradient-to-b from-[#1E1103] via-[#0D0701] to-[#040200]'
                : 'bg-gradient-to-b from-[#1B0527] via-[#0B0212] to-[#040008]'
            }`}
          />

          {/* Radial Light Rays from the top */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full blur-[100px] opacity-40 transition-colors duration-500 ${
              isGames ? 'bg-blue-600/35' : isWealth ? 'bg-amber-600/30' : 'bg-purple-600/35'
            }`}
          />

          {/* Twinkling 4-Point Diamond Stars (SVG Match) */}
          <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <g id="star-sparkle">
                <path
                  d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
                  fill="#FFFFFF"
                />
              </g>
            </defs>
            <use href="#star-sparkle" x="35" y="80" transform="scale(0.7)" opacity="0.9" />
            <use href="#star-sparkle" x="320" y="110" transform="scale(0.8)" opacity="0.95" />
            <use href="#star-sparkle" x="70" y="210" transform="scale(0.5)" opacity="0.7" />
            <use href="#star-sparkle" x="340" y="180" transform="scale(0.55)" opacity="0.8" />
            <use href="#star-sparkle" x="110" y="140" transform="scale(0.65)" opacity="0.85" />
            <use href="#star-sparkle" x="290" y="250" transform="scale(0.4)" opacity="0.6" />
            <use href="#star-sparkle" x="180" y="320" transform="scale(0.5)" opacity="0.75" />
          </svg>
        </div>

        {/* =========================================================================
            Top Navigation Bar (Tabs: الألعاب | الثروة | الجاذبية & Back Arrow)
            ========================================================================= */}
        <div className="relative z-10 pt-4 pb-2 px-5 flex items-center justify-between">
          {/* Tabs: الجاذبية | الثروة | الألعاب */}
          <div className="flex items-center gap-5 sm:gap-7">
            {/* Tab: الجاذبية (Charm) */}
            <button
              onClick={() => {
                sounds.playClick();
                setLevelsModalTab('charm');
              }}
              className="flex flex-col items-center cursor-pointer transition active:scale-95"
            >
              <span
                className={`text-base sm:text-lg tracking-wide transition-all ${
                  isCharm ? 'font-black text-white' : 'font-bold text-white/50 hover:text-white/80'
                }`}
              >
                الجاذبية
              </span>
              {isCharm && (
                <div className="w-full h-[3px] bg-white rounded-full mt-1 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </button>

            {/* Tab: الثروة (Wealth) */}
            <button
              onClick={() => {
                sounds.playClick();
                setLevelsModalTab('wealth');
              }}
              className="flex flex-col items-center cursor-pointer transition active:scale-95"
            >
              <span
                className={`text-base sm:text-lg tracking-wide transition-all ${
                  isWealth ? 'font-black text-white' : 'font-bold text-white/50 hover:text-white/80'
                }`}
              >
                الثروة
              </span>
              {isWealth && (
                <div className="w-full h-[3px] bg-white rounded-full mt-1 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </button>

            {/* Tab: الألعاب (Games) */}
            <button
              onClick={() => {
                sounds.playClick();
                setLevelsModalTab('games');
              }}
              className="flex flex-col items-center cursor-pointer transition active:scale-95"
            >
              <span
                className={`text-base sm:text-lg tracking-wide transition-all ${
                  isGames ? 'font-black text-white' : 'font-bold text-white/50 hover:text-white/80'
                }`}
              >
                الألعاب 🎮
              </span>
              {isGames && (
                <div className="w-full h-[3px] bg-cyan-400 rounded-full mt-1 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
              )}
            </button>
          </div>

          {/* Right Arrow: Back Button */}
          <button
            onClick={() => {
              sounds.playClick();
              setOpenLevelsModal(false);
            }}
            className="p-2 text-white hover:text-white/80 active:scale-90 transition cursor-pointer"
            aria-label="Back"
          >
            <ArrowRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* =========================================================================
            User Avatar with Level Pill & Starfield Halo
            ========================================================================= */}
        <div className="relative z-10 flex flex-col items-center pt-2 pb-4">
          <div className="relative">
            {/* Avatar Circle */}
            <div className="w-22 h-22 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] overflow-hidden">
              <img
                src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&fit=crop&q=80'}
                alt={currentUser.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Overlapping LV.1 Pill Badge below avatar */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
              <div
                className={`px-4 py-0.5 rounded-full border shadow-md flex items-center justify-center ${
                  isGames
                    ? 'bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#0284C7] border-cyan-300/40 text-cyan-100 shadow-[0_2px_10px_rgba(37,99,235,0.4)]'
                    : isWealth
                    ? 'bg-gradient-to-r from-[#78350F] via-[#92400E] to-[#B45309] border-amber-300/40 text-amber-100 shadow-[0_2px_10px_rgba(180,83,9,0.4)]'
                    : 'bg-gradient-to-r from-[#6B21A8] via-[#7E22CE] to-[#9333EA] border-purple-300/40 text-purple-100 shadow-[0_2px_10px_rgba(126,34,206,0.4)]'
                }`}
              >
                <span className="text-xs font-black italic tracking-wider">
                  LV.{currentLevel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            Progress Bar & Requirement Text
            ========================================================================= */}
        <div className="relative z-10 px-6 pt-3 pb-4">
          {/* Progress Bar with LV.2 on left and LV.1 on right */}
          <div className="space-y-2">
            <div className="w-full h-2 rounded-full bg-neutral-800/80 border border-white/10 overflow-hidden relative">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  isGames
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_#38BDF8]'
                    : isWealth
                    ? 'bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_8px_#F59E0B]'
                    : 'bg-gradient-to-r from-purple-500 to-fuchsia-400 shadow-[0_0_8px_#C084FC]'
                }`}
                style={{ width: `${Math.max(5, progress.progressPercent)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-white/90 px-0.5">
              <span className="font-sans font-bold text-white/80">LV.{nextLevel}</span>
              <span className="font-sans font-bold text-white/80">LV.{currentLevel}</span>
            </div>
          </div>

          {/* Points Requirement Text */}
          <div
            onClick={() => setShowUrduText(!showUrduText)}
            className="text-center text-xs text-white/80 font-medium tracking-wide mt-2 cursor-pointer select-none"
          >
            {showUrduText ? (
              <p className="leading-relaxed opacity-90 font-sans" dir="rtl">
                {isGames
                  ? `LV.${nextLevel} تک پہنچنے کے لیے ${expNeeded.toLocaleString()} 🎮 گیمز کے پوائنٹس کی ضرورت ہے۔`
                  : isWealth
                  ? `LV.${nextLevel} تک پہنچنے کے لیے ${expNeeded.toLocaleString()} 🪙 مزید دولت کے پوائنٹس کی ضرورت ہے۔`
                  : `LV.${nextLevel} تک پہنچنے کے لیے ${expNeeded.toLocaleString()} 💎 مزید دلکشی کے پوائنٹس کی ضرورت ہے۔`}
              </p>
            ) : (
              <p className="leading-relaxed font-semibold">
                {isGames ? (
                  <>
                    تحتاج إلى{' '}
                    <span className="text-cyan-300 font-bold font-mono">
                      {expNeeded.toLocaleString()}
                    </span>{' '}
                    🎮 خبرة ألعاب للوصول إلى LV.{nextLevel} (كل 1 كوينز = 1 خبرة)
                  </>
                ) : isWealth ? (
                  <>
                    تحتاج إلى{' '}
                    <span className="text-amber-300 font-bold font-mono">
                      {expNeeded.toLocaleString()}
                    </span>{' '}
                    🪙 عملة ذهبية للوصول إلى LV.{nextLevel} (كل 1 كوينز = 1 خبرة)
                  </>
                ) : (
                  <>
                    تحتاج إلى{' '}
                    <span className="text-fuchsia-300 font-bold font-mono">
                      {expNeeded.toLocaleString()}
                    </span>{' '}
                    💎 نقطة جاذبية للوصول إلى LV.{nextLevel} (كل 1 كوينز = 1 خبرة)
                  </>
                )}
              </p>
            )}
          </div>
        </div>

        {/* =========================================================================
            Diamond Sparkling Horizon Divider (الخط الأفقي المشع مع الماسة في الوسط)
            ========================================================================= */}
        <div className="relative z-10 px-5 my-2 flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            {/* Horizontal Glowing Starry Line */}
            <div
              className={`h-[1px] w-full ${
                isGames
                  ? 'bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent'
                  : isWealth
                  ? 'bg-gradient-to-r from-transparent via-amber-400/70 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent'
              }`}
            />
            {/* Central Diamond Crystal */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border flex items-center justify-center shadow-lg ${
                isGames
                  ? 'bg-cyan-300 border-cyan-100 shadow-[0_0_12px_#06B6D4]'
                  : isWealth
                  ? 'bg-amber-300 border-amber-100 shadow-[0_0_12px_#F59E0B]'
                  : 'bg-fuchsia-300 border-purple-100 shadow-[0_0_12px_#D946EF]'
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isGames ? 'bg-cyan-900' : isWealth ? 'bg-amber-800' : 'bg-purple-900'
                }`}
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            Section Title & Description Text (نص الشرح الرسمي)
            ========================================================================= */}
        <div className="relative z-10 px-6 pt-2 pb-4 text-center">
          <h2
            className={`text-base font-black mb-2 tracking-wide ${
              isGames
                ? 'text-cyan-300 drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]'
                : isWealth
                ? 'text-amber-300 drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]'
                : 'text-purple-300 drop-shadow-[0_2px_8px_rgba(192,132,252,0.4)]'
            }`}
          >
            {isGames
              ? 'بخصوص مستويات الألعاب 🎮'
              : isWealth
              ? 'بخصوص مستويات الثروة 👑'
              : 'بخصوص مستويات الجاذبية والسحر ✨'}
          </h2>

          <p className="text-xs text-white/70 leading-relaxed font-medium px-2 max-w-sm mx-auto">
            {isGames
              ? 'يمثل مستوى الألعاب مهارة ونشاط المستخدم في ألعاب التطبيق. يتم إضافة نقطة خبرة ألعاب واحدة مقابل استهلاك عملة ذهبية واحدة في الألعاب (1 كوينز = 1 خبرة ألعاب). وعند وصول نقاط الخبرة للقيمة المطلوبة، يتم ترقية مستوى الألعاب تلقائيًا ولا يمكن خفضه.'
              : isWealth
              ? 'يمثل مستوى الثروة القوة الاقتصادية للمستخدم. يتم إضافة نقطة خبرة ثروة واحدة عند استهلاك عملة ذهبية واحدة (1 كوينز = 1 خبرة ثروة). وعند وصول نقاط الخبرة للقيمة المستهدفة، يتم ترقية مستوى الثروة تلقائيًا ولا يمكن خفضه.'
              : 'يمثل مستوى الجاذبية والسحر مدى شعبية المستخدم. تُضاف نقطة خبرة جاذبية واحدة مقابل كل هدية تُستلم بقيمة عملة ذهبية واحدة (1 كوينز = 1 خبرة سحر). وعند وصول نقاط الخبرة إلى القيمة المحددة، سيتم ترقية مستوى الجاذبية تلقائيًا، ولا يمكن خفضه أبدًا.'}
          </p>
        </div>

        {/* =========================================================================
            Royal Winged Golden Crest crowning the Table
            (التاج الملكي المجنح المذهب فوق الجدول تماماً)
            ========================================================================= */}
        <div className="relative z-10 flex justify-center -mb-5 pointer-events-none px-6">
          <svg
            className="w-56 h-12 drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]"
            viewBox="0 0 200 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Golden Wing */}
            <path
              d="M100 28 C80 20, 45 10, 15 24 C35 15, 65 18, 90 28 Z"
              fill="url(#goldWingGrad)"
              stroke="#FDE047"
              strokeWidth="0.8"
            />
            <path
              d="M100 25 C85 14, 55 5, 25 12 C45 6, 75 10, 95 24 Z"
              fill="url(#goldWingGrad)"
              stroke="#FEF08A"
              strokeWidth="0.8"
            />
            {/* Right Golden Wing */}
            <path
              d="M100 28 C120 20, 155 10, 185 24 C165 15, 135 18, 110 28 Z"
              fill="url(#goldWingGrad)"
              stroke="#FDE047"
              strokeWidth="0.8"
            />
            <path
              d="M100 25 C115 14, 145 5, 175 12 C155 6, 125 10, 105 24 Z"
              fill="url(#goldWingGrad)"
              stroke="#FEF08A"
              strokeWidth="0.8"
            />
            {/* Center Crown Crest */}
            <path
              d="M93 30 L95 18 L100 22 L105 18 L107 30 Z"
              fill="#F59E0B"
              stroke="#FEF08A"
              strokeWidth="1"
            />
            {/* Center Royal Jewel */}
            <polygon
              points="100,12 105,18 100,24 95,18"
              fill={isGames ? '#06B6D4' : isWealth ? '#F59E0B' : '#A855F7'}
              stroke="#FFFFFF"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="goldWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* =========================================================================
            The Table Container: [المستوى | الشارة]
            ========================================================================= */}
        <div className="relative z-10 px-5 pb-8 flex-1">
          <div
            className={`rounded-2xl overflow-hidden border shadow-2xl backdrop-blur-md transition-colors ${
              isGames
                ? 'bg-[#030E26]/90 border-[#1E3A8A]/70 shadow-[0_0_25px_rgba(30,58,138,0.3)]'
                : isWealth
                ? 'bg-[#150B03]/90 border-[#78350F]/70 shadow-[0_0_25px_rgba(120,53,15,0.3)]'
                : 'bg-[#11041D]/90 border-[#581C87]/70 shadow-[0_0_25px_rgba(88,28,135,0.3)]'
            }`}
          >
            {/* Table Header Row */}
            <div
              className={`grid grid-cols-2 text-center py-3.5 border-b font-bold text-sm ${
                isGames
                  ? 'border-blue-900/40 text-cyan-200/90'
                  : isWealth
                  ? 'border-amber-900/40 text-amber-200/90'
                  : 'border-purple-900/40 text-purple-200/90'
              }`}
            >
              {/* Right in RTL: الشارة */}
              <div className="flex items-center justify-center font-bold tracking-wide">
                الشارة
              </div>
              {/* Left in RTL: المستوى */}
              <div
                className={`flex items-center justify-center font-bold tracking-wide border-r ${
                  isGames
                    ? 'border-blue-900/40'
                    : isWealth
                    ? 'border-amber-900/40'
                    : 'border-purple-900/40'
                }`}
              >
                المستوى
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-white/5">
              {tiers.map((t) => (
                <div
                  key={t.range}
                  className={`grid grid-cols-2 items-center py-3 px-2 transition-colors hover:bg-white/5`}
                >
                  {/* Right Column in RTL: Official Badge */}
                  <div className="flex items-center justify-center">
                    <OfficialScreenshotBadge
                      level={t.badgeLevel}
                      overrideDisplayNumber={t.displayNumber}
                      variant={currentVariant}
                      size="md"
                    />
                  </div>

                  {/* Left Column in RTL: Level Range */}
                  <div
                    className={`flex items-center justify-center text-sm font-bold text-slate-200 font-sans tracking-wider border-r ${
                      isGames
                        ? 'border-blue-900/40'
                        : isWealth
                        ? 'border-amber-900/40'
                        : 'border-purple-900/40'
                    }`}
                  >
                    {t.range}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
