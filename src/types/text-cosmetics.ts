import { ReactNode } from 'react';

export interface ShineProps {
  children: ReactNode;
  sparkleFrequency?: number;
  sparkleDuration?: number;
  sparkleSize?: number[];
  style?: React.CSSProperties;
  className?: string;
}

export interface HighlightProps {
  children: ReactNode;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'S': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & ShineProps, HTMLElement>;
      'H': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & HighlightProps, HTMLElement>;
    }
  }
} 