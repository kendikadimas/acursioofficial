import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomerServiceButton } from '@/components/CustomerServiceButton';
import { GAME_SERVICES } from '@/data/services';
import { 
  Gamepad2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Lock,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pilihan Game Jual Beli Akun - Acursio Official',
  description: 'Pusat jual beli akun Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact, dan E-Football terpercaya dengan garansi 100% Anti Hack-Back.',
};

export default function GamePage() {
  const gameHighlights = [
    {
      slug: 'mobile-legend',
      name: 'Mobile Legends: Bang Bang',
      publisher: 'Moonton',
      badge: 'TOP SELLER',
      desc: 'Marketplace akun sultan MLBB terlengkap. Tersedia skin Collector, Legend, Aspirants, KOF, Exorcist, dan Prime M-Series.',
      features: [
        'Skin Collector & Legend Terawat',
        'Emblem Max Rata Kanan (Level 60)',
        'Winrate Akun Bersih & High Mythic',
        'Moonton Sepaket Email Bersih (All Unbind)',
      ],
      priceRange: 'Rp 150.000 - Rp 2.500.000+',
    },
    {
      slug: 'free-fire',
      name: 'Free Fire & Free Fire MAX',
      publisher: 'Garena',
      badge: 'POPULAR',
      desc: 'Jual beli akun Free Fire old season bernilai tinggi. Koleksi Evo Gun level max, Bundle Cobra, SG Ungu Rapper, dan bundle langka.',
      features: [
        'Evo Gun Level 7 Max (AK, MP40, M1014, SCAR)',
        'Old Season 1 & 2 Badge Elite Pass',
        'SG Ungu Rapper Underworld & Tinju Api',
        'Login Bersih Facebook / Google Play Terverifikasi',
      ],
      priceRange: 'Rp 200.000 - Rp 1.800.000+',
    },
    {
      slug: 'pubg',
      name: 'PUBG Mobile',
      publisher: 'Tencent Games',
      badge: 'ELITE SULTAN',
      desc: 'Koleksi akun sultan PUBG Mobile Asia server. Dilengkapi X-Suit Pharaoh level max, senjata upgrade kill effect, dan title Conqueror.',
      features: [
        'X-Suit Golden Pharaoh / Silvanus Level Max',
        'M416 Glacier & AWM Godzilla Hit Effect',
        'Title Conqueror Resmi Season Lawas',
        'Link Kosong & Data Login Siap Ganti Email',
      ],
      priceRange: 'Rp 500.000 - Rp 3.500.000+',
    },
    {
      slug: 'genshin-impact',
      name: 'Genshin Impact',
      publisher: 'Hoyoverse',
      badge: 'ENDGAME READY',
      desc: 'Akun Genshin Impact Adventure Rank 55-60 Asia Server. Karakter Bintang 5 C6 R5, eksplorasi map 100%, dan artifact siap Spiral Abyss 36 bintang.',
      features: [
        'Karakter B5 Meta: Raiden, Nahida, Furina, Kazuha',
        'Senjata Signature R1-R5 Terawat',
        'Pity Banner Tinggi & Primogems Simpanan',
        'Hoyoverse ID Bersih (Email Pembeli Siap Bind)',
      ],
      priceRange: 'Rp 300.000 - Rp 2.000.000+',
    },
    {
      slug: 'e-football',
      name: 'E-Football 2026',
      publisher: 'Konami',
      badge: 'DIVISI 1',
      desc: 'Beli akun eFootball dengan skuad impian full Big Time & Booster Epic. Rating tim 3150+ siap bersaing di kompetisi divisi 1.',
      features: [
        'Kartu Langka: Big Time Messi 2022 Champion',
        'Booster Epic: Johan Cruyff, Rummenigge, Vieira',
        'Pelatih Terbaik & Formasi Teruji',
        'Konami ID Sepaket Email Pertama Aman',
      ],
      priceRange: 'Rp 250.000 - Rp 1.500.000+',
    },
  ];

  return (
    <main className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Gamepad2 size={14} />
            <span>Katalog Game Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Pilihan Game Jual Beli Akun
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            Acursio menyediakan pilihan akun game populer dengan spesifikasi terawat, verifikasi data menyeluruh, serta jaminan 100% Anti Hack-Back.
          </p>
        </div>
      </section>

      {/* Game Detailed Cards Showcase */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {gameHighlights.map((game, idx) => (
            <div
              key={game.slug}
              className="rounded-3xl p-6 sm:p-8 bg-[#0c101a] border border-[#1b2538] hover:border-blue-500/60 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: Game Overview */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white font-mono">
                      {game.badge}
                    </span>
                    <span className="text-xs text-sky-400 font-bold uppercase tracking-wide">
                      {game.publisher}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white font-outfit">
                    {game.name}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {game.desc}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {game.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <CheckCircle2 size={14} className="text-sky-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Price & CTA Card */}
                <div className="lg:w-72 shrink-0 p-5 rounded-2xl bg-[#080b12] border border-[#172033] flex flex-col justify-between text-center">
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      Rentang Harga Akun
                    </span>
                    <div className="text-base sm:text-lg font-black text-white font-outfit mt-1">
                      {game.priceRange}
                    </div>
                    <div className="mt-2 text-[10px] text-emerald-400 font-bold flex items-center justify-center gap-1">
                      <ShieldCheck size={12} />
                      <span>Garansi Anti Hack-Back</span>
                    </div>
                  </div>

                  <Link
                    href={`/katalog?game=${game.slug}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 font-outfit flex items-center justify-center gap-1.5"
                  >
                    <span>Buka Katalog Akun</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 bg-gradient-to-r from-[#0d1424] via-[#090d16] to-[#0d1424] border border-blue-500/30 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-sky-400 flex items-center justify-center mb-3">
            <Lock size={24} />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-outfit">
            Seluruh Akun Dilindungi Protokol Keamanan Penuh
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl font-medium">
            Sebelum serah terima data, admin Acursio memverifikasi status bind, riwayat email pertama, dan memastikan tidak ada keterikatan akun pihak ketiga yang tertinggal.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/jaminan"
              className="px-6 py-2.5 rounded-xl bg-[#121826] hover:bg-[#1a2336] text-slate-200 hover:text-white font-bold text-xs border border-[#1e2a3f] transition-colors"
            >
              Baca Protokol Jaminan
            </Link>
            <Link
              href="/katalog"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/30"
            >
              Cari Akun Siap Beli
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CustomerServiceButton />
    </main>
  );
}
