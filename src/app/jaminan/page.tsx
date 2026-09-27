import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomerServiceButton } from '@/components/CustomerServiceButton';
import { 
  ShieldCheck, 
  Lock, 
  QrCode, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle,
  FileCheck,
  RefreshCw,
  PhoneCall
} from 'lucide-react';
import { PAYMENT_CONFIG } from '@/data/payment';

export const metadata: Metadata = {
  title: 'Jaminan Akun & Keamanan Transaksi - Acursio Official',
  description: 'Protokol resmi jaminan 100% Anti Hack-Back, standar verifikasi data akun, dan sistem pembayaran aman QRIS di Acursio Official.',
};

export default function JaminanPage() {
  const securityPillars = [
    {
      icon: ShieldCheck,
      title: 'Garansi 100% Anti Hack-Back',
      desc: 'Setiap akun dilindungi garansi resmi seumur hidup dari upaya penarikan kembali (hack-back) oleh pemilik lama.',
      bullet: 'Penggantian akun setara atau refund uang 100% jika terjadi hack-back.',
    },
    {
      icon: FileCheck,
      title: 'Verifikasi Data & Riwayat Bersih',
      desc: 'Pemeriksaan ketat terhadap email pertama (first email), Moonton ID, Google Play, dan pemutusan akun pihak ketiga.',
      bullet: 'All unbind ready: tidak ada kaitan akun sosial media pihak ketiga yang tertinggal.',
    },
    {
      icon: QrCode,
      title: 'Sistem Pembayaran QRIS Resmi',
      desc: 'Pembayaran praktis dan aman dengan bukti transfer instan ke seluruh bank nasional dan e-wallet Indonesia.',
      bullet: 'NMID terverifikasi atas nama ACURSIO OFFICIAL dengan rekam jejak transaksi valid.',
    },
    {
      icon: Clock,
      title: 'SOP Serah Terima Cepat 5-15 Menit',
      desc: 'Admin memandu proses penggantian kata sandi, email pemulihan, dan logout semua sesi perangkat lama hingga akun 100% milik Anda.',
      bullet: 'Panduan step-by-step langsung dipandu secara privat via WhatsApp resmi.',
    },
  ];

  const verificationSteps = [
    {
      step: '01',
      title: 'Pemeriksaan Kepemilikan & First Email',
      desc: 'Memastikan akun bukan hasil kejahatan siber atau sengketa. Seluruh data email pertama diperiksa dan diamankan.',
    },
    {
      step: '02',
      title: 'Pembersihan Bind Pihak Ketiga (All Unbind)',
      desc: 'Memastikan tidak ada akun Facebook, VK, TikTok, Game Center, atau nomor telepon asing yang masih tersambung.',
    },
    {
      step: '03',
      title: 'Verifikasi Riwayat Transaksi & Top-up',
      desc: 'Memeriksa riwayat pembelian diamond/item in-game untuk menjamin akun tidak terkena minus diamond atau sanksi developer.',
    },
    {
      step: '04',
      title: 'Pengujian Akses Login Bersih',
      desc: 'Tim kurasi Acursio menguji login ke server game resmi untuk memastikan seluruh skin dan spesifikasi sesuai katalog.',
    },
    {
      step: '05',
      title: 'Serah Terima Data & Pengamanan Final',
      desc: 'Penyerahan data login kepada pembeli, penggantian email ke email pribadi pembeli, dan pengaktifan verifikasi dua langkah (2FA).',
    },
  ];

  const faqs = [
    {
      q: 'Bagaimana cara klaim garansi Anti Hack-Back?',
      a: 'Cukup kirimkan bukti kendala login serta nomor transaksi / kode akun Anda ke WhatsApp resmi Acursio. Tim kami akan melakukan investigasi dalam 1x24 jam dan memproses penggantian akun setara atau refund dana penuh.',
    },
    {
      q: 'Apakah email akun bisa diganti ke email saya sendiri?',
      a: 'Bisa. Seluruh akun yang dijual berstatus aman untuk diganti ke email dan nomor HP pribadi pembeli. Admin kami akan mendampingi proses perubahan hingga kode OTP masuk ke email Anda.',
    },
    {
      q: 'Metode pembayaran apa saja yang diterima?',
      a: 'Saat ini kami memproses transaksi melalui QRIS All Payment Indonesia (support BCA Mobile, Livin Mandiri, BRImo, BNI, GoPay, DANA, OVO, ShopeePay, LinkAja). Bukti pembayaran dikonfirmasi ke WhatsApp admin.',
    },
    {
      q: 'Berapa lama proses serah terima akun setelah transfer?',
      a: 'Proses serah terima berlangsung sekitar 5 hingga 15 menit setelah bukti pembayaran QRIS terkonfirmasi di WhatsApp admin.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} />
            <span>Protokol Keamanan Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-outfit leading-tight">
            Jaminan Akun & Keamanan Transaksi
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            Kepercayaan dan rasa tenang pelanggan adalah prioritas utama Acursio. Setiap transaksi jual beli akun game kami lindungi dengan garansi resmi dan SOP serah terima ketat.
          </p>
        </div>
      </section>

      {/* 4 Security Pillars */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-8 bg-[#0c101a] border border-[#1b2538] hover:border-blue-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-sky-400 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white font-outfit mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#172033] flex items-center gap-2 text-xs font-semibold text-sky-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>{item.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5-Step Verification Process */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-outfit">
            Tahapan Verifikasi Sebelum Akun Dijual
          </h2>
          <p className="mt-1 text-sm text-slate-400 font-medium">
            Setiap akun yang masuk ke katalog Acursio wajib lolos lima tahap uji kelayakan data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {verificationSteps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 bg-[#0b0f18] border border-[#192336] flex flex-col justify-between shadow-md"
            >
              <div>
                <span className="text-2xl font-black font-mono text-blue-500/60 block mb-2">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white font-outfit mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-outfit flex items-center gap-2">
            <HelpCircle size={24} className="text-blue-400" />
            <span>Pertanyaan Umum Keamanan & Garansi</span>
          </h2>
          <p className="mt-1 text-sm text-slate-400 font-medium">
            Hal-hal yang sering ditanyakan pembeli seputar jaminan akun dan proses klaim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-[#0c101a] border border-[#1b2538] shadow-md"
            >
              <h3 className="text-sm sm:text-base font-bold text-white font-outfit mb-2 flex items-start gap-2">
                <span className="text-sky-400 font-mono font-bold">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-center flex flex-col items-center justify-center shadow-xl shadow-blue-900/25">
          <h3 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
            Siap Memilih Akun Impian Bergaransi?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-md font-medium leading-relaxed">
            Jelajahi puluhan pilihan akun sultan Mobile Legends, Free Fire, PUBG, Genshin, dan E-Football dengan rasa aman.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/katalog"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md font-outfit"
            >
              Buka Katalog Akun Sekarang
            </Link>
            <a
              href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20ingin%20tanya%20seputar%20garansi%20akun`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all font-outfit flex items-center gap-1.5"
            >
              <PhoneCall size={14} />
              <span>Tanya Admin WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CustomerServiceButton />
    </main>
  );
}
