import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 md:py-40">
      <Container>
        <FadeIn>
          <SectionHeading
            number="01"
            english="About"
            japanese={
              <>
                <span className="inline-block">Digmaは、経営者の問いを整理し、</span>
                <span className="inline-block">次の一手を形にする会社です。</span>
              </>
            }
          />
        </FadeIn>
        <FadeIn delay={200}>
          <div className="space-y-8 text-[15px] md:text-[16px] leading-[1.95] text-ink">
            <p>
              経営の現場では、課題が一つだけで存在することはほとんどありません。事業、組織、人材、資金、テクノロジー、営業、承継。複数のテーマが絡み合い、経営者自身も「本当にいま解くべき課題は何か」を判断しづらい場面が多くあります。
            </p>
            <p>
              Digmaは、表面的な相談内容をそのまま施策に落とし込むのではなく、まず経営者との対話を通じて、課題の背景や優先順位を整理します。
            </p>
            <p>
              そのうえで、経営、事業開発、DX、CX、IT、人材、投資、M&Aなど、各領域に知見を持つ専門人材や支援会社とのネットワークを活用し、必要な支援体制を組み立てます。
            </p>
            <p>
              私たちは、単なる紹介会社でも、受託会社でもありません。経営者にとっての相談相手であり、意思決定の支援者であり、必要に応じて実行体制を組成するハブであることを目指しています。
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
