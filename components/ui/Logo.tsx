import Image from 'next/image';

type Props = {
  className?: string;
  dark?: boolean;
};

export function Logo({ className = '', dark = false }: Props) {
  return (
    <Image
      src="/images/digma-logo.png"
      alt="株式会社Digma"
      width={1214}
      height={319}
      priority
      className={`h-7 md:h-8 w-auto transition-[filter] duration-300 ${
        dark ? 'brightness-0 invert' : ''
      } ${className}`}
    />
  );
}
