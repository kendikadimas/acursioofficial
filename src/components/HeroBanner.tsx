'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'JUAL BELI AKUN GAME SULTAN TERPERCAYA',
      highlight: '100% ANTI HACK BACK • DATA LENGKAP & AMAN',
      ctaText: 'LIHAT KATALOG AKUN',
      ctaLink: '#jubel',
      image: '/images/placeholder-1600x900.svg',
      badge: 'GARANSI RESMI',
    },
    {
      id: 2,
      title: 'KOLEKSI AKUN MOBILE LEGENDS, FF, PUBG, GENSHIN & E-FOOTBALL',
      highlight: 'SKIN COLLECTOR, LEGEND, EVO GUN & SQUAD SULTAN',
      ctaText: 'PILIH GAME FAVORIT',
      ctaLink: '#jubel',
      image: '/images/placeholder-1600x900.svg',
      badge: 'TERVERIFIKASI',
    },
    {
      id: 3,
      title: 'PEMBAYARAN MUDAH VIA QRIS ALL PAYMENT',
      highlight: 'BCA, MANDIRI, BRI, GOPAY, DANA • KONFIRMASI WHATSAPP',
      ctaText: 'ORDER AKUN SEKARANG',
      ctaLink: '#jubel',
      image: '/images/placeholder-1600x900.svg',
      badge: 'SERAH TERIMA KILAT',
    },
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-[#0b101c] via-[#070a12] to-[#04060a] shadow-2xl shadow-blue-950/40">
        
        {/* Background Image */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden">
          <Image
            src={active.image}
            alt={active.title}
            fill
            priority
            className="object-cover object-center transform transition-transform duration-700 ease-out scale-100 hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          {/* Dark Overlay with deep sapphire gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080d]/90 via-transparent to-[#06080d]/90" />

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-10 text-center z-10">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-sky-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
              <Shield size={14} className="text-sky-400" />
              <span>{active.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white max-w-4xl tracking-tight leading-snug drop-shadow-md font-outfit">
              {active.title}
            </h1>

            <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-sky-200 drop-shadow">
              {active.highlight}
            </p>

            {/* Click CTA Button */}
            <div className="mt-4 sm:mt-6">
              <a
                href={active.ctaLink}
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 font-outfit"
              >
                <span>{active.ctaText}</span>
                <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Security Guarantee Tag */}
            <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
              <Shield size={13} className="text-emerald-400" />
              <span>Garansi 100% Anti Hack-Back • Transaksi Akun Aman Terpercaya</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center border border-white/20 transition-all z-20"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center border border-white/20 transition-all z-20"
            aria-label="Slide selanjutnya"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="py-3 bg-[#080b12] flex items-center justify-center gap-2 border-t border-[#161c28]">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-blue-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Buka slide ke-${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
