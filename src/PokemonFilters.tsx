import PokemonFilter from './PokemonFilter';
import PokemonSorter from './PokemonSorter';
import { PokemonType, SortOptions } from './PokemonTypes';

type PokemonFiltersProps = {
  selectedType: PokemonType | undefined;
  selectType: (type: PokemonType | undefined) => void;
  sortBy: (type: SortOptions) => void;
};

const PokemonFilters = ({ selectedType, selectType, sortBy }: PokemonFiltersProps) => (
  <div className="mx-6 flex">
    <div className="grow">
      <PokemonFilter selectType={selectType} selectedType={selectedType} />
    </div>
    <div>
      <PokemonSorter sortBy={sortBy} />
    </div>
  </div>
);
export default PokemonFilters;
