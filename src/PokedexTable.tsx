import PokemonRow from './PokemonRow';
import { DetailedPokemonApi } from './PokemonTypes';

type PokemonTableProps = {
  pokemonArray: DetailedPokemonApi[];
};

const PokedexTable = ({ pokemonArray }: PokemonTableProps) => (
  <ul className="my-3 flex flex-wrap justify-evenly">
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} pokemon={pokemon} />
    ))}
  </ul>
);

export default PokedexTable;
