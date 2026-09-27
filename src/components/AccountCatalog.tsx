'use client';

import React, { useState, useMemo } from 'react';
import { GameAccount, GameCategory } from '@/types/account';
import { GAME_ACCOUNTS, AVAILABLE_SKINS_FILTER } from '@/data/accounts';
import { formatRupiah } from '@/data/payment';
import { 
  ShieldCheck, 
  RotateCcw, 
  Search, 
  ShoppingBag,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Flame,
  Check
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
  const [priceRange, setPriceRange] = useState<string>('all');
  const [minWinrate, setMinWinrate] = useState<string>('all');
  const [selectedSkin, setSelectedSkin] = useState<string>('Semua Skin');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'winrate-desc'>('default');
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);

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
    setPriceRange('all');
    setMinWinrate('all');
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

      // Price range filter
      if (priceRange === 'under-300') {
        if (acc.price >= 300000) return false;
      } else if (priceRange === '300-600') {
        if (acc.price < 300000 || acc.price > 600000) return false;
      } else if (priceRange === '600-1000') {
        if (acc.price < 600000 || acc.price > 1000000) return false;
      } else if (priceRange === 'above-1000') {
        if (acc.price <= 1000000) return false;
      }

      // Winrate filter
      if (minWinrate !== 'all') {
        const wrNum = Number(minWinrate);
        if (!acc.specs.winrate || acc.specs.winrate < wrNum) {
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
  }, [activeCategory, priceRange, minWinrate, selectedSkin, searchQuery, sortBy]);

  return (
    <section id="jubel" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header with generous breathing room */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
          <ShoppingBag size={14} />
          <span>Katalog Akun Terverifikasi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Koleksi Akun Game Sultan
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 font-medium">
          Seluruh akun siap pakai dengan garansi resmi 100% Anti Hack-Back dan perlindungan transaksi penuh.
        </p>
      </div>

      {/* Category Tabs: Clean, Spacious, Horizontal Scroll */}
      <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-1">
          {categoriesList.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-[#0c101a] text-slate-300 hover:text-white hover:bg-[#131a29] border border-[#1b2336]'
                }`}
              >
                <span>{cat.label}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean Modern Filter Toolbar */}
      <div className="mb-8 rounded-2xl bg-[#0c101a] border border-[#1b2336] p-3 sm:p-4 shadow-xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Cari kode akun atau nama skin (e.g. COI #0016, Badang)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#07090f] border border-[#192233] focus:border-blue-500 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Selectors in row */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Price Filter */}
            <div className="relative min-w-[130px] flex-1 sm:flex-none">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-[#07090f] border border-[#192233] focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-200 transition-colors cursor-pointer appearance-none pr-8"
              >
                <option value="all">Semua Harga</option>
                <option value="under-300">&lt; Rp 300 Ribu</option>
                <option value="300-600">Rp 300rb - 600rb</option>
                <option value="600-1000">Rp 600rb - 1 Juta</option>
                <option value="above-1000">&gt; Rp 1 Juta</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Winrate Filter */}
            <div className="relative min-w-[120px] flex-1 sm:flex-none">
              <select
                value={minWinrate}
                onChange={(e) => setMinWinrate(e.target.value)}
                className="w-full bg-[#07090f] border border-[#192233] focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-200 transition-colors cursor-pointer appearance-none pr-8"
              >
                <option value="all">Semua Winrate</option>
                <option value="50">WR &gt; 50%</option>
                <option value="55">WR &gt; 55%</option>
                <option value="60">WR &gt; 60%</option>
                <option value="65">WR &gt; 65%</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Skin Filter */}
            <div className="relative min-w-[140px] flex-1 sm:flex-none">
              <select
                value={selectedSkin}
                onChange={(e) => setSelectedSkin(e.target.value)}
                className="w-full bg-[#07090f] border border-[#192233] focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-200 transition-colors cursor-pointer appearance-none pr-8"
              >
                {AVAILABLE_SKINS_FILTER.map((skin) => (
                  <option key={skin} value={skin}>
                    {skin}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Sort Filter */}
            <div className="relative min-w-[140px] flex-1 sm:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#07090f] border border-[#192233] focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-200 transition-colors cursor-pointer appearance-none pr-8"
              >
                <option value="default">Urutan: Rekomendasi</option>
                <option value="price-asc">Harga: Termurah</option>
                <option value="price-desc">Harga: Tertinggi</option>
                <option value="winrate-desc">Winrate: Tertinggi</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Reset Button */}
            <button
              onClick={handleResetFilter}
              className="p-2.5 rounded-xl bg-[#121826] hover:bg-[#1a2336] text-slate-400 hover:text-white border border-[#1d273a] transition-colors"
              title="Reset Filter"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-3 pt-2.5 border-t border-[#172030] flex items-center justify-between text-xs text-slate-400 px-1">
          <div>
            Menampilkan <span className="text-white font-bold">{filteredAccounts.length}</span> akun game pilihan
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
            <ShieldCheck size={13} />
            <span>Garansi 100% Anti Hack-Back Resmi Acursio</span>
          </div>
        </div>
      </div>

      {/* Clean Grid of Account Cards */}
      {filteredAccounts.length === 0 ? (
        <div className="rounded-2xl p-12 bg-[#0c101a] border border-[#1b2336] text-center flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
            <Search size={26} />
          </div>
          <h3 className="text-base font-bold text-white mb-1">
            Tidak ada akun yang sesuai kriteria pencarian
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mb-5">
            Coba ubah rentang harga atau pilih kategori "Semua Game" untuk menemukan akun lainnya.
          </p>
          <button
            onClick={handleResetFilter}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/20"
          >
            Reset Semua Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map((acc) => (
            <div
              key={acc.id}
              className="group rounded-2xl overflow-hidden bg-[#0c101a] border border-[#1b2336] hover:border-blue-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between"
            >
              {/* Card Header Visual (Clean & Elegant Banner) */}
              <div className="relative h-44 w-full bg-gradient-to-br from-[#131b2c] via-[#0d1320] to-[#070a12] p-4 flex flex-col justify-between overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-radial from-blue-500/10 via-transparent to-transparent opacity-60" />
                
                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-red-500/30 text-red-400 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>Anti Hack-Back</span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-300 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-xs">
                    {acc.gameTitle}
                  </span>
                </div>

                {/* Center / Rank Highlight */}
                <div className="relative z-10 my-auto text-center py-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/70 border border-blue-500/25 text-amber-300 text-xs font-black uppercase tracking-wider shadow-sm">
                    <Flame size={13} className="text-blue-400" />
                    <span>{acc.specs.rank}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    {acc.code} • {acc.specs.loginMethod}
                  </div>
                </div>

                {/* Bottom of Visual Header: Price Preview Tag */}
                <div className="relative z-10 flex items-end justify-between pt-1">
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight drop-shadow-xs">
                      {formatRupiah(acc.price)}
                    </span>
                    {acc.originalPrice && (
                      <span className="ml-2 text-xs text-slate-400 line-through">
                        {formatRupiah(acc.originalPrice)}
                      </span>
                    )}
                  </div>

                  {acc.myrPrice && (
                    <span className="text-[11px] font-bold text-sky-300 bg-black/50 px-2 py-0.5 rounded-md border border-sky-500/20">
                      {acc.myrPrice} RM
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body: Clean & Breathable */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-[#0c101a]">
                
                {/* Title */}
                <div>
                  <h3 
                    onClick={() => onSelectAccount(acc)}
                    className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {acc.title}
                  </h3>

                  {/* Clean Specs Row (No chunky boxes!) */}
                  <div className="flex items-center gap-2.5 text-xs text-slate-300 py-3 my-3 border-y border-[#161e30]">
                    {acc.specs.totalSkins !== undefined && (
                      <div className="flex items-center gap-1">
                        <span className="font-extrabold text-white font-mono">{acc.specs.totalSkins}</span>
                        <span className="text-slate-400 text-[11px]">Skins</span>
                      </div>
                    )}

                    {acc.specs.matches !== undefined && (
                      <>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1">
                          <span className="font-extrabold text-white font-mono">{acc.specs.matches}</span>
                          <span className="text-slate-400 text-[11px]">Match</span>
                        </div>
                      </>
                    )}

                    {acc.specs.winrate !== undefined && (
                      <>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1">
                          <span className="font-extrabold text-sky-400 font-mono">{acc.specs.winrate}%</span>
                          <span className="text-slate-400 text-[11px]">WR</span>
                        </div>
                      </>
                    )}

                    {acc.specs.emblemStatus && (
                      <>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1">
                          <span className="font-extrabold text-emerald-400 text-[11px] uppercase font-mono">{acc.specs.emblemStatus}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Clean Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {acc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-slate-300 bg-[#121826] px-2.5 py-0.5 rounded-lg border border-[#1c263c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (Clean & Elegant) */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectAccount(acc)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#121826] hover:bg-[#1a2336] text-slate-300 hover:text-white font-semibold text-xs transition-colors border border-[#1e2a3f]"
                  >
                    Detail Akun
                  </button>

                  <button
                    onClick={() => onInstantBuy(acc)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-1.5"
                  >
                    <span>Beli Akun</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
