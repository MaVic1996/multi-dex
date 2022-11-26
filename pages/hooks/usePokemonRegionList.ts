import { useEffect, useState } from "react";
import { getPokedexList } from "../api/pokedexData";

const usePokemonRegionList = ({ region }: { region: string }) => {
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await (await getPokedexList(region)).json();

      const pokemonEntries = data["pokemon_entries"].map(
        (entry: Record<string, Record<string, string>>) => {
          const splitted = entry["pokemon_species"]["url"].split("/");
          return splitted[splitted.length - 2];
        }
      );

      setPokemonData(pokemonEntries);
      setTimeout(() => setLoading(false), 1500);
    };
    loadData();
  }, [region]);

  return { pokemonData, loading };
};

export default usePokemonRegionList;
