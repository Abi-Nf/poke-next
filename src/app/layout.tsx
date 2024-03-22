import './globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { GlobalLayout } from '@/layouts';
import { fontPixelify, fontQuicksand, fontVt323 } from '@/font';

export const metadata: Metadata = {
  title: 'Poké-next',
  description: 'Learn more about Pokemon',
  icons: ['/pixel-ball.png'],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${fontVt323.variable} ${fontPixelify.variable} ${fontQuicksand.variable} bg-grey-line-ball`}
    >
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
