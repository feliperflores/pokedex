import capitalizeFirstLetter from '../../Formatters/StringFormatter';
import { PokemonType } from '../../PokemonTypes';

type PokemonTypeProps = {
  type: PokemonType;
};

const typeMap = new Map<PokemonType, string>([
  ['grass', 'bg-green-600'],
  ['poison', 'bg-purple-600'],
  ['fire', 'bg-orange-600'],
  ['flying', 'bg-gradient-to-b from-50% from-cyan-300 to-50% to-gray-400'],
  ['water', 'bg-blue-400'],
  ['bug', 'bg-lime-600'],
  ['normal', 'bg-slate-400'],
]);

const PokemonTypeFrame = ({ type }: PokemonTypeProps) => (
  <span className={`${typeMap.get(type)} rounded p-1 mx-1`}>{capitalizeFirstLetter(type)}</span>
);

export default PokemonTypeFrame;
