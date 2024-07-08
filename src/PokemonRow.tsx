import PokemonTypeFrame from './PokemonTypeFrame';
import { Pokemon } from './PokemonTypes';

type PokemonRowProps = {
  pokemon: Pokemon;
};

const PokemonRow = ({ pokemon: { id, name, types, sprite } }: PokemonRowProps) => (
  <div className="border-2 rounded p-2 mt-6 bg-gray-100 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-200">
    <li>
      <img src={sprite} alt={name} className="max-h-60 max-w-60 border rounded mb-2 bg-gray-200" />
    </li>
    <li className="mb-1">
      <span>#{id}</span>
    </li>
    <li className="mb-1">
      <span className="font-semibold">{name}</span>
    </li>
    <li>
      Types:{' '}
      {types.map((type) => (
        <PokemonTypeFrame key={type} type={type} />
      ))}
    </li>
  </div>
);

export default PokemonRow;
