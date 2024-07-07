import { PokemonType as Type } from './PokemonTypes';

type PokemonTypeProps = {
  type: Type;
};

const typeMap = {
  Grass: 'bg-green-600',
  Poison: 'bg-purple-600',
  Fire: 'bg-orange-600',
  Flying: 'bg-gradient-to-b from-50% from-cyan-300 to-50% to-gray-400',
};

const PokemonType = ({ type }: PokemonTypeProps) => <span className={`${typeMap[type]} rounded p-1 mx-1`}>{type}</span>;

export default PokemonType;
