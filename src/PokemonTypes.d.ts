export type DetailedPokemonApi = {
  abilities: {
    ability: ApiStructure;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: ApiStructure[];
  game_indices: {
    game_index: number;
    version: ApiStructure;
  }[];
  height: number;
  held_items: {
    item: ApiStructure;
    version_details: {
      rarity: number;
      version: ApiStructure;
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounter: string;
  moves: {
    move: ApiStructure;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: ApiStructure;
      version_group: ApiStructure;
    }[];
  }[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: ApiStructure;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: ApiStructure;
  }[];
  types: {
    slot: number;
    type: {
      name: PokemonType;
      url: string;
    };
  }[];
  weight: number;
};

export type ApiStructure = {
  name: string;
  url: string;
};

export type PokemonApi = {
  count: number;
  next: string;
  previous: string;
  results: ApiStructure[];
};

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export type SortOptions = 'id' | 'name';
