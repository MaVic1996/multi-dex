const POKEDEX_REGIONS_MAP: Record<string, number> = {
  kalos: 12,
};

export const getPokedexList = (region: string) => {
  const pokedexEntry = POKEDEX_REGIONS_MAP[region];
  return fetch(`https://pokeapi.co/api/v2/pokedex/${pokedexEntry}`);
};
