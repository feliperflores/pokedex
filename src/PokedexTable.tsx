import PokemonRow from './PokemonRow';
import { Pokemon } from './PokemonTypes';

type PokemonTableProps = {
  pokemonArray: Pokemon[];
};

const PokedexTable = ({ pokemonArray }: PokemonTableProps) => (
  <ul className="flex flex-wrap justify-around">
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </ul>
);

export default PokedexTable;
