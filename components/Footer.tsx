import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="border-t border-rule py-12 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p
          className="text-xs tracking-[0.1em] text-ink-soft"
          style={{ fontFamily: 'var(--font-sans-en)' }}
        >
          © {new Date().getFullYear()} Digma Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
