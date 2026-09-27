import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="id" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#f1f5f9] font-sans">
        {children}
      </body>
    </html>
  );
}
