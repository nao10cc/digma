import { ReactNode } from 'react';
import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

const rows: Array<[string, ReactNode]> = [
  ['会社名', '株式会社Digma'],
  ['代表取締役', '片桐 尚基'],
  ['設立日', '2026年2月21日'],
  ['資本金', '500万円'],
  ['所在地', '〒183-0034 東京都府中市住吉町3丁目30-7'],
  [
    '事業内容',
    '統合型経営支援事業 / 経営者向けプラットフォーム「Z-EN」の運営 / 専門人材・支援会社接続支援 / 事業提携・M&A支援',
  ],
  ['運営メディア', 'Z-EN'],
  [
    'URL',
    <a
      key="url"
      href="https://zen-bizonline.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-rokushou hover:text-navy transition-colors"
    >
      https://zen-bizonline.com/
    </a>,
  ],
];

export function Company() {
  return (
    <section id="company" className="py-24 md:py-40">
      <Container>
        <FadeIn>
          <SectionHeading number="07" english="Company" japanese="会社情報" />
        </FadeIn>

        <FadeIn delay={200}>
          <dl className="divide-y divide-rule">
            {rows.map(([k, v]) => (
              <div
                key={String(k)}
                className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-6 py-6"
              >
                <dt
                  className="text-sm text-ink-soft"
                  style={{ fontFamily: 'var(--font-serif-jp)' }}
                >
                  {k}
                </dt>
                <dd className="text-[15px] leading-[1.9] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </section>
  );
}
