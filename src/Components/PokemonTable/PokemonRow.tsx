import { useState } from 'react';
import { DetailedPokemonApi } from '../../PokemonTypes';
import PokemonFaceCard from './PokemonFaceCard';
import PokemonBackCard from './PokemonBackCard';

type PokemonRowProps = {
  pokemon: DetailedPokemonApi;
};

const PokemonRow = ({ pokemon }: PokemonRowProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <button type="button" className="m-3" onClick={() => setIsVisible(!isVisible)} aria-label="asd">
      {isVisible && <PokemonFaceCard pokemon={pokemon} />}
      {!isVisible && <PokemonBackCard pokemon={pokemon} />}
    </button>
  );
};

export default PokemonRow;
