import { Pokemon } from 'pokenode-ts';
import { fontPixelify } from '@/font';
import { pokemonTypeColors } from '@/maps/pokemonTypeColors';

interface Props {
  data: Pokemon;
  index: number;
}

export const Details = ({ data, index }: Props) => {
  return (
    <div className="w-full flex gap-2 z-[20] py-3 pr-10">
      <div className="pt-[3%] flex-shrink-0 min-w-[20%]">
        <img
          src={data?.sprites?.other?.['official-artwork']?.front_default || ''}
          alt=""
          className="h-[90%] object-contain"
        />
        <div className="w-full flex items-center gap-3 justify-center">
          <h2 className="text-white text-4xl font-quicksand">N°{index}</h2>
          <h2 className="text-white text-4xl font-quicksand">
            Order°{data?.order}
          </h2>
        </div>
      </div>

      <div className="text-white bg-grey-line-ball bg-opacity-40 z-[2] w-full p-5 rounded-2xl flex flex-col justify-between m-[6rem]">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2
                className={`text-6xl font-bold ${fontPixelify.className} font-pixelify`}
              >
                {data?.name}
              </h2>
              <div className="flex gap-2">
                {data?.types?.map((v) => (
                  <span
                    key={v.slot + '_' + v.type.name}
                    className="p-2 rounded-2xl w-fit font-quicksand font-bold"
                    style={{
                      backgroundColor:
                        pokemonTypeColors[
                          v?.type?.name as keyof typeof pokemonTypeColors
                        ],
                    }}
                  >
                    {v.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col p-3 text-center">
                <span className="text-4xl font-vt323 font-bold text-zinc-200">
                  Height
                </span>
                <span className="text-2xl font-quicksand font-bold">
                  {data.height || 0}
                </span>
              </div>

              <div className="flex flex-col p-3 text-center">
                <span className="text-4xl font-vt323 font-bold text-zinc-200">
                  Weight
                </span>
                <span className="text-2xl font-quicksand font-bold">
                  {data.weight || 0}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src={data?.sprites?.front_default || ''}
                alt=""
                className="w-[8rem] h-[8rem]"
              />
              <span
                className={`font-semibold text-lg ${fontPixelify.className}`}
              >
                Front
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={data?.sprites?.back_default || ''}
                alt=""
                className="w-[8rem] h-[8rem]"
              />
              <span
                className={`font-semibold text-lg ${fontPixelify.className}`}
              >
                Back
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
