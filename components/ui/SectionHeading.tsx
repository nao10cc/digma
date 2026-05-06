import { ReactNode } from 'react';

type Props = {
  number: string;
  english: string;
  japanese: ReactNode;
};

export function SectionHeading({ number, english, japanese }: Props) {
  return (
    <header className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-xs tracking-[0.2em] text-rokushou"
          style={{ fontFamily: 'var(--font-sans-en)' }}
        >
          {number}
        </span>
        <span className="h-px flex-1 bg-rule max-w-[40px]" />
        <span
          className="text-sm tracking-[0.3em] text-navy uppercase"
          style={{ fontFamily: 'var(--font-serif-en)' }}
        >
          {english}
        </span>
      </div>
      <h2
        className="text-2xl md:text-3xl lg:text-[36px] leading-[1.6] tracking-[0.05em] text-navy"
        style={{ fontFamily: 'var(--font-serif-jp)' }}
      >
        {japanese}
      </h2>
    </header>
  );
}
