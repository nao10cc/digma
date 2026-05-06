import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

const services = [
  {
    no: '01',
    title: '経営課題の整理・打ち手設計',
    body: '経営者との対話を通じて、事業や組織の現状、今後の構想、抱えている悩みやボトルネックを整理します。表面的な相談内容の背景にある本質的な課題を明確にし、何を優先して解くべきか、どのような打ち手が最も効果的かを設計します。',
  },
  {
    no: '02',
    title: '専門人材・支援会社との接続',
    body: '課題に応じて、経営、事業開発、DX、CX、IT、人材、投資、M&Aなどの領域に強みを持つ専門人材や支援会社を接続します。単なる紹介ではなく、課題の整理と打ち手設計を踏まえたうえで、必要なプレイヤーや機能を組み合わせ、実行可能な支援体制を組成します。',
  },
  {
    no: '03',
    title: '実行伴走支援',
    body: '設計した打ち手を実行に移すため、マーケティング、DX推進、IT開発、広報、採用、事業開発など、各領域の実行支援を行います。動画制作やYouTube運用、広報支援なども、経営課題に応じて提供するソリューションの一例です。',
  },
  {
    no: '04',
    title: '事業提携・M&A・資本戦略支援',
    body: '経営者との継続的な接点の中で見えてくる、提携、共創、M&A、事業承継、資本提携などの可能性を具体的な機会へつなげます。単発の案件処理ではなく、企業の成長フェーズに応じて、より大きな事業成長や資本戦略にも接続していくことを目指します。',
  },
];

export function Service() {
  return (
    <section id="service" className="py-24 md:py-40">
      <Container>
        <FadeIn>
          <SectionHeading number="03" english="Service" japanese="提供サービス" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {services.map((s, i) => (
            <FadeIn key={s.no} delay={i * 100}>
              <article>
                <div
                  className="text-5xl text-rokushou mb-6"
                  style={{ fontFamily: 'var(--font-serif-en)' }}
                >
                  {s.no}
                </div>
                <h3
                  className="text-xl md:text-2xl text-navy mb-6 leading-[1.6]"
                  style={{ fontFamily: 'var(--font-serif-jp)' }}
                >
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.95] text-ink">{s.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
