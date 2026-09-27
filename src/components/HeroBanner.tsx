'use client';

import React from 'react';
import Link from 'next/link';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative pt-28 pb-6 sm:pt-32 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Container: Clean, Grounded Dark Surface */}
      <div className="rounded-2xl border border-slate-800 bg-[#0a0e17] p-8 sm:p-12 lg:p-14 text-center">
        
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-outfit uppercase">
            Jual Beli Akun Game Sultan Terpercaya
          </h1>

          {/* Subheadline Text */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            Pusat transaksi akun Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact, dan eFootball. Terverifikasi aman dengan perlindungan garansi anti hack-back dan panduan serah terima data resmi.
          </p>

          {/* Call To Actions */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/katalog"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-colors font-outfit"
            >
              Lihat Katalog Akun
            </Link>

            <Link
              href="/game"
              className="px-6 py-3 rounded-xl bg-[#131b29] hover:bg-[#1a2538] text-slate-200 hover:text-white font-bold text-sm tracking-wide transition-colors border border-slate-700 font-outfit"
            >
              Pilihan Game
            </Link>

            <Link
              href="/jaminan"
              className="px-4 py-3 text-sm font-semibold text-slate-400 hover:text-sky-300 transition-colors"
            >
              Aturan Garansi
            </Link>
          </div>

          {/* Factual Value Points (Clean, grounded, single-hue) */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
            <div className="py-1">
              <div className="text-white font-bold font-outfit">Garansi Anti Hack-Back</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Jaminan akun pengganti / refund</div>
            </div>

            <div className="py-1">
              <div className="text-white font-bold font-outfit">Verifikasi Data Akun</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Pemeriksaan bind & email pertama</div>
            </div>

            <div className="py-1">
              <div className="text-white font-bold font-outfit">QRIS Resmi</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Mendukung m-Banking & E-Wallet</div>
            </div>

            <div className="py-1">
              <div className="text-white font-bold font-outfit">Panduan Admin</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Serah terima dipandu via WhatsApp</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
