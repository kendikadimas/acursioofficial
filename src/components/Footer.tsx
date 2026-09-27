'use client';

import React from 'react';
import { AcursioLogo } from './AcursioLogo';
import { PAYMENT_CONFIG } from '@/data/payment';
import { 
  ShieldCheck, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  QrCode, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-[#0b0c12] border-t-2 border-[#1c1f30] text-gray-400">
      {/* Upper Footer: Guarantees Banner */}
      <div className="border-b border-[#1c1f30] bg-[#0e1018]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">100% Anti Hack-Back</div>
                <div className="text-[11px] text-gray-400">Garansi ganti akun atau uang kembali penuh</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Serah Terima Akun Kilat</div>
                <div className="text-[11px] text-gray-400">5 - 15 menit langsung login ganti email</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-600/20 text-green-400 flex items-center justify-center shrink-0">
                <QrCode size={20} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Pembayaran QRIS All Payment</div>
                <div className="text-[11px] text-gray-400">Support semua m-Banking & E-Wallet</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">30.207+ Akun Terjual</div>
                <div className="text-[11px] text-gray-400">Reputasi terbukti amanah dan terpercaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <AcursioLogo size="lg" />
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
              Acursio adalah platform marketplace jual beli akun game terpercaya di Indonesia. Kami menyediakan akun sultan bergaransi resmi dengan perlindungan 100% Anti Hack-Back.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Layanan Pelanggan: 24 Jam Nonstop</span>
            </div>
          </div>

          {/* Produk & Layanan Game */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              Katalog Game
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#jubel" className="hover:text-orange-400 transition-colors">
                  Mobile Legends: Akun Sultan & Skin Collector
                </a>
              </li>
              <li>
                <a href="#jubel" className="hover:text-orange-400 transition-colors">
                  Free Fire: Akun Old Season & Evo Gun Max
                </a>
              </li>
              <li>
                <a href="#jubel" className="hover:text-orange-400 transition-colors">
                  PUBG Mobile: Pharaoh X-Suit & Glacier Hit Effect
                </a>
              </li>
              <li>
                <a href="#jubel" className="hover:text-orange-400 transition-colors">
                  Genshin Impact: Akun AR Tinggi C6 R5
                </a>
              </li>
              <li>
                <a href="#jubel" className="hover:text-orange-400 transition-colors">
                  E-Football: Skuad Impian Messi BigTime
                </a>
              </li>
            </ul>
          </div>

          {/* Jalur Transaksi QRIS */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              Sistem Pembayaran
            </h4>
            <div className="p-3.5 rounded-2xl bg-[#131522] border border-[#272b44] space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <QrCode size={16} className="text-orange-400" />
                <span>QRIS All Payment Indonesia</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Scan mudah melalui BCA Mobile, Mandiri Livin, BRImo, DANA, GoPay, OVO, ShopeePay, dan LinkAja. Bukti transfer dikonfirmasi ke WhatsApp resmi.
              </p>
              <div className="text-[10px] font-mono text-amber-300">
                NMID: ID1020304050607
              </div>
            </div>
          </div>

          {/* Bantuan & Kontak Admin */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">
              Hubungi Admin
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Kirim bukti transfer QRIS atau tanyakan ketersediaan akun langsung via WhatsApp resmi kami:
            </p>
            <a
              href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20ingin%20tanya%20akun%20game`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs tracking-wide transition-all shadow-md"
            >
              <PhoneCall size={15} />
              <span>WhatsApp: {PAYMENT_CONFIG.whatsappDisplay}</span>
            </a>
            <div className="mt-3 text-[11px] text-gray-500">
              *Waspada penipuan. Pastikan nama merchant QRIS yang muncul adalah ACURSIO OFFICIAL.
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-[#1c1f30] text-center text-xs text-gray-400 space-y-2 font-medium">
          <p>
            Disclaimer: Acursio Official adalah penyedia layanan pihak ketiga yang independen. Seluruh hak cipta aset grafis, judul game, dan merek dagang adalah properti dari masing-masing pemegang hak resmi (Moonton, Garena, Tencent, Mihoyo, Konami).
          </p>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Acursio Official (acursio.id). Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};
