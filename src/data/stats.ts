export interface GameSalesStat {
  id: string;
  gameName: string;
  count: number;
  countDisplay: string;
  colorDot: string;
}

export const SALES_STATS = {
  totalSold: 30207,
  totalSoldDisplay: '30.207+',
  subtitle: 'Bukti kepercayaan ribuan pelanggan kami.',
  categories: [
    {
      id: 'ml',
      gameName: 'Mobile Legend',
      count: 21199,
      countDisplay: '21.199',
      colorDot: '#3b82f6', // blue dot from screenshot
    },
    {
      id: 'ff',
      gameName: 'Free Fire',
      count: 8225,
      countDisplay: '8.225',
      colorDot: '#f97316', // orange dot from screenshot
    },
    {
      id: 'pubg',
      gameName: 'PUBG Mobile',
      count: 354,
      countDisplay: '354',
      colorDot: '#10b981', // green dot from screenshot
    },
    {
      id: 'genshin',
      gameName: 'Genshin Impact',
      count: 211,
      countDisplay: '211',
      colorDot: '#6366f1', // purple/indigo dot from screenshot
    },
    {
      id: 'efootball',
      gameName: 'E-Football',
      count: 218,
      countDisplay: '218',
      colorDot: '#0ea5e9', // cyan dot from screenshot
    },
  ],
};
