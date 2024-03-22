import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';
import { NoData } from '@/components';
import { NamedAPIResourceList } from 'pokenode-ts';

interface ResultItem {
  name: string;
  url: string;
}

interface Props {
  data: NamedAPIResourceList;
  map(v: ResultItem, i: number): ReactNode;
  onClickPageButton?(
    url: string,
    type: 'next' | 'prev',
  ): MouseEventHandler<HTMLAnchorElement>;
}

export const Home = ({ onClickPageButton, data, map }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {data?.results ? (
        <div className="w-full px-4 py-8 grid grid-cols-5 gap-8">
          {data?.results.map(map)}
        </div>
      ) : (
        <NoData />
      )}

      <div className="px-6 pb-8 flex justify-end items-center">
        <div className="flex items-center gap-3">
          {data?.previous ? (
            <Link
              href={new URL(data.previous).search}
              onClick={
                onClickPageButton
                  ? onClickPageButton(data.previous, 'prev')
                  : undefined
              }
              className="btn-pagination"
            >
              Previous
            </Link>
          ) : null}

          {data?.next ? (
            <Link
              href={new URL(data.next).search}
              onClick={
                onClickPageButton
                  ? onClickPageButton(data.next, 'next')
                  : undefined
              }
              className="btn-pagination"
            >
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
