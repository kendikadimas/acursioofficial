'use client';

import React from 'react';
import { ShieldCheck, Lock, QrCode, Clock } from 'lucide-react';

export const SalesStats: React.FC = () => {
  const guaranteePillars = [
    {
      icon: ShieldCheck,
      title: 'Garansi 100% Anti Hack-Back',
      description: 'Perlindungan resmi dari upaya penarikan kembali. Garansi akun pengganti setara atau pengembalian dana 100%.',
      tag: 'GARANSI PENUH',
      accent: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    },
    {
      icon: Lock,
      title: 'Verifikasi Data & Bind Bersih',
      description: 'Pengecekan teliti seluruh riwayat akun: email pertama, Moonton bind, Google Play, dan login pihak ketiga bebas masalah.',
      tag: 'TERVERIFIKASI',
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    },
    {
      icon: QrCode,
      title: 'QRIS All Payment Resmi',
      description: 'Proses pembayaran instan tanpa ribet. Mendukung seluruh m-Banking (BCA, Mandiri, BRI, BNI) dan E-Wallet (GoPay, DANA, OVO).',
      tag: 'INSTAN',
      accent: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
    },
    {
      icon: Clock,
      title: 'Serah Terima 5-15 Menit',
      description: 'Admin memandu proses penggantian email dan kata sandi secara langsung via WhatsApp resmi hingga akun 100% aman.',
      tag: 'KILAT',
      accent: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
    },
  ];

  return (
    <section id="jaminan" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-outfit">
          Jaminan Transaksi & Keamanan Akun
        </h2>
        <p className="mt-1 text-sm sm:text-base text-slate-400 font-medium">
          Setiap pembelian akun game di Acursio dilindungi protokol verifikasi resmi untuk menjamin keamanan pembeli.
        </p>
      </div>

      {/* 4 Honest Trust Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {guaranteePillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl p-5 sm:p-6 bg-[#0c101a] border border-[#1b2336] hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-sky-400 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border font-mono ${item.accent}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-outfit leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
