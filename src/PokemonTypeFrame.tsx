import { PokemonType } from './PokemonTypes';

type PokemonTypeProps = {
  type: PokemonType;
};

const typeMap = new Map<PokemonType, string>([
  ['Grass', 'bg-green-600'],
  ['Poison', 'bg-purple-600'],
  ['Fire', 'bg-orange-600'],
  ['Flying', 'bg-gradient-to-b from-50% from-cyan-300 to-50% to-gray-400'],
  ['Water', 'bg-blue-400'],
]);

const PokemonTypeFrame = ({ type }: PokemonTypeProps) => (
  <span className={`${typeMap.get(type)} rounded p-1 mx-1`}>{type}</span>
);

export default PokemonTypeFrame;
