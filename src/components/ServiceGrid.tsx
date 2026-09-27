'use client';

import React from 'react';
import { GAME_SERVICES, GameService } from '@/data/services';
import { ShieldCheck, ArrowRight, Gamepad2 } from 'lucide-react';

interface ServiceGridProps {
  onSelectService: (service: GameService) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ onSelectService }) => {
  return (
    <section id="layanan" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
          <span>Pilihan Game Jual Beli Akun</span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
        </h2>
        <p className="mt-1 text-sm sm:text-base text-gray-400 max-w-2xl font-medium">
          Menyediakan ekosistem transaksi jual beli akun game yang aman dengan jaminan Anti Hack-Back 100%.
        </p>
      </div>

      {/* Grid of 5 Game Account Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {GAME_SERVICES.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectService(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService(item);
              }
            }}
            tabIndex={0}
            role="button"
            className="group relative rounded-2xl overflow-hidden border border-[#25283b] bg-[#12141f] hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-orange-600/20 cursor-pointer flex flex-col justify-between"
          >
            {/* Card Banner Area */}
            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-[#1c1f30] to-[#0c0e17] flex items-center justify-center p-3.5">
              <div className="absolute inset-0 bg-radial from-orange-500/10 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                {item.badgeText && (
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider bg-orange-500 text-white shadow-xs">
                    {item.badgeText}
                  </span>
                )}
              </div>

              {/* Service Iconography & Description */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Gamepad2 size={22} />
                </div>
                <span className="text-[11px] text-gray-300 font-semibold line-clamp-2 px-1">
                  {item.shortDesc}
                </span>
              </div>
            </div>

            {/* Bottom Orange Strip matching Screenshot 3 */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-3.5 py-2.5 flex items-center justify-between transition-colors">
              <span className="text-white font-black text-xs sm:text-sm tracking-wide truncate pr-1">
                {item.name}
              </span>
              <span className="text-amber-100 text-[11px] font-bold tracking-wider uppercase shrink-0 flex items-center gap-0.5">
                {item.publisher}
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
