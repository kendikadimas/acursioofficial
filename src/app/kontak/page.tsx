'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomerServiceButton } from '@/components/CustomerServiceButton';
import { PAYMENT_CONFIG } from '@/data/payment';
import { 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  QrCode, 
  Send, 
  MessageSquare,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';

export default function KontakPage() {
  const [userName, setUserName] = useState('');
  const [inquiryType, setInquiryType] = useState('Tanya Akun Game');
  const [accountCode, setAccountCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Halo Admin Acursio,\n\nNama: ${userName || 'Pelanggan'}\nKeperluan: ${inquiryType}\n${accountCode ? `Kode Akun: ${accountCode}\n` : ''}${message ? `Pesan: ${message}\n` : ''}\nMohon bantuannya, terima kasih.`;
    const url = `https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall size={14} />
            <span>Layanan Bantuan Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Hubungi Customer Service
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            Tim admin Acursio siap membantu kebutuhan Anda 24 jam nonstop: konfirmasi bukti transfer QRIS, konsultasi akun sultan, hingga panduan serah terima data.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Quick Direct Form */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-1 space-y-4">
            {/* Primary WhatsApp Card */}
            <div className="rounded-3xl p-6 bg-[#0c101a] border border-blue-500/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <PhoneCall size={22} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white font-outfit">
                    WhatsApp Resmi Acursio
                  </h2>
                  <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online 24 Jam Nonstop
                  </div>
                </div>
              </div>

              <div className="text-lg font-mono font-bold text-white bg-[#070a12] p-3 rounded-xl border border-[#1b2538] text-center my-3">
                {PAYMENT_CONFIG.whatsappDisplay}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Saluran resmi transaksi jual beli akun game, konfirmasi transfer QRIS, dan panduan serah terima akun.
              </p>

              <a
                href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20butuh%20bantuan`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 font-outfit"
              >
                <span>Buka Chat WhatsApp</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* QRIS Channel Card */}
            <div className="rounded-3xl p-6 bg-[#0c101a] border border-[#1b2538] shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-sky-400 flex items-center justify-center border border-blue-500/25">
                  <QrCode size={20} />
                </div>
                <h3 className="text-sm font-bold text-white font-outfit">
                  Konfirmasi Pembayaran QRIS
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Setelah scan QRIS, simpan resi / struk bukti transfer Anda dan kirimkan ke WhatsApp admin untuk verifikasi instan.
              </p>
              <div className="mt-3 pt-3 border-t border-[#172033] text-[11px] font-mono text-amber-300">
                NMID: ID1020304050607 (ACURSIO OFFICIAL)
              </div>
            </div>

            {/* Anti Scammer Warning */}
            <div className="rounded-3xl p-5 bg-[#120f0a] border border-amber-500/30 text-amber-200 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-xs uppercase tracking-wider font-outfit">
                <AlertTriangle size={15} />
                <span>Waspada Akun Tiruan</span>
              </div>
              <p className="text-xs leading-relaxed text-amber-100/80">
                Admin Acursio tidak pernah menggunakan nomor lain selain nomor resmi di atas. Pastikan nama merchant QRIS selalu tertera <strong>ACURSIO OFFICIAL</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Message Generator Form */}
          <div className="lg:col-span-2 rounded-3xl p-6 sm:p-8 bg-[#0c101a] border border-[#1b2538] shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={18} className="text-blue-400" />
              <h2 className="text-xl sm:text-2xl font-black text-white font-outfit">
                Formulir Cepat Kirim Pesan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Isi data di bawah ini untuk menghasilkan pesan terformat rapi dan langsung terhubung dengan admin kami.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-outfit">
                    Nama Anda
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="Contoh: Dimas"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-[#070a12] border border-[#1b2538] focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-outfit">
                    Kategori Keperluan
                  </label>
                  <select
                    id="inquiry-type"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#070a12] border border-[#1b2538] focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white transition-colors"
                  >
                    <option value="Tanya Akun Game">Tanya Stok / Spesifikasi Akun</option>
                    <option value="Konfirmasi Pembayaran QRIS">Konfirmasi Bukti Transfer QRIS</option>
                    <option value="Klaim Garansi Anti Hack-Back">Klaim Garansi Anti Hack-Back</option>
                    <option value="Konsultasi Akun Sultan">Konsultasi Rekomendasi Akun</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="account-code" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-outfit">
                  Kode Akun (Opsional)
                </label>
                <input
                  id="account-code"
                  type="text"
                  placeholder="Contoh: COI #0016, FFA #0881, PBG #0301..."
                  value={accountCode}
                  onChange={(e) => setAccountCode(e.target.value)}
                  className="w-full bg-[#070a12] border border-[#1b2538] focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors font-mono"
                />
              </div>

              <div>
                <label htmlFor="message-text" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-outfit">
                  Pesan Tambahan
                </label>
                <textarea
                  id="message-text"
                  rows={4}
                  placeholder="Tuliskan pertanyaan atau informasi akun yang ingin Anda tanyakan..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#070a12] border border-[#1b2538] focus:border-blue-500 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 font-outfit flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Kirim ke WhatsApp Admin Sekarang</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 font-medium">
                Pesan akan langsung dibuka di aplikasi WhatsApp Anda dengan teks yang terformat rapi.
              </div>
            </form>
          </div>

        </div>
      </section>

      <Footer />
      <CustomerServiceButton />
    </main>
  );
}
