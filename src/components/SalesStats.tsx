'use client';

import React from 'react';
import { SALES_STATS } from '@/data/stats';
import { ShieldCheck, Award } from 'lucide-react';

export const SalesStats: React.FC = () => {
  return (
    <section id="statistik" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
          <span>Statistik Penjualan</span>
          <Award size={22} className="text-blue-400" />
        </h2>
        <p className="mt-1 text-sm sm:text-base text-slate-400 font-medium">
          {SALES_STATS.subtitle}
        </p>
      </div>

      {/* Main Sapphire Hero Card */}
      <div className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 border border-blue-400/30 shadow-2xl shadow-blue-900/30 overflow-hidden text-center flex flex-col items-center justify-center">
        {/* Decorative background glow accents */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sky-400/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-950/40 blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/15 text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 backdrop-blur-xs">
          <ShieldCheck size={16} className="text-sky-300" />
          <span>TRANSAKSI SUKSES & TERPERCAYA</span>
        </div>

        <h3 className="text-sm sm:text-lg lg:text-xl font-black text-blue-100 uppercase tracking-widest">
          TOTAL AKUN TERJUAL
        </h3>

        <div className="text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-lg my-2 font-mono">
          {SALES_STATS.totalSoldDisplay}
        </div>

        <p className="text-xs sm:text-sm text-blue-100 font-semibold max-w-md">
          Melayani ribuan gamers Indonesia dengan kepuasan pelanggan 99.8% dan jaminan Anti Hack-Back.
        </p>
      </div>

      {/* Breakdown 5 Cards */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {SALES_STATS.categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-[#0c101a] border border-[#1b2336] hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2.5 h-2.5 rounded-full shadow-xs"
                style={{ backgroundColor: cat.colorDot }}
              />
              <span className="text-xs sm:text-sm font-bold text-slate-300 truncate">
                {cat.gameName}
              </span>
            </div>

            <div className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
              {cat.countDisplay}
            </div>

            <div className="mt-1 text-[11px] text-slate-500 font-semibold">
              Akun Terverifikasi
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
