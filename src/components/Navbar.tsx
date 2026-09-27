'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AcursioLogo } from './AcursioLogo';
import { PAYMENT_CONFIG } from '@/data/payment';
import { 
  Home, 
  ShoppingBag, 
  Gamepad2, 
  ShieldCheck, 
  PhoneCall, 
  Menu, 
  X, 
  Headphones
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home, href: '/' },
    { id: 'game', label: 'Pilihan Game', icon: Gamepad2, href: '/game' },
    { id: 'katalog', label: 'Katalog Akun', icon: ShoppingBag, href: '/katalog', highlight: true },
    { id: 'jaminan', label: 'Jaminan Akun', icon: ShieldCheck, href: '/jaminan' },
    { id: 'kontak', label: 'Kontak', icon: PhoneCall, href: '/kontak' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#06080d]/95 backdrop-blur-md border-b border-[#1b2333] shadow-xl shadow-black/50 py-2.5' 
          : 'bg-[#080b12] border-b border-[#161c28] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
          aria-label="Kembali ke Beranda Acursio"
          onClick={() => setMobileMenuOpen(false)}
        >
          <AcursioLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                    : item.highlight
                    ? 'text-sky-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-[#111726]'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-sky-400'} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Quick CS Direct Button */}
          <a
            href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20ingin%20tanya%20akun%20game`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 bg-[#101726] hover:bg-[#162035] text-sky-400 hover:text-sky-300 border border-blue-500/30 px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-xs"
          >
            <Headphones size={15} />
            <span>FAST CS</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1 shadow-xs"
            aria-label="WhatsApp Admin"
          >
            <PhoneCall size={14} />
            <span>WA</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#111726] text-slate-200 hover:text-white border border-[#1e293b]"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06080d] border-b border-[#1b2333] px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-[#111726]'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-blue-400'} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#1b2333]">
            <a
              href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
            >
              <PhoneCall size={16} />
              <span>Chat WhatsApp Admin ({PAYMENT_CONFIG.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
