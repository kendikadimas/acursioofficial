'use client';

import React, { useState, useEffect } from 'react';
import { GameAccount } from '@/types/account';
import { PAYMENT_CONFIG, formatRupiah, generateWhatsAppOrderUrl } from '@/data/payment';
import { 
  X, 
  QrCode, 
  PhoneCall, 
  ArrowRight, 
  AlertCircle,
  Smartphone
} from 'lucide-react';

interface CheckoutModalProps {
  account: GameAccount | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ account, onClose }) => {
  const [buyerName, setBuyerName] = useState<string>('');
  const [buyerPhone, setBuyerPhone] = useState<string>('');
  const [buyerNotes, setBuyerNotes] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!account) return null;

  const currentBank = PAYMENT_CONFIG.banks[0];

  const handleProceedToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim()) {
      setFormError('Silakan masukkan nama lengkap Anda.');
      return;
    }
    if (!buyerPhone.trim()) {
      setFormError('Silakan masukkan nomor WhatsApp Anda yang aktif.');
      return;
    }
    setFormError('');

    const waUrl = generateWhatsAppOrderUrl({
      orderType: 'account',
      itemTitle: account.title,
      itemCode: account.code,
      price: account.price,
      paymentMethod: currentBank.bankName,
      customerName: buyerName,
      customerPhone: buyerPhone,
      notes: buyerNotes,
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0c101a] border border-[#1e293b] shadow-2xl p-5 sm:p-7 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#131a29] hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
          aria-label="Tutup form pesanan"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#1b2333] pb-4 mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/20 text-sky-400 text-xs font-black uppercase tracking-wider mb-2 border border-blue-500/30">
            <QrCode size={14} />
            <span>Pembayaran Resmi QRIS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Checkout Pembayaran Akun
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Scan kode QRIS di bawah dengan aplikasi m-Banking atau E-Wallet apa saja, lalu kirim bukti transfer ke WhatsApp.
          </p>
        </div>

        {/* Selected Account Summary */}
        <div className="rounded-2xl p-4 bg-[#111726] border border-[#1d273a] mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-mono font-black text-sky-400 uppercase tracking-wider">
              {account.code} • {account.gameTitle}
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1">
              {account.title}
            </h4>
            <div className="text-xs text-slate-400 mt-0.5">
              Rank: <span className="text-amber-300 font-semibold">{account.specs.rank}</span> • Login: <span className="text-slate-300">{account.specs.loginMethod}</span>
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="text-xs text-slate-400 font-medium">Total Tagihan</div>
            <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono">
              {formatRupiah(account.price)}
            </div>
          </div>
        </div>

        {/* QRIS Code Showcase Box */}
        <div className="rounded-2xl p-5 bg-gradient-to-b from-[#111728] to-[#090d16] border border-blue-500/35 mb-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-xs font-black tracking-wider uppercase shadow-xs">
                QRIS
              </span>
              <span className="text-xs font-bold text-white">
                ACURSIO OFFICIAL STORE
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              NMID: ID1020304050607
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Visual QRIS Code */}
            <div className="w-44 h-44 bg-white p-3 rounded-2xl shadow-xl flex flex-col items-center justify-between shrink-0 border-2 border-blue-400">
              <div className="text-[10px] font-black text-black tracking-widest uppercase">
                QRIS INDONESIA
              </div>

              {/* Graphic QR pattern */}
              <div className="w-28 h-28 bg-gray-50 border border-gray-300 p-1.5 grid grid-cols-7 gap-0.5">
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-3 bg-black" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-1" />
                <div className="col-span-1 bg-black" />
                <div className="col-span-1" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-3 bg-black" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-2" />
                <div className="col-span-3 bg-black" />
                <div className="col-span-2" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-3" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-1 bg-black" />
                <div className="col-span-1" />
                <div className="col-span-1 bg-black" />
                <div className="col-span-2 row-span-2 bg-black" />
                <div className="col-span-3 bg-black" />
                <div className="col-span-2 row-span-2 bg-black" />
              </div>

              <div className="text-[9px] font-extrabold text-gray-800">
                A/N ACURSIO OFFICIAL
              </div>
            </div>

            {/* Step by Step Instructions */}
            <div className="text-xs text-slate-300 space-y-2 flex-1">
              <div className="text-sm font-black text-sky-300 flex items-center gap-1.5">
                <Smartphone size={16} className="text-blue-400" />
                <span>Cara Pembayaran QRIS:</span>
              </div>
              <p className="leading-relaxed">
                1. Buka aplikasi pembayaran Anda (BCA Mobile, Livin Mandiri, BRImo, BNI, DANA, GoPay, OVO, ShopeePay, atau LinkAja).
              </p>
              <p className="leading-relaxed">
                2. Pilih menu <strong className="text-white">Scan / Bayar QRIS</strong> dan arahkan kamera ke kode di samping.
              </p>
              <p className="leading-relaxed">
                3. Pastikan nama penerima adalah <strong className="text-sky-400">ACURSIO OFFICIAL</strong> dan masukkan nominal tepat: <strong className="text-white font-mono text-sm">{formatRupiah(account.price)}</strong>.
              </p>
              <p className="leading-relaxed">
                4. Simpan screenshot bukti bayar, lalu lengkapi form dan klik tombol kirim bukti ke WhatsApp di bawah.
              </p>
            </div>
          </div>

          {/* Supported Apps Badges */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300">Bisa di-scan dari:</span>
            <div className="flex flex-wrap gap-1.5 font-bold">
              <span className="px-2 py-0.5 rounded bg-black/50 text-blue-400 border border-blue-500/20">BCA</span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-yellow-400 border border-yellow-500/20">Mandiri</span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-blue-300 border border-blue-400/20">BRI</span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-sky-400 border border-sky-400/20">DANA</span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-emerald-400 border border-emerald-400/20">GoPay</span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-purple-400 border border-purple-400/20">OVO</span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-orange-400 border border-orange-400/20">ShopeePay</span>
            </div>
          </div>
        </div>

        {/* Customer Form */}
        <form onSubmit={handleProceedToWhatsApp} className="space-y-4">
          {formError && (
            <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="buyer-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Nama Lengkap Anda <span className="text-blue-400">*</span>
              </label>
              <input
                id="buyer-name"
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full bg-[#080b13] border border-[#1b2538] focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="buyer-phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Nomor WhatsApp Aktif <span className="text-blue-400">*</span>
              </label>
              <input
                id="buyer-phone"
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                className="w-full bg-[#080b13] border border-[#1b2538] focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="buyer-notes" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Catatan Pembelian (Opsional)
            </label>
            <input
              id="buyer-notes"
              type="text"
              placeholder="Contoh: Tolong siapkan penggantian email Gmail"
              value={buyerNotes}
              onChange={(e) => setBuyerNotes(e.target.value)}
              className="w-full bg-[#080b13] border border-[#1b2538] focus:border-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors"
            />
          </div>

          {/* Submit Button to WhatsApp */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-black text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition-all transform active:scale-98"
            >
              <PhoneCall size={18} />
              <span>Kirim Bukti Pembayaran QRIS ke WhatsApp</span>
              <ArrowRight size={18} />
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              Setelah tombol diklik, WhatsApp akan terbuka dengan format pesanan lengkap. Silakan lampirkan screenshot bukti transfer QRIS Anda ke admin.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
