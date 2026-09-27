'use client';

import React, { useState } from 'react';
import { PAYMENT_CONFIG } from '@/data/payment';
import { MessageSquare, X, ShieldCheck } from 'lucide-react';

export const CustomerServiceButton: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Quick CS Popup dialog */}
      {popupOpen && (
        <div className="absolute bottom-14 right-0 w-72 sm:w-80 rounded-xl bg-[#0d121c] border border-slate-800 shadow-xl p-4 text-white mb-2">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div>
              <div className="text-xs font-bold text-white">Customer Service Acursio</div>
              <div className="text-[11px] text-slate-400">Admin WhatsApp Resmi</div>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Tutup jendela bantuan"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Butuh konsultasi akun, cek ketersediaan stok, atau konfirmasi bukti pembayaran QRIS? Hubungi admin resmi kami.
          </p>

          <a
            href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20butuh%20bantuan%20seputar%20akun%20game`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
          >
            Chat WhatsApp Admin
          </a>

          <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
            <ShieldCheck size={13} className="text-sky-400" />
            <span>Nomor resmi terdaftar: {PAYMENT_CONFIG.whatsappDisplay}</span>
          </div>
        </div>
      )}

      {/* Floating Support Button: Clean, discreet, non-intrusive */}
      <button
        onClick={() => setPopupOpen(!popupOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#111724] hover:bg-[#172133] text-white border border-slate-700/80 shadow-lg text-xs font-semibold transition-colors"
        aria-label="Buka layanan bantuan WhatsApp"
        aria-expanded={popupOpen}
      >
        <MessageSquare size={16} className="text-sky-400" />
        <span>Bantuan WhatsApp</span>
      </button>
    </div>
  );
};
