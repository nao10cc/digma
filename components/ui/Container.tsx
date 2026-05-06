import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: 'narrow' | 'wide';
  className?: string;
};

export function Container({ children, size = 'narrow', className = '' }: Props) {
  const maxWidth = size === 'narrow' ? 'max-w-[880px]' : 'max-w-[1120px]';
  return (
    <div className={`${maxWidth} mx-auto px-6 md:px-8 ${className}`}>{children}</div>
  );
}
