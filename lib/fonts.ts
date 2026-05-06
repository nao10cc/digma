import { Shippori_Mincho_B1, Noto_Sans_JP, Cormorant_Garamond, Inter } from 'next/font/google';

export const shipporiMincho = Shippori_Mincho_B1({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shippori-mincho',
});

export const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
});

export const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
