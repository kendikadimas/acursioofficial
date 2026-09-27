'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AccountCatalog } from '@/components/AccountCatalog';
import { AccountDetailModal } from '@/components/AccountDetailModal';
import { CheckoutModal } from '@/components/CheckoutModal';
import { CustomerServiceButton } from '@/components/CustomerServiceButton';
import { GameAccount, GameCategory } from '@/types/account';
import { ShoppingBag } from 'lucide-react';

function KatalogContent() {
  const searchParams = useSearchParams();
  const gameParam = searchParams.get('game') as GameCategory | null;
  const initialCategory: GameCategory | 'all' = gameParam || 'all';

  const [inspectAccount, setInspectAccount] = useState<GameAccount | null>(null);
  const [checkoutAccount, setCheckoutAccount] = useState<GameAccount | null>(null);

  return (
    <div className="pt-24 pb-12">
      {/* Catalog View */}
      <AccountCatalog
        selectedCategory={initialCategory}
        onSelectAccount={(acc) => setInspectAccount(acc)}
        onInstantBuy={(acc) => setCheckoutAccount(acc)}
      />

      {/* Account Detail Modal (All specs visible on click) */}
      <AccountDetailModal
        account={inspectAccount}
        onClose={() => setInspectAccount(null)}
        onBuy={(acc) => {
          setInspectAccount(null);
          setCheckoutAccount(acc);
        }}
      />

      {/* Checkout QRIS Modal */}
      <CheckoutModal
        account={checkoutAccount}
        onClose={() => setCheckoutAccount(null)}
      />
    </div>
  );
}

export default function KatalogPage() {
  return (
    <main className="min-h-screen bg-[#06080d] text-[#f1f5f9] relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      <Suspense fallback={
        <div className="pt-36 pb-20 text-center text-slate-400">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin mx-auto mb-3" />
          <p className="text-sm font-semibold">Memuat Katalog Akun...</p>
        </div>
      }>
        <KatalogContent />
      </Suspense>

      <Footer />
      <CustomerServiceButton />
    </main>
  );
}
