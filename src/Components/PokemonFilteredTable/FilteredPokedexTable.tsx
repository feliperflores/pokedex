import { useEffect, useRef, useState } from 'react';
import PokedexTable from '../PokemonTable/PokedexTable';
import { DetailedPokemonApi, PokemonApi, PokemonType, SortOptions } from '../../PokemonTypes';
import PokemonFilters from '../PokemonFilters/PokemonFilters';

const FilteredPokedexTable = () => {
  const defaultPokemon = useRef<DetailedPokemonApi[]>([]);
  const [pokemon, setPokemon] = useState<DetailedPokemonApi[]>(defaultPokemon.current);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then((response) => response.json())
      .then((data: PokemonApi) => {
        const pokemonUrls = data.results.map((result) => result.url);
        return Promise.all(pokemonUrls.map((url) => fetch(url).then((response) => response.json())));
      })
      .then((detailedPokemon: DetailedPokemonApi[]) => {
        defaultPokemon.current = detailedPokemon;
        setPokemon(detailedPokemon);
      });
  }, []);

  const filterPokemon = (type: PokemonType | undefined) => {
    if (!type) {
      setPokemon(defaultPokemon.current);
      return;
    }

    const filteredPokemon = defaultPokemon.current.filter((p) => p.types.some((t) => t.type.name === type));
    setPokemon(filteredPokemon);
  };
  const search = (name: string) => {
    const filteredPokemon = defaultPokemon.current.filter((p) => p.name.includes(name));
    setPokemon(filteredPokemon);
  };

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

  const sortPokemonBy = (type: SortOptions) => {
    const filters = {
      id: byId,
      name: byName,
    };
    setPokemon(pokemon.toSorted(filters[type]));
  };

  return (
    <div className="m-6">
      <PokemonFilters selectType={filterPokemon} selectedType={undefined} sortBy={sortPokemonBy} search={search} />
      <PokedexTable pokemonArray={pokemon} />
    </div>
  );
};

export default FilteredPokedexTable;
