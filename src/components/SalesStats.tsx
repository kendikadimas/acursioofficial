import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, QrCode, Clock } from 'lucide-react';

export const SalesStats: React.FC = () => {
  const guaranteePillars = [
    {
      icon: ShieldCheck,
      title: 'Garansi Anti Hack-Back',
      description: 'Perlindungan dari upaya penarikan akun oleh pemilik lama. Disediakan akun pengganti setara atau pengembalian dana penuh.',
    },
    {
      icon: Lock,
      title: 'Verifikasi Data & Bind Bersih',
      description: 'Pengecekan detail seluruh data akun: email pertama, login Moonton/Google/pihak ketiga telah dipastikan aman dan siap ganti data.',
    },
    {
      icon: QrCode,
      title: 'Pembayaran QRIS Nasional',
      description: 'Menerima pembayaran resmi melalui QRIS yang dapat di-scan dari aplikasi m-Banking bank apa saja maupun e-wallet.',
    },
    {
      icon: Clock,
      title: 'Proses Serah Terima Cepat',
      description: 'Admin memandu pengubahan data login dan pengamanan akun secara langsung via WhatsApp resmi hingga selesai.',
    },
  ];

  return (
    <section id="jaminan" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-outfit">
          Jaminan Transaksi & Keamanan Akun
        </h2>
        <p className="mt-1 text-sm text-slate-400 font-medium">
          Setiap transaksi akun game di Acursio dilindungi protokol verifikasi resmi untuk menjamin keamanan pembeli.
        </p>
      </div>

      {/* 4 Clean Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guaranteePillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-xl p-5 bg-[#0a0e17] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 font-outfit leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Link to /jaminan */}
      <div className="mt-6 text-center">
        <Link 
          href="/jaminan"
          className="inline-block px-5 py-2.5 rounded-lg bg-[#121826] hover:bg-[#182133] text-slate-300 hover:text-white font-semibold text-xs border border-slate-800 transition-colors font-outfit"
        >
          Pelajari Selengkapnya Protokol Jaminan & FAQ
        </Link>
      </div>
    </section>
  );
};
