'use client';

import React from 'react';
import Image from 'next/image';
import { GameCategory } from '@/types/account';

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
      customColor: 'from-blue-600/25 to-slate-900/40',
      charTag: 'PUBGM',
      charName: 'Pharaoh X-Suit',
    },
    {
      category: 'genshin-impact' as GameCategory,
      title: 'Genshin Impact',
      subtitle: 'Mihoyo',
      badge: 'GENSHIN',
      customColor: 'from-sky-600/25 to-indigo-950/40',
      charTag: 'GENSHIN',
      charName: 'Yae Miko Shrine',
    },
    {
      category: 'e-football' as GameCategory,
      title: 'E-Football 2026',
      subtitle: 'Konami',
      badge: 'E-FOOTBALL',
      customColor: 'from-cyan-600/25 to-blue-950/40',
      charTag: 'PES',
      charName: 'Lionel Messi BigTime',
    },
  ];

  return (
    <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-outfit">
          Jelajahi Koleksi Akun
        </h2>
        <p className="mt-1 text-sm sm:text-base text-slate-400 font-medium max-w-3xl">
          Solusi terpercaya jual beli akun game sultan dan akun terawat dalam satu tempat.
        </p>
      </div>

      {/* 5 Cards Row */}
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
                  ? 'border-blue-500 shadow-xl shadow-blue-600/25 ring-2 ring-blue-500/40'
                  : 'border-[#1b2336] hover:border-blue-500/70 bg-[#0c101a]'
              }`}
            >
              {/* Card visual body with circular sapphire aura */}
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#101726] via-[#090d16] to-[#04060a] flex items-center justify-center">
                
                {/* Glowing circular sapphire aura backdrop */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-blue-500/70 shadow-[0_0_35px_rgba(59,130,246,0.6)] opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 sapphire-aura-ring" />
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
                  /* Stylized game character art card without emoji */
                  <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-t ${item.customColor}`}>
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <span className="text-xl font-black text-sky-300 font-outfit">{item.charTag}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-sky-200 text-center tracking-wide px-2.5 py-1 rounded-lg bg-black/70 border border-blue-500/30 font-outfit">
                      {item.charName}
                    </span>
                  </div>
                )}

                {/* Top Game Badge */}
                <div className="absolute top-2.5 left-2.5 z-20">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/80 text-sky-400 border border-blue-500/40 backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Shadow Gradient & Game Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-3 sm:p-4 text-center z-20">
                  <h3 className="text-sm sm:text-base font-black text-white group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
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
