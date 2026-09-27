'use client';

import React from 'react';
import Image from 'next/image';
import { GameCategory } from '@/types/account';
import { Sparkles } from 'lucide-react';

interface CharacterCollectionProps {
  onSelectCategory: (category: GameCategory) => void;
  activeCategory: GameCategory | 'all';
}

export const CharacterCollection: React.FC<CharacterCollectionProps> = ({ 
  onSelectCategory, 
  activeCategory 
}) => {
  const characters = [
    {
      category: 'mobile-legend' as GameCategory,
      title: 'Mobile Legends',
      subtitle: 'Moonton',
      image: '/images/char-ml.jpg',
      badge: 'MLBB',
    },
    {
      category: 'free-fire' as GameCategory,
      title: 'Free Fire',
      subtitle: 'Garena',
      image: '/images/char-ff.jpg',
      badge: 'FF',
    },
    {
      category: 'pubg' as GameCategory,
      title: 'PUBG Mobile',
      subtitle: 'Tencent',
      badge: 'PUBGM',
      // Stylized fallback visual
      customColor: 'from-amber-600/30 to-yellow-900/40',
      iconChar: '👑',
      charName: 'Pharaoh X-Suit',
    },
    {
      category: 'genshin-impact' as GameCategory,
      title: 'Genshin Impact',
      subtitle: 'Mihoyo',
      badge: 'GENSHIN',
      customColor: 'from-pink-600/30 to-purple-900/40',
      iconChar: '🌸',
      charName: 'Yae Miko Shrine',
    },
    {
      category: 'e-football' as GameCategory,
      title: 'E-Football 2026',
      subtitle: 'Konami',
      badge: 'E-FOOTBALL',
      customColor: 'from-blue-600/30 to-emerald-900/40',
      iconChar: '⚽',
      charName: 'Lionel Messi BigTime',
    },
  ];

  return (
    <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
          <span>Jelajahi Koleksi Akun</span>
          <Sparkles size={20} className="text-orange-500 animate-spin" />
        </h2>
        <p className="mt-1 text-sm sm:text-base text-gray-400 font-medium max-w-3xl">
          Solusi lengkap untuk jual beli akun aman dan jasa joki profesional dalam satu tempat.
        </p>
      </div>

      {/* 5 Cards Row matching Screenshot 5 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
        {characters.map((item) => {
          const isSelected = activeCategory === item.category;

          return (
            <div
              key={item.category}
              onClick={() => onSelectCategory(item.category)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(item.category);
                }
              }}
              tabIndex={0}
              role="button"
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-[280px] sm:h-[340px] ${
                isSelected
                  ? 'border-orange-500 shadow-xl shadow-orange-600/30 ring-2 ring-orange-500/50'
                  : 'border-[#26293d] hover:border-orange-500/70 bg-[#12141f]'
              }`}
            >
              {/* Card visual body with circular flame ring */}
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#1b1c28] via-[#10121b] to-[#0a0b10] flex items-center justify-center">
                
                {/* Fiery circular aura backdrop */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-orange-500/80 shadow-[0_0_40px_rgba(255,85,0,0.85)] opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 flame-aura-ring" />
                </div>

                {/* Character Image if available */}
                {item.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                ) : (
                  /* Stylized game character art card */
                  <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-t ${item.customColor}`}>
                    <div className="text-5xl sm:text-6xl mb-2 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform">
                      {item.iconChar}
                    </div>
                    <span className="text-xs sm:text-sm font-black text-amber-300 text-center tracking-wide px-2 py-1 rounded bg-black/60 border border-orange-500/30">
                      {item.charName}
                    </span>
                  </div>
                )}

                {/* Top Game Badge */}
                <div className="absolute top-2.5 left-2.5 z-20">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/80 text-orange-400 border border-orange-500/40 backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Shadow Gradient & Game Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 sm:p-4 text-center z-20">
                  <h3 className="text-sm sm:text-base font-black text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
