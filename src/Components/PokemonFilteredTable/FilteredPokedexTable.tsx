import { useEffect, useRef, useState } from 'react';
import PokedexTable from '../PokemonTable/PokedexTable';
import { DetailedPokemonApi, PokemonApi, PokemonType, SortOptions } from '../../PokemonTypes';
import PokemonFilters from '../PokemonFilters/PokemonFilters';

const fetchDetailedPokemon = (offset: number) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=21&offset=${offset}`)
    .then((response) => response.json())
    .then((data: PokemonApi) => {
      const pokemonUrls = data.results.map((result) => result.url);
      return Promise.all(pokemonUrls.map((pokeUrl) => fetch(pokeUrl).then((response) => response.json())));
    });

const byName = (a: DetailedPokemonApi, b: DetailedPokemonApi) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};
const byId = (a: DetailedPokemonApi, b: DetailedPokemonApi) => {
  const result = a.id - b.id;
  if (result > 0) return 1;
  if (result < 0) return -1;
  return 0;
};

const SORT_BY = {
  id: byId,
  name: byName,
};

const PAGINATION_SIZE = 21;

const FilteredPokedexTable = () => {
  const defaultPokemon = useRef<DetailedPokemonApi[]>([]);
  const [pokemon, setPokemon] = useState<DetailedPokemonApi[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ignore = false;

    fetchDetailedPokemon(offset).then((detailedPokemon) => {
      if (!ignore) {
        defaultPokemon.current = [...defaultPokemon.current, ...detailedPokemon];
        setPokemon(defaultPokemon.current);
      }
    });

    return () => {
      ignore = true;
    };
  }, [offset]);

  const filterPokemon = (type: PokemonType | undefined) => {
    if (!type) {
      setPokemon(defaultPokemon.current);
      return;
    }

    const filteredPokemon = defaultPokemon.current.filter((p) => p.types.some((t) => t.type.name === type));
    setPokemon(filteredPokemon);
  };
  const sortPokemonBy = (type: SortOptions) => {
    setPokemon(pokemon.toSorted(SORT_BY[type]));
  };
  const search = (name: string) => {
    const filteredPokemon = defaultPokemon.current.filter((p) => p.name.includes(name));
    setPokemon(filteredPokemon);
  };
  const paginate = () => {
    setOffset(offset + PAGINATION_SIZE);
  };

  return (
    <div className="m-6">
      <PokemonFilters selectType={filterPokemon} selectedType={undefined} sortBy={sortPokemonBy} search={search} />
      <PokedexTable pokemonArray={pokemon} />
      <div className="flex w-full justify-center">
        <button onClick={() => paginate()} type="button" className="bg-slate-100 border-2 rounded p-2">
          Load More
        </button>
      </div>
    </div>
  );
};

export default FilteredPokedexTable;
