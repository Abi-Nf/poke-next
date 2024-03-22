'use server';
import { Details } from '@/components';
import { fetcher } from '@/provider';
import { Pokemon } from 'pokenode-ts';

interface Props {
  params: {
    index: number;
  };
}

export default async function Page({ params: { index } }: Props) {
  let data: Pokemon = {} as Pokemon;
  try {
    data = await fetcher.getPokemonById(Math.abs(index || 1));
  } catch (_) {}
  return <Details data={data} index={index} />;
}
