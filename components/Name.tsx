import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

export function Name() {
  return (
    <section id="name" className="py-24 md:py-40 bg-paper-tint">
      <Container>
        <FadeIn>
          <SectionHeading number="02" english="Name" japanese="Digma = Dig × Ma" />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="my-16 md:my-24 grid grid-cols-3 items-center gap-4 md:gap-12">
            <div className="text-center">
              <div
                className="text-5xl md:text-7xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                Dig
              </div>
              <p
                className="text-sm md:text-base text-ink-soft"
                style={{ fontFamily: 'var(--font-serif-jp)' }}
              >
                掘る・発掘する
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-5xl text-rokushou"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                ×
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-5xl md:text-7xl text-navy mb-4"
                style={{ fontFamily: 'var(--font-serif-jp)' }}
              >
                間
              </div>
              <p
                className="text-sm md:text-base text-ink-soft"
                style={{ fontFamily: 'var(--font-serif-jp)' }}
              >
                あいだ・余白
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="space-y-8 text-[15px] md:text-[16px] leading-[1.95] text-ink max-w-[720px] mx-auto">
            <p>
              <span style={{ fontFamily: 'var(--font-serif-en)' }}>Dig</span>{' '}
              は、新しく無理に作るのではなく、すでに存在しているが、まだ見つけられていない価値や関係性、接続点を掘り起こすこと。
            </p>
            <p>
              <span style={{ fontFamily: 'var(--font-serif-jp)' }}>「間」</span>{' '}
              は、単なる空白ではなく、可能性が宿るあいだ。つなぐことも、あえて余白を残すことも含む概念です。
            </p>
            <p>
              つなぐべき間はつなぎ、残すべき間は残す。01を無理に作るのではなく、01が必然として立ち上がる条件を整える。それが、Digmaという名前に込めた思想です。
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
