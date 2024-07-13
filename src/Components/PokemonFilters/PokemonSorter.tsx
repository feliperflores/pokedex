import { SortOptions } from '../../PokemonTypes';

type PokemonSorterProps = {
  sortBy: (type: SortOptions) => void;
};

const sortOptions = ['id', 'name'];

const PokemonSorter = ({ sortBy }: PokemonSorterProps) => (
  <>
    <span>Sort By: </span>
    <select
      onChange={(event) => sortBy((event.currentTarget.value as SortOptions) || undefined)}
      className="bg-slate-100 p-1 border-2 rounded capitalize"
    >
      {sortOptions.map((type) => (
        <option className="capitalize" key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </>
);
export default PokemonSorter;
