import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

export function Vision() {
  return (
    <section id="vision" className="py-32 md:py-48 bg-paper-tint">
      <Container>
        <FadeIn>
          <SectionHeading
            number="06"
            english="Vision"
            japanese="01が自然に立ち上がる構造をつくる。"
          />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="space-y-10 max-w-[720px] mx-auto">
            <p
              className="text-[18px] md:text-[20px] leading-[2.1] text-ink tracking-[0.04em]"
              style={{ fontFamily: 'var(--font-serif-jp)' }}
            >
              <span className="inline-block">人と人、事業と事業のあいだに、</span>
              <span className="inline-block">埋もれている価値を掘り起こし、</span>
              <span className="inline-block">必要なタイミングで、必要な相手と、</span>
              <span className="inline-block">自然につながる状態をつくること。</span>
            </p>
            <p className="text-[15px] md:text-[16px] leading-[2] text-ink-soft">
              01を無理に作らず、01が必然として立ち上がる間を設計する会社でありたい。経営者や企業と継続的な関係を築きながら、成長の各フェーズで必要な支援を提供し、企業価値向上や資本戦略にも関わっていくことを目指します。
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
