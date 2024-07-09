import { useState } from 'react';
import PokedexTable from './PokedexTable';
import { Pokemon, PokemonType, SortOptions } from './PokemonTypes';
import PokemonFilters from './PokemonFilters';

const pokemonArray: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: 2,
    name: 'Ivysaur',
    types: ['Grass', 'Poison'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
  },
  {
    id: 3,
    name: 'Venusaur',
    types: ['Grass', 'Poison'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
  },
  {
    id: 4,
    name: 'Charmander',
    types: ['Fire'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
  },
  {
    id: 5,
    name: 'Charmeleon',
    types: ['Fire'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
  },
  {
    id: 6,
    name: 'Charizard',
    types: ['Fire', 'Flying'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['Water'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
  },
  {
    id: 8,
    name: 'Wartortle',
    types: ['Water'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png',
  },
  {
    id: 9,
    name: 'Blastoise',
    types: ['Water'],
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png',
  },
];

const FilteredPokedexTable = () => {
  const [pokemon, setPokemon] = useState(pokemonArray);
  const filterPokemon = (type: PokemonType | undefined) => {
    if (!type) {
      setPokemon(pokemonArray);
      return;
    }

    const filteredPokemon = pokemonArray.filter((p: Pokemon) => p.types.includes(type as PokemonType));
    setPokemon(filteredPokemon);
  };
  const sortPokemonBy = (type: SortOptions) => {
    if (type === 'id') {
      setPokemon(
        pokemon.toSorted((a: Pokemon, b: Pokemon) => {
          const result = a[type] - b[type];
          if (result > 0) return 1;
          if (result < 0) return -1;
          return 0;
        }),
      );
    }
    if (type === 'name') {
      setPokemon(
        pokemon.toSorted((a: Pokemon, b: Pokemon) => {
          if (a[type] > b[type]) return 1;
          if (a[type] < b[type]) return -1;
          return 0;
        }),
      );
    }
  };

  return (
    <div className="m-6">
      <PokemonFilters selectType={filterPokemon} selectedType={undefined} sortBy={sortPokemonBy} selectedSort="id" />
      <PokedexTable pokemonArray={pokemon} />
    </div>
  );
};

export default FilteredPokedexTable;
