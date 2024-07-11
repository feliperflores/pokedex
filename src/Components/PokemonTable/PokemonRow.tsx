import { DetailedPokemonApi } from '../../PokemonTypes';
import capitalizeFirstLetter from '../../Formatters/StringFormatter';
import PokemonTypeFrame from './PokemonTypeFrame';

type PokemonRowProps = {
  pokemon: DetailedPokemonApi;
};

const PokemonRow = ({ pokemon: { id, name, types, sprites } }: PokemonRowProps) => (
  <div className="m-3 min-w-56 group border-2 border-gray-300 rounded p-2 bg-gray-100 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 hover:border-gray-400 duration-200">
    <li className="flex justify-center">
      <img
        src={sprites.front_default}
        alt={name}
        className="min-h-48 min-w-40 max-h-60 max-w-60 border rounded mb-2 bg-gray-200 transition duration-200 group-hover:bg-gray-400"
      />
    </li>
    <li className="mb-1">
      <span>#{id}</span>
    </li>
    <li className="mb-1">
      <span className="font-semibold">{capitalizeFirstLetter(name)}</span>
    </li>
    <li>
      Types:{' '}
      {types.map((type) => (
        <PokemonTypeFrame key={type.type.name} type={type.type.name} />
      ))}
    </li>
  </div>
);

export default PokemonRow;
