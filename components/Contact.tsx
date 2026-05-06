import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { SectionHeading } from './ui/SectionHeading';

const CONTACT_EMAIL = 'info@digma.co.jp';

export function Contact() {
  const subject = encodeURIComponent('お問い合わせ');
  const body = encodeURIComponent('お名前：\n会社名：\n役職：\nご相談内容：\n');

  return (
    <section id="contact" className="py-24 md:py-40 bg-paper-tint">
      <Container>
        <FadeIn>
          <SectionHeading
            number="08"
            english="Contact"
            japanese={
              <>
                <span className="inline-block">経営者の隣で、問いを整理し、</span>
                <span className="inline-block">次の一手を形にする。</span>
              </>
            }
          />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-[640px] mx-auto">
            <p className="text-[15px] md:text-[16px] leading-[2] text-ink mb-12">
              経営課題の整理、専門人材・支援会社との連携、事業提携、M&A、広報支援などに関するご相談を承っております。
            </p>
            <div className="text-center">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
                className="inline-block border border-rokushou px-12 py-5 text-sm tracking-[0.3em] text-navy hover:bg-rokushou hover:text-paper transition-colors uppercase"
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                Contact via Email
              </a>
              <p
                className="mt-6 text-sm tracking-[0.05em] text-ink-soft"
                style={{ fontFamily: 'var(--font-sans-en)' }}
              >
                {CONTACT_EMAIL}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
