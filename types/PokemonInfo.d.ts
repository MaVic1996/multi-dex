export type PokemonInfo = {
  name: string;
  imgSrc: string;
  types: PokemonType[];
  height: number | string;
  weight: number | string;
  detail: "";
};

export type PokemonType =
  | "NORMAL"
  | "FIGHTING"
  | "FLYING"
  | "POISON"
  | "GROUND"
  | "ROCK"
  | "BUG"
  | "GHOST"
  | "STEEL"
  | "FIRE"
  | "WATER"
  | "GRASS"
  | "ELECTRIC"
  | "PSYCHIC"
  | "ICE"
  | "DRAGON"
  | "DARK"
  | "FAIRY"
  | "UNKNOWN"
  | "SHADOW";
