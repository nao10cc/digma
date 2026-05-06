import Image from 'next/image';
import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

export function Zen() {
  return (
    <section id="zen" className="py-24 md:py-40 bg-paper-tint">
      <Container>
        <FadeIn>
          <SectionHeading
            number="04"
            english="Z-EN"
            japanese={
              <>
                <span className="inline-block">経営者との接点を生み、</span>
                <span className="inline-block">事業の可能性を広げるプラットフォーム。</span>
              </>
            }
          />
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">
          <FadeIn delay={200}>
            <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.95] text-ink">
              <p>Digmaでは、経営者向けプラットフォーム「Z-EN」を運営しています。</p>
              <p>
                Z-ENは、経営者や専門家へのインタビュー・寄稿を通じて、事業の特徴や強み、経営課題や今後の展望を発信するオンラインメディアです。掲載記事は、読者に有益な情報を届けるだけでなく、インタビュイーにとっても、自社の取り組みを広く知っていただく機会として、事業紹介や広報・認知拡大に活用いただけます。
              </p>
              <p>
                また、Z-ENは単なる記事掲載メディアではありません。経営者との接点を生み、継続的な対話を通じて事業内容や課題、志向性、今後実現したいことを蓄積する基盤でもあります。その情報をもとに、必要なタイミングで必要な支援や機会を届けることで、経営者同士、専門人材、支援会社、提携先との新たなつながりを創出していきます。
              </p>
              <a
                href="https://zen-bizonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-4 text-sm tracking-[0.2em] text-rokushou hover:text-navy transition-colors uppercase"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                Visit Z-EN
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <a
              href="https://zen-bizonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-80"
              aria-label="Z-EN を新しいタブで開く"
            >
              <Image
                src="/images/zen-logo.png"
                alt="Z-EN ロゴ"
                width={200}
                height={297}
                className="h-auto w-[160px] md:w-[200px]"
                priority={false}
              />
            </a>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
