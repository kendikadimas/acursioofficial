import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Acursio Official - Jual Beli Akun Game & Jasa Joki MLBB Terpercaya',
  description: 'Toko resmi jual beli akun game sultan Mobile Legends, Free Fire, PUBG, Genshin Impact, dan E-Football. Garansi Anti Hack-Back 100% dan joki rank pro player.',
  keywords: [
    'jual beli akun game',
    'acursio',
    'beli akun mobile legends',
    'joki rank mlbb',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c10] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}
