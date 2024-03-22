'use client';
import { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import { fetcher } from '@/provider';
import { Details } from '@/components';

interface Props {
  params: {
    index: number;
  };
}

export default function Page({ params: { index } }: Props) {
  const [data, setData] = useState<Pokemon>({} as Pokemon);
  useEffect(() => {
    fetcher
      .getPokemonById(Math.abs(index || 1))
      .then(setData)
      .catch(console.log);
  }, [index]);

  return <Details data={data} index={index} />;
}
