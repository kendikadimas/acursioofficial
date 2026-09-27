import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Acursio ID - Jual Beli Akun Game Terpercaya ML, FF, Genshin & Lainnya',
  description: 'Acursio ID adalah marketplace resmi jual beli akun Mobile Legends, Free Fire, Genshin Impact, PUBG, dan E-Football. Garansi Anti Hack-Back 100% dan harga terbaik.',
  keywords: [
    'acursio',
    'acursio id',
    'acursio jubel',
    'jual beli akun game',
    'beli akun mobile legends',
    'akun free fire sultan',
    'akun pubg glacier',
    'akun genshin impact',
    'anti hack back',
  ],
  icons: {
    icon: '/acursio.webp',
    apple: '/acursio.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#f1f5f9] font-sans">
        {children}
      </body>
    </html>
  );
}
