import { SortOptions } from './PokemonTypes';
import capitalizeFirstLetter from './StringFormatter';

type PokemonSorterProps = {
  sortBy: (type: SortOptions) => void;
};

const sortOptions = ['id', 'name'];

const PokemonSorter = ({ sortBy }: PokemonSorterProps) => (
  <>
    <span>Sort By: </span>
    <select
      onChange={(event) => sortBy((event.currentTarget.value as SortOptions) || undefined)}
      className="p-1 border-2 rounded"
    >
      {sortOptions.map((type) => (
        <option key={type} value={type}>
          {capitalizeFirstLetter(type)}
        </option>
      ))}
    </select>
  </>
);
export default PokemonSorter;
