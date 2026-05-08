'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './ui/Logo';

const items = [
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Service' },
  { href: '#zen', label: 'Z-EN' },
  { href: '#company', label: 'Company' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    const onScroll = () => {
      // ヒーロー要素の実際の高さを基準に「抜けた」を判定
      const heroHeight = heroEl?.offsetHeight ?? window.innerHeight;
      setPastHero(window.scrollY > heroHeight - 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ヒーロー上：紺青背景 + 白文字
  // ヒーロー外：生成り背景 + 墨色文字
  const darkMode = !pastHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        darkMode
          ? 'bg-navy/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.15)]'
          : 'bg-paper/90 backdrop-blur-sm shadow-[0_1px_0_rgba(216,212,204,0.5)]'
      }`}
    >
      <nav className="max-w-[1120px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="ホームへ">
          <Logo dark={darkMode} />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className={`text-xs tracking-[0.25em] transition-colors uppercase ${
                  darkMode
                    ? 'text-paper/75 hover:text-paper'
                    : 'text-ink-soft hover:text-rokushou'
                }`}
                style={{ fontFamily: 'var(--font-serif-en)' }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 transition-all ${
              darkMode ? 'bg-paper' : 'bg-ink'
            } ${open ? 'translate-y-1.5 rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 transition-all ${
              darkMode ? 'bg-paper' : 'bg-ink'
            } ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 transition-all ${
              darkMode ? 'bg-paper' : 'bg-ink'
            } ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {open && (
        <div
          className={`md:hidden border-t ${
            darkMode ? 'bg-navy border-paper/20' : 'bg-paper border-rule'
          }`}
        >
          <ul className="px-6 py-8 space-y-6">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className={`text-sm tracking-[0.25em] uppercase block ${
                    darkMode ? 'text-paper' : 'text-ink'
                  }`}
                  style={{ fontFamily: 'var(--font-serif-en)' }}
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
