import { Pixelify_Sans, Quicksand, VT323 } from 'next/font/google';

export const fontVt323 = VT323({
  weight: '400',
  display: 'swap',
  variable: '--font-vt323',
  subsets: ['vietnamese', 'latin'],
});

export const fontPixelify = Pixelify_Sans({
  variable: '--font-pixelify',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

export const fontQuicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  display: 'swap',
});
