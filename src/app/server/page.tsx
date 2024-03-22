'use server';
import { fetcher } from '@/provider';
import { Home } from '@/components';
import { CardWithImage } from './CardWithImage';
import { NamedAPIResourceList } from 'pokenode-ts';

interface Props {
  searchParams: {
    limit?: string;
    offset?: string;
  };
}

export default async function Page({ searchParams: { limit, offset } }: Props) {
  let data: NamedAPIResourceList = {} as NamedAPIResourceList;
  try {
    if (limit && offset) {
      data = await fetcher.listPokemons(+limit, +offset);
    } else {
      data = await fetcher.listPokemons();
    }
  } catch (_) {}
  return (
    <Home
      data={data}
      map={(v, i) => <CardWithImage index={i + 1} name={v.name} />}
    />
  );
}
