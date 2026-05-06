import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

const strengths = [
  {
    title: '上流から課題を整理できる',
    body: '経営者の相談内容をそのまま施策に落とすのではなく、背景にある本質的な課題を整理し、優先順位と打ち手を設計します。',
  },
  {
    title: '領域を横断して支援できる',
    body: '経営、事業開発、DX、CX、IT、人材、投資、M&Aなど、分断されがちな支援領域を横断し、課題に応じて必要な支援体制を組み立てます。',
  },
  {
    title: '自然な接続点を見つけられる',
    body: '無理に結びつけるのではなく、人や事業のあいだにある相性や可能性を見極め、自然につながる状態を設計します。',
  },
  {
    title: '実行まで伴走できる',
    body: '課題整理や戦略設計にとどまらず、必要な専門人材や支援会社と連携しながら、実行フェーズまで伴走します。',
  },
];

export function Strength() {
  return (
    <section id="strength" className="py-24 md:py-40">
      <Container>
        <FadeIn>
          <SectionHeading number="05" english="Strength" japanese="Digmaの強み" />
        </FadeIn>

        <div className="space-y-14 md:space-y-20">
          {strengths.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <article className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start">
                <div>
                  <span className="block w-10 h-px bg-rokushou mb-5" />
                  <h3
                    className="text-lg md:text-xl text-navy leading-[1.7]"
                    style={{ fontFamily: 'var(--font-serif-jp)' }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-[1.95] text-ink">{s.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
