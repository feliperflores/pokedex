import { forwardRef } from 'react';
import { DetailedPokemonApi } from '../../PokemonTypes';
import PokemonTypeFrame from './PokemonTypeFrame';

type PokemonBackCardProps = {
  pokemon: DetailedPokemonApi;
};

const PokemonBackCard = forwardRef(({ pokemon }: PokemonBackCardProps, ref: Ref<HTMLDivElement>) => (
  <div ref={ref} className="min-w-56 group border-2 border-gray-300 rounded p-2 bg-gray-100">
    <li className="text-start mb-1">
      <span>#{pokemon.id}</span>
    </li>
    <li className="text-start mb-1">
      <span className="font-semibold capitalize">{pokemon.name}</span>
    </li>
    <li className="flex items-center">
      Types:{' '}
      {pokemon.types.map((type) => (
        <PokemonTypeFrame key={type.type.name} type={type.type.name} />
      ))}
    </li>
  </div>
));

export default PokemonBackCard;
