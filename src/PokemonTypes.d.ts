export type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  sprite: string;
};

export type PokemonType = 'Grass' | 'Poison' | 'Fire' | 'Flying';
