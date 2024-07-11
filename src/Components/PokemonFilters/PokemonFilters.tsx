import PokemonFilter from './PokemonFilter';
import PokemonSorter from './PokemonSorter';
import { PokemonType, SortOptions } from '../../PokemonTypes';
import PokemonSearch from './PokemonSearch';

type PokemonFiltersProps = {
  selectedType: PokemonType | undefined;
  selectType: (type: PokemonType | undefined) => void;
  sortBy: (type: SortOptions) => void;
  search: (name: string) => void;
};

const PokemonFilters = ({ selectedType, selectType, sortBy, search }: PokemonFiltersProps) => (
  <div className="mx-6 flex">
    <div className="grow">
      <PokemonSearch search={search} />
    </div>
    <div className="mr-3">
      <PokemonFilter selectType={selectType} selectedType={selectedType} />
    </div>
    <div>
      <PokemonSorter sortBy={sortBy} />
    </div>
  </div>
);
export default PokemonFilters;
