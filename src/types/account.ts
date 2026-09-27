export type GameCategory = 
  | 'mobile-legend'
  | 'free-fire'
  | 'pubg'
  | 'genshin-impact'
  | 'e-football';

export interface GameAccount {
  id: string;
  code: string; // e.g. 'COI #0016', 'LOTM #13045'
  game: GameCategory;
  gameTitle: string;
  title: string;
  description?: string;
  price: number;
  originalPrice: number;
  myrPrice?: number;
  tags: string[];
  specs: {
    rank: string;
    totalHeroes?: number;
    totalSkins?: number;
    winrate?: number; // e.g. 51
    matches?: number;
    emblemStatus?: string; // e.g. 'MAX'
    server?: string;
    loginMethod: string;
    arLevel?: number; // for Genshin
    fiveStarChars?: number;
    teamStrength?: number; // for E-Football
    tierPubg?: string;
  };
  highlightSkins?: string[];
  antiHackBack: boolean;
  isSold?: boolean;
  featured?: boolean;
  thumbnailUrl: string;
  galleryImages: string[];
}

export interface FilterCriteria {
  minPrice: number | '';
  maxPrice: number | '';
  minWinrate: number | '';
  selectedSkin: string;
  game: GameCategory | 'all';
  sortBy: 'price-asc' | 'price-desc' | 'winrate-desc' | 'newest';
}

export interface JokiPackage {
  id: string;
  name: string;
  game: 'mobile-legend' | 'free-fire';
  fromRank: string;
  toRank: string;
  pricePerStar: number;
  packagePrice?: number;
  estimatedHours: string;
}

export interface ReviewItem {
  id: string;
  userName: string;
  game: string;
  accountCode: string;
  rating: number;
  comment: string;
  date: string;
}
