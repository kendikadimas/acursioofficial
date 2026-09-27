'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ShieldCheck, Gamepad2, ArrowRight, Zap, QrCode } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative pt-24 pb-6 sm:pt-28 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Container: Clean Pure Typography with Deep Sapphire Backdrop */}
      <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-b from-[#0b1222] via-[#070b16] to-[#04060b] p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-blue-950/40">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-64 bg-blue-600/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/35 text-sky-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-5 shadow-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <ShieldCheck size={16} className="text-sky-400" />
            <span>Garansi 100% Anti Hack-Back • Acursio Official</span>
          </div>

          {/* Main Typography Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none font-outfit uppercase">
            Jual Beli Akun Game Sultan Terpercaya
          </h1>

          {/* Subheadline Text */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Pusat transaksi akun Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact & eFootball. Terverifikasi 100% aman dengan serah terima data kilat dan garansi uang kembali seumur hidup.
          </p>

          {/* Call To Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/35 font-outfit"
            >
              <span>Lihat Katalog Akun</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/game"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#121929] hover:bg-[#1a233a] text-slate-200 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all border border-[#222f46] font-outfit"
            >
              <Gamepad2 size={16} className="text-sky-400" />
              <span>Pilihan Game</span>
            </Link>

            <Link
              href="/jaminan"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-sky-300 transition-colors"
            >
              <span>Baca Aturan Garansi</span>
              <ExternalLink size={14} />
            </Link>
          </div>

          {/* Trust Value Badges Strip */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs sm:text-sm font-bold font-outfit">
                <ShieldCheck size={16} />
                <span>100% Anti Hack-Back</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5">Garansi seumur hidup</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-sky-400 text-xs sm:text-sm font-bold font-outfit">
                <Zap size={16} />
                <span>Serah Terima Kilat</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5">Proses 5-15 menit</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs sm:text-sm font-bold font-outfit">
                <QrCode size={16} />
                <span>QRIS All Payment</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5">BCA, Mandiri, E-Wallet</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-indigo-400 text-xs sm:text-sm font-bold font-outfit">
                <Gamepad2 size={16} />
                <span>Data Akun Aman</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5">Semua bind diperiksa SOP</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
