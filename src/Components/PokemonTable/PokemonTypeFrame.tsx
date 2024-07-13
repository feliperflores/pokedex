import { PokemonType } from '../../PokemonTypes';

type PokemonTypeProps = {
  type: PokemonType;
};

const typeMap = new Map<PokemonType, string>([
  ['grass', 'bg-lime-400'],
  ['poison', 'bg-purple-600'],
  ['fire', 'bg-orange-400'],
  ['flying', 'bg-gradient-to-b from-50% from-cyan-300 to-50% to-gray-400'],
  ['water', 'bg-blue-400'],
  ['bug', 'bg-lime-600'],
  ['normal', 'bg-slate-400'],
  ['electric', 'bg-yellow-400'],
  ['ground', 'bg-gradient-to-b from-50% from-yellow-400 to-50% to-yellow-600'],
  ['fairy', 'bg-pink-300'],
  ['fighting', 'bg-orange-600'],
  ['psychic', 'bg-pink-400'],
  ['steel', 'bg-gray-400'],
]);

const PokemonTypeFrame = ({ type }: PokemonTypeProps) => (
  <span
    className={`${typeMap.get(type)} rounded py-0.5 mx-1 flex justify-center min-w-20 min-h-7 max-w-20 max-h-7 capitalize`}
  >
    {type}
  </span>
);

export default PokemonTypeFrame;
