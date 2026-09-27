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
            Pilih kategori game untuk melihat katalog akun sultan bergaransi Anti Hack-Back 100%.
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

      {/* Grid of Centered Game Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
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
            className="group relative rounded-2xl p-5 sm:p-6 bg-[#0c101a] border border-[#182236] hover:border-blue-500 hover:bg-[#101624] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-blue-900/20 cursor-pointer flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px]"
          >
            {/* Center Icon */}
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
              <Gamepad2 size={24} />
            </div>

            {/* Center Game Title (misal: Mobile Legends) */}
            <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-sky-300 transition-colors font-outfit tracking-wide">
              {item.name}
            </h3>

            {/* Center Publisher / Subtext */}
            <span className="text-[11px] font-semibold text-slate-400 mt-1 uppercase tracking-wider font-mono">
              {item.publisher}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
