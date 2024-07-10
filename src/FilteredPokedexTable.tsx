import { useEffect, useRef, useState } from 'react';
import PokedexTable from './PokedexTable';
import { DetailedPokemonApi, PokemonApi, PokemonType, SortOptions } from './PokemonTypes';
import PokemonFilters from './PokemonFilters';

// const pokemonArray: Pokemon[] = [
//   {
//     id: 1,
//     name: 'Bulbasaur',
//     types: ['Grass', 'Poison'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
//   },
//   {
//     id: 2,
//     name: 'Ivysaur',
//     types: ['Grass', 'Poison'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
//   },
//   {
//     id: 3,
//     name: 'Venusaur',
//     types: ['Grass', 'Poison'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
//   },
//   {
//     id: 4,
//     name: 'Charmander',
//     types: ['Fire'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
//   },
//   {
//     id: 5,
//     name: 'Charmeleon',
//     types: ['Fire'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
//   },
//   {
//     id: 6,
//     name: 'Charizard',
//     types: ['Fire', 'Flying'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
//   },
//   {
//     id: 7,
//     name: 'Squirtle',
//     types: ['Water'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
//   },
//   {
//     id: 8,
//     name: 'Wartortle',
//     types: ['Water'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png',
//   },
//   {
//     id: 9,
//     name: 'Blastoise',
//     types: ['Water'],
//     sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png',
//   },
// ];

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
      <PokemonFilters selectType={filterPokemon} selectedType={undefined} sortBy={sortPokemonBy} />
      <PokedexTable pokemonArray={pokemon} />
    </div>
  );
};

export default FilteredPokedexTable;
