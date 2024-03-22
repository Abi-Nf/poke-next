import { useEffect, useState } from 'react';
import { CardPokemon } from '@/components';
import { fetcher } from '@/provider';

interface Props {
  index: number;
  name: string;
}

export const CardWithImage = ({ name, index }: Props) => {
  const [img, setImg] = useState('');
  useEffect(() => {
    fetcher
      .getPokemonById(index)
      .then(
        (v) =>
          v?.sprites?.other?.['showdown' as 'dream_world']?.front_default || '',
      )
      .then(setImg)
      .catch(console.log);
  }, [index]);
  return <CardPokemon img={img} name={name} index={index} />;
};
