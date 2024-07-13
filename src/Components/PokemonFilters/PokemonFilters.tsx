import PokemonFilter from './PokemonFilter';
import PokemonSorter from './PokemonSorter';
import { PokemonType, SortOptions } from '../../PokemonTypes';
import PokemonSearch from './PokemonSearch';

type PokemonFiltersProps = {
  selectType: (type: PokemonType | undefined) => void;
  sortBy: (type: SortOptions) => void;
  search: (name: string) => void;
};

const PokemonFilters = ({ selectType, sortBy, search }: PokemonFiltersProps) => (
  <div className="flex items-center bg-slate-400 px-2 py-1 rounded mx-6">
    <div className="grow">
      <PokemonSearch search={search} />
    </div>
    <div className="mr-3">
      <PokemonFilter selectType={selectType} />
    </div>
    <div>
      <PokemonSorter sortBy={sortBy} />
    </div>
  </div>
);
export default PokemonFilters;
