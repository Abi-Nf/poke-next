import Img from 'next/image';

export const NoData = () => {
  return (
    <div className="pt-[8%] flex items-center justify-center z-[1000]">
      <div className="flex flex-col gap-3 justify-center items-center">
        <Img
          alt=""
          src="/shade-3D-ball.svg"
          width="800"
          height="800"
          className="w-40 h-40 object-cover"
        />
        <div className="text-xl text-white font-quicksand font-semibold text-nowrap">
          Loading...
        </div>
      </div>
    </div>
  );
};
