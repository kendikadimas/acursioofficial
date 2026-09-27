'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { GameAccount } from '@/types/account';
import { formatRupiah } from '@/data/payment';
import { 
  X, 
  ShieldCheck, 
  Flame, 
  Check, 
  ShoppingBag, 
  Lock, 
  Server, 
  Award
} from 'lucide-react';

interface AccountDetailModalProps {
  account: GameAccount | null;
  onClose: () => void;
  onBuy: (account: GameAccount) => void;
}

export const AccountDetailModal: React.FC<AccountDetailModalProps> = ({
  account,
  onClose,
  onBuy,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!account) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0c101a] border border-[#1e293b] shadow-2xl p-5 sm:p-7 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#131a29] hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
          aria-label="Tutup detail akun"
        >
          <X size={20} />
        </button>

        {/* Product Image Preview */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#070a12] mb-4 border border-[#1b2336]">
          <Image
            src={account.thumbnailUrl}
            alt={account.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>

        {/* Header Tags & Code */}
        <div className="flex flex-wrap items-center gap-2 mb-2 pr-8">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-sm font-outfit">
            <ShieldCheck size={14} />
            <span>ANTI HACK BACK</span>
          </div>

          <span className="px-2.5 py-1 rounded-md bg-[#131a29] text-sky-400 font-mono text-xs font-black uppercase tracking-wider border border-blue-500/20">
            {account.code}
          </span>

          <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
            {account.gameTitle}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug font-outfit">
          {account.title}
        </h3>
        {account.description && (
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            {account.description}
          </p>
        )}

        {/* Price & Strikethrough Box */}
        <div className="my-4 p-4 rounded-2xl bg-gradient-to-r from-blue-600/15 via-[#101625] to-[#101625] border border-blue-500/30 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Harga Spesial</div>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">
              {formatRupiah(account.price)}
            </div>
            {account.originalPrice && (
              <div className="text-xs text-slate-400 line-through">
                Harga Normal: {formatRupiah(account.originalPrice)}
              </div>
            )}
          </div>

          {account.myrPrice && (
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Tersedia untuk MYR</div>
              <div className="text-sm sm:text-base font-black text-amber-300 bg-black/50 px-3 py-1 rounded-lg border border-amber-500/30">
                {account.myrPrice} RM
              </div>
            </div>
          )}
        </div>

        {/* Main Stats Grid */}
        <div className="mb-5">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Award size={15} className="text-blue-400" />
            <span>Spesifikasi Utama Akun</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
              <div className="text-xs text-slate-400 font-bold uppercase">Tier / Rank</div>
              <div className="text-sm font-black text-amber-300 mt-1 flex items-center justify-center gap-1">
                <Flame size={14} className="text-blue-400" />
                <span>{account.specs.rank}</span>
              </div>
            </div>

            {account.specs.totalSkins !== undefined && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Total Skin</div>
                <div className="text-sm font-black text-white mt-1">
                  {account.specs.totalSkins} Skin
                </div>
              </div>
            )}

            {account.specs.totalHeroes !== undefined && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Total Hero</div>
                <div className="text-sm font-black text-white mt-1">
                  {account.specs.totalHeroes} Hero
                </div>
              </div>
            )}

            {account.specs.winrate !== undefined && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Winrate Akun</div>
                <div className="text-sm font-black text-emerald-400 mt-1">
                  {account.specs.winrate}%
                </div>
              </div>
            )}

            {account.specs.matches !== undefined && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Total Match</div>
                <div className="text-sm font-black text-white mt-1">
                  {account.specs.matches} Match
                </div>
              </div>
            )}

            {account.specs.emblemStatus && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Status Emblem</div>
                <div className="text-sm font-black text-amber-300 mt-1">
                  {account.specs.emblemStatus}
                </div>
              </div>
            )}

            {account.specs.arLevel !== undefined && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Adventure Rank</div>
                <div className="text-sm font-black text-sky-400 mt-1">
                  AR {account.specs.arLevel}
                </div>
              </div>
            )}

            {account.specs.teamStrength !== undefined && (
              <div className="p-3 rounded-xl bg-[#101524] border border-[#1b2336] text-center">
                <div className="text-xs text-slate-400 font-bold uppercase">Team Strength</div>
                <div className="text-sm font-black text-blue-400 mt-1">
                  {account.specs.teamStrength}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Highlight Skins / Characters */}
        {account.highlightSkins && account.highlightSkins.length > 0 && (
          <div className="mb-5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award size={15} className="text-blue-400" />
              <span>Daftar Skin / Item Eksklusif Terkunci:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {account.highlightSkins.map((skin, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#101524] border border-[#1b2336] text-xs font-semibold text-slate-200"
                >
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>{skin}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security & Login Info */}
        <div className="p-4 rounded-2xl bg-[#0f1422] border border-[#1d273c] space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Server size={15} className="text-blue-400" />
            <span>Server: <span className="text-white">{account.specs.server || 'Server Indonesia Resmi'}</span></span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Lock size={15} className="text-blue-400" />
            <span>Status Bind: <span className="text-emerald-400">{account.specs.loginMethod}</span></span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <ShieldCheck size={15} className="text-blue-400" />
            <span>Garansi Acursio: <span className="text-amber-300">Garansi Akun Aman 100% Anti Hack-Back</span></span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-[#131a29] hover:bg-[#1a2336] text-slate-300 hover:text-white font-bold text-sm transition-colors border border-[#1f2b42]"
          >
            Tutup
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBuy(account);
            }}
            className="flex-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all transform active:scale-98"
          >
            <ShoppingBag size={17} />
            <span>Lanjut ke Pembayaran QRIS</span>
          </button>
        </div>
      </div>
    </div>
  );
};
