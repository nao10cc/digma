'use client';

import { useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { FadeIn } from './ui/FadeIn';
import { LineReveal } from './ui/LineReveal';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col pt-28 md:pt-36 pb-12 overflow-hidden bg-paper"
    >
      {/* 背景動画：autoplay + muted + loop + playsInline でモバイル対応
          filter で純白を生成りに近づけ、opacity で煙を黒→グレー化 */}
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        style={{
          // brightness を 0.92 に下げて、動画の白部分を About 背景より少し暗いトーンに。
          // sepia をわずかに足して暖色の生成り感を保つ。
          filter: 'invert(1) brightness(0.92) sepia(0.06)',
          opacity: 0.55,
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <Container className="relative z-10 flex-1 flex flex-col w-full">
        {/* 上：左寄せの大きな英語キャッチ */}
        <div>
          <h1
            className="text-left text-[clamp(34px,6.5vw,76px)] leading-[1.15] tracking-[-0.01em] text-navy break-keep"
            style={{ fontFamily: 'var(--font-serif-en)', fontWeight: 400 }}
          >
            <LineReveal
              initialDelay={400}
              stagger={400}
              lines={[
                <span key="l1">Dig the Hidden</span>,
                <span key="l2">Compose the Future</span>,
              ]}
            />
          </h1>
        </div>

        {/* 中央スペース */}
        <div className="flex-1 min-h-[80px] md:min-h-[140px]" />

        {/* 下：左寄せの日本語ブロック */}
        <div>
          <FadeIn delay={1500}>
            <p
              className="text-xs tracking-[0.3em] text-rokushou mb-5 uppercase"
              style={{ fontFamily: 'var(--font-serif-en)' }}
            >
              Digma — Dig × Ma
            </p>
          </FadeIn>

          <FadeIn delay={1700}>
            <p
              className="text-[clamp(18px,2.6vw,28px)] leading-[1.7] tracking-[0.04em] text-navy break-keep mb-6"
              style={{ fontFamily: 'var(--font-serif-jp)' }}
            >
              人と事業のあいだに、
              <br />
              まだ見つかっていない価値がある。
            </p>
          </FadeIn>

          <FadeIn delay={1900}>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-12 bg-rokushou" />
              <span className="block h-px w-1.5 bg-rokushou" />
            </div>
          </FadeIn>

          <FadeIn delay={2050}>
            <p
              className="text-sm tracking-[0.05em] text-ink-soft"
              style={{ fontFamily: 'var(--font-serif-jp)' }}
            >
              ― 株式会社Digma
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
