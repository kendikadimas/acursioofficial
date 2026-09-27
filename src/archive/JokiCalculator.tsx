'use client';

import React, { useState } from 'react';
import { MLBB_RANKS, JOKI_GUARANTEES } from '@/data/jokiPackages';
import { formatRupiah, PAYMENT_CONFIG } from '@/data/payment';
import { 
  Swords, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';

export const JokiCalculator: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<'mlbb' | 'ff'>('mlbb');
  const [currentRankIdx, setCurrentRankIdx] = useState<number>(2); // Default Epic
  const [currentStars, setCurrentStars] = useState<number>(1);
  const [targetRankIdx, setTargetRankIdx] = useState<number>(4); // Default Mythic
  const [targetStars, setTargetStars] = useState<number>(10);
  const [isFastTrack, setIsFastTrack] = useState<boolean>(false);

  const ranks = MLBB_RANKS;
  const currentRank = ranks[currentRankIdx];
  const targetRank = ranks[targetRankIdx];

  // Calculate estimated stars and price
  const calculateTotal = () => {
    if (targetRankIdx < currentRankIdx) return 0;
    
    let total = 0;
    if (currentRankIdx === targetRankIdx) {
      const starDiff = Math.max(0, targetStars - currentStars);
      total = starDiff * currentRank.pricePerStar;
    } else {
      // Current tier remaining
      total += Math.max(0, 25 - currentStars) * currentRank.pricePerStar;
      // Intermediate tiers
      for (let i = currentRankIdx + 1; i < targetRankIdx; i++) {
        total += 25 * ranks[i].pricePerStar;
      }
      // Target tier
      total += targetStars * targetRank.pricePerStar;
    }

    if (isFastTrack) {
      total = Math.round(total * 1.25); // +25% fast track priority
    }

    return Math.max(total, 50000);
  };

  const totalPrice = calculateTotal();

  const handleOrderJoki = () => {
    const text = `*FORM PEMESANAN JASA JOKI ACURSIO OFFICIAL*
----------------------------------------
*Game:* ${selectedGame === 'mlbb' ? 'Mobile Legends' : 'Free Fire'}
*Rank Sekarang:* ${currentRank.name} (${currentStars} Bintang)
*Target Rank:* ${targetRank.name} (${targetStars} Bintang)
*Mode Pengerjaan:* ${isFastTrack ? 'Fast Track Kilat (+25%)' : 'Reguler Terpercaya'}
*Total Estimasi Biaya:* ${formatRupiah(totalPrice)}
----------------------------------------
Halo Admin Acursio, saya ingin order joki rank dengan rincian di atas. Mohon info ketersediaan joki dan nomor rekening/QRIS untuk pembayaran. Terima kasih!`;

    const waUrl = `https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="joki" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Swords size={14} />
          <span>Kalkulator Joki Rank</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Jasa Joki Rank Pro Player
        </h2>
        <p className="mt-1 text-sm sm:text-base text-gray-400 font-medium max-w-2xl">
          Tingkatkan rank game impian Anda dengan penjoki mantan pro player & global top tier. Aman, cepat, dan bergaransi winrate tinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Calculator Card */}
        <div className="lg:col-span-7 rounded-3xl p-5 sm:p-7 bg-[#131522] border-2 border-[#24283c] shadow-xl">
          {/* Game Selector */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setSelectedGame('mlbb')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                selectedGame === 'mlbb'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-[#1b1e2e] text-gray-400 hover:text-white border border-[#292e47]'
              }`}
            >
              <Flame size={16} />
              <span>Mobile Legends (MLBB)</span>
            </button>
            <button
              onClick={() => setSelectedGame('ff')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                selectedGame === 'ff'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-[#1b1e2e] text-gray-400 hover:text-white border border-[#292e47]'
              }`}
            >
              <Zap size={16} />
              <span>Free Fire (FF)</span>
            </button>
          </div>

          <div className="space-y-5">
            {/* Current Rank */}
            <div>
              <label htmlFor="current-rank" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                1. Pilih Rank Anda Saat Ini
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  id="current-rank"
                  value={currentRankIdx}
                  onChange={(e) => {
                    const idx = Number(e.target.value);
                    setCurrentRankIdx(idx);
                    if (targetRankIdx < idx) {
                      setTargetRankIdx(Math.min(idx + 1, ranks.length - 1));
                    }
                  }}
                  className="w-full bg-[#1b1e2f] border border-[#2a2f47] focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-sm text-white font-semibold transition-colors"
                >
                  {ranks.map((r, i) => (
                    <option key={r.id} value={i} className="bg-[#1b1e2f] text-white">
                      {r.name}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-2 bg-[#1b1e2f] border border-[#2a2f47] rounded-xl px-3 py-2">
                  <span className="text-xs text-gray-400 font-bold shrink-0">Bintang Saat Ini:</span>
                  <input
                    type="number"
                    min={0}
                    max={25}
                    value={currentStars}
                    onChange={(e) => setCurrentStars(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-transparent text-sm font-bold text-white focus:outline-none text-right"
                  />
                  <span className="text-xs text-amber-400 font-bold">★</span>
                </div>
              </div>
            </div>

            {/* Target Rank */}
            <div>
              <label htmlFor="target-rank" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                2. Pilih Target Rank yang Diinginkan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  id="target-rank"
                  value={targetRankIdx}
                  onChange={(e) => setTargetRankIdx(Number(e.target.value))}
                  className="w-full bg-[#1b1e2f] border border-[#2a2f47] focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-sm text-white font-semibold transition-colors"
                >
                  {ranks.map((r, i) => (
                    <option 
                      key={r.id} 
                      value={i} 
                      disabled={i < currentRankIdx}
                      className="bg-[#1b1e2f] text-white disabled:text-gray-600"
                    >
                      {r.name} {i < currentRankIdx ? '(Lebih Rendah)' : ''}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-2 bg-[#1b1e2f] border border-[#2a2f47] rounded-xl px-3 py-2">
                  <span className="text-xs text-gray-400 font-bold shrink-0">Target Bintang:</span>
                  <input
                    type="number"
                    min={1}
                    max={150}
                    value={targetStars}
                    onChange={(e) => setTargetStars(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-transparent text-sm font-bold text-white focus:outline-none text-right"
                  />
                  <span className="text-xs text-amber-400 font-bold">★</span>
                </div>
              </div>
            </div>

            {/* Fast Track Option */}
            <div 
              onClick={() => setIsFastTrack(!isFastTrack)}
              className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                isFastTrack
                  ? 'bg-orange-500/15 border-orange-500 text-white'
                  : 'bg-[#181a28] border-[#292e47] text-gray-300 hover:bg-[#1f2235]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${isFastTrack ? 'bg-orange-500 text-white' : 'bg-black/30 text-orange-400'}`}>
                  <Zap size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black">Mode Fast Track Kilat (+25%)</div>
                  <div className="text-[11px] text-gray-400">Prioritas pengerjaan 2x lebih cepat oleh joki top rank global</div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                isFastTrack ? 'border-orange-500 bg-orange-500 text-white' : 'border-gray-600'
              }`}>
                {isFastTrack && <CheckCircle2 size={14} />}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Order Card */}
        <div className="lg:col-span-5 rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#181a2b] to-[#121420] border-2 border-orange-500/40 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#292e48]">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Estimasi Perhitungan Joki
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck size={13} />
                Anti Minus
              </span>
            </div>

            {/* Path info */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 mb-4">
              <div className="flex items-center justify-between text-xs text-gray-300 mb-1">
                <span>Rank Asal:</span>
                <span className="font-bold text-white">{currentRank.name} ({currentStars}★)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 mb-1">
                <span>Target Impian:</span>
                <span className="font-bold text-amber-300">{targetRank.name} ({targetStars}★)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Waktu Pengerjaan:</span>
                <span className="font-bold text-orange-400 flex items-center gap-1">
                  <Clock size={12} />
                  {isFastTrack ? '12 - 24 Jam' : '1 - 2 Hari'}
                </span>
              </div>
            </div>

            {/* Total Price */}
            <div className="my-3 text-center p-4 rounded-2xl bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/40">
              <div className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                Total Biaya Joki
              </div>
              <div className="text-3xl sm:text-4xl font-black text-orange-400 font-mono mt-1">
                {formatRupiah(totalPrice)}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">
                Bisa bayar bertahap (DP) / Lunas via QRIS & Transfer Bank
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 my-4">
              {JOKI_GUARANTEES.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleOrderJoki}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 transition-all transform active:scale-98"
            >
              <PhoneCall size={18} />
              <span>Order Joki via WhatsApp</span>
              <ArrowRight size={18} />
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-2">
              Bukti pengerjaan & live report akan dikirimkan rutin via chat WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
