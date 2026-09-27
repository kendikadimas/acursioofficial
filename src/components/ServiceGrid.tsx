import React from 'react';
import Link from 'next/link';
import { GAME_SERVICES, GameService } from '@/data/services';
import { Gamepad2, ArrowRight } from 'lucide-react';

interface ServiceGridProps {
  onSelectService: (service: GameService) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ onSelectService }) => {
  return (
    <section id="layanan" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-outfit">
            Pilihan Game Jual Beli Akun
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-400 max-w-2xl font-medium">
            Menyediakan ekosistem transaksi jual beli akun game yang aman dengan jaminan Anti Hack-Back 100%.
          </p>
        </div>
        <Link 
          href="/game" 
          className="text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 font-outfit shrink-0 flex items-center gap-1 group"
        >
          <span>Detail Semua Game</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
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
            className="group relative rounded-2xl overflow-hidden border border-[#1b2335] bg-[#0c101a] hover:border-blue-500/80 transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-blue-600/15 cursor-pointer flex flex-col justify-between"
          >
            {/* Card Banner Area */}
            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-[#121929] to-[#080b12] flex items-center justify-center p-3.5">
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                {item.badgeText && (
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider bg-blue-600/90 text-white shadow-xs font-mono">
                    {item.badgeText}
                  </span>
                )}
              </div>

              {/* Service Iconography & Description */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Gamepad2 size={22} />
                </div>
                <span className="text-[11px] text-slate-300 font-semibold line-clamp-2 px-1">
                  {item.shortDesc}
                </span>
              </div>
            </div>

            {/* Bottom Blue Strip */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2.5 flex items-center justify-between transition-colors">
              <span className="text-white font-black text-xs sm:text-sm tracking-wide truncate pr-1 font-outfit">
                {item.name}
              </span>
              <span className="text-sky-100 text-[11px] font-bold tracking-wider uppercase shrink-0">
                {item.publisher}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
