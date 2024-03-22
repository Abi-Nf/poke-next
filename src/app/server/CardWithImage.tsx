import { CardPokemon } from '@/components';
import { fetcher } from '@/provider';

interface Props {
  index: number;
  name: string;
}

export const CardWithImage = async ({ name, index }: Props) => {
  let img: string;
  try {
    const { sprites } = await fetcher.getPokemonByName(name);
    img = sprites?.other?.['showdown' as 'dream_world']?.front_default || '';
  } catch (_) {
    img = '';
  }
  return <CardPokemon img={img} name={name} index={index} />;
};
