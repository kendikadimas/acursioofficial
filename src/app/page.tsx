'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { ServiceGrid } from '@/components/ServiceGrid';
import { CharacterCollection } from '@/components/CharacterCollection';
import { SalesStats } from '@/components/SalesStats';
import { AccountCatalog } from '@/components/AccountCatalog';
import { ReviewsSection } from '@/components/ReviewsSection';
import { Footer } from '@/components/Footer';
import { AccountDetailModal } from '@/components/AccountDetailModal';
import { CheckoutModal } from '@/components/CheckoutModal';
import { LiveNotificationToast } from '@/components/LiveNotificationToast';
import { CustomerServiceButton } from '@/components/CustomerServiceButton';
import { GameAccount, GameCategory } from '@/types/account';
import { GameService } from '@/data/services';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'all'>('all');
  const [inspectAccount, setInspectAccount] = useState<GameAccount | null>(null);
  const [checkoutAccount, setCheckoutAccount] = useState<GameAccount | null>(null);

  // When a service card is clicked in "Pilihan Game Jual Beli Akun"
  const handleSelectService = (service: GameService) => {
    setSelectedCategory(service.slug as GameCategory);
    const jubelSection = document.getElementById('jubel');
    if (jubelSection) {
      jubelSection.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('jubel');
    }
  };

  // When a character card is clicked in "Jelajahi Koleksi Akun"
  const handleSelectCategory = (cat: GameCategory) => {
    setSelectedCategory(cat);
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

      {/* Jelajahi Koleksi Akun (Screenshot 5) */}
      <CharacterCollection 
        onSelectCategory={handleSelectCategory}
        activeCategory={selectedCategory}
      />

      {/* Statistik Penjualan (Screenshot 4) */}
      <SalesStats />

      {/* Jubel: Katalog Akun Game dengan Filter Sidebar (Screenshot 1) */}
      <AccountCatalog
        selectedCategory={selectedCategory}
        onSelectAccount={handleInspect}
        onInstantBuy={handleInstantBuy}
      />

      {/* Ulasan Pelanggan (Screenshot 4) */}
      <ReviewsSection />

      {/* Footer Lengkap */}
      <Footer />

      {/* Floating Elements from Screenshots */}
      <LiveNotificationToast />
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
