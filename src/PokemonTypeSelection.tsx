import { PokemonType } from './PokemonTypes';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const pokemonTypes: PokemonType[] = ['Grass', 'Poison', 'Fire', 'Flying'];

const PokemonTypeSelection = ({ selectedType, selectType }: PokemonTypeSelectionProps) => (
  <select
    value={selectedType}
    onChange={(event) => selectType(event.currentTarget.value)}
    className="mx-6 p-1 border-2 rounded"
  >
    <option key="All" value={undefined} label="All" />
    {pokemonTypes.map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
);
export default PokemonTypeSelection;
