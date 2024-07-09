import { PokemonType } from './PokemonTypes';

type PokemonFilterProps = {
  selectedType: PokemonType | undefined;
  selectType: (type: PokemonType | undefined) => void;
};

const pokemonTypes: PokemonType[] = ['Grass', 'Poison', 'Fire', 'Flying', 'Water'];

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
          {type}
        </option>
      ))}
    </select>
  </>
);
export default PokemonFilter;
