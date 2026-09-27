'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { GameAccount, GameCategory } from '@/types/account';
import { GAME_ACCOUNTS, AVAILABLE_SKINS_FILTER } from '@/data/accounts';
import { formatRupiah } from '@/data/payment';
import { 
  Search, 
  RotateCcw, 
  ShieldCheck, 
  Filter,
  Eye,
  ShoppingCart
} from 'lucide-react';

interface AccountCatalogProps {
  onSelectAccount: (account: GameAccount) => void;
  onInstantBuy: (account: GameAccount) => void;
  selectedCategory?: GameCategory | 'all';
}

export const AccountCatalog: React.FC<AccountCatalogProps> = ({ 
  onSelectAccount,
  onInstantBuy,
  selectedCategory = 'all' 
}) => {
  const [activeCategory, setActiveCategory] = useState<GameCategory | 'all'>(selectedCategory);

  // Sync state if selectedCategory prop changes
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minWinrate, setMinWinrate] = useState<string>('');
  const [selectedSkin, setSelectedSkin] = useState<string>('Semua Skin');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'winrate-desc'>('default');

  // Categories list
  const categoriesList: { id: GameCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Semua Game' },
    { id: 'mobile-legend', label: 'Mobile Legends' },
    { id: 'free-fire', label: 'Free Fire' },
    { id: 'pubg', label: 'PUBG Mobile' },
    { id: 'genshin-impact', label: 'Genshin Impact' },
    { id: 'e-football', label: 'E-Football' },
  ];

  // Reset all filters
  const handleResetFilter = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setMinPrice('');
    setMaxPrice('');
    setMinWinrate('');
    setSelectedSkin('Semua Skin');
    setSortBy('default');
  };

  // Filtered & Sorted accounts
  const filteredAccounts = useMemo(() => {
    return GAME_ACCOUNTS.filter((acc) => {
      // Category Filter
      if (activeCategory !== 'all' && acc.game !== activeCategory) {
        return false;
      }

      // Min Price
      if (minPrice && !isNaN(Number(minPrice))) {
        if (acc.price < Number(minPrice)) {
          return false;
        }
      }

      // Max Price
      if (maxPrice && !isNaN(Number(maxPrice))) {
        if (acc.price > Number(maxPrice)) {
          return false;
        }
      }

      // Min Winrate
      if (minWinrate && !isNaN(Number(minWinrate))) {
        if (!acc.specs.winrate || acc.specs.winrate < Number(minWinrate)) {
          return false;
        }
      }

      // Skin Filter
      if (selectedSkin !== 'Semua Skin') {
        const skinLower = selectedSkin.toLowerCase();
        const hasTag = acc.tags.some((t) => t.toLowerCase().includes(skinLower));
        const hasHighlight = acc.highlightSkins?.some((s) => s.toLowerCase().includes(skinLower));
        const hasTitle = acc.title.toLowerCase().includes(skinLower);
        if (!hasTag && !hasHighlight && !hasTitle) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchCode = acc.code.toLowerCase().includes(query);
        const matchTitle = acc.title.toLowerCase().includes(query);
        const matchTags = acc.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchCode && !matchTitle && !matchTags) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'winrate-desc') return (b.specs.winrate || 0) - (a.specs.winrate || 0);
      return 0; // default
    });
  }, [activeCategory, minPrice, maxPrice, minWinrate, selectedSkin, searchQuery, sortBy]);

  return (
    <section id="jubel" className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-outfit">
            Katalog Akun Game
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-400 font-medium">
            Pilihan akun game terverifikasi dengan jaminan 100% Anti Hack-Back resmi Acursio.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-[#0d121c] text-slate-400 hover:text-white hover:bg-[#131b2a] border border-[#1b2538]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Clean Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Column: Filter Sidebar */}
        <div className="lg:col-span-1 rounded-2xl p-5 bg-[#0b0f18] border border-[#182236] shadow-xl sticky top-24">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#162033]">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2 tracking-wide font-outfit uppercase">
              <Filter size={16} className="text-sky-400" />
              <span>Filter Akun</span>
            </h3>
            <button
              onClick={handleResetFilter}
              className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition-colors"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Search Input */}
            <div>
              <label htmlFor="search-account" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Cari Kode / Skin
              </label>
              <div className="relative">
                <input
                  id="search-account"
                  type="text"
                  placeholder="e.g. COI #0016, Badang..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl pl-3.5 pr-9 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                />
                <Search size={15} className="absolute right-3 top-2.5 text-slate-400" />
              </div>
            </div>

            {/* Harga Minimal */}
            <div>
              <label htmlFor="min-price" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Harga Minimal
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-xs font-semibold text-slate-400 font-mono">Rp</span>
                <input
                  id="min-price"
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors font-mono"
                />
              </div>
            </div>

            {/* Harga Maksimal */}
            <div>
              <label htmlFor="max-price" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Harga Maksimal
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-xs font-semibold text-slate-400 font-mono">Rp</span>
                <input
                  id="max-price"
                  type="number"
                  placeholder="contoh: 1.000.000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors font-mono"
                />
              </div>
            </div>

            {/* Winrate Minimal */}
            <div>
              <label htmlFor="min-wr" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Winrate Minimal (%)
              </label>
              <input
                id="min-wr"
                type="number"
                placeholder="Contoh: 50"
                value={minWinrate}
                onChange={(e) => setMinWinrate(e.target.value)}
                className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors font-mono"
              />
            </div>

            {/* Pilih Skin Dropdown */}
            <div>
              <label htmlFor="skin-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Pilih Skin
              </label>
              <select
                id="skin-select"
                value={selectedSkin}
                onChange={(e) => setSelectedSkin(e.target.value)}
                className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl px-3 py-2 text-xs sm:text-sm text-white transition-colors"
              >
                {AVAILABLE_SKINS_FILTER.map((skin) => (
                  <option key={skin} value={skin} className="bg-[#0b0f18] text-white">
                    {skin}
                  </option>
                ))}
              </select>
            </div>

            {/* Urutkan / Sort */}
            <div>
              <label htmlFor="sort-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Urutkan Berdasarkan
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl px-3 py-2 text-xs sm:text-sm text-white transition-colors"
              >
                <option value="default" className="bg-[#0b0f18] text-white">Rekomendasi Acursio</option>
                <option value="price-asc" className="bg-[#0b0f18] text-white">Harga Termurah</option>
                <option value="price-desc" className="bg-[#0b0f18] text-white">Harga Tertinggi</option>
                <option value="winrate-desc" className="bg-[#0b0f18] text-white">Winrate Tertinggi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: Account Cards Grid */}
        <div id="catalog-results" className="lg:col-span-3 space-y-5">
          
          {/* Header count info */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs sm:text-sm font-semibold text-slate-400">
              Menampilkan <span className="text-sky-400 font-extrabold font-mono">{filteredAccounts.length}</span> akun game siap beli
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 font-outfit">
              <ShieldCheck size={15} />
              <span>Garansi 100% Anti Hack-Back</span>
            </span>
          </div>

          {/* Empty State */}
          {filteredAccounts.length === 0 ? (
            <div className="rounded-2xl p-12 bg-[#0b0f18] border border-[#182236] text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-sky-400 flex items-center justify-center mb-3">
                <Search size={24} />
              </div>
              <h3 className="text-base font-bold text-white mb-1 font-outfit">
                Tidak ada akun yang sesuai kriteria
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mb-5">
                Coba ubah kata kunci atau klik tombol reset di bawah untuk melihat semua akun.
              </p>
              <button
                onClick={handleResetFilter}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            /* Clean Product Grid: Image -> Title -> Desc -> Price -> Spek on click */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {filteredAccounts.map((acc) => (
                <div
                  key={acc.id}
                  className="group rounded-2xl overflow-hidden bg-[#0c101a] border border-[#182236] hover:border-blue-500/80 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-blue-950/30"
                >
                  {/* 1. Image Container (Clean 800x600 Placeholder) */}
                  <div
                    onClick={() => onSelectAccount(acc)}
                    className="relative w-full aspect-[16/10] overflow-hidden bg-[#090d16] cursor-pointer"
                  >
                    <Image
                      src={acc.thumbnailUrl}
                      alt={acc.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Clean Subtle Top Tags */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-extrabold text-sky-300 bg-slate-950/85 px-2.5 py-0.5 rounded-md border border-sky-500/20 backdrop-blur-xs font-mono uppercase tracking-wider">
                        {acc.code}
                      </span>

                      <span className="text-[10px] font-bold text-slate-300 bg-black/80 px-2 py-0.5 rounded-md border border-white/10 font-outfit backdrop-blur-xs">
                        {acc.gameTitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Title, Desc, Price & Actions */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-[#0c101a]">
                    <div>
                      {/* 2. Title Produk */}
                      <h3
                        onClick={() => onSelectAccount(acc)}
                        className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer leading-snug font-outfit line-clamp-2"
                      >
                        {acc.title}
                      </h3>

                      {/* 3. Description */}
                      <p className="text-xs text-slate-400 line-clamp-2 font-normal leading-relaxed mt-2 mb-4">
                        {acc.description || `${acc.gameTitle} terawat dengan data bind aman dan garansi 100% Anti Hack-Back.`}
                      </p>
                    </div>

                    {/* 4. Harga & Spek on click */}
                    <div className="pt-3.5 border-t border-[#172033] mt-auto">
                      {/* Price row */}
                      <div className="flex items-baseline justify-between mb-3.5">
                        <div>
                          <div className="text-base sm:text-lg font-black text-white tracking-tight font-outfit">
                            {formatRupiah(acc.price)}
                          </div>
                          {acc.originalPrice && (
                            <div className="text-[11px] text-slate-500 line-through font-mono mt-0.5">
                              {formatRupiah(acc.originalPrice)}
                            </div>
                          )}
                        </div>

                        {acc.myrPrice && (
                          <span className="text-[11px] font-bold text-amber-300 font-mono bg-[#141b2a] px-2 py-0.5 rounded border border-amber-500/20">
                            {acc.myrPrice} RM
                          </span>
                        )}
                      </div>

                      {/* 5. Spek bisa dilihat setelah klik (Clean Buttons) */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectAccount(acc)}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-[#121826] hover:bg-[#1a2336] text-slate-300 hover:text-white font-semibold text-xs transition-colors border border-slate-700/80 text-center"
                        >
                          Lihat Spek
                        </button>

                        <button
                          onClick={() => onInstantBuy(acc)}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors text-center font-outfit"
                        >
                          Beli Akun
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
