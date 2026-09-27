'use client';

import React, { useState, useMemo } from 'react';
import { GameAccount, GameCategory } from '@/types/account';
import { GAME_ACCOUNTS, AVAILABLE_SKINS_FILTER } from '@/data/accounts';
import { formatRupiah } from '@/data/payment';
import { 
  ShieldCheck, 
  Filter, 
  RotateCcw, 
  Sparkles, 
  Search, 
  Check, 
  Flame,
  ArrowUpDown,
  ShoppingBag
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
  // Filter states matching Screenshot 1
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

  return (
    <section id="jubel" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShoppingBag size={14} />
            <span>Katalog Jubel Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Jual Beli Akun Game Acursio
          </h2>
          <p className="mt-1 text-sm sm:text-base text-gray-400 font-medium">
            Koleksi akun sultan terverifikasi dengan garansi Anti Hack-Back 100% selamanya.
          </p>
        </div>

        {/* Category quick tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-[#151726] text-gray-400 hover:text-white hover:bg-[#1f2238] border border-[#272b42]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Catalog Layout matching Screenshot 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Filter Sidebar matching Screenshot 1 */}
        <div className="lg:col-span-1 rounded-2xl p-5 bg-[#25150c] border-2 border-orange-600/50 shadow-xl shadow-black/60 sticky top-24">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-orange-600/30">
            <h3 className="text-lg font-black text-white flex items-center gap-2 tracking-wide">
              <Filter size={18} className="text-orange-500" />
              <span>Filter</span>
            </h3>
            <button
              onClick={handleResetFilter}
              className="text-xs text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1 hover:underline"
              title="Reset semua filter"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Search input */}
            <div>
              <label htmlFor="search-input" className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-1.5">
                Cari Kode / Skin
              </label>
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  placeholder="e.g. COI #0016, Badang..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#160d07] border border-orange-900/60 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
                <Search size={15} className="absolute right-3 top-2.5 text-gray-500" />
              </div>
            </div>

            {/* Harga Minimal */}
            <div>
              <label htmlFor="min-price" className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-1.5">
                Harga Minimal
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2 text-xs font-bold text-orange-400">Rp</span>
                <input
                  id="min-price"
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full bg-[#160d07] border border-orange-900/60 focus:border-orange-500 rounded-xl pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>
            </div>

            {/* Harga Maksimal */}
            <div>
              <label htmlFor="max-price" className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-1.5">
                Harga Maksimal
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2 text-xs font-bold text-orange-400">Rp</span>
                <input
                  id="max-price"
                  type="number"
                  placeholder="Contoh: 1.000.000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-[#160d07] border border-orange-900/60 focus:border-orange-500 rounded-xl pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>
            </div>

            {/* Winrate Minimal */}
            <div>
              <label htmlFor="winrate-input" className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-1.5">
                Winrate Minimal (%)
              </label>
              <input
                id="winrate-input"
                type="number"
                placeholder="Contoh: 50"
                value={minWinrate}
                onChange={(e) => setMinWinrate(e.target.value)}
                className="w-full bg-[#160d07] border border-orange-900/60 focus:border-orange-500 rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 transition-colors"
              />
            </div>

            {/* Pilih Skin Dropdown */}
            <div>
              <label htmlFor="skin-select" className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-1.5">
                Pilih Skin
              </label>
              <select
                id="skin-select"
                value={selectedSkin}
                onChange={(e) => setSelectedSkin(e.target.value)}
                className="w-full bg-[#160d07] border border-orange-900/60 focus:border-orange-500 rounded-xl px-3 py-2 text-sm text-white transition-colors"
              >
                {AVAILABLE_SKINS_FILTER.map((skin) => (
                  <option key={skin} value={skin} className="bg-[#160d07] text-white">
                    {skin}
                  </option>
                ))}
              </select>
            </div>

            {/* Urutkan / Sort */}
            <div>
              <label htmlFor="sort-select" className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-1.5">
                Urutkan Berdasarkan
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#160d07] border border-orange-900/60 focus:border-orange-500 rounded-xl px-3 py-2 text-sm text-white transition-colors"
              >
                <option value="default" className="bg-[#160d07] text-white">Rekomendasi Acursio</option>
                <option value="price-asc" className="bg-[#160d07] text-white">Harga Termurah</option>
                <option value="price-desc" className="bg-[#160d07] text-white">Harga Tertinggi</option>
                <option value="winrate-desc" className="bg-[#160d07] text-white">Winrate Tertinggi</option>
              </select>
            </div>

            {/* Tombol Filter Orange matching Screenshot 1 */}
            <button
              onClick={() => {}}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ea580c] hover:from-[#ff6611] hover:to-[#f97316] text-white font-black text-sm tracking-wider uppercase shadow-lg shadow-orange-600/40 transition-all transform active:scale-95"
            >
              Filter ({filteredAccounts.length} Akun)
            </button>
          </div>
        </div>

        {/* Right Accounts Grid matching Screenshot 1 */}
        <div className="lg:col-span-3">
          
          {/* Header count info */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-sm font-bold text-gray-400">
              Menampilkan <span className="text-orange-400 font-extrabold">{filteredAccounts.length}</span> akun game siap beli
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck size={14} />
              Semua Akun Garansi Anti Hack-Back
            </span>
          </div>

          {/* Empty State */}
          {filteredAccounts.length === 0 ? (
            <div className="rounded-2xl p-12 bg-[#121420] border border-[#23263b] text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Tidak ada akun yang sesuai kriteria filter
              </h3>
              <p className="text-sm text-gray-400 max-w-md mb-6">
                Coba ubah harga minimal, maksimal, atau pilih opsi "Semua Game" untuk melihat koleksi lainnya.
              </p>
              <button
                onClick={handleResetFilter}
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-all"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            /* Product Grid matching Screenshot 1 */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredAccounts.map((acc) => (
                <div
                  key={acc.id}
                  className="group rounded-2xl overflow-hidden bg-[#131522] border-2 border-[#222538] hover:border-orange-500 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-orange-600/20"
                >
                  {/* Card Visual Header */}
                  <div className="relative w-full bg-gradient-to-b from-[#1d2030] to-[#0e1018] p-4 flex flex-col justify-between min-h-[220px]">
                    
                    {/* Top Badge: ANTI HACK BACK in Red with shield icon matching Screenshot 1 */}
                    <div className="flex items-center justify-between z-10">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                        <ShieldCheck size={13} className="text-white" />
                        <span>ANTI HACK BACK</span>
                      </div>

                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded">
                        {acc.gameTitle}
                      </span>
                    </div>

                    {/* Middle Graphic Spec Box matching Screenshot 1 */}
                    <div className="my-3 p-3 rounded-xl bg-black/70 border border-orange-500/20 backdrop-blur-xs flex flex-col items-center justify-center text-center">
                      <div className="text-xs font-black text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Flame size={12} className="text-orange-500" />
                        <span>{acc.specs.rank}</span>
                      </div>

                      {/* Highlighted specs pills matching Screenshot 1: 127 skins, 278 matches, 51% winrate, MAX emblems */}
                      <div className="grid grid-cols-4 gap-1.5 w-full mt-2 pt-2 border-t border-white/10 text-center">
                        <div>
                          <div className="text-xs font-black text-white">{acc.specs.totalSkins || '-'}</div>
                          <div className="text-[9px] text-gray-400 font-bold uppercase">Skins</div>
                        </div>
                        <div>
                          <div className="text-xs font-black text-white">{acc.specs.matches || '-'}</div>
                          <div className="text-[9px] text-gray-400 font-bold uppercase">Match</div>
                        </div>
                        <div>
                          <div className="text-xs font-black text-amber-400">
                            {acc.specs.winrate ? `${acc.specs.winrate}%` : '-'}
                          </div>
                          <div className="text-[9px] text-gray-400 font-bold uppercase">WR</div>
                        </div>
                        <div>
                          <div className="text-xs font-black text-emerald-400">{acc.specs.emblemStatus || 'FULL'}</div>
                          <div className="text-[9px] text-gray-400 font-bold uppercase">Emblem</div>
                        </div>
                      </div>
                    </div>

                    {/* Price banner inside card header matching Screenshot 1 */}
                    <div className="bg-gradient-to-r from-orange-600/90 to-amber-600/90 rounded-lg p-2 flex items-center justify-between text-white">
                      <div>
                        <div className="text-sm sm:text-base font-black tracking-tight">
                          {formatRupiah(acc.price)}
                        </div>
                        {acc.originalPrice && (
                          <div className="text-[10px] text-white/70 line-through -mt-0.5">
                            {formatRupiah(acc.originalPrice)}
                          </div>
                        )}
                      </div>
                      {acc.myrPrice && (
                        <div className="text-xs font-black bg-black/40 px-2 py-0.5 rounded text-amber-200">
                          {acc.myrPrice} RM
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Body matching Screenshot 1 */}
                  <div className="p-4 flex flex-col justify-between flex-1 bg-[#131522]">
                    {/* Tags matching Screenshot 1: #badang (collector) #lunox (legend) & +12 lainnya */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {acc.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Code & Title */}
                    <div>
                      <div className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider">
                        {acc.code}
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-2 mt-0.5 hover:text-orange-400 transition-colors">
                        {acc.title}
                      </h4>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-[#23263b] flex items-center gap-2">
                      <button
                        onClick={() => onSelectAccount(acc)}
                        className="flex-1 py-2 px-3 rounded-xl bg-[#1e2235] hover:bg-[#282d46] text-gray-200 hover:text-white font-bold text-xs transition-colors border border-[#2b304a]"
                      >
                        Detail Akun
                      </button>

                      <button
                        onClick={() => onInstantBuy(acc)}
                        className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs transition-all shadow-md shadow-orange-600/30 text-center"
                      >
                        Beli Akun
                      </button>
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
