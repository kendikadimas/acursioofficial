'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AcursioLogo } from './AcursioLogo';
import { PAYMENT_CONFIG } from '@/data/payment';
import { 
  Home, 
  ShoppingBag, 
  Gamepad2, 
  Info, 
  Menu, 
  X, 
  PhoneCall, 
  ChevronDown,
  ShieldCheck,
  Headphones
} from 'lucide-react';

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = 'beranda', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home, href: '#beranda' },
    { id: 'layanan', label: 'Pilihan Game', icon: Gamepad2, href: '#layanan' },
    { id: 'jubel', label: 'Katalog Akun', icon: ShoppingBag, href: '#jubel', highlight: true },
    { id: 'jaminan', label: 'Jaminan Akun', icon: ShieldCheck, href: '#jaminan' },
  ];

  const handleNavClick = (id: string, href: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
    setContactDropdownOpen(false);
  };

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
          href="#beranda" 
          onClick={() => handleNavClick('beranda', '#beranda')}
          className="flex items-center gap-2 group"
          aria-label="Kembali ke Beranda Acursio"
        >
          <AcursioLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive || item.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-[#111726]'
                }`}
              >
                <Icon size={16} className={isActive || item.highlight ? 'text-white' : 'text-blue-400'} />
                <span>{item.label}</span>
              </a>
            );
          })}

          {/* Kontak Dropdown */}
          <div className="relative">
            <button
              onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-[#111726] transition-all"
              aria-expanded={contactDropdownOpen}
              aria-haspopup="true"
            >
              <Info size={16} className="text-blue-400" />
              <span>Kontak</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${contactDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {contactDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#0c101a] border border-[#1e293b] shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 px-2">
                  Layanan Bantuan 24/7
                </div>
                
                <a
                  href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20butuh%20bantuan%20pembelian%20akun%20game`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#141b2a] text-slate-200 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <PhoneCall size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">WhatsApp Resmi</div>
                    <div className="text-xs text-slate-400">{PAYMENT_CONFIG.whatsappDisplay}</div>
                  </div>
                </a>

                <div className="mt-2 pt-2 border-t border-[#1b2333] flex items-center gap-2 px-2 text-[11px] text-slate-400">
                  <ShieldCheck size={14} className="text-blue-400" />
                  <span>Garansi Resmi Anti Hack-Back</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick CS Direct Button */}
          <a
            href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=Halo%20Admin%20Acursio,%20saya%20ingin%20tanya%20akun%20game`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 bg-[#101726] hover:bg-[#162035] text-sky-400 hover:text-sky-300 border border-blue-500/30 px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm"
          >
            <Headphones size={15} />
            <span>FAST RESPONSE</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
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
        <div className="md:hidden bg-[#06080d] border-b border-[#1b2333] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive || item.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-[#111726]'
                }`}
              >
                <Icon size={18} className={isActive || item.highlight ? 'text-white' : 'text-blue-400'} />
                <span>{item.label}</span>
              </a>
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
