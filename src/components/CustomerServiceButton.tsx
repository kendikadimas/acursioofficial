'use client';

import React, { useState } from 'react';
import { PAYMENT_CONFIG } from '@/data/payment';
import { Headphones, MessageCircle, X, ShieldCheck, PhoneCall, ExternalLink } from 'lucide-react';

export const CustomerServiceButton: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Quick CS Popup dialog */}
      {popupOpen && (
        <div className="absolute bottom-16 right-0 w-80 rounded-2xl bg-[#141624] border-2 border-orange-500 shadow-2xl p-4 text-white mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#26293f] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-black text-xs">
                CS
              </div>
              <div>
                <div className="text-xs font-black text-white">Customer Service Acursio</div>
                <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online 24 Jam
                </div>
              </div>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              className="text-gray-400 hover:text-white p-1"
              aria-label="Tutup jendela bantuan"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-xs text-gray-300 mb-3 leading-relaxed">
            Ada pertanyaan seputar akun, jasa joki, atau butuh bantuan transfer manual & QRIS? Hubungi kami langsung via WhatsApp.
          </p>

          <a
            href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20butuh%20bantuan%20seputar%20akun%20game`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-black text-xs tracking-wider uppercase transition-all shadow-md shadow-green-600/30"
          >
            <PhoneCall size={15} />
            <span>Chat WhatsApp Sekarang</span>
            <ExternalLink size={13} />
          </a>

          <div className="mt-2.5 pt-2.5 border-t border-[#23263a] flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-semibold">
            <ShieldCheck size={12} className="text-orange-400" />
            <span>Layanan Pelanggan Resmi & Bergaransi</span>
          </div>
        </div>
      )}

      {/* Floating Pill Button matching Screenshot 1-5 */}
      <button
        onClick={() => setPopupOpen(!popupOpen)}
        className="group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ea580c] hover:from-[#fbbf24] hover:to-[#f97316] text-black font-black text-xs sm:text-sm tracking-wider uppercase shadow-2xl shadow-orange-600/50 border-2 border-white/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        aria-label="Buka layanan Customer Service"
        aria-expanded={popupOpen}
      >
        {/* Mascot Avatar in circle matching screenshot */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 border border-white/50">
          <Headphones size={15} className="text-amber-400 group-hover:rotate-12 transition-transform" />
        </div>
        <span className="font-extrabold text-black drop-shadow-xs">CUSTOMER SERVICE</span>
      </button>
    </div>
  );
};
