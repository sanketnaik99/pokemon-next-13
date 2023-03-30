export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: Category;
  attributes: Category[];
  category: Category;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  game_indices: GameIndex[];
  names: Name[];
  sprites: Sprites;
  held_by_pokemon: HeldByPokemon[];
  baby_trigger_for: BabyTriggerFor;
}

export interface Category {
  name: string;
  url: string;
}

export interface BabyTriggerFor {
  url: string;
}

export interface EffectEntry {
  effect: string;
  short_effect: string;
  language: Category;
}

export interface FlavorTextEntry {
  text: string;
  version_group: Category;
  language: Category;
}

export interface GameIndex {
  game_index: number;
  generation: Category;
}

export interface HeldByPokemon {
  pokemon: Category;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Category;
}

export interface Name {
  name: string;
  language: Category;
}

export interface Sprites {
  default: string;
}
