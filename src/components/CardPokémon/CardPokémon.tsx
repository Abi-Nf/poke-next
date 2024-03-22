import Img from 'next/image';
import { LinkButton } from './LinkButton';
import { fontPixelify } from '@/font';

interface Props {
  img: string;
  name: string;
  index: number;
}

export const CardPokemon = ({ img, name, index }: Props) => {
  return (
    <div className="relative pb-full pt-[2rem] bg-grey-line-ball bg-opacity-20 rounded-lg flex overflow-hidden shadow-2xl hover:scale-110">
      <div className="absolute w-full h-full top-0 flex items-center">
        <Img
          src="/flat-ball.svg"
          alt=""
          width="420"
          height="420"
          className="absolute top-2 left-2 w-7 h-7"
        />

        <div className="w-full flex items-center justify-center p-[1.2rem]">
          <img alt="" src={img} className="h-[80%] object-contain scale-125" />
        </div>
        <div className="absolute bottom-0 w-full p-2 flex flex-col gap-3 justify-between">
          <div className="line-clamp-1">
            <span className="font-quicksand font-semibold text-xl text-white">
              {name}
            </span>
          </div>
          <div className={fontPixelify.className}>
            <LinkButton to={`/client/${index}`}>Details</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
