'use client';

import React from 'react';
import { REVIEWS_DATA } from '@/data/reviews';
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="review" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/35 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare size={14} />
            <span>Testimoni Nyata</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ulasan Pelanggan
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-400 font-medium">
            Apa kata mereka tentang layanan acursio?
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#0c101a] border border-[#1e293b] px-4 py-2 rounded-2xl">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <div className="text-xs sm:text-sm font-black text-white">
            4.9 / 5.0 <span className="text-slate-400 font-normal">(1.420+ Ulasan)</span>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="rounded-2xl p-5 bg-[#0c101a] border border-[#1b2336] hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Top rating & date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 font-semibold">{rev.date}</span>
              </div>

              {/* Comment text */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mb-4 italic">
                "{rev.comment}"
              </p>
            </div>

            {/* User info */}
            <div className="pt-3 border-t border-[#171f30] flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
                  <span>{rev.userName}</span>
                  <CheckCircle2 size={13} className="text-emerald-400" />
                </div>
                <div className="text-[11px] text-sky-400 font-semibold">
                  {rev.game} • {rev.accountCode}
                </div>
              </div>

              <div className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Terverifikasi
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
