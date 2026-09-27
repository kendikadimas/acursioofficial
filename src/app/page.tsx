'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { ServiceGrid } from '@/components/ServiceGrid';
import { SalesStats } from '@/components/SalesStats';
import { AccountCatalog } from '@/components/AccountCatalog';
import { Footer } from '@/components/Footer';
import { AccountDetailModal } from '@/components/AccountDetailModal';
import { CheckoutModal } from '@/components/CheckoutModal';
import { CustomerServiceButton } from '@/components/CustomerServiceButton';
import { GameAccount, GameCategory } from '@/types/account';
import { GameService } from '@/data/services';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'all'>('all');
  const [inspectAccount, setInspectAccount] = useState<GameAccount | null>(null);
  const [checkoutAccount, setCheckoutAccount] = useState<GameAccount | null>(null);

  // When a game card is clicked in "Pilihan Game Jual Beli Akun"
  const handleSelectService = (service: GameService) => {
    setSelectedCategory(service.slug as GameCategory);
    const jubelSection = document.getElementById('jubel');
    if (jubelSection) {
      jubelSection.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('jubel');
    }
  };

  // Open detail modal
  const handleInspect = (account: GameAccount) => {
    setInspectAccount(account);
  };

  // Open direct checkout modal
  const handleInstantBuy = (account: GameAccount) => {
    setCheckoutAccount(account);
  };

  return (
    <main className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative selection:bg-blue-600 selection:text-white">
      {/* Fixed Navbar */}
      <Navbar activeTab={activeTab} onNavigate={(tab) => setActiveTab(tab)} />

      {/* Hero Banner Carousel (Screenshot 2) */}
      <div id="beranda">
        <HeroBanner />
      </div>

      {/* Pilihan Game Jual Beli Akun (Screenshot 3) */}
      <ServiceGrid onSelectService={handleSelectService} />

      {/* Jaminan Transaksi & Keamanan Akun (Honest Guarantee Pillars) */}
      <SalesStats />

      {/* Jubel: Katalog Akun Game dengan Filter Sidebar (Screenshot 1) */}
      <AccountCatalog
        selectedCategory={selectedCategory}
        onSelectAccount={handleInspect}
        onInstantBuy={handleInstantBuy}
      />

      {/* Footer Lengkap */}
      <Footer />

      {/* Floating Fast CS WhatsApp Support */}
      <CustomerServiceButton />

      {/* Interactive Modals */}
      <AccountDetailModal
        account={inspectAccount}
        onClose={() => setInspectAccount(null)}
        onBuy={(acc) => {
          setInspectAccount(null);
          setCheckoutAccount(acc);
        }}
      />

      <CheckoutModal
        account={checkoutAccount}
        onClose={() => setCheckoutAccount(null)}
      />
    </main>
  );
}
