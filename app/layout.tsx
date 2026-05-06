import type { Metadata } from 'next';
import { shipporiMincho, notoSansJp, cormorantGaramond, inter } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '株式会社Digma | 経営者の問いを整理し、次の一手を形にする',
    template: '%s | 株式会社Digma',
  },
  description:
    '株式会社Digmaは、経営者が抱える多様な経営課題に対し、課題の整理、打ち手の設計、必要な専門人材・支援会社との接続までを一気通貫で支援する、統合型の経営支援会社です。',
  keywords: ['経営支援', 'コンサルティング', '事業開発', 'DX', 'M&A', 'Z-EN', 'Digma'],
  openGraph: {
    title: '株式会社Digma',
    description:
      '人と事業のあいだに埋もれている価値を掘り起こし、次の成長が自然に立ち上がる構造をつくる。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社Digma',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Digma',
    description:
      '人と事業のあいだに埋もれている価値を掘り起こし、次の成長が自然に立ち上がる構造をつくる。',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '株式会社Digma',
    description: '統合型経営支援会社',
    foundingDate: '2026-02-21',
    founder: {
      '@type': 'Person',
      name: '片桐 尚基',
    },
    address: {
      '@type': 'PostalAddress',
      postalCode: '183-0034',
      addressCountry: 'JP',
      addressRegion: '東京都',
      addressLocality: '府中市',
      streetAddress: '住吉町3丁目30-7',
    },
    email: 'info@digma.co.jp',
    sameAs: ['https://zen-bizonline.com/'],
  };

  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJp.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
