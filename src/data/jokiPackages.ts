export interface JokiRankTier {
  id: string;
  name: string;
  pricePerStar: number;
  starsPerDivision: number;
  divisions: number;
  game: 'mobile-legend' | 'free-fire';
  badgeColor: string;
}

export const MLBB_RANKS: JokiRankTier[] = [
  {
    id: 'master',
    name: 'Master',
    pricePerStar: 3500,
    starsPerDivision: 4,
    divisions: 4,
    game: 'mobile-legend',
    badgeColor: 'text-amber-500',
  },
  {
    id: 'grandmaster',
    name: 'Grandmaster',
    pricePerStar: 4500,
    starsPerDivision: 5,
    divisions: 5,
    game: 'mobile-legend',
    badgeColor: 'text-yellow-400',
  },
  {
    id: 'epic',
    name: 'Epic',
    pricePerStar: 6000,
    starsPerDivision: 5,
    divisions: 5,
    game: 'mobile-legend',
    badgeColor: 'text-teal-400',
  },
  {
    id: 'legend',
    name: 'Legend',
    pricePerStar: 8000,
    starsPerDivision: 5,
    divisions: 5,
    game: 'mobile-legend',
    badgeColor: 'text-amber-300',
  },
  {
    id: 'mythic',
    name: 'Mythic (0 - 24 Bintang)',
    pricePerStar: 14000,
    starsPerDivision: 25,
    divisions: 1,
    game: 'mobile-legend',
    badgeColor: 'text-red-400',
  },
  {
    id: 'mythical-honor',
    name: 'Mythical Honor (25 - 49 Bintang)',
    pricePerStar: 18000,
    starsPerDivision: 25,
    divisions: 1,
    game: 'mobile-legend',
    badgeColor: 'text-purple-400',
  },
  {
    id: 'mythical-glory',
    name: 'Mythical Glory (50 - 99 Bintang)',
    pricePerStar: 23000,
    starsPerDivision: 50,
    divisions: 1,
    game: 'mobile-legend',
    badgeColor: 'text-rose-500',
  },
  {
    id: 'mythical-immortal',
    name: 'Mythical Immortal (100+ Bintang)',
    pricePerStar: 30000,
    starsPerDivision: 1,
    divisions: 1,
    game: 'mobile-legend',
    badgeColor: 'text-amber-500',
  },
];

export const JOKI_GUARANTEES = [
  'Pro player mantan semi-pro & global rank terpercaya',
  'Winrate aman rata-rata 85% ke atas',
  'Pengerjaan cepat (10 - 25 bintang per hari)',
  'Anti minus / garansi penggantian bintang jika kalah',
  'Privasi akun dijamin 100% aman tanpa login aneh',
];
