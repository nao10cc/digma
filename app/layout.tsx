import type { Metadata } from 'next';
import { shipporiMincho, notoSansJp, cormorantGaramond, inter } from '@/lib/fonts';
import './globals.css';

const SITE_URL = 'https://digma.co.jp';
const SITE_NAME = '株式会社Digma';
const SITE_TAGLINE = '人と事業のあいだに、まだ見つかっていない価値がある。';
const SITE_DESCRIPTION =
  '株式会社Digmaは、経営者の問いを整理し、課題設計から専門人材・支援会社との接続、実行支援まで一気通貫で伴走する統合型の経営支援会社です。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    '株式会社Digma',
    'Digma',
    '経営支援',
    'コンサルティング',
    '事業開発',
    'DX',
    'CX',
    'M&A',
    '事業承継',
    '資本戦略',
    '経営者プラットフォーム',
    'Z-EN',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'Digma',
    url: SITE_URL,
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
