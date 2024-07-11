import { PokemonType } from '../../PokemonTypes';
import capitalizeFirstLetter from '../../Formatters/StringFormatter';

type PokemonFilterProps = {
  selectedType: PokemonType | undefined;
  selectType: (type: PokemonType | undefined) => void;
};

const pokemonTypes: Readonly<PokemonType>[] = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

const PokemonFilter = ({ selectedType, selectType }: PokemonFilterProps) => (
  <>
    <span>Type: </span>
    <select
      defaultValue={selectedType}
      onChange={(event) => selectType((event.currentTarget.value as PokemonType) || undefined)}
      className="p-1 border-2 rounded"
    >
      <option key="All" value={undefined} label="All" />
      {pokemonTypes.map((type) => (
        <option key={type} value={type}>
          {capitalizeFirstLetter(type)}
        </option>
      ))}
    </select>
  </>
);
export default PokemonFilter;
