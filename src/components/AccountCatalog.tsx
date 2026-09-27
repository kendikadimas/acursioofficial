'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { GameAccount, GameCategory } from '@/types/account';
import { GAME_ACCOUNTS, AVAILABLE_SKINS_FILTER } from '@/data/accounts';
import { formatRupiah } from '@/data/payment';
import { 
  ShieldCheck, 
  Filter, 
  RotateCcw, 
  Search, 
  Flame, 
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

interface AccountCatalogProps {
  selectedCategory: GameCategory | 'all';
  onSelectAccount: (account: GameAccount) => void;
  onInstantBuy: (account: GameAccount) => void;
}

export const AccountCatalog: React.FC<AccountCatalogProps> = ({
  selectedCategory,
  onSelectAccount,
  onInstantBuy,
}) => {
  const [activeCategory, setActiveCategory] = useState<GameCategory | 'all'>(selectedCategory);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minWinrate, setMinWinrate] = useState<string>('');
  const [selectedSkin, setSelectedSkin] = useState<string>('Semua Skin');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'winrate-desc'>('default');

  // Sync category if parent updates
  React.useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  const categoriesList: { id: GameCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Semua Game' },
    { id: 'mobile-legend', label: 'Mobile Legends' },
    { id: 'free-fire', label: 'Free Fire' },
    { id: 'pubg', label: 'PUBG Mobile' },
    { id: 'genshin-impact', label: 'Genshin Impact' },
    { id: 'e-football', label: 'E-Football' },
  ];

  const handleResetFilter = () => {
    setMinPrice('');
    setMaxPrice('');
    setMinWinrate('');
    setSelectedSkin('Semua Skin');
    setSearchQuery('');
    setSortBy('default');
    setActiveCategory('all');
  };

  // Filtered & Sorted accounts
  const filteredAccounts = useMemo(() => {
    return GAME_ACCOUNTS.filter((acc) => {
      // Category filter
      if (activeCategory !== 'all' && acc.game !== activeCategory) {
        return false;
      }

      // Min Price
      if (minPrice && !isNaN(Number(minPrice)) && acc.price < Number(minPrice)) {
        return false;
      }

      // Max Price
      if (maxPrice && !isNaN(Number(maxPrice)) && acc.price > Number(maxPrice)) {
        return false;
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

  // Quick top row accounts (matching Screenshot 1: LOTM #13045, LOTM #13031, COI #0017)
  const quickAccounts = useMemo(() => {
    return GAME_ACCOUNTS.slice(3, 6);
  }, []);

  return (
    <section id="jubel" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
            Jual Beli Akun Game Acursio
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-400 font-medium">
            Koleksi akun sultan terverifikasi dengan garansi Anti Hack-Back 100% selamanya.
          </p>
        </div>

        {/* Category Tabs: Clean horizontal scroll */}
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

      {/* 2-Column Layout matching acursio.id Screenshot 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Column: Filter Box (matching Screenshot 1) */}
        <div className="lg:col-span-1 rounded-2xl p-5 bg-[#0b0f18] border border-[#192336] shadow-xl sticky top-24">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#162033]">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2 tracking-wide font-outfit">
              <Filter size={17} className="text-blue-400" />
              <span>Filter</span>
            </h3>
            <button
              onClick={handleResetFilter}
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 hover:underline"
              title="Reset semua filter"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Search */}
            <div>
              <label htmlFor="search-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Cari Kode / Skin
              </label>
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  placeholder="e.g. COI #0016, Badang..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                />
                <Search size={14} className="absolute right-3 top-2.5 text-slate-500" />
              </div>
            </div>

            {/* Harga Minimal */}
            <div>
              <label htmlFor="min-price" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Harga Minimal
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2 text-xs font-bold text-sky-400">Rp</span>
                <input
                  id="min-price"
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl pl-10 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors font-mono"
                />
              </div>
            </div>

            {/* Harga Maksimal */}
            <div>
              <label htmlFor="max-price" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Harga Maksimal
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2 text-xs font-bold text-sky-400">Rp</span>
                <input
                  id="max-price"
                  type="number"
                  placeholder="Contoh: 1.000.000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-[#07090f] border border-[#172133] focus:border-blue-500 rounded-xl pl-10 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors font-mono"
                />
              </div>
            </div>

            {/* Winrate Minimal */}
            <div>
              <label htmlFor="winrate-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Winrate Minimal (%)
              </label>
              <input
                id="winrate-input"
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

            {/* Tombol Terapkan Filter */}
            <button
              onClick={() => {
                const resultsEl = document.getElementById('catalog-results');
                if (resultsEl) {
                  resultsEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-blue-600/25 transition-all transform active:scale-98 font-outfit"
            >
              Terapkan Filter ({filteredAccounts.length} Akun)
            </button>
          </div>
        </div>

        {/* Right Column: Account Cards Grid (matching Screenshot 1) */}
        <div id="catalog-results" className="lg:col-span-3 space-y-6">
          
          {/* Quick Header Cards (matching Screenshot 1 top row: LOTM #13045, LOTM #13031, COI #0017) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickAccounts.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectAccount(item)}
                className="p-3 rounded-xl bg-[#0b0f18] border border-[#192336] hover:border-blue-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-sm"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-slate-300 group-hover:text-sky-400 transition-colors">
                    {item.code}
                  </div>
                  <div className="text-sm font-black text-white font-outfit mt-0.5">
                    {formatRupiah(item.price)}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-sky-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {item.specs.rank}
                </span>
              </div>
            ))}
          </div>

          {/* Header count info */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs sm:text-sm font-semibold text-slate-400">
              Menampilkan <span className="text-sky-400 font-extrabold font-mono">{filteredAccounts.length}</span> akun game siap beli
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck size={14} />
              Garansi 100% Anti Hack-Back
            </span>
          </div>

          {/* Empty State */}
          {filteredAccounts.length === 0 ? (
            <div className="rounded-2xl p-12 bg-[#0b0f18] border border-[#192336] text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                <Search size={26} />
              </div>
              <h3 className="text-base font-bold text-white mb-1 font-outfit">
                Tidak ada akun yang sesuai kriteria pencarian
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mb-5">
                Coba ubah filter atau klik tombol reset di bawah untuk melihat seluruh akun.
              </p>
              <button
                onClick={handleResetFilter}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            /* Product Grid: Image -> Title -> Desc -> Price -> Spek on click */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredAccounts.map((acc) => (
                <div
                  key={acc.id}
                  className="group rounded-2xl overflow-hidden bg-[#0c101a] border border-[#182235] hover:border-blue-500/80 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-blue-950/40"
                >
                  {/* 1. Image Container (Resolution Placeholder) */}
                  <div
                    onClick={() => onSelectAccount(acc)}
                    className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0e17] cursor-pointer"
                  >
                    <Image
                      src={acc.thumbnailUrl}
                      alt={acc.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm font-outfit">
                        <ShieldCheck size={11} className="text-white" />
                        <span>ANTI HACK BACK</span>
                      </div>

                      <span className="text-[10px] font-bold text-sky-300 bg-black/75 px-2 py-0.5 rounded border border-white/10 font-mono backdrop-blur-xs">
                        {acc.gameTitle}
                      </span>
                    </div>

                    {/* Bottom Code Tag */}
                    <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
                      <span className="text-[11px] font-black font-mono text-white bg-blue-600/90 px-2.5 py-0.5 rounded shadow-sm">
                        {acc.code}
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Title, Desc, Price & Actions */}
                  <div className="p-4 flex flex-col justify-between flex-1 bg-[#0c101a]">
                    <div>
                      {/* 2. Title Produk */}
                      <h3
                        onClick={() => onSelectAccount(acc)}
                        className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors cursor-pointer leading-snug font-outfit line-clamp-2"
                      >
                        {acc.title}
                      </h3>

                      {/* 3. Description */}
                      <p className="text-xs text-slate-400 line-clamp-2 font-medium leading-relaxed mt-2 mb-3">
                        {acc.description || `${acc.gameTitle} terawat dengan data bind aman dan garansi 100% Anti Hack-Back.`}
                      </p>
                    </div>

                    {/* 4. Harga & Spek on click */}
                    <div className="pt-3 border-t border-[#172033] mt-auto">
                      {/* Price tag */}
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="text-base sm:text-lg font-black text-white tracking-tight font-outfit">
                            {formatRupiah(acc.price)}
                          </div>
                          {acc.originalPrice && (
                            <div className="text-[11px] text-slate-500 line-through font-mono">
                              {formatRupiah(acc.originalPrice)}
                            </div>
                          )}
                        </div>

                        {acc.myrPrice && (
                          <span className="text-xs font-bold text-amber-300 font-mono bg-[#141b2a] px-2 py-0.5 rounded border border-amber-500/20">
                            {acc.myrPrice} RM
                          </span>
                        )}
                      </div>

                      {/* 5. Spek bisa dilihat setelah klik (Buttons) */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectAccount(acc)}
                          className="flex-1 py-2 px-3 rounded-xl bg-[#121826] hover:bg-[#1a2336] text-slate-300 hover:text-white font-semibold text-xs transition-colors border border-[#1e2a3f] text-center"
                        >
                          Lihat Spek
                        </button>

                        <button
                          onClick={() => onInstantBuy(acc)}
                          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/30 text-center font-outfit"
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
