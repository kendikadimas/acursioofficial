export interface GameService {
  id: string;
  name: string;
  publisher: string;
  slug: string;
  badgeText?: string;
  shortDesc: string;
  countAvailable: number;
}

export const GAME_SERVICES: GameService[] = [
  {
    id: 'svc-ml',
    name: 'Mobile Legend',
    publisher: 'Moonton',
    slug: 'mobile-legend',
    badgeText: 'Paling Laris',
    shortDesc: 'Akun MLBB Sultan, skin Collector, Legend, KOF, dan Aspirants bergaransi Anti Hack-Back.',
    countAvailable: 24,
  },
  {
    id: 'svc-ff',
    name: 'Free Fire',
    publisher: 'Garena',
    slug: 'free-fire',
    badgeText: 'Old Season',
    shortDesc: 'Akun FF Old Season 2, bundle Cobra, SG Rapper Ungu, dan senjata Evo Gun Max.',
    countAvailable: 18,
  },
  {
    id: 'svc-pubg',
    name: 'PUBG Mobile',
    publisher: 'Tencent',
    slug: 'pubg',
    badgeText: 'X-Suit Pharaoh',
    shortDesc: 'Koleksi akun PUBG Mobile Pharaoh X-Suit level 6, M416 Glacier, dan gelar Conqueror.',
    countAvailable: 12,
  },
  {
    id: 'svc-genshin',
    name: 'Genshin Impact',
    publisher: 'Mihoyo',
    slug: 'genshin-impact',
    badgeText: 'Karakter B5',
    shortDesc: 'Akun Genshin Impact AR 58+, C6 R5 Sultan, F2P terawat siap Spiral Abyss.',
    countAvailable: 15,
  },
  {
    id: 'svc-efootball',
    name: 'E-Football',
    publisher: 'Konami',
    slug: 'e-football',
    badgeText: 'Squad 3150+',
    shortDesc: 'Akun eFootball 2026 tim impian, Big Time Lionel Messi, dan Booster Epic Johan Cruyff.',
    countAvailable: 9,
  },
];
