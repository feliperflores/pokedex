import { PokemonType } from '../../PokemonTypes';

type PokemonTypeProps = {
  type: PokemonType;
};

const typeMap = new Map<PokemonType, string>([
  ['flying', 'bg-gradient-to-b from-50% from-cyan-300 to-50% to-gray-400'],
  ['ground', 'bg-gradient-to-b from-50% from-yellow-400 to-50% to-yellow-600'],
  ['dragon', 'bg-gradient-to-b from-50% from-blue-400 to-50% to-red-400'],
  ['grass', 'bg-lime-400'],
  ['bug', 'bg-lime-600'],
  ['fairy', 'bg-pink-300'],
  ['psychic', 'bg-pink-400'],
  ['poison', 'bg-purple-400'],
  ['ghost', 'bg-purple-500'],
  ['electric', 'bg-yellow-400'],
  ['rock', 'bg-yellow-700'],
  ['fighting', 'bg-orange-600'],
  ['fire', 'bg-orange-400'],
  ['water', 'bg-blue-500'],
  ['ice', 'bg-teal-300'],
  ['normal', 'bg-slate-400'],
  ['steel', 'bg-gray-400'],
  ['dark', 'bg-gray-500'],
]);

const PokemonTypeFrame = ({ type }: PokemonTypeProps) => (
  <span
    className={`${typeMap.get(type)} rounded py-0.5 mx-1 flex justify-center min-w-20 min-h-7 max-w-20 max-h-7 capitalize`}
  >
    {type}
  </span>
);

export default PokemonTypeFrame;
