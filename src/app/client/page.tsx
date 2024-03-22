'use client';
import { MouseEvent, useEffect, useState } from 'react';
import { NamedAPIResourceList } from 'pokenode-ts';
import { fetcher } from '@/provider';
import { Home } from '@/components';
import { CardWithImage } from './CardWithImage';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<NamedAPIResourceList>(
    {} as NamedAPIResourceList,
  );

  useEffect(() => {
    if (!data?.results) {
      fetcher
        .listPokemons(0, 50)
        .then(setData)
        .then(() => setCurrentPage(0))
        .catch(console.log);
    }
  }, [data?.results]);

  const handleClickPageButton = (url: string, type: 'next' | 'prev') => {
    return async (ev: MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault();
      const search = new URL(url).searchParams;
      const offset = +(search.get('offset') || '0');
      const data = await fetcher.listPokemons(
        offset,
        +(search.get('limit') || '0'),
      );
      setData(data);
      setCurrentPage(offset);
    };
  };
  return (
    <Home
      data={data}
      map={(v, i) => (
        <CardWithImage
          key={i + v.name + v.url}
          index={currentPage + 1 + i}
          name={v.name}
        />
      )}
      onClickPageButton={handleClickPageButton}
    />
  );
}
