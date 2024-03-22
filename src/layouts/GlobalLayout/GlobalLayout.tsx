import { PropsWithChildren } from 'react';
import Img from 'next/image';
import { fontPixelify } from '@/font';

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full relative">
      <Img
        alt=""
        width="16"
        height="16"
        src="/flat-ball.svg"
        className="w-full h-full fixed blur-[10rem] z-0"
      />

      <header className="z-[1000] flex px-4 py-2 gap-2 items-center sticky top-0 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Img
            src="/pixel-ball.png"
            alt=""
            width={1200}
            height={1200}
            draggable={false}
            className="w-[3.5rem] h-[3.5rem] object-cover"
          />
          <p
            className={`select-none text-4xl font-pixelify font-extrabold bold text-red-primary-ball ${fontPixelify.className}`}
          >
            Poké - Next
          </p>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
};
