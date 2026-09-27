'use client';

import React, { useState, useEffect } from 'react';
import { LIVE_PURCHASE_NOTIFICATIONS } from '@/data/reviews';
import { Bell, X, ShieldCheck } from 'lucide-react';

export const LiveNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_PURCHASE_NOTIFICATIONS.length);
        setIsVisible(true);
      }, 400);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = LIVE_PURCHASE_NOTIFICATIONS[currentIndex];

  return (
    <aside 
      aria-label="Pemberitahuan Transaksi Langsung"
      className={`fixed bottom-4 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
      }`}
    >
      <div className="relative rounded-2xl p-3 sm:p-3.5 bg-gradient-to-r from-[#0d1424] to-[#080c14] border border-blue-500/40 shadow-2xl shadow-black/80 flex items-center gap-3 backdrop-blur-md">
        {/* Bell Icon in Blue Circle */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/40">
          <Bell size={18} className="animate-bounce" />
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="text-xs sm:text-sm text-slate-200 leading-snug">
            <span className="font-extrabold text-sky-400">{current.user}</span> telah membeli akun{' '}
            <span className="font-black text-white underline decoration-blue-500">{current.accountCode}</span>
          </div>
          <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1.5 mt-0.5">
            <ShieldCheck size={11} className="text-emerald-400" />
            <span>{current.game} • {current.time}</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-slate-500 hover:text-white p-1"
          aria-label="Tutup notifikasi"
        >
          <X size={13} />
        </button>
      </div>
    </aside>
  );
};
