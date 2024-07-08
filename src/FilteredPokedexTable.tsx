import { useState } from 'react';
import PokedexTable from './PokedexTable';
import { Pokemon, PokemonType } from './PokemonTypes';
import PokemonTypeSelection from './PokemonTypeSelection';

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
];

const FilteredPokedexTable = () => {
  const [pokemon, setPokemon] = useState(pokemonArray);
  const filterPokemon = (type: string | undefined) => {
    if (!type) {
      setPokemon(pokemonArray);
      return;
    }

    const filteredPokemon = pokemonArray.filter((p: Pokemon) => p.types.includes(type as PokemonType));
    setPokemon(filteredPokemon);
  };

  return (
    <div className="m-6">
      <PokemonTypeSelection selectType={filterPokemon} selectedType={undefined} />
      <PokedexTable pokemonArray={pokemon} />
    </div>
  );
};

export default FilteredPokedexTable;
