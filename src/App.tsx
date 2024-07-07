import PokemonRow from './PokemonRow';
import { Pokemon } from './PokemonTypes';

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

const App = () => (
  <div className="mx-6">
    <ul className="flex flex-wrap justify-around">
      {pokemonArray.map((pokemon) => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  </div>
);

export default App;
