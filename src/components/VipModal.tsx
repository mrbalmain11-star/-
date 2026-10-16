import React, { useState } from 'react';
import {
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Check,
  Send,
  User,
  Heart,
  MessageCircle,
  Mic,
  Copy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { sounds } from '../utils/audio';
import { VipName } from './VipName';

export interface VipTierData {
  level: number;
  name: string;
  beastName: string;
  price: number;
  durationDays: number;
  emblemImg: string;
  themeColor: string;
  glowColor: string;
  borderClass: string;
  accentBg: string;
  badgeGradient: string;
  chatBorder: string;
  micRingColor: string;
  bannerGradient: string;
  perks: string[];
}

export const VIP_TIERS: VipTierData[] = [
  {
    level: 1,
    name: 'VIP 1',
    beastName: 'الذئب الأسطوري الجليدي',
    price: 102500,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip1_mythical_wolf_1790183502974.jpg',
    themeColor: '#38bdf8', // Ice Blue
    glowColor: 'rgba(56, 189, 248, 0.45)',
    borderClass: 'border-cyan-500/50',
    accentBg: 'from-cyan-950/70 via-slate-900/90 to-black',
    badgeGradient: 'from-sky-500 via-blue-600 to-indigo-800',
    chatBorder: 'border-sky-400',
    micRingColor: '#06b6d4',
    bannerGradient: 'from-blue-600 to-sky-500',
    perks: [
      'شارة كبار الشخصيات VLP 1 المتوهجة في الملف والغرف',
      'إطار الصورة الشخصية الجليدي المميز',
      'فقاعة دردشة حصرية في الشاشة العامة للروم',
      'موجة صوت المايك الدائرية الملونة الجليدية',
      'لافتة إشعار دخول أنيقة عند الانضمام للروم',
      'بطاقة ملف شخصي مميزة بتأثير بلوري داخل الروم',
      'لمعان الاسم الخاص برتبة VIP 1 في كافة القوائم',
    ],
  },
  {
    level: 2,
    name: 'VIP 2',
    beastName: 'الفرس الأسطوري الزمردي',
    price: 278000,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip2_mythical_horse_1790183516349.jpg',
    themeColor: '#10b981', // Emerald
    glowColor: 'rgba(16, 185, 129, 0.45)',
    borderClass: 'border-emerald-500/50',
    accentBg: 'from-emerald-950/70 via-slate-900/90 to-black',
    badgeGradient: 'from-emerald-500 via-teal-600 to-green-800',
    chatBorder: 'border-emerald-400',
    micRingColor: '#10b981',
    bannerGradient: 'from-emerald-700 to-teal-500',
    perks: [
      'جميع مميزات وتأثيرات رتبة VIP 1',
      'شارة كبار الشخصيات VLP 2 الزمردية البراقة',
      'إطار الفرس الأسطوري الزمردي المتحرك',
      'فقاعة دردشة زمردية ملكية مع بريق نيون',
      'موجة مايك الزمرد المشعة بنبضات حية',
      'لافتة دخول الغرفة الزمردية الفاخرة مع وميض',
      'إمكانية إرسال نصوص مميزة ملونة في دردشة الغرفة',
      'لمعان الاسم باللون الأصفر والأسود اللامع VIP 2',
    ],
  },
  {
    level: 3,
    name: 'VIP 3',
    beastName: 'النمر الأسطوري البنفسجي',
    price: 920000,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip3_mythical_tiger_1790183529795.jpg',
    themeColor: '#a855f7', // Violet/Amethyst
    glowColor: 'rgba(168, 85, 247, 0.45)',
    borderClass: 'border-purple-500/50',
    accentBg: 'from-purple-950/70 via-slate-900/90 to-black',
    badgeGradient: 'from-purple-500 via-fuchsia-600 to-indigo-900',
    chatBorder: 'border-purple-400',
    micRingColor: '#a855f7',
    bannerGradient: 'from-purple-700 to-fuchsia-600',
    perks: [
      'جميع مميزات ورتب VIP 1 و VIP 2',
      'شارة VLP 3 مع هالة أرجوانية متلألئة',
      'إطار النمر البنفسجي الملكي مع أجنحة ذهبية',
      'فقاعة دردشة أرجوانية ملكية متوهجة ومرصعة',
      'موجة مايك بنفسجية متدفقة بأمواج كهرومغناطيسية',
      'لافتة دخول فاخرة مع تأثيرات صواعق سحرية',
      'حماية وحصانة ضد الكتم في الرومات العامة',
      'لمعان الاسم الأخضر الفضي الفاخر VIP 3',
    ],
  },
  {
    level: 4,
    name: 'VIP 4',
    beastName: 'الفيل الملكي الياقوتي',
    price: 3580000,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip4_mythical_elephant_1790183542818.jpg',
    themeColor: '#ef4444', // Ruby Red
    glowColor: 'rgba(239, 68, 68, 0.45)',
    borderClass: 'border-rose-500/50',
    accentBg: 'from-rose-950/70 via-slate-900/90 to-black',
    badgeGradient: 'from-rose-500 via-red-600 to-amber-800',
    chatBorder: 'border-rose-500',
    micRingColor: '#ef4444',
    bannerGradient: 'from-red-700 to-rose-500',
    perks: [
      'جميع مميزات ورتب VIP 1 إلى VIP 3',
      'شارة VLP 4 الملكية الياقوتية المرصعة بالجواهر',
      'إطار قرون الكبش والتاج الملكي الذهبي الفاخر (VIP IV)',
      'فقاعة دردشة حمراء ياقوتية بتأثيرات ذهبية',
      'موجة مايك ياقوتية نارية ثلاثية الأبعاد',
      'إشعار دخول ملفت للنظر مع لمعان ناري وشرارات',
      'تسريع اكتساب نقاط الخبرة لكافة المستويات',
      'حصانة تامة من الطرد العشوائي من الغرف',
      'وسام النمر الياقوتي والأوسمة الأربعة في الملف الشخصي',
      'لمعان الاسم الذهبي والأحمر الملكي VIP 4',
    ],
  },
  {
    level: 5,
    name: 'VIP 5',
    beastName: 'الأسد الإمبراطوري الشمسي',
    price: 8200000,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip5_mythical_lion_1790183557437.jpg',
    themeColor: '#eab308', // Imperial Gold
    glowColor: 'rgba(234, 179, 8, 0.55)',
    borderClass: 'border-amber-400/60',
    accentBg: 'from-amber-950/70 via-slate-900/90 to-black',
    badgeGradient: 'from-amber-400 via-yellow-500 to-amber-700',
    chatBorder: 'border-amber-400',
    micRingColor: '#eab308',
    bannerGradient: 'from-amber-600 via-yellow-500 to-amber-600',
    perks: [
      'جميع مميزات ورتب VIP 1 إلى VIP 4',
      'شارة VLP 5 الذهبية الإمبراطورية الخالصة',
      'إطار الأسد الشمسي الملكي عيار 24 مع تاج الإمبراطور',
      'فقاعة دردشة ذهبية إمبراطورية بنقوش عربية أصيلة',
      'موجة مايك ذهبية مشعة بأشعة شمسية ذهبية',
      'لافتة دخول إمبراطورية ذهبية مع صوت ترحيبي ملكي',
      'بطاقة ملف شخصي ذهبية مرصعة بالأحجار الكريمة',
      'وسام الأسد الشمسي الإمبراطوري في واجهة الملف',
      'لمعان الاسم الأسطوري الشامل (ذهب وفضة وأحمر ملكي)',
    ],
  },
  {
    level: 6,
    name: 'VIP 6',
    beastName: 'التنين البنفسجي الماسي',
    price: 15000000,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip3_mythical_tiger_1790183529795.jpg',
    themeColor: '#c084fc', // Neon Dragon Purple
    glowColor: 'rgba(192, 132, 252, 0.65)',
    borderClass: 'border-purple-400/70',
    accentBg: 'from-purple-950/80 via-slate-900/90 to-black',
    badgeGradient: 'from-indigo-600 via-fuchsia-600 to-pink-600',
    chatBorder: 'border-pink-500',
    micRingColor: '#c084fc',
    bannerGradient: 'from-indigo-700 via-purple-600 to-pink-600',
    perks: [
      'جميع مميزات ورتب VIP 1 إلى VIP 5',
      'شارة VLP 6 التنين الأسطوري البنفسجي المتوهجة',
      'إطار أجنحة التنين النيون المتوهجة والنابضة بالحياة',
      'فقاعة شات متحركة ثلاثية الأبعاد بنيران التنين السحرية',
      'حلقة مايك تنبض بأمواج نيون متلألئة',
      'لافتة دخول ملحمية مع تنين ناري يعبر شاشة الغرفة',
      'ثيم ملف شخصي فائق الفخامة والخصوصية',
      'ميزة الدخول المتخفي اختياريًا إلى الغرف',
      'وسام التنين الأسطوري الماسي في واجهة الحساب',
      'لمعان الاسم بالتنين البنفسجي الماسي VIP 6',
    ],
  },
  {
    level: 7,
    name: 'VIP 7',
    beastName: 'العنقاء السماوية الخالدة',
    price: 30000000,
    durationDays: 30,
    emblemImg: '/src/assets/images/vip5_mythical_lion_1790183557437.jpg',
    themeColor: '#f97316', // Phoenix Fire Orange/Rose
    glowColor: 'rgba(249, 115, 22, 0.7)',
    borderClass: 'border-orange-400/70',
    accentBg: 'from-orange-950/80 via-rose-950/90 to-black',
    badgeGradient: 'from-amber-500 via-rose-600 to-purple-700',
    chatBorder: 'border-orange-400',
    micRingColor: '#f97316',
    bannerGradient: 'from-amber-600 via-red-600 to-purple-700',
    perks: [
      'جميع مميزات ورتب VIP 1 إلى VIP 6',
      'شارة VLP 7 العنقاء السماوية الخالدة بألسنة اللهب',
      'إطار العنقاء السماوية بأجنحة ذهبية مشعة وريش متوهج',
      'فقاعة دردشة أسطورية بنيران العنقاء المقدسة',
      'موجة مايك بألسنة لهب سحرية متراقصة حول الصورة',
      'طيران العنقاء عبر شاشة الغرفة بأكملها عند الانضمام',
      'بطاقة ملف شخصي سماوية مخصصة لكبار الشخصيات',
      'أولوية الظهور الدائم في قائمة متصدري ومستمعي الروم',
      'وسام العنقاء الخالدة الملكي في الحساب',
      'لمعان الاسم بنيران العنقاء والذهب الشمسي VIP 7',
    ],
  },
  {
    level: 8,
    name: 'VIP 8',
    beastName: 'العرش الإمبراطوري الأعظم',
    price: 60000000,
    durationDays: 30,
    emblemImg: '/src/assets/images/golden_royal_falcon_1791890382641.jpg',
    themeColor: '#fbbf24', // Pure 24K Gold
    glowColor: 'rgba(251, 191, 36, 0.85)',
    borderClass: 'border-yellow-300 ring-1 ring-amber-400',
    accentBg: 'from-amber-950 via-stone-900 to-black',
    badgeGradient: 'from-yellow-400 via-amber-500 to-amber-700',
    chatBorder: 'border-yellow-300',
    micRingColor: '#fbbf24',
    bannerGradient: 'from-yellow-500 via-amber-600 to-yellow-400',
    perks: [
      'جميع مميزات ورتب VIP 1 إلى VIP 7',
      'شارة VLP 8 العرش الإمبراطوري الأعظم بالذهب والماس',
      'تاج وإطار العرش الملكي الأعظم عيار 24 قيراط',
      'فقاعة دردشة إمبراطورية ماسية نادرة بنقوش مرصعة',
      'موجة مايك ملكية فائقة الجمال مع تيجان ذهبية مشعة',
      'موكب إمبراطوري كامل ومؤثرات سينمائية عند الدخول',
      'بطاقة ملف إمبراطورية مذهبة حصرياً برقم ID بارز',
      'إعلان عاجل على مستوى التطبيق عند دخول أي غرفة',
      'وسام العرش الإمبراطوري الذهبي في الحساب',
      'مدير حسابات ودعم عملاء VIP خاص على مدار الساعة',
      'لمعان الاسم بالذهب الخالص والماس الإمبراطوري VIP 8',
    ],
  },
  {
    level: 9,
    name: 'VIP 9',
    beastName: 'سيد الكون والخلود المطلق',
    price: 100000000,
    durationDays: 30,
    emblemImg: '/src/assets/images/royal_golden_throne_1791891437283.jpg',
    themeColor: '#38bdf8', // Celestial Platinum Cosmic Gold
    glowColor: 'rgba(56, 189, 248, 0.95)',
    borderClass: 'border-white ring-2 ring-amber-400',
    accentBg: 'from-blue-950 via-purple-950 to-black',
    badgeGradient: 'from-sky-400 via-purple-500 to-amber-400',
    chatBorder: 'border-white',
    micRingColor: '#38bdf8',
    bannerGradient: 'from-sky-500 via-purple-600 to-amber-400',
    perks: [
      'جميع مميزات ورتب VIP 1 إلى VIP 8',
      'شارة VLP 9 الأسطورية العظمى مع هالة كونية مطلقة',
      'إطار عرش المجرات المتحرك بأجنحة أسطورية وشهب',
      'فقاعة شات ماسية كونية مع مطر نجوم متساقطة',
      'موجة مايك كونية ثلاثية الأبعاد لا مثيل لها',
      'موكب تنين سماوي ومطر ألعاب نارية عند الدخول لجميع الغرف',
      'بطاقة ملف شخصي أسطورية حصرية لسيد الكون والخلود',
      'ميزة تثبيت الغرفة الشخصية في الصفحة الأولى للتطبيق',
      'حصانة مطلقة من أي كتم أو طرد أو قيود في التطبيق',
      'وسام الخلود الأعظم المشع في أعلى قمة الحساب',
      'خدمة VIP الملكية الفاخرة المباشرة مع إدارة التطبيق',
      'لمعان الاسم الكوني الفائق اللمعان VIP 9',
    ],
  },
];

type PopupType = 'frames' | 'chat' | 'mic' | 'badge' | 'entrance' | 'profile' | null;

export const VipModal: React.FC = () => {
  const {
    openVipModal,
    setOpenVipModal,
    currentUser,
    updateUserProfile,
    setOpenRechargeModal,
    conversations
  } = useApp();

  // Active VIP tier index (0 = VIP 1, 1 = VIP 2, 2 = VIP 3, 3 = VIP 4, 4 = VIP 5)
  const [activeTierIdx, setActiveTierIdx] = useState<number>(0);
  const activeTier = VIP_TIERS[activeTierIdx];

  // Active detail popup modal (Screenshots 1-6)
  const [activePopup, setActivePopup] = useState<PopupType>(null);

  // Send to friend modal state
  const [showSendModal, setShowSendModal] = useState<boolean>(false);
  const [targetFriendId, setTargetFriendId] = useState<string>('');
  const [giftSuccessToast, setGiftSuccessToast] = useState<string | null>(null);

  if (!openVipModal) return null;

  const handleNextTier = () => {
    sounds.playClick();
    setActiveTierIdx((prev) => (prev + 1) % VIP_TIERS.length);
  };

  const handlePrevTier = () => {
    sounds.playClick();
    setActiveTierIdx((prev) => (prev - 1 + VIP_TIERS.length) % VIP_TIERS.length);
  };

  const handleActivate = () => {
    sounds.playClick();
    if (currentUser.coins < activeTier.price) {
      sounds.playError();
      setOpenRechargeModal(true);
      return;
    }

    sounds.playLevelUp();
    updateUserProfile({
      coins: currentUser.coins - activeTier.price,
      vipLevel: activeTier.level,
      vipExpiry: '2028/01/01',
    });

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: [activeTier.themeColor, '#f59e0b', '#ffffff'],
    });

    setGiftSuccessToast(`🎉 تم تفعيل اشتراك ${activeTier.name} بنجاح لمدة 30 يوماً!`);
    setTimeout(() => {
      setGiftSuccessToast(null);
    }, 3500);
  };

  const handleSendGift = () => {
    sounds.playClick();
    if (!targetFriendId.trim()) return;

    if (currentUser.coins < activeTier.price) {
      sounds.playError();
      setOpenRechargeModal(true);
      return;
    }

    sounds.playGiftFanfare();
    updateUserProfile({
      coins: currentUser.coins - activeTier.price,
    });

    setShowSendModal(false);
    setTargetFriendId('');
    setGiftSuccessToast(`🎁 تم إهداء اشتراك ${activeTier.name} إلى الصديق (${targetFriendId}) بنجاح!`);
    setTimeout(() => {
      setGiftSuccessToast(null);
    }, 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 select-none overflow-hidden font-['Cairo',sans-serif]"
      dir="rtl"
    >
      <div className="relative w-full max-w-md h-full flex flex-col justify-between overflow-hidden shadow-2xl bg-[#030108] text-white">
        {/* ========================================================================= */}
        {/* CELESTIAL BACKGROUND WITH TOP LIGHT CONE & SUBTLE HEX PATTERN            */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Top Radial Light Spotlight */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-96 rounded-full blur-3xl opacity-35 transition-all duration-700"
            style={{ backgroundColor: activeTier.themeColor }}
          />
          {/* Subtle Hexagon Starry Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black/80 to-black opacity-60" />
        </div>

        {/* ========================================================================= */}
        {/* HEADER: "مول" Centered, Back Arrow on Right (RTL)                        */}
        {/* ========================================================================= */}
        <header className="relative z-20 pt-4 pb-2 px-4 flex items-center justify-between">
          {/* Right in RTL: Back Arrow (❮) */}
          <button
            onClick={() => {
              sounds.playClick();
              setOpenVipModal(false);
            }}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-amber-200 transition active:scale-90 cursor-pointer shadow-md"
            title="رجوع"
          >
            <ChevronRight className="w-5 h-5 text-amber-200 stroke-[2.5]" />
          </button>

          {/* Center: "مول" Title */}
          <h2 className="text-lg font-bold text-amber-100 tracking-wide drop-shadow-md">
            مول
          </h2>

          {/* Left in RTL: Decorative Icon / Status */}
          <div className="w-9 h-9 flex items-center justify-center">
            <span className="text-amber-400 text-xs">✨</span>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* SCROLLABLE MAIN CONTENT                                                  */}
        {/* ========================================================================= */}
        <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar px-4 pb-24 space-y-4">
          {/* Horizontal Quick VIP Selector (VIP 1 to VIP 9) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-0.5">
            {VIP_TIERS.map((tier, idx) => (
              <button
                key={tier.level}
                onClick={() => {
                  sounds.playClick();
                  setActiveTierIdx(idx);
                }}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all shrink-0 cursor-pointer ${
                  activeTierIdx === idx
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Top Hero Section: Beast Emblem with Left/Right Navigation Arrows */}
          <div className="relative flex items-center justify-center pt-1 pb-2">
            {/* Left Chevron (<) to cycle tiers */}
            <button
              onClick={handlePrevTier}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/70 hover:text-white flex items-center justify-center active:scale-90 transition z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Central 3D Mythical Beast Head Emblem */}
            <div className="relative flex flex-col items-center">
              {/* Glowing Aura Behind Beast */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-50 scale-110 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeTier.themeColor }}
              />

              {/* 3D Beast Image Container */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <img
                  src={activeTier.emblemImg}
                  alt={activeTier.beastName}
                  className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-500"
                />

                {/* Golden Plate: "VIP X" centered at bottom of beast */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 border border-amber-200 px-4 py-0.5 rounded-md shadow-lg">
                  <span className="font-black text-xs font-sans text-slate-950 tracking-wider">
                    {activeTier.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Chevron (>) to cycle tiers */}
            <button
              onClick={handleNextTier}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/70 hover:text-white flex items-center justify-center active:scale-90 transition z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Preview: Grand Ornate Avatar Frame with Wide Wings */}
          <div className="relative flex flex-col items-center justify-center py-2">
            <div className="relative flex items-center justify-center">
              {/* Outer Wide Wings Frame */}
              <div className="relative w-72 h-20 flex items-center justify-center">
                {/* SVG Majestic Symmetrical Wings in Active Tier Theme Color */}
                <svg
                  viewBox="0 0 320 90"
                  className="w-full h-full drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]"
                  fill="none"
                >
                  <path
                    d="M160 50 C120 15, 60 10, 10 38 C35 50, 70 52, 95 62 C120 70, 145 72, 160 80 C175 72, 200 70, 225 62 C250 52, 285 50, 310 38 C260 10, 200 15, 160 50 Z"
                    fill={`url(#wingsGrad_${activeTier.level})`}
                    stroke={activeTier.themeColor}
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient id={`wingsGrad_${activeTier.level}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="50%" stopColor={activeTier.themeColor} stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Central Circular Avatar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-white to-amber-500 shadow-2xl overflow-hidden">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* "VIP X" Badge beneath avatar */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700 border border-amber-200 px-2.5 py-0.2 rounded-full shadow-md">
                  <span className="text-[10px] font-black text-slate-950 font-sans tracking-wide">
                    {activeTier.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Name Shine Preview for the current active tier */}
            <div className="mt-3 mb-1 text-center flex flex-col items-center justify-center">
              <VipName
                name={currentUser.name || currentUser.nickname}
                vipLevel={activeTier.level}
                className="text-base font-black tracking-wide"
              />
              <span className="text-[10px] text-amber-300/80 font-bold mt-0.5">
                معاينة لمعان الاسم لـ {activeTier.name} ✨
              </span>
            </div>
          </div>

          {/* Section Heading: "تعريف (6/6)" with Golden Flourishes */}
          <div className="flex items-center justify-center gap-2 pt-1 pb-1">
            <span className="text-amber-400 text-sm">༺</span>
            <div className="text-center">
              <span className="text-xs font-bold text-amber-200">تعريف</span>
              <span className="text-[11px] text-amber-400/80 font-sans mr-1">(6/6)</span>
            </div>
            <span className="text-amber-400 text-sm">༻</span>
          </div>

          {/* 2x3 Grid of 6 Privilege Cards ("هوية كبار الشخصيات") */}
          <div className="grid grid-cols-2 gap-3">
            {/* Card 1: شارة كبار الشخصيات (Emblem Badge) */}
            <PrivilegeCard
              title="هوية كبار الشخصيات"
              activeColor={activeTier.themeColor}
              onClick={() => {
                sounds.playClick();
                setActivePopup('badge');
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={activeTier.emblemImg}
                  alt="Badge"
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
            </PrivilegeCard>

            {/* Card 2: إطار الدردشة العامة (Chat Frame) */}
            <PrivilegeCard
              title="هوية كبار الشخصيات"
              activeColor={activeTier.themeColor}
              onClick={() => {
                sounds.playClick();
                setActivePopup('chat');
              }}
            >
              <div className={`relative w-28 h-12 rounded-lg bg-black/60 border ${activeTier.chatBorder} flex items-center justify-between px-2 shadow-inner`}>
                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/40">
                  <img src={currentUser.avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 mr-1.5 space-y-1">
                  <div className="h-1.5 w-12 bg-white/30 rounded-full" />
                  <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                </div>
                <div className="w-4 h-4 rounded-full bg-amber-400 text-[8px] font-black text-black flex items-center justify-center">
                  V
                </div>
              </div>
            </PrivilegeCard>

            {/* Card 3: إطار الصورة الشخصية (Avatar Frame) */}
            <PrivilegeCard
              title="هوية كبار الشخصيات"
              activeColor={activeTier.themeColor}
              onClick={() => {
                sounds.playClick();
                setActivePopup('frames');
              }}
            >
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow opacity-80"
                  style={{ borderColor: activeTier.themeColor }}
                />
                <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-300 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
                    alt="Man with shemagh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 bg-amber-500 text-[7px] font-black text-black px-1 rounded">
                  {activeTier.name}
                </div>
              </div>
            </PrivilegeCard>

            {/* Card 4: ملابس موجة صوت المايكروفون (Mic Soundwave Circle) */}
            <PrivilegeCard
              title="هوية كبار الشخصيات"
              activeColor={activeTier.themeColor}
              onClick={() => {
                sounds.playClick();
                setActivePopup('mic');
              }}
            >
              <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Glowing Circular Ring */}
                <div
                  className="absolute inset-0 rounded-full border-4 opacity-75 animate-ping"
                  style={{ borderColor: activeTier.micRingColor }}
                />
                <div
                  className="w-12 h-12 rounded-full p-1 border-2 flex items-center justify-center shadow-lg"
                  style={{ borderColor: activeTier.micRingColor, backgroundColor: `${activeTier.micRingColor}22` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </PrivilegeCard>

            {/* Card 5: إشعار الدخول الفخم (Room Join Banner) */}
            <PrivilegeCard
              title="هوية كبار الشخصيات"
              activeColor={activeTier.themeColor}
              onClick={() => {
                sounds.playClick();
                setActivePopup('entrance');
              }}
            >
              <div className={`w-32 py-1 px-1.5 rounded-md bg-gradient-to-r ${activeTier.bannerGradient} border border-amber-300/60 shadow-lg flex items-center justify-between`}>
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/50">
                  <img src={activeTier.emblemImg} alt="Emblem" className="w-full h-full object-cover" />
                </div>
                <span className="text-[9px] font-bold text-white truncate max-w-[80px]">
                  MR.Zayn... Joined
                </span>
                <Sparkles className="w-3 h-3 text-amber-200" />
              </div>
            </PrivilegeCard>

            {/* Card 6: بطاقة الملف المخصصة في الروم (In-Room Profile Theme) */}
            <PrivilegeCard
              title="هوية كبار الشخصيات"
              activeColor={activeTier.themeColor}
              onClick={() => {
                sounds.playClick();
                setActivePopup('profile');
              }}
            >
              <div className="w-28 rounded-md bg-white/95 text-slate-800 p-1.5 shadow-md flex flex-col items-center scale-95 border border-slate-300">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-amber-400">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
                    alt="Marry Jane"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[8px] font-bold text-slate-900 mt-0.5">Marry Jane</span>
                <div className="flex gap-1 text-[7px] text-slate-500 font-mono">
                  <span>ID:1041877</span>
                  <span>🇸🇾</span>
                </div>
              </div>
            </PrivilegeCard>
          </div>

          {/* =========================================================================
              ORDERED PRIVILEGES LIST (مرتب كل VIP موجود مميزاته بشكل ترتيب)
              ========================================================================= */}
          <div className="pt-3 pb-2 px-1">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="text-base">👑</span>
                <h3 className="text-sm font-black text-amber-200">
                  مميزات رتبة {activeTier.name} ({activeTier.beastName})
                </h3>
              </div>
              <span className="text-[11px] text-amber-400 font-mono font-bold bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                {activeTier.perks.length} ميزة مرتبة
              </span>
            </div>

            <div className="space-y-2">
              {activeTier.perks.map((perk, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-all shadow-xs"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-black text-[11px] shadow-xs"
                    style={{
                      backgroundColor: `${activeTier.themeColor}25`,
                      color: activeTier.themeColor,
                      border: `1px solid ${activeTier.themeColor}80`,
                    }}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-xs text-slate-200 font-medium leading-snug">
                    {perk}
                  </span>
                  <Check
                    className="w-4 h-4 shrink-0 mr-auto"
                    style={{ color: activeTier.themeColor }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM STICKY BAR: Price, Send (إرسال), Activate (تفعيل)                  */}
        {/* ========================================================================= */}
        <footer className="relative z-30 px-4 py-3 bg-[#080313]/95 backdrop-blur-md border-t border-amber-600/30 flex items-center justify-between">
          {/* Right in RTL: Price & Days */}
          <div className="flex items-center gap-1.5 text-right">
            <span className="text-sm font-black font-sans text-amber-300">
              {activeTier.price.toLocaleString()}
            </span>
            <span className="text-xs text-amber-200 font-bold">
              /{activeTier.durationDays} أيام
            </span>
            <span className="text-sm">🪙</span>
          </div>

          {/* Action Buttons: إرسال (Send) & تفعيل (Activate) */}
          <div className="flex items-center gap-2">
            {/* Optional: Cancel VIP if currently active */}
            {currentUser.vipLevel > 0 && (
              <button
                onClick={() => {
                  sounds.playClick();
                  updateUserProfile({
                    vipLevel: 0,
                    vipExpiry: '',
                  });
                  setGiftSuccessToast('تم إلغاء تفعيل VIP والعودة للاسم العادي');
                  setTimeout(() => setGiftSuccessToast(null), 3000);
                }}
                className="px-2.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-600 text-slate-300 text-xs font-bold transition active:scale-95 cursor-pointer shadow-md"
                title="إلغاء تفعيل VIP"
              >
                إلغاء VIP
              </button>
            )}

            {/* Button 1: إرسال (Send to friend) */}
            <button
              onClick={() => {
                sounds.playClick();
                setShowSendModal(true);
              }}
              className="px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-amber-500/40 text-amber-200 text-xs font-black transition active:scale-95 cursor-pointer shadow-md"
            >
              إرسال
            </button>

            {/* Button 2: تعيين مباشر (Instant Assign for Testing) */}
            <button
              onClick={() => {
                sounds.playLevelUp();
                updateUserProfile({
                  vipLevel: activeTier.level,
                  vipExpiry: '2028/01/01',
                });
                confetti({
                  particleCount: 100,
                  spread: 80,
                  origin: { y: 0.6 },
                });
                setGiftSuccessToast(`✨ تم تعيين ${activeTier.name} وتفعيل لمعان الاسم الخاص بنجاح!`);
                setTimeout(() => setGiftSuccessToast(null), 3000);
              }}
              className="px-4 py-2 rounded-full bg-amber-950/80 hover:bg-amber-900 border border-amber-400 text-amber-200 text-xs font-black transition active:scale-95 cursor-pointer shadow-md"
              title="تعيين الرتبة وتفعيل لمعان الاسم فوراً"
            >
              تعيين {activeTier.name}
            </button>

            {/* Button 3: تفعيل بالكوينز (Activate with coins) */}
            <button
              onClick={handleActivate}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 text-xs font-black transition active:scale-95 cursor-pointer shadow-[0_2px_12px_rgba(245,158,11,0.5)]"
            >
              شراء وتفعيل
            </button>
          </div>
        </footer>

        {/* Toast Notification */}
        {giftSuccessToast && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#170a2c] border border-amber-400 text-amber-200 text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 backdrop-blur-md animate-in fade-in slide-in-from-top-4">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{giftSuccessToast}</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DETAIL POPUP MODALS (Screenshots 1 to 6 - 1:1 Parity)                      */}
        {/* ========================================================================= */}
        {activePopup && (
          <div
            onClick={() => setActivePopup(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-gradient-to-b from-[#1c0c08] via-[#120705] to-[#080302] border border-amber-600/50 rounded-3xl p-5 shadow-[0_0_35px_rgba(217,119,6,0.35)] flex flex-col items-center animate-in zoom-in-95 duration-300"
            >
              {/* Background Red Velvet Curtain Accent (from screenshots) */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-rose-950/40 via-transparent to-transparent rounded-t-3xl pointer-events-none" />

              {/* Popup Content Based on Type */}
              {activePopup === 'frames' && (
                /* Screenshot 1: Avatar Frames across VIP 1 to 5 */
                <div className="w-full flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-4 w-full px-2 py-4">
                    {VIP_TIERS.slice(0, 4).map((t) => (
                      <div key={t.level} className="flex flex-col items-center gap-1">
                        <div
                          className="w-16 h-16 rounded-full border-2 p-1 flex items-center justify-center shadow-lg"
                          style={{ borderColor: t.themeColor }}
                        >
                          <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center">
                            <span className="text-[10px] font-black text-amber-200">VIP {t.level}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-amber-300 font-sans">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* VIP 5 Centered at Bottom */}
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div
                      className="w-18 h-18 rounded-full border-2 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.7)]"
                      style={{ borderColor: VIP_TIERS[4].themeColor }}
                    >
                      <div className="w-14 h-14 rounded-full border border-amber-300 bg-amber-950/40 flex items-center justify-center">
                        <span className="text-xs font-black text-amber-200">VIP 5</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-300 font-sans">VIP5</span>
                  </div>

                  <h3 className="text-base font-black text-amber-200 mt-4">هوية كبار الشخصيات</h3>
                  <p className="text-[11px] text-slate-300 text-center leading-relaxed mt-2 px-2">
                    عرض على صفحة ملفك الشخصي، بطاقة ملف الغرفة، منطقة دردشة الشاشة العامة للغرفة، قائمة الأصدقاء، قائمة الترتيب، الساحة، إلخ.
                  </p>
                </div>
              )}

              {activePopup === 'chat' && (
                /* Screenshot 2: Chat Frames across VIP 1 to 5 */
                <div className="w-full flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-3 w-full px-2 py-4">
                    {VIP_TIERS.slice(0, 4).map((t) => (
                      <div key={t.level} className="flex flex-col items-center gap-1">
                        <div className={`w-24 h-12 rounded-md bg-black/60 border ${t.chatBorder} flex items-center justify-center shadow-md`}>
                          <span className="text-[9px] font-bold text-white font-sans">{t.name}</span>
                        </div>
                        <span className="text-xs font-bold text-amber-300 font-sans">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* VIP 5 Centered at Bottom */}
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-28 h-12 rounded-md bg-black/60 border border-amber-400 flex items-center justify-center shadow-[0_0_12px_rgba(234,179,8,0.6)]">
                      <span className="text-xs font-bold text-amber-300 font-sans">VIP 5</span>
                    </div>
                    <span className="text-xs font-bold text-amber-300 font-sans">VIP5</span>
                  </div>

                  <h3 className="text-base font-black text-amber-200 mt-4">هوية كبار الشخصيات</h3>
                  <p className="text-[11px] text-slate-300 text-center leading-relaxed mt-2 px-2">
                    عرض في منطقة دردشة الشاشة العامة للغرفة.
                  </p>
                </div>
              )}

              {activePopup === 'mic' && (
                /* Screenshot 3: Mic Soundwave Rings across VIP 1 to 5 */
                <div className="w-full flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-4 w-full px-2 py-4">
                    {VIP_TIERS.slice(0, 4).map((t) => (
                      <div key={t.level} className="flex flex-col items-center gap-1">
                        <div
                          className="w-16 h-16 rounded-full border-4 p-1 flex items-center justify-center shadow-lg"
                          style={{ borderColor: t.micRingColor, backgroundColor: `${t.micRingColor}25` }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
                            alt="Mic"
                            className="w-11 h-11 rounded-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-bold text-amber-300 font-sans">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* VIP 5 Centered at Bottom */}
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div
                      className="w-18 h-18 rounded-full border-4 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.8)]"
                      style={{ borderColor: VIP_TIERS[4].micRingColor, backgroundColor: `${VIP_TIERS[4].micRingColor}33` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
                        alt="Mic"
                        className="w-13 h-13 rounded-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-amber-300 font-sans">VIP5</span>
                  </div>

                  <h3 className="text-base font-black text-amber-200 mt-4">هوية كبار الشخصيات</h3>
                  <p className="text-[11px] text-slate-300 text-center leading-relaxed mt-2 px-2">
                    ملابس موجة الصوت الخاصة بالميكروفون لكبار الشخصيات
                  </p>
                </div>
              )}

              {activePopup === 'badge' && (
                /* Screenshot 4: Beast Crest Badges across VIP 1 to 5 */
                <div className="w-full flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-4 w-full px-2 py-4">
                    {VIP_TIERS.slice(0, 4).map((t) => (
                      <div key={t.level} className="flex flex-col items-center gap-1">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img src={t.emblemImg} alt={t.name} className="w-full h-full object-contain drop-shadow" />
                        </div>
                        <span className="text-xs font-bold text-amber-300 font-sans">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* VIP 5 Centered at Bottom */}
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img src={VIP_TIERS[4].emblemImg} alt="VIP5" className="w-full h-full object-contain drop-shadow" />
                    </div>
                    <span className="text-xs font-bold text-amber-300 font-sans">VIP5</span>
                  </div>

                  <h3 className="text-base font-black text-amber-200 mt-4">هوية كبار الشخصيات</h3>
                  <p className="text-[11px] text-slate-300 text-center leading-relaxed mt-2 px-2">
                    عرض على صفحة ملفك الشخصي، بطاقة ملف الغرفة، منطقة دردشة الشاشة العامة للغرفة، قائمة الأصدقاء، قائمة الترتيب، الساحة، إلخ.
                  </p>
                </div>
              )}

              {activePopup === 'entrance' && (
                /* Screenshot 5: Room Join Entrance Banners across VIP 1 to 5 */
                <div className="w-full flex flex-col items-center space-y-2.5 py-4 px-2">
                  {VIP_TIERS.map((t) => (
                    <div
                      key={t.level}
                      className={`w-full py-2 px-3 rounded-xl bg-gradient-to-r ${t.bannerGradient} border border-amber-300/40 shadow-lg flex items-center justify-between`}
                    >
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-white/60">
                        <img src={t.emblemImg} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-black text-white font-sans">
                        Peter Park... Joined
                      </span>
                      <Sparkles className="w-4 h-4 text-amber-200" />
                    </div>
                  ))}

                  <h3 className="text-base font-black text-amber-200 mt-4">هوية كبار الشخصيات</h3>
                  <p className="text-[11px] text-slate-300 text-center leading-relaxed mt-1 px-2">
                    عرض عند الانضمام إلى الغرفة.
                  </p>
                </div>
              )}

              {activePopup === 'profile' && (
                /* Screenshot 6: Custom In-Room Profile Cards across VIP 1 to 5 */
                <div className="w-full flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-3 w-full px-1 py-4">
                    {VIP_TIERS.slice(0, 4).map((t) => (
                      <div key={t.level} className="flex flex-col items-center gap-1">
                        <div className="w-28 rounded-lg bg-white/95 text-slate-900 p-2 shadow-md flex flex-col items-center border border-slate-300">
                          <div className="w-7 h-7 rounded-full overflow-hidden border-2" style={{ borderColor: t.themeColor }}>
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
                              alt="Marry Jane"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-[9px] font-bold mt-1">Marry Jane</span>
                          <span className="text-[8px] text-slate-500 font-mono">ID:1041877 🇸🇾</span>
                        </div>
                        <span className="text-xs font-bold text-amber-300 font-sans">{t.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* VIP 5 Centered at Bottom */}
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-32 rounded-lg bg-white/95 text-slate-900 p-2 shadow-lg flex flex-col items-center border-2 border-amber-400">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-amber-400">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
                          alt="Marry Jane"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[10px] font-bold mt-1">Marry Jane</span>
                      <span className="text-[8px] text-slate-500 font-mono">ID:1041877 🇸🇾</span>
                    </div>
                    <span className="text-xs font-bold text-amber-300 font-sans">VIP5</span>
                  </div>

                  <h3 className="text-base font-black text-amber-200 mt-4">هوية كبار الشخصيات</h3>
                  <p className="text-[11px] text-slate-300 text-center leading-relaxed mt-2 px-2">
                    عرض نمط بطاقة الملف الشخصي المخصصة للأعضاء في الغرفة
                  </p>
                </div>
              )}

              {/* Close Button: Dark Circle with "X" ⨂ */}
              <button
                onClick={() => {
                  sounds.playClick();
                  setActivePopup(null);
                }}
                className="mt-5 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition active:scale-90 cursor-pointer shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL: إرسال الـ VIP لصديق (Gift to Friend Modal)                          */}
        {/* ========================================================================= */}
        {showSendModal && (
          <div
            onClick={() => setShowSendModal(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#130722] border border-amber-500/50 rounded-3xl p-5 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <h3 className="text-sm font-black text-amber-300 flex items-center gap-1.5">
                  <span>🎁 إهداء اشتراك {activeTier.name}</span>
                </h3>
                <button
                  onClick={() => setShowSendModal(false)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-medium block">
                  أدخل معرف الصديق (ID) أو اختر من المحادثات:
                </label>
                <input
                  type="text"
                  value={targetFriendId}
                  onChange={(e) => setTargetFriendId(e.target.value)}
                  placeholder="مثال: 1265609"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              {/* Quick Friend Picks from Conversations */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-slate-400 font-medium">أصدقاء مقترحون:</span>
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                  {conversations.slice(0, 4).map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setTargetFriendId(c.userId)}
                      className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[10px] text-amber-200 flex items-center gap-1 shrink-0"
                    >
                      <User className="w-3 h-3" />
                      <span>{c.userName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price summary */}
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between text-xs">
                <span className="text-slate-300">سعر الاشتراك (30 يوم):</span>
                <span className="font-bold text-amber-300 font-mono">
                  {activeTier.price.toLocaleString()} 🪙
                </span>
              </div>

              {/* Send Confirmation Button */}
              <button
                onClick={handleSendGift}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow-lg transition active:scale-95"
              >
                تأكيد الإهداء
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ================= HELPER COMPONENT: PRIVILEGE CARD ================= */
interface PrivilegeCardProps {
  title: string;
  activeColor: string;
  onClick: () => void;
  children: React.ReactNode;
}

const PrivilegeCard: React.FC<PrivilegeCardProps> = ({ title, activeColor, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl bg-gradient-to-b from-[#180a22]/90 via-[#0e0417]/95 to-[#07020d] border border-white/10 hover:border-amber-400/50 p-3 flex flex-col items-center justify-between min-h-[110px] cursor-pointer group active:scale-98 transition shadow-lg overflow-hidden"
    >
      {/* Subtle Diagonal Light Streaks */}
      <div className="absolute -inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-amber-400/50 transition-all duration-500" />

      {/* Graphic Preview */}
      <div className="flex-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        {children}
      </div>

      {/* Card Title at Bottom: "هوية كبار الشخصيات" */}
      <span className="text-[11px] font-bold text-amber-200/90 tracking-tight mt-2 drop-shadow-sm">
        {title}
      </span>
    </div>
  );
};
