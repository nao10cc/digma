'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  lines: ReactNode[];
  initialDelay?: number;
  stagger?: number;
  className?: string;
};

/**
 * 各行が下からふわりと立ち上がりながら順番に現れる。
 * 和の余韻を意識して duration は長め、easing は ease-out 系。
 */
export function LineReveal({
  lines,
  initialDelay = 0,
  stagger = 280,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} style={{ display: 'block' }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: 'block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: `opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) ${initialDelay + i * stagger}ms, transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${initialDelay + i * stagger}ms`,
          }}
        >
          {line}
        </span>
      ))}
    </span>
  );
}
